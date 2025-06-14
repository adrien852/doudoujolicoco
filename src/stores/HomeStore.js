import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'
import { getHomeElements } from "@/services/HomeService"

export const useHomeStore = defineStore("HomeStore", {
    state: () => ({
        homeElements: useStorage('homeElements', {"id":-1,"code":"","type":"","amount":0,"minimumOrderTotal":0,"description":""})
    }),

    actions:{
        async fillHomeElements(){
            this.homeElements = await getHomeElements().then((response) => response).catch(() => null);  
        }
    }
})