<template>
  <div class="container">
    <div class="header">
       <h3>اهم الاخبار</h3>
      <p>شاهد الان</p> 
    </div>
   
    
    <div class="iframe-wrapper">
      <iframe :src="selectedVideo?.link" width="1200" height="675" frameborder="0" webkitallowfullscreen
        mozallowfullscreen allowfullscreen></iframe>
    </div>
  </div>
 


  <main>
   

    <vue-horizontal class="horizontal">
      <div class="item" v-for="video in playlistData.videos" :key="video.video_id" @click="handleSelectVideo(video)">
        <div class="card">
          <div class="image" :style="{ background: `url(${video.video_img})`}"></div>
          <div class="content">
            <div>
              <div class="brand">
                <svg class="icon" viewBox="0 0 24 24">
                  <path
                    d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z" />
                  <path d="M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z" />
                </svg>
                <div class="name">
                  <p :style="{ color: video.video_id === selectedVideo?.video_id ? 'blue' : 'black' }">{{ video.title }}</p>
                </div>
              </div>

            </div>

            <div class="date">
              1 week ago
            </div>
          </div>
        </div>
      </div>
    </vue-horizontal>
  </main>
</template>

<script >
import { onMounted, ref } from 'vue';
//import axios from 'axios';
import VueHorizontal from "vue-horizontal";
import { getVideosPlaylist } from "../apiServices"
import { watchEffect } from "vue";

export default {
  components: { VueHorizontal },
  setup() {

    const playlistData = ref({
      playlistId: "",
      playlistTitle: "",
      videos: []
    });

    const selectedVideo = ref(null)
    watchEffect(() => {
      if (playlistData.value.videos.length > 0 && selectedVideo.value === null) {
        const firstVideo = playlistData.value.videos[0];
        selectedVideo.value = firstVideo;
        selectedVideo.value.link = `https://www.youtube.com/embed/${firstVideo.video_id}`
      }
    })
    onMounted(async() => {
            try {
                let data;
                    const response = await getVideosPlaylist("PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1");
                    data = response.data;
                    playlistData.value.playlistId = data.id
            playlistData.value.playlistTitle = data.title
            playlistData.value.videos = data.videos

                
                
              
            } catch(err) {
                console.log(err);
            }
        }
        );
   
    
      //  const response = await axios.get("https://10.18.121.93/reader/api/playlist/PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1");
        
          
     

   
      
           const handleSelectVideo = (video) => {
            selectedVideo.value = video
            selectedVideo.value.link = `https://www.youtube.com/embed/${video.video_id}`
           }



    return {
      handleSelectVideo,
      selectedVideo,
      playlistData
    }
  }

}

</script>
<style scoped>
html,
body {
  height: 100%;
  margin: 0;
}

section {
  padding: 16px 24px;
  background: #f5f5f5;
}

.container {
  height: 100%;
  text-align: center;
  padding: 1em;
  box-sizing: border-box;
}

img {
  max-width: 100%;
  max-height: 100%;
  display: inline-block;
}

.iframe-wrapper {
  position: relative;
  height: 0;
  padding-top: 56.25%;
  overflow: hidden;
}

.iframe-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card {
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.image {
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  padding-top: 50%;
}

.content {
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  color: #333333;
}

.brand .icon {
  flex-shrink: 0;
  height: 20px;
  width: 20px;
  fill: currentColor;
}

.brand .name {
  margin-left: 4px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
}

.title {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.6;
  margin-top: 8px;
  margin-bottom: 8px;
}

.date {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
}
</style>