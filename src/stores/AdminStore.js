import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'

export const useAdminStore = defineStore("AdminStore", {
    state: () => ({
        isAdmin: useStorage('isAdmin', false),
    }),

    actions:{
        isAdminLoggedIn(status){
            this.isAdmin = status;
        }
    }
})