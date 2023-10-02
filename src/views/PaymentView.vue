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

    async function initializeBrainTree(){
        getBraintreeToken().then(response => {
            braintreeToken.value = response.clientToken;
            braintree.dropin.create({
                container: document.getElementById('dropin-container'),
                authorization: braintreeToken.value,
                locale: 'fr_FR',
                paypal: {
                    flow: 'vault',
                    buttonStyle: {
                        color: 'blue',
                        shape: 'rect',
                        size: 'medium'
                    },
                    billingAgreementDescription: 'Your agreement description',
                                    enableShippingAddress: true,
                                    shippingAddressEditable: false,
                                    shippingAddressOverride: {
                                    recipientName: 'Scruff McGruff',
                                    line1: '1234 Main St.',
                                    line2: 'Unit 1',
                                    city: 'Chicago',
                                    countryCode: 'US',
                                    postalCode: '60652',
                                    state: 'IL',
                                    phone: '123.456.7890'
                                    }
                },
                card: {
                    cardholderName: {
                        required: true
                    },
                    cvv: {
                        required: true
                    }
                }
            }, (error, dropinInstance) => {
                if (error) console.error(error);
                let submitButton = document.createElement('button');
                let checkoutButton = document.createElement('button');
                initializeButtons(submitButton, checkoutButton);
                dropinInstance.on('paymentOptionSelected', function (event){
                    if(event.paymentOption == "card"){
                        submitButton.style.display = 'unset';
                        checkoutButton.style.display = 'none';
                    }
                    else{
                        submitButton.style.display = 'none';
                    }
                });
                dropinInstance.on('changeActiveView', function (event){
                    if(event.newViewId == "options" || event.newViewId == "methods"){
                        submitButton.style.display = 'none';
                    }
                    if(event.newViewId == "paypal"){
                        checkoutButton.style.display = 'none';
                    }
                    if(event.newViewId == "methods"){
                        checkoutButton.style.display = 'unset';
                    }
                });
                dropinInstance.on('paymentMethodRequestable', function (event) {
                    if(event.type == "PayPalAccount"){
                        submitButton.style.display = 'none';
                        checkoutButton.style.display = 'unset';
                        checkoutButton.addEventListener('click', event => {
                            if (error) {
                                console.error(error);
                            }
                            else{
                                dropinInstance.requestPaymentMethod((error, payload) => {
                                    checkoutFlow(payload, submitButton, checkoutButton, dropinInstance);
                                });
                            }
                        });
                    }
                });
                isLoading.value = false;
                submitButton.addEventListener('click', event => {
                    creditCardSubmit(event, submitButton, checkoutButton, dropinInstance);
                });
            });
        });
    }

    function initializeButtons(submitButton, checkoutButton){
        
        submitButton.setAttribute('id', 'sendNonce');
        submitButton.setAttribute('type', 'button');
        submitButton.setAttribute('class', 'btn btn-primary');
        submitButton.innerHTML = "Valider"
        submitButton.style.display = 'none';
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

    function creditCardSubmit(event, submitButton, checkoutButton, dropinInstance){
        event.preventDefault();
        dropinInstance.requestPaymentMethod((error, payload) => {
            if (error) {
                console.error(error);
            }
            else{
                submitButton.style.display = 'none';
                checkoutButton.style.display = 'unset';
                checkoutButton.addEventListener('click', event => {
                    checkoutFlow(payload, submitButton, checkoutButton, dropinInstance);
                });
            }
        });
    }

    function checkoutFlow(payload, submitButton, checkoutButton, dropinInstance){
        checkout(payload.nonce, cartStore.items).catch((error) => {
            console.log(error);
            submitButton.style.display = 'none';
            checkoutButton.style.display = 'none';
            dropinInstance.clearSelectedPaymentMethod();
        }).then((response) => {
            // document.getElementById('payment-form').remove();
        })
    }
</script>