import { defineStore } from "pinia";
import items from "@/testData.json"

export const useCartStore = defineStore("CartStore", {
    state: () => {
        return {
            items:[]
        }
    },

    actions:{
        fill(){
            this.items = items;
        }
    }
})