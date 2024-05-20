import './assets/main.css'
import config from '../config/apikey'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import { useKakao } from 'vue3-kakao-maps/@utils';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'  

const APIKEY = config.apiKey;

useKakao(APIKEY, ['clusterer', 'services', 'drawing']);
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
