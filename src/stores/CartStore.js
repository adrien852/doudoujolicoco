import { defineStore } from "pinia";
import items from "@/testData.json"

export const useCartStore = defineStore("CartStore", {
    state: () => {
        return {
            items:[]
        }
    },

    getters:{
        count: (state) => state.items.length,

        isEmpty: (state) => state.count == 0
    },

    actions:{
        fill(){
            this.items = items;
        }
    }
})