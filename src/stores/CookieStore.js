import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
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

export const useCookieStore = defineStore("CookieStore", {
  state: () => ({
    cookiesAccepted: useStorage("cookiesAccepted", null),
  }),

  actions: {
    acceptCookies() {
      this.cookiesAccepted = true;
      this.loadGoogleAnalytics();
    },

    declineCookies() {
      this.cookiesAccepted = false;
    },

    loadGoogleAnalytics() {
      if (!this.cookiesAccepted) return;

      
      firebase.initializeApp(firebaseConfig);
      const analytics = firebase.analytics();
      const storage = firebase.storage();
    },
  },
});
