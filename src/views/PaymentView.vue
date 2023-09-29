<template>
    <loading :active="isLoading"></loading>
    <div class="text-center mt-4">
        <h3>Paiement</h3>
    </div>
    <Payment :braintreeToken="braintreeToken" @paymentInit="paymentInit"/>
</template>
<script setup>
    import Payment from '@/components/PaymentComponents/Payment.vue'
    import {getBraintreeToken, checkout} from '@/services/PaymentService.js'
    import {useCartStore} from '@/stores/CartStore.js'
    import {onMounted, ref} from 'vue'
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

    const cartStore = useCartStore();

    let braintreeToken = ref(null);
    let isLoading = ref(true);
    console.log(cartStore.items);

    async function initializeBrainTree(){
        getBraintreeToken().then(response => {
            braintreeToken.value = response.clientToken;
            braintree.dropin.create({
                container: document.getElementById('dropin-container'),
                authorization: braintreeToken.value
            }, (error, dropinInstance) => {
                if (error) console.error(error);
                isLoading.value = false;
                const form = document.getElementById('payment-form');
                form.addEventListener('submit', event => {
                    event.preventDefault();
                    dropinInstance.requestPaymentMethod((error, payload) => {
                    if (error) console.error(error);
                        checkout(payload.nonce, cartStore.items);
                    });
                });
            });
        });
    }

    onMounted(async() => {
        initializeBrainTree();
    });
</script>