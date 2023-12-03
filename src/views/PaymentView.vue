<template>
    <NavPath :path="path"/>
    <div v-if="!(cartStore.cartItems.length == 0 || cartStore.customer.length == 0)" class="container position-relative mt-3">
        <loading :active="isLoading"></loading>
        <div class="d-flex justify-content-center">
            <Payment :braintreeToken="braintreeToken" @paymentInit="paymentInit"/>
        </div>
    </div>
</template>
<script setup>
    import Payment from '@/components/PaymentComponents/Payment.vue'
    import router from '@/router'
    import {getBraintreeToken, checkout, savePaymentId} from '@/services/PaymentService.js'
    import {useCartStore} from '@/stores/CartStore.js'
    import {onBeforeMount, onMounted, ref} from 'vue'
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import { inject } from 'vue'
    const swal = inject('$swal')

    const cartStore = useCartStore();

    let braintreeToken = ref(null);
    let isLoading = ref(true);
    let path = null;

    onBeforeMount(() => {
        swal.fire({
            icon: 'error',
            title: 'Désolé',
            text: 'Le paiement n\'est pas encore disponible.',
            confirmButtonText: "Retour à l'accueil",
            showConfirmButton: true,
            confirmButtonColor: "#94BCD8",
        }).then(() => {
            router.push({ path: '/' })
        })
        path = [
            {
                name: 'accueil',
                route: '/'
            },
            {
                name: 'Panier',
                route: '/panier'
            },
            {
                name: 'Livraison',
                route: '/livraison'
            },
            {
                name: 'Paiement',
                route: '/paiement'
            },
        ]
        if(cartStore.cartItems.length == 0 || cartStore.customer.length == 0){
            swal.fire({
                icon: 'warning',
                title: 'Pas si vite',
                text: 'Votre panier est vide. Ajoutez-y des articles de la boutique.',
                confirmButtonText: "Retour à la boutique",
                showCloseButton: false,
                showConfirmButton: true,
                confirmButtonColor: "#94BCD8",
            }).then(() => {
                router.push({ path: '/boutique' })
            })
        }
    });

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
                        recipientName: cartStore.customer.shippingAddress.firstName + ' ' + cartStore.customer.shippingAddress.lastName,
                        line1: cartStore.customer.shippingAddress.address1,
                        line2: cartStore.customer.shippingAddress.address2,
                        city: cartStore.customer.shippingAddress.city,
                        countryCode: 'FR',
                        postalCode: cartStore.customer.shippingAddress.postalCode,
                        phone: cartStore.customer.shippingAddress.phone,
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
                });
                dropinInstance.on('paymentMethodRequestable', function (event) {
                    if(event.type == "PayPalAccount"){
                        submitButton.style.display = 'none';
                        dropinInstance.requestPaymentMethod((error, payload) => {
                            if (error) {
                                console.error(error);
                            }
                            else{
                                elemental(checkoutButton).oneEventListener('click', ()=>{
                                    checkoutCallBack(payload, submitButton, checkoutButton, dropinInstance);
                                })
                                checkoutButton.style.display = 'unset';
                            }
                        });
                    }
                });
                isLoading.value = false;
                submitButton.addEventListener('click', event => {
                    creditCardSubmit(event, submitButton, checkoutButton, dropinInstance);
                });
            });
        })
        .catch(() => {
            swal.fire({
                icon: 'error',
                title: 'Oups !',
                text: 'Erreur lors de l\'initialisation du paiement. Veuillez réessayer plus tard.',
                confirmButtonText: "OK",
                showConfirmButton: true,
            }).then(() => {
                router.push({ path: '/panier' })
            })
        })
    }

    function initializeButtons(submitButton, checkoutButton){
        
        submitButton.setAttribute('id', 'sendNonce');
        submitButton.setAttribute('type', 'button');
        submitButton.setAttribute('class', 'btn btn-primary mb-3');
        submitButton.innerHTML = "Valider"
        submitButton.style.display = 'none';
        document.getElementById('submitButtons').appendChild(submitButton);
        
        checkoutButton.setAttribute('id', 'sendCheckout');
        checkoutButton.setAttribute('type', 'button');
        checkoutButton.setAttribute('class', 'btn btn-primary mb-3');
        checkoutButton.innerHTML = "Payer"
        checkoutButton.style.display = 'none';
        document.getElementById('submitButtons').appendChild(checkoutButton);

    }

    onMounted(async() => {
        // initializeBrainTree();
    });

    function creditCardSubmit(event, submitButton, checkoutButton, dropinInstance){
        const billingAddress = (cartStore.customer.isSameAsShipping) ? cartStore.customer.shippingAddress : cartStore.customer.billingAddress;
        var threeDSecureParameters = {
            amount: cartStore.subTotal,
            email: cartStore.customer.email,
            billingAddress: {
                givenName: billingAddress.firstName.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
                surname: billingAddress.lastName.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
                phoneNumber: billingAddress.phoneNumber,
                streetAddress: billingAddress.address1,
                extendedAddress: billingAddress.address2,
                locality: billingAddress.city,
                postalCode: billingAddress.postalCode,
                countryCodeAlpha2: 'FR'
            },
            collectDeviceData: true,
            additionalInformation: {
            shippingGivenName: cartStore.customer.shippingAddress.firstName.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
            shippingSurname: cartStore.customer.shippingAddress.lastName.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
            shippingPhone: cartStore.customer.shippingAddress.phoneNumber,
            shippingAddress: {
                streetAddress: cartStore.customer.shippingAddress.address1,
                extendedAddress: cartStore.customer.shippingAddress.address2,
                locality: cartStore.customer.shippingAddress.city,
                postalCode: cartStore.customer.shippingAddress.postalCode,
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
                elemental(checkoutButton).oneEventListener('click', ()=>{
                    checkoutCallBack(payload, submitButton, checkoutButton, dropinInstance);
                })
                checkoutButton.style.display = 'unset';
            }
        });
    }

    function checkoutCallBack(payload, submitButton, checkoutButton, dropinInstance){
        isLoading.value = true;
        document.getElementById('payment-form').remove();
        checkout(payload.nonce, cartStore.cartItems)
        .then((response) => {
            if(response.success){
                const now = new Date();
                const offsetMs = now.getTimezoneOffset() * 60 * 1000;
                const dateLocal = new Date(now.getTime() - offsetMs);
                const payment = {
                    paymentId: response.transaction.id,
                    amount: response.transaction.amount,
                    customerId: cartStore.customer.id,
                    items: cartStore.cartItems,
                    createdAt: dateLocal.toISOString().slice(0, 19).replace("T", " ")
                }
                savePaymentId(payment).then(() => {
                    cartStore.clearCart();
                    swal.fire({
                        icon: 'success',
                        title: 'Paiement reçu',
                        text: 'Merci infiniment pour votre confiance. Vous recevrez un email de confirmation pour votre commande.',
                        confirmButtonText: "Retour à l'accueil",
                        showCloseButton: true,
                        showConfirmButton: true,
                        confirmButtonColor: "#94BCD8",
                    }).then(() => {
                        router.push({ path: '/' })
                    })
                })
                .catch(() => {
                    cartStore.clearCart();
                    swal.fire({
                        icon: 'warning',
                        title: 'Oups !',
                        html: '<div style="text-align:left">Une erreur est survenue lors de l\'enregistrement de votre paiement. Envoyez nous les informations suivantes à contact@doudoujoli.fr<br/><br/>Client ID : '+cartStore.customer.id+'<br/>Transaction ID : '+response.transaction.id,
                        confirmButtonText: "Retour à l'accueil",
                        showConfirmButton: true,
                        confirmButtonColor: "#94BCD8",
                    }).then(() => {
                        router.push({ path: '/' })
                    })
                })
            }
            else{
                swal.fire({
                    icon: 'error',
                    title: 'Oups !',
                    text: 'Erreur lors du traitement de votre paiement, veuillez réessayer plus tard.',
                    confirmButtonText: "OK",
                    showConfirmButton: true,
                }).then(() => {
                    submitButton.style.display = 'none';
                    checkoutButton.style.display = 'none';
                    dropinInstance.clearSelectedPaymentMethod();
                })
            }
            
        })
        .catch((error) => {
            submitButton.style.display = 'none';
            checkoutButton.style.display = 'none';
            dropinInstance.clearSelectedPaymentMethod();
        })
    }
    
    function elemental(el){
        el.oneEventListener = (event, func) => {
            if(el.lastEventListener == null){
            el.lastEventListener = {};
            }
            if(el.lastEventListener[event] != null){
            el.removeEventListener(event, el.lastEventListener[event]);
            }
            el.addEventListener(event, func);
            el.lastEventListener[event] = func;
        }
        return el;
    }
</script>