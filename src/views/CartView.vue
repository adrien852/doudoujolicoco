<template>
    <CartItems v-if="cartStore.count > 0" :items="cartStore.items"/>
    <div class="text-center mt-4" v-if="cartStore.count <= 0">
        <h3>Votre panier est vide!</h3>
    </div>
</template>

<script setup>
    import CartItems from '@/components/CartComponents/CartItems.vue';
    import { useCartStore } from '@/stores/CartStore'

    const cartStore = useCartStore();
</script>