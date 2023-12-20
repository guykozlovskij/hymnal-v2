import './assets/main.css'
import './assets/style.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons"
import { BiBook, BiSearch, BiStar, BiGearWide } from "oh-vue-icons/icons"
addIcons(BiBook, BiSearch, BiStar, BiGearWide)

const app = createApp(App)

app.component("v-icon", OhVueIcon)

app.use(router)

app.mount('#app')
