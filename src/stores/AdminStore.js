import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'

export const useAdminStore = defineStore("AdminStore", {
    state: () => ({
        isAdmin: useStorage('isAdmin', false),
        isAdminRouteLoading: useStorage('isAdminRouteLoading', false),
    }),

    actions:{
        isAdminLoggedIn(status){
            this.isAdmin = status;
        },
        isAdminRouteAccessed(status){
            this.isAdminRouteLoading = status;
        },
    }
})