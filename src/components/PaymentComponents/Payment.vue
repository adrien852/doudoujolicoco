<template>
  <loading :active="isLoading"></loading>
  <div id="checkout" class="w-100">
    
  </div>
</template>

<script setup>
  import { onMounted, onBeforeUnmount, ref } from 'vue';
  import { checkout } from '@/services/PaymentService.js'
  import {useCartStore} from '@/stores/CartStore.js'
  import Loading from 'vue3-loading-overlay';
  import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import { loadStripe } from '@stripe/stripe-js';

  const cartStore = useCartStore();
  let isLoading = ref(true);
  let stripeCheckout = null;

  onMounted(async() => {
    const stripe = await loadStripe(`${import.meta.env.VITE_STRIPE_API_KEY}`);
    checkout(cartStore.cartItems).then(({clientSecret}) => {
      stripe.initEmbeddedCheckout({
        clientSecret
      }).then(response => {
        stripeCheckout = response;
        response.mount('#checkout')
        isLoading.value = false;
      });
    })

  })

  onBeforeUnmount(() => {
    if(stripeCheckout){
      stripeCheckout.destroy();
    }
  })

</script>

<style scoped>
</style>