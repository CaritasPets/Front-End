import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css';7

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import router from './routes'
import App from './App.vue'

const pinia = createPinia();

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')