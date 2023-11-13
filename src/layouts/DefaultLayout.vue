<template>
    <div>
        <AppHeader></AppHeader>
   
      <SliderShow></SliderShow>
        <WelcomeSection></WelcomeSection>
        <RegisterCo></RegisterCo>
        <ProgramsSection></ProgramsSection>
        <BottunWatchAll></BottunWatchAll>
        <router-view></router-view>
        <InternationalOrgs></InternationalOrgs>
        <SliderSection></SliderSection>
        <AppFooter></AppFooter>
    </div>
</template>
<script>
//import {toast} from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
 //import LogoutButton from '../components/logoutButton.vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import SliderSection from '../components/SliderSection.vue'
import InternationalOrgs from '../components/InternationalOrgs.vue'
import BottunWatchAll from '../components/BottunWatchAll.vue'
import ProgramsSection from '../components/ProgramsSection.vue'
import WelcomeSection from '../components/WelcomeSection.vue'
//import registerCo from '@/components/registerCo.vue'
import SliderShow from '../components/SliderShow.vue'
import {toast} from 'vue3-toastify'
import RegisterCo from '@/components/registerCo.vue'
export default{
    setup(){
        toast('مرحبا')
    },
    components:{ AppHeader, AppFooter, SliderSection, InternationalOrgs, BottunWatchAll, ProgramsSection, WelcomeSection, SliderShow, RegisterCo }
 
}
</script>