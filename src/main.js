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

// Prevent double-tap zoom on iOS PWAs 
let lastTouch = 0
    document.addEventListener('touchend', function(e) {
        const now = Date.now()
        if (now - lastTouch <= 250) { // 250ms threshold to block double-tap zoom
            e.preventDefault()
        }
        lastTouch = now
    }, { passive: false })

app.mount('#app')