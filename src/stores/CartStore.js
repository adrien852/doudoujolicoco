import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'
import { getItem } from "@/services/ShopService"

export const useCartStore = defineStore("CartStore", {
    state: () => ({
        cartItems: useStorage('cartItems', []),
        customer: useStorage('customer', [])
    }),

    getters:{
        count: (state) => state.cartItems.length,

        isEmpty: (state) => state.count == 0,

        subTotal(state) {
            let totalPrice = 0;
            state.cartItems.forEach((item) => {
                totalPrice += parseFloat(item.price);
            });
            return totalPrice;
        }
    },

    actions:{
        addItem(item){
            this.cartItems.push({ ...item });
        },
        clearCart(){
            this.cartItems = [];
        },
        deleteItem(itemToRemoveIndex){
            this.cartItems.splice(itemToRemoveIndex, 1);
        },

        setCustomer(customer){
            this.customer = customer;
        },
        async checkCartValidity(){
            //Updating cart with newest info from DB
            this.cartItems = await Promise.all(this.cartItems.map(async(item, index) => {
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
            //Deleting cartItems not found in DB
            this.cartItems = this.cartItems.filter((item) => !item.deleted)
            //Removing deleted property
            this.cartItems = this.cartItems.map((item) => {
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