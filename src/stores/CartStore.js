import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'
import { getItem } from "@/services/ShopService"
import { getPromo } from "@/services/PromoService"
import { useHomeStore } from '@/stores/HomeStore.js'

export const useCartStore = defineStore("CartStore", {
    state: () => ({
        cartItems: useStorage('cartItems', []),
        customer: useStorage('customer', []),
        promoCode: useStorage('promoCode', ''),
        promo: useStorage('promo', {
            code: '',
            type: '',
            amount: 0,
            minimumOrderTotal: 0
        }),
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
        },

        promoValue(state) {
            // Valeur négative de la promo appliquée
            if (state.promo) {
                let totalPrice = 0;
                state.cartItems.forEach((item) => {
                    totalPrice += parseFloat(item.price);
                });
                if (totalPrice >= state.promo.minimumOrderTotal) {
                    if (state.promo.type === "Pourcentage") {
                        return -totalPrice * (state.promo.amount / 100);
                    } else if (state.promo.type === "Valeur fixe") {
                        return -state.promo.amount;
                    }
                }
            }
            return 0;
        },

        total(state) {
            return state.subTotal + state.promoValue;
        }
    },

    actions:{
        addItem(item){
            this.cartItems.push({ ...item });
        },
        clearCart(){
            this.cartItems = [];
            this.promo = null;
            this.promoCode = '';
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
        },

        async applyPromoCode(code) {
            const homeStore = useHomeStore();
            if (!code) {
                return {
                    success: false, 
                    message: "Veuillez entrer un code promo."
                };
            }
            try {
                const promo = await getPromo(code.trim());
                // Vérification usage unique
                if (promo.singleUse && homeStore.usedPromoCodes.includes(promo.code)) {
                    return {
                        success: false,
                        message: "Ce code promotionnel a déjà été utilisé et n'est valable qu'une seule fois."
                    };
                }
                if (!promo || !promo.code) {
                    return {
                        success: false, 
                        message: "Code promo invalide."
                    };
                }
                // Vérifie le minimum de commande
                let total = 0;
                this.cartItems.forEach((item) => {
                    total += parseFloat(item.price);
                });
                if (total < promo.minimumOrderTotal) {
                    return {
                        success: false, 
                        message: `Commande minimum de ${promo.minimumOrderTotal}€ requise.`
                    };
                }
                this.promo = promo;
                this.promoCode = code.trim();
                return {
                    success: true, 
                    message: "Code promo appliqué : " + promo.code
                };
            } catch (e) {
                return {
                    success: false, 
                    message: "Erreur lors de la vérification du code promo."
                };
            }
        }
    }
})