import { defineStore } from "pinia";
import { getItems } from "@/services/ShopService"

export const useSampleItemStore = defineStore("SampleItemStore", {
    state: () => {
        return {
            items:[]
        }
    },

    actions:{
        async fill(){
            this.items = await getItems();
        }
    }
})