<template>
    <div ref="scroll" class="container">
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
    import { onMounted, ref, nextTick } from 'vue';
    const scroll = ref(null)
    const cartStore = useCartStore();

    onMounted(() => {
        nextTick(() => {
            scroll.value?.scrollIntoView({behavior: "smooth"});
        });
    });

   
</script>