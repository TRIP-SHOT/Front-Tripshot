import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    ,
    {
      path: '/postview',
      name: 'postview',
      component: () => import('@/views/PostView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignupView.vue')
    },
    {
      path: '/recommand',
      name: 'recommand',
      component: () => import('@/views/RecommandView.vue')
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('@/views/UploadView.vue')
    },
    {
      path: '/proofshot',
      name: 'proofshot',
      component: () => import('@/views/ProofShotView.vue')
    },
    {
      path: '/imgload',
      name: 'imgload',
      component: () => import('@/components/uploadStep/ImgLoad.vue')
    },
    {
      path: '/placeload',
      name: 'placeload',
      component: () => import('@/components/uploadStep/PlaceLoad.vue')
    },
    {
      path: '/dateload',
      name: 'dateload',
      component: () => import('@/components/uploadStep/DateLoad.vue')
    },
    {
      path: '/contentload',
      name: 'contentload',
      component: () => import('@/components/uploadStep/ContentLoad.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/views/PostDetailView.vue')
    },
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
