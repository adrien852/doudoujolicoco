import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import config from './formkit.config'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(VueSweetalert2);
app.use(plugin, defaultConfig(config))

app.mount('#app')
