import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'
import { getItem } from "@/services/ShopService"

export const useCartStore = defineStore("CartStore", {
    state: () => ({
        items: useStorage('items', []),
        customer: useStorage('customer', [])
    }),

    getters:{
        count: (state) => state.items.length,

        isEmpty: (state) => state.count == 0,

        subTotal(state) {
            let totalPrice = 0;
            state.items.forEach((item) => {
                totalPrice += parseFloat(item.price);
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

        setCustomer(customer){
            this.customer = customer;
        },
        async checkCartValidity(){
            //Updating cart with newest info from DB
            this.items = await Promise.all(this.items.map(async(item, index) => {
                return await getItem(item.normalized).then(responseItem => {
                    if(Object.keys(responseItem).length == 0){
                        return {
                            ...item,
                            'deleted': true,
                        };
                    }
                    if(responseItem.price != item.price){
                        return {
                            ...responseItem,
                            'deleted': false,
                        };
                    }
                    return {
                        ...item,
                        'deleted': false,
                    };
                })
            }))
            //Deleting items not found in DB
            this.items = this.items.filter((item) => !item.deleted)
            //Removing deleted property
            this.items = this.items.map((item) => {
                Object.keys(item).forEach(key => {
                    if(key === 'deleted'){
                        delete item[key]
                    }
                })
                return item;
            })
        }
    }
})