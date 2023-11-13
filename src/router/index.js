import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import Login from '../views/LoginView.vue'
import LogoutComponent from '../views/LogoutView.vue'
import MediaCenter from '../views/MediaView.vue'
import GallaryView from '../views/GallaryView.vue'
import UserProfile from '../views/UserProfile.vue'
import AuthComp from '../components/AuthComponent.vue'

import WatchChannels from '../views/RegisterView.vue'

const routes = [
  {
    path: '/WatchChannels',
    name: 'WatchChannels',
    component:WatchChannels
    

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   
  },
  {
    path: '/home',
    name: 'Home',
    component: DefaultLayout,
    
    redirect:'/',
    children:[
      {    path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')}
   
    ]
    
  },

  {
    path: '/mediacenter/page/:id',
    name: 'mediacenter',
    component: <AuthComp><MediaCenter /> </AuthComp>    
  },
  {
    path: '/UserProfile',
    name: 'UserProfile',
    component:UserProfile
  
  },
  {
    path: '/mediacenterphotos',
    name: 'mediacenterphotos',
    component: GallaryView,
 
    
  },

  {
    path: '/Page',
    name: 'Page',
 redirect:'/AboutView',

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  
  },
  {
    path: '/logout',
    name: 'Logout',
    component:LogoutComponent
  
  }
 
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
