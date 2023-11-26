import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import config from './formkit.config'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/analytics";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "doudoujoli-610f9.firebaseapp.com",
    projectId: "doudoujoli-610f9",
    storageBucket: "doudoujoli-610f9.appspot.com",
    messagingSenderId: "989548635733",
    appId: "1:989548635733:web:74e26f0930e31a81b416dc",
    measurementId: "G-RZ2TP6TG7V"
  };

firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const storage = firebase.storage();

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(VueSweetalert2);
app.use(plugin, defaultConfig(config))

app.mount('#app')
