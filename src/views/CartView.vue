<template>
    <NavPath :path="path"/>
    <div class="container position-relative mt-3">
        <div v-if="cartStore.count > 0" class="d-flex row mt-4">
            <CartItems v-if="cartStore.count > 0" :items="cartStore.cartItems"/>
            <div id="cartDetails" class="col-lg-4">
                <CartDetails />
            </div>
        </div>
        <div class="mt-4 d-flex flex-wrap justify-content-center align-items-center" v-if="cartStore.count <= 0">
            <div class="text-center mb-md-0 mb-3">
                <img src="@/assets/images/yarn-ball.png" />
            </div>
            <div class="col-lg-5 col-md-6 text-center">
                <h3>Votre panier est vide !</h3>
                <RouterLink to="/boutique">
                    <button class="btn btn-primary mt-2">
                    <b><p class="m-0">Visiter la boutique</p></b>
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    import CartItems from '@/components/CartComponents/CartItems.vue';
    import CartDetails from '@/components/CartComponents/CartDetails.vue';
    import { useCartStore } from '@/stores/CartStore'
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import { onBeforeMount } from 'vue';

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
        ]
    })
    const cartStore = useCartStore();
</script>

<style scoped>
    h1::after{
        max-width: 756px;
    }

    img{
        max-width: 100px;
        width: 100%
    }
</style>