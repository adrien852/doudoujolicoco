import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'
import { getItems, getCategories } from "@/services/ShopService"

export const useSampleItemStore = defineStore("SampleItemStore", {
    state: () => ({
        items: useStorage('items', []),
        categories: useStorage('categories', [])
    }),

    actions:{
        async fillItems(){
            this.items = await getItems();
        },
        async fillCategories(){
            this.categories = await getCategories();
        }
    }
})