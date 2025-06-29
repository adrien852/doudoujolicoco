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
  import swal from 'sweetalert2';
  import router from '@/router'

  const cartStore = useCartStore();
  let isLoading = ref(true);
  let stripeCheckout = null;

  onMounted(async() => {
    const stripe = await loadStripe(`${import.meta.env.VITE_STRIPE_API_KEY}`);
    checkout(cartStore.cartItems, cartStore.promo.code).then(({clientSecret}) => {
      stripe.initEmbeddedCheckout({
        clientSecret
      }).then(response => {
        stripeCheckout = response;
        response.mount('#checkout')
        isLoading.value = false;
      });
    }).catch(error => {
      swal.fire({ icon: 'error', title: 'Erreur', text: error.response.data.error }).then(() => {
        isLoading.value = false;
        cartStore.clearCart();
        router.push({ path: '/' })
      });
    });

  })

  onBeforeUnmount(() => {
    if(stripeCheckout){
      stripeCheckout.destroy();
    }
  })

</script>

<style scoped>
</style>