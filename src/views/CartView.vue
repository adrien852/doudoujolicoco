<template>
    <div class="container">
        <h1 class="ml-lg-3 mb-5 text-left">Panier</h1>
        <div v-if="cartStore.count > 0" class="d-flex row mt-4">
            <CartItems v-if="cartStore.count > 0" :items="cartStore.items"/>
            <div id="cartDetails" class="col-lg-4">
                <CartDetails />
            </div>
        </div>
        <div class="text-center mt-4" v-if="cartStore.count <= 0">
            <h3>Votre panier est vide!</h3>
        </div>
    </div>
</template>

<script setup>
    import CartItems from '@/components/CartComponents/CartItems.vue';
    import CartDetails from '@/components/CartComponents/CartDetails.vue';
    import { useCartStore } from '@/stores/CartStore'
    const cartStore = useCartStore();
</script>

<style scoped>
    h1::after{
        max-width: 756px;
    }
</style>