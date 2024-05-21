import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useKakao } from 'vue3-kakao-maps/@utils';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'  

useKakao(import.meta.env.VITE_KAKAO_MAP_API_KEY, ['clusterer', 'services', 'drawing']);

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
