import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Particles from "particles.vue3";
import './util/axios.config'

createApp(App)
.use(ElementPlus)
.use(Particles)
.use(store)
.use(router)
.mount('#app')