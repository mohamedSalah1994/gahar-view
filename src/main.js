import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store/auth'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap/dist/js/bootstrap.min.js";
import i10n from './i18n'
import ElementPlus from 'element-plus'
import Vue3Toasity from 'vue3-toastify';
import 'element-plus/dist/index.css'
import 'vue3-toastify/dist/index.css';
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()

import 'boxicons'


const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(router).use(i10n).use(ElementPlus).use(vuetify).use(Vue3Toasity).use(pinia.use(piniaPluginPersistedstate)).mount('#app')

