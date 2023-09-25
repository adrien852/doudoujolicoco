import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'

export const useCartStore = defineStore("CartStore", {
    state: () => ({
        items: useStorage('items', [])
    }),

    getters:{
        count: (state) => state.items.length,

        isEmpty: (state) => state.count == 0,

        subTotal(state) {
            let totalPrice = 0;
            state.items.forEach((item) => {
                totalPrice += item.price;
            });
            return totalPrice;
        }
    },

    actions:{
        addItem(item){
            this.items.push({ ...item });
        },
        clearCart(){
            this.items = [];
        },
        deleteItem(itemToRemoveIndex){
            this.items.splice(itemToRemoveIndex, 1);
        },
    }
})