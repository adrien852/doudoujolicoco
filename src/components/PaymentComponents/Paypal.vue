<template>
    <div class="mt-1" id="paypal-button"></div>
</template>
<script setup>
    import {onMounted, ref} from 'vue'
    import {getBraintreeToken, checkout} from '@/services/PaymentService.js'
    import {useCartStore} from '@/stores/CartStore.js'

    const cartStore = useCartStore();
    let braintreeToken = ref(null);

    async function initializeBrainTree(){
        getBraintreeToken().then(response => {
            braintreeToken.value = response.clientToken;
            braintree.client.create({
            authorization: braintreeToken.value
            }, function (clientErr, clientInstance) {

                // Stop if there was a problem creating the client.
                // This could happen if there is a network error or if the authorization
                // is invalid.
                if (clientErr) {
                    console.error('Error creating client:', clientErr);
                    return;
                }

                // Create a PayPal Checkout component.
                braintree.paypalCheckout.create({
                    client: clientInstance
                }, function (paypalCheckoutErr, paypalCheckoutInstance) {

                    // Stop if there was a problem creating PayPal Checkout.
                    // This could happen if there was a network error or if it's incorrectly
                    // configured.
                    if (paypalCheckoutErr) {
                    console.error('Error creating PayPal Checkout:', paypalCheckoutErr);
                    return;
                    }

                    paypalCheckoutInstance.loadPayPalSDK({
                    vault: true,
                    }, function (loadSDKErr) {
                        paypal.Buttons({
                            style: {
                                color:  'blue',
                            },
                            fundingSource: paypal.FUNDING.PAYPAL,

                            createBillingAgreement: function () {
                                return paypalCheckoutInstance.createPayment({
                                    flow: 'vault', // Required

                                    // The following are optional params
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
                                });
                            },
                            onApprove: function (data, actions) {
                                return paypalCheckoutInstance.tokenizePayment(data, function (err, payload) {
                                    checkout(payload.nonce, cartStore.items).catch((error) => {
                                        console.log(error);
                                    }).then((response) => {
                                        //redirect or something
                                    })
                                });
                            },

                            onCancel: function (data) {
                                console.log('PayPal payment canceled', JSON.stringify(data, 0, 2));
                            },

                            onError: function (err) {
                                console.error('PayPal error', err);
                            }
                        }).render('#paypal-button').then(function () {
                        });
                    });
                });
            });
        });
    }
    onMounted(async() => {
        initializeBrainTree();
    });
</script>