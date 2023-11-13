<template>
    <div>
        <header class="page__header">
            <div dir="rtl" class="container-fluid">
                <div class="row flex-nowrap">

                    <div>
                        <!--secondnav-->
                        <div>
                            <div>
                                <nav class="navbar navbar-expand-lg navbar-light first-nav " style="padding-bottom:0 "
                                    :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">

                                    <div class="container-fluid">
                                        <div class="d-flex">





                                            <ul style="display:inline-block">
                                                <li style="display:inline-block"><a
                                                        href="https://www.facebook.com/gaharegypt/"><span
                                                            href="https://www.facebook.com/gaharegypt/"
                                                            class="social-icon social-facebook"><box-icon type='logo'
                                                                name='facebook-circle'></box-icon></span></a></li>
                                                <li style="display:inline-block"><span class="social-icon social-google">
                                                        <box-icon type='logo' name='gmail'></box-icon> </span></li>
                                                <li style="display:inline-block"><a
                                                        href="https://www.linkedin.com/company/gaharegypt"><span
                                                            class="social-icon social-linkedin"> <box-icon type='logo'
                                                                name='linkedin-square'></box-icon></span></a></li>
                                                <li style="display:inline-block"><span class="social-icon social-instagram">
                                                        <box-icon type='logo' name='instagram-alt'></box-icon></span></li>
                                                <li style="display:inline-block"><span class="social-icon social-twitter">
                                                        <box-icon type='logo' name='twitter'></box-icon>
                                                    </span></li>
                                                <li style="display:inline-block"><a
                                                        href="https://www.youtube.com/gaharegypt"><span
                                                            class="social-icon social-google"><box-icon type='logo'
                                                                name='youtube'></box-icon></span></a></li>
                                            </ul>


                                        </div>

                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarSupportedContents"
                                            aria-controls="navbarSupportedContents" aria-expanded="true"
                                            aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContents">
                                            <ul class="navbar-nav" style="display:inline-block">
                                                <li style="display:inline-block"><a class="navbar-brand" href="/home"> <box-icon
                                                            type='solid' name='home-alt-2'></box-icon> {{ $t('Home Page')
                                                            }}</a></li>

                                                <li style="display:inline-block" class="nav-item">
                                                    <a class="nav-link" href="/login" style="font-weight:bold"><box-icon
                                                            name='message-rounded-dots'></box-icon> {{ $t('تواصل معنا') }}
                                                    </a>
                                                </li>
                                              
                                                <li style="display:inline-block" class="nav-item">
                                                    <a class="nav-link" href="/UserProfile"
                                                        style="font-weight:bold"><box-icon name='user'></box-icon>{{
                                                            $t('Registration at the Authority ') }} </a>
                                                </li>
                                                <li style="display:inline-block" class="nav-item">
                                                    <a class="nav-link" href="/WatchChannels"
                                                        style="font-weight:bold"><box-icon type='logo'
                                                            name='youtube'></box-icon>{{ $t(' شاهد الان') }} </a>
                                                </li>

                                                <li style="display:inline-block" class="nav-item">
                                                    <a class="nav-link" style="font-weight: bold;">
                                                        <LoginModal> </LoginModal>
                                                    </a>

                                                </li>

                                                <li style="display:inline-block" class="nav-item">
                                                    <a class="nav-link" style="font-weight: bold;">
                                                        <DropLanguages></DropLanguages>
                                                    </a>

                                                </li>
                                                <li style="display:inline-block" class="nav-item">
                                                    <a class="nav-link" style="font-weight: bold;">
                                                       {{ userstore?.user?.username }}
                                                    </a>
<a v-if="userstore?.user" @click="userstore.logout" class="nav-link" style="font-weight: bold;">
Logout
</a>
                                                </li>
                                            </ul>





                                        </div>
                                    </div>
                                </nav>
                            </div>

                            <nav class="navbar navbar-expand-lg navbar-light bg-light first-nav " style="padding-bottom:0 "
                                :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
                                <div class="container-fluid">


                                    <img src="../assets/logo.svg">
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                        <ul class="navbar-nav">
                                            <li v-for="page in pages" class="nav-item" :key="page.pagesId">
                                                    <el-tree :data="[page]" @node-click="handleNodeClick"  style="font-size: 16px;font-family: tajawal;" class="text-black" />
                                            </li>
                                        </ul>

                                        <v-col cols="3">
                                            <v-text-field :loading="loading" density="compact" variant="solo" label="Search"
                                                append-inner-icon="mdi-magnify" single-line hide-details
                                                @click:append-inner="onClick"></v-text-field> </v-col>
                                    </div>
                                </div>
                            </nav>
                        </div>

                    </div>





                </div>
            </div>
        </header>

    </div>

    <br><br>
</template>
<style ></style>
<script >

import { ref, onMounted, watchEffect } from "vue";
import LoginModal from "./LoginModal.vue";
import DropLanguages from "./DropLanguages.vue";
//import { useRouter } from 'vue-router';
//import { useUserStore } from "../stores/UserStore";
import { getPagesAPI } from "../apiServices/index"
import { FormatToElement } from "../utils/FormatToElement.ts"
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/auth";
//const router = useRouter();
export default {
    setup() {
        const userstore=useUserStore()
        const router = useRouter();
        let pages = ref([
  
        ]);

        watchEffect(() => {
            if(pages.value.length > 0) FormatToElement(pages.value);
        })

        const handleNodeClick = (data) => {
            
            if(data.children.length > 0) return;
            
            router.push({name: "mediacenter", params: { id: data.value }})
        }
     

        onMounted(async () => {
            try {
                const response = await getPagesAPI();

                if(response.status === 200) {
                    let data = response.data;
                    pages.value = data
                }
            } catch(err) {
                console.log(err);
            }
        });

        return { pages, handleNodeClick, userstore }
    },
    components: { LoginModal, DropLanguages }
}
</script>
<style>
.first-nav {
    background-color: #34b1aa;
}

.social-icon {
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
    border-radius: 7px;
    margin-right: 11px;
    cursor: pointer;
}

.social-twitter {
    background-color: #55acee;
}


.social-facebook {
    background-color: #3b5999;
}


.social-linkedin {
    background-color: #0077B5;
}


.social-google {
    background-color: #dd4b39;
}

.social-instagram {
    background-color: #dd4b39;
}

.social-icon i {
    transition: 0.4s all;
}

.social-icon:hover i {
    transform: scale(1.1);
}</style>


