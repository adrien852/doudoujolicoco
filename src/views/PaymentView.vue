<template>
    <NavPath :path="path"/>
    <div v-if="!(cartStore.cartItems.length == 0)" class="container position-relative mt-3">
        <div class="d-flex justify-content-center">
            <Payment />
        </div>
    </div>
</template>

<script setup>
    import Payment from '@/components/PaymentComponents/Payment.vue'
    import router from '@/router'
    import {onBeforeMount} from 'vue'
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import { inject } from 'vue'
    const swal = inject('$swal')
    import {useCartStore} from '@/stores/CartStore.js'

    const cartStore = useCartStore();
    let path = null;
    
    onBeforeMount(() => {
    
        path = [
            {
                name: 'accueil',
                route: '/'
            },
            {
                name: 'Panier',
                route: '/panier'
            },
            {
                name: 'Paiement',
                route: '/paiement'
            },
        ]
        if(cartStore.cartItems.length == 0){
            swal.fire({
                icon: 'warning',
                title: 'Pas si vite',
                text: 'Votre panier est vide. Ajoutez-y des articles de la boutique.',
                confirmButtonText: "Retour à la boutique",
                showCloseButton: false,
                showConfirmButton: true,
                confirmButtonColor: "#F39E6A",
            }).then(() => {
                router.push({ path: '/boutique' })
            })
        }
    });

</script>

<style scoped>
</style>