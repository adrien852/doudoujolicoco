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
    import {savePaymentId} from '@/services/CustomerService.js'
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
                threeDSecure: true,
                paypal: {
                    flow: 'vault',
                    buttonStyle: {
                        color: 'blue',
                        shape: 'rect',
                        size: 'medium'
                    },
                    billingAgreementDescription: '',
                    enableShippingAddress: true,
                    shippingAddressEditable: false,
                    shippingAddressOverride: {
                        recipientName: cartStore.address.firstName + ' ' + cartStore.address.lastName,
                        line1: cartStore.address.address1,
                        line2: cartStore.address.address2,
                        city: cartStore.address.city,
                        countryCode: 'FR',
                        postalCode: cartStore.address.postalCode,
                        phone: cartStore.address.phone,
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
                        dropinInstance.requestPaymentMethod((error, payload) => {
                            if (error) {
                                console.error(error);
                            }
                            else{
                                checkoutButton.addEventListener('click', event => {
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
        var threeDSecureParameters = {
            amount: cartStore.subTotal,
            email: cartStore.address.email,
            billingAddress: {
                givenName: cartStore.address.billing.firstName.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
                surname: cartStore.address.billing.lastName.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
                phoneNumber: cartStore.address.billing.phoneNumber,
                streetAddress: cartStore.address.billing.address1,
                extendedAddress: cartStore.address.billing.address2,
                locality: cartStore.address.billing.city,
                postalCode: cartStore.address.billing.postalCode,
                countryCodeAlpha2: 'FR'
            },
            collectDeviceData: true,
            additionalInformation: {
            shippingGivenName: cartStore.address.firstName.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
            shippingSurname: cartStore.address.lastName.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
            shippingPhone: cartStore.address.phoneNumber,
            shippingAddress: {
                streetAddress: cartStore.address.address1,
                extendedAddress: cartStore.address.address2,
                locality: cartStore.address.city,
                postalCode: cartStore.address.postalCode,
                countryCodeAlpha2: 'FR'
            }
            },
        };
        event.preventDefault();
        dropinInstance.requestPaymentMethod({
            threeDSecure: threeDSecureParameters
        }, (error, payload) => {
            if (error) {
                console.error(error);
            }
            else{
                // submitButton.style.display = 'none';
                // checkoutButton.style.display = 'unset';
                checkoutButton.addEventListener('click', event => {
                    checkoutFlow(payload, submitButton, checkoutButton, dropinInstance);
                });
            }
        });
    }

    function checkoutFlow(payload, submitButton, checkoutButton, dropinInstance){

        checkout(payload.nonce, cartStore.items).catch((error) => {
            submitButton.style.display = 'none';
            checkoutButton.style.display = 'none';
            dropinInstance.clearSelectedPaymentMethod();
        }).then((response) => {
            if(response.success){
                const payment = {
                    paymentId: response.transaction.id,
                    amount: response.transaction.amount
                }
                savePaymentId(cartStore.address.customerId, payment);
            }
            else{
                console.log(response.message);
            }
            
        })
    }
</script>