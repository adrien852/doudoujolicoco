<template>
    <div class="container">
        <loading :active="isLoading"></loading>
        <div class="text-center mt-4">
            <h3>Paiement</h3>
        </div>
        <div class="d-flex justify-content-center">
            <Payment :braintreeToken="braintreeToken" @paymentInit="paymentInit"/>
        </div>
    </div>
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
                let submitButton = document.createElement('button');
                let checkoutButton = document.createElement('button');
                initializeButtons(submitButton, checkoutButton);
                isLoading.value = false;
                submitButton.addEventListener('click', event => {
                    event.preventDefault();
                    dropinInstance.requestPaymentMethod((error, payload) => {
                        if (error) {
                            console.error(error);
                        }
                        else{
                            checkoutButton.addEventListener('click', event => {
                                checkout(payload.nonce, cartStore.items).catch((error) => {
                                    console.log(error);
                                    submitButton.style.display = 'unset';
                                    checkoutButton.style.display = 'none';
                                    dropinInstance.clearSelectedPaymentMethod();
                                }).then((response) => {
                                    document.getElementById('payment-form').remove();
                                })
                            });
                            dropinInstance.on('paymentMethodRequestable', function (event) {
                                submitButton.style.display = 'none';
                                checkoutButton.style.display = 'unset';
                            });

                            dropinInstance.on('noPaymentMethodRequestable', function () {
                                submitButton.style.display = 'unset';
                                checkoutButton.style.display = 'none';
                            });
                        }
                    });
                });
            });
        });
    }

    function initializeButtons(submitButton, checkoutButton){
        
        submitButton.setAttribute('id', 'sendNonce');
        submitButton.setAttribute('type', 'button');
        submitButton.setAttribute('class', 'btn btn-primary');
        submitButton.innerHTML = "Valider"
        document.getElementById('submitButtons').appendChild(submitButton);
        
        checkoutButton.setAttribute('id', 'sendCheckout');
        checkoutButton.setAttribute('type', 'button');
        checkoutButton.setAttribute('class', 'btn btn-primary');
        checkoutButton.innerHTML = "Payer"
        checkoutButton.style.display = 'none';
        document.getElementById('submitButtons').appendChild(checkoutButton);

    }

    onMounted(async() => {
        initializeBrainTree();
    });
</script>