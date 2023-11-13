<!-- <template>
  
   
<section class="text-center vh-100">
 
 <div class="p-5 bg-image" style="
       background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
       height: 300px;
       "></div>
 

 <div class="card mx-4 mx-md-5 shadow-5-strong" style="
       margin-top: -100px;
       background: hsla(0, 0%, 100%, 0.8);
       backdrop-filter: blur(30px);
       ">
   <div class="card-body py-5 px-md-5 ">

     <div class="row d-flex justify-content-center">
       <div class="col-lg-8">
         <h2 class="fw-bold mb-5" > Login </h2>
         
         
           <div class="form-outline mb-4">
             <input type="email" id="form3Example3" class="form-control" v-model="username" required />
             <label class="form-label" for="form3Example3">Email address</label>
           </div>

        
           <div class="form-outline mb-4">
             <input type="password" id="form3Example4" class="form-control" v-model="password" required/>
             <label class="form-label" for="form3Example4">Password</label>
           </div>

       
          
           <p class="errorMessage" v-if="getUser !='success'"> {{getUser}} </p>

           <button  @click="loginIt"   style="background-color: #006174;"  class="btn btn-success btn-block mb-4"  >
             Login
           </button>

         
           <div class="text-center">
             <p>or sign up with:</p>
  
             <button type="button" class="btn btn-link btn-floating mx-1">
               <i class="fab fa-facebook-f"></i>
             </button>

             <button type="button" class="btn btn-link btn-floating mx-1">
               <i class="fab fa-google"></i>
             </button>

             <button type="button" class="btn btn-link btn-floating mx-1">
               <i class="fab fa-twitter"></i>
             </button>

             <button type="button" class="btn btn-link btn-floating mx-1">
               <i class="fab fa-github"></i>
             </button>
           </div>
         
       </div>
     </div>
   </div>
 </div>
</section>


  </template>
<script >

import axios from 'axios';
import  {toast} from 'vue3-toastify';

import 'vue3-toastify/dist/index.css'

export default{

 data: () => ({
       
       username: "",
       password: "",
      
       
   }),
   methods: {
      loginIt(){
  axios.post('https://10.18.121.124:448/api/login/login',{username:this.username,password:this.password})
  .then( response=>{
   if(response.status == 200)
   {
  let token=  response.data;
  if(response.data.userName==this.username){
    localStorage.setItem('token',token);
    toast.success('Welcome')
    this.$router.push('/home')
  }
}
  else{
    
    toast.error(' Wrong User Name or Password')}
 })
 
  },
  },
  
 
}
</script>
 -->
 <template>
  
  <!-- <div class="body">
      <div id="chatContainer">
  <div class="chatHeader">
    <h4>Chat Bot</h4>
  </div>
  <div class="chatBody">
    <div class="messages" v-for="message in messages" :key="message.id">
      <div class="messageRow user" v-if="message.id % 2 == 0">
        <div class="message user">
          <p>{{ message.message }}</p>
        </div>
      </div>
      <div class="messageRow bot" v-else>
        <div class="message bot">
          <p>{{ message.message }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="chatFooter">
    <form @submit.prevent="sendMessage()">
      <input v-model="messageContent" id="createMessage" />
      <input type="submit" />
    </form>
  </div>
</div>
  </div> -->
<!--BS-->
<!-- <section style="background-color: #eee;">
  <div class="container py-5">

    <div class="row d-flex justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-4">

        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center p-3"
            style="border-top: 4px solid #ffa900;">
            <h5 class="mb-0">Chat messages</h5>
            <div class="d-flex flex-row align-items-center">
              <span class="badge bg-warning me-3">20</span>
              <i class="fas fa-minus me-3 text-muted fa-xs"></i>
              <i class="fas fa-comments me-3 text-muted fa-xs"></i>
              <i class="fas fa-times text-muted fa-xs"></i>
            </div>
          </div>
          <div class="card-body" data-mdb-perfect-scrollbar="true" style="position: relative; height: 400px">

            <div class="d-flex justify-content-between">
              <p class="small mb-1">Timona Siera</p>
              <p class="small mb-1 text-muted">23 Jan 2:00 pm</p>
            </div>
            <div class="d-flex flex-row justify-content-start">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
              <div>
                <p class="small p-2 ms-3 mb-3 rounded-3" style="background-color: #f5f6f7;">For what reason
                  would it
                  be advisable for me to think about business content?</p>
              </div>
            </div>

            <div class="d-flex justify-content-between">
              <p class="small mb-1 text-muted">23 Jan 2:05 pm</p>
              <p class="small mb-1">Johny Bullock</p>
            </div>
            <div class="d-flex flex-row justify-content-end mb-4 pt-1">
              <div>
                <p class="small p-2 me-3 mb-3 text-white rounded-3 bg-warning">Thank you for your believe in
                  our
                  supports</p>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
            </div>

            <div class="d-flex justify-content-between">
              <p class="small mb-1">Timona Siera</p>
              <p class="small mb-1 text-muted">23 Jan 5:37 pm</p>
            </div>
            <div class="d-flex flex-row justify-content-start">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
              <div>
                <p class="small p-2 ms-3 mb-3 rounded-3" style="background-color: #f5f6f7;">Lorem ipsum dolor
                  sit amet
                  consectetur adipisicing elit similique quae consequatur</p>
              </div>
            </div>

            <div class="d-flex justify-content-between">
              <p class="small mb-1 text-muted">23 Jan 6:10 pm</p>
              <p class="small mb-1">Johny Bullock</p>
            </div>
            <div class="d-flex flex-row justify-content-end mb-4 pt-1">
              <div>
                <p class="small p-2 me-3 mb-3 text-white rounded-3 bg-warning">Dolorum quasi voluptates quas
                  amet in
                  repellendus perspiciatis fugiat</p>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
            </div>

          </div>
          <div class="card-footer text-muted d-flex justify-content-start align-items-center p-3">
            <div class="input-group mb-0">
              <input type="text" class="form-control" placeholder="Type message"
                aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button class="btn btn-warning" type="button" id="button-addon2" style="padding-top: .55rem;">
                Button
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</section> -->



  <section style="background-color: #eee;">
  <div class="container py-5">

    <div class="row d-flex justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-4">

        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center p-3"
            style="border-top: 4px solid #ffa900;">
            <h5 class="mb-0">Chat messages</h5>
            <div class="d-flex flex-row align-items-center">
              <span class="badge bg-warning me-3">20</span>
              <i class="fas fa-minus me-3 text-muted fa-xs"></i>
              <i class="fas fa-comments me-3 text-muted fa-xs"></i>
              <i class="fas fa-times text-muted fa-xs"></i>
            </div>
          </div>
          <div class="card-body" data-mdb-perfect-scrollbar="true" style="position: relative; height: 400px">

            <div class="d-flex justify-content-between" v-for="message in messages" :key="message.id">
              <div class="messageRow user" v-if="message.id % 2 == 0">
        <div class="message user">
          <p class="small mb-1">{{ message.message }}</p>
        </div>
      </div>
      <div class="messageRow bot" v-else>
        <div class="message bot">
          <p class="small mb-1">{{ message.message }}</p>
        </div>
      </div>  
     
            </div>
      

          

          </div>
          <div class="card-footer text-muted d-flex justify-content-start align-items-center p-3">
            <div class="chatFooter">
    <form @submit.prevent="sendMessage()">
      <input type="text" class="form-control" placeholder="Type message"
                aria-label="Recipient's username" aria-describedby="button-addon2" v-model="messageContent" id="createMessage" />
      <input  type="submit" class="btn btn-warning"  id="button-addon2" style="padding-top: .55rem;" />
    </form>
  </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
</template>
<script>
import { sendMessageChatBotAPI } from "../apiServices/index"
import { ref } from "vue";
export default {
name: "App",
setup() {
  const messages = ref([]),
    messageContent = ref("");

  //Sends the message on form submit
  function sendMessage() {
    if (messageContent.value == "") return;
    createMessage(messageContent.value);
    getResponse(messageContent.value);
    messageContent.value = "";
  }

  //Create a message
  function createMessage(message) {
    let id = 0;
    if (messages.value[messages.value.length - 1]) {
      id = messages.value[messages.value.length - 1].id + 1;
    }
    messages.value.push({
      id: id,
      message: message,
    });
  }

  async function getResponse(message) {
    const postData = {
      message: message,
    };
    try {
      const { data } = await sendMessageChatBotAPI(postData);
      const { response } = data;
      createMessage(response);
    } catch(err) {
      console.log(err)
    }
  }

  return { messages, messageContent, sendMessage };
},
};
</script>
<style scoped>
html {
    font-size: 16px;
    color: #fff;
    background-color: #fff;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
}

.body {
  background-color: #fff;
    color: #fff;
}

#chatContainer {
background-color: #282c34;
height: 600px;
width: 40%;
margin: 0 auto;
display: flex;
flex-direction: column;
position: relative;
}
.chatHeader {
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
color: white;
margin-left: 5%;
}
.chatFooter {
position: absolute;
bottom: 0px;
width: 100%;
}
.chatFooter form {
display: flex;
align-items: center;
justify-content: space-between;
width: 95%;
margin: 0 auto;
}
.chatBody {
overflow-y: scroll;
height: 83%;
}
#createMessage {
width: 80%;
}
input:not(#createMessage) {
background-color: green;
border: 0;
color: white;
padding: 10px;
margin-bottom: 12px;
opacity: 0.8;
}
input:not(#createMessage):hover {
opacity: 0.5;
}
.messageRow {
display: flex;
justify-content: flex-end;
}
.messageRow.bot {
justify-content: flex-start;
}
.message p {
color: white;
padding: 0px 15px 0px 15px;
}
.message {
border-radius: 50px;
text-align: center;
margin: 10px;
}
.messageRow.user .message {
background-color: #1982fc;
}
.messageRow.bot .message {
background-color: #43cc47;
}
.chatBody::-webkit-scrollbar {
width: 0px;
height: 100%;
}
</style>