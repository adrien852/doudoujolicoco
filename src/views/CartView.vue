<template>
    <CartItems :items="cartStore.items"/>
</template>

<script setup>
    import CartItems from '@/components/CartComponents/CartItems.vue';
    import { useCartStore } from '@/stores/CartStore'

    const cartStore = useCartStore();
    cartStore.fill();
</script>