import './assets/main.css'
import './custom-scripts/mBox'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

$( function() {
    $('.mBox').mBox();
});

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
