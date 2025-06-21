import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'
import { getHomeElements } from "@/services/HomeService"

function getDefaultHomeElements() {
    return {
        id: -1,
        promo:{
            id: -1,
            code: "",
            type: "",
            amount: 0,
            minimumOrderTotal: 0,
            description: ""
        },
        expiresAt: getExpiryDate(0)
    }
}

function getExpiryDate(ttlDay = 1) {
    return Date.now() + ttlDay * 24 * 60 * 60 * 1000;
}

export const useHomeStore = defineStore("HomeStore", {
    state: () => ({
        homeElements: useStorage('homeElements', getDefaultHomeElements())
    }),

    actions:{
        async fillHomeElements(){
            this.homeElements = await getHomeElements().then((response) => {
                return {
                    ...response,
                    expiresAt: getExpiryDate(1)
                }
            }).catch(() => null);  
        },

        isHomeExpired() {
            return this.homeElements && this.homeElements.expiresAt && Date.now() > this.homeElements.expiresAt;
        }
    }
})