<template>
    <div class="container">
        <div class="d-flex flex-column align-items-center text-center">
            <div class="checkAnimation mt-5 ">
                <svg
                    width="115px"
                    height="115px"
                    viewBox="0 0 133 133"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                    <g
                        id="check-group"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                            <circle
                            id="filled-circle"
                            fill="#07b481"
                            cx="66.5"
                            cy="66.5"
                            r="54.5"
                        />
                        <circle
                            id="white-circle"
                            fill="#FFFFFF"
                            cx="66.5"
                            cy="66.5"
                            r="55.5"
                        />
                        <circle
                            id="outline"
                            stroke="#07b481"
                            stroke-width="4"
                            cx="66.5"
                            cy="66.5"
                            r="54.5"
                        />
                        <polyline
                            id="check"
                            stroke="#FFFFFF"
                            stroke-width="5.5"
                            points="41 70 56 85 92 49"
                        />
                    </g>
                </svg>
            </div>
            <div class="confirmationText col-lg-6 col-md-8">
                <h1 class="">Merci pour votre confiance</h1>
                <p class="text-justify">Vous recevrez un email de confirmation pour votre commande. N'hésitez pas à nous contacter à doudoujolicoco@gmail.com si vous avez la moindre question.</p>
                <RouterLink class="" to="/"><button class="btn btn-primary px-2"><span class="text-uppercase">Retour à l'accueil</span></button></RouterLink> 
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import {getSessionStatus, savePaymentId} from '@/services/PaymentService.js'
    import {useCartStore} from '@/stores/CartStore.js'
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

    const cartStore = useCartStore();
    import router from '@/router'

    onMounted(async() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const sessionId = urlParams.get('session_id');
        
        getSessionStatus(sessionId).then(session => {
            if (session.status == 'open') {
                swal.fire({
                    icon: 'warning',
                    title: 'Oups !',
                    text: 'Votre paiement n\'a pas abouti. Veuillez réessayer.',
                    confirmButtonText: "OK",
                    showConfirmButton: true,
                    confirmButtonColor: "#94BCD8",
                }).then(() => {
                    router.push({ path: '/paiement' })
                })
            } else if (session.status == 'complete') {
                const date = new Date(session.data.created * 1000);
                const payment = {
                    paymentId: session.data.payment_intent,
                    amount: session.data.amount_total/100,
                    customerId: session.customerId,
                    items: cartStore.cartItems,
                    createdAt: date
                }
                savePaymentId(payment).then(() => {
                    cartStore.clearCart();
                })
                .catch(() => {
                    cartStore.clearCart();
                    swal.fire({
                        icon: 'warning',
                        title: 'Oups !',
                        html: '<div style="text-align:left">Votre paiement a été traité, mais une erreur est survenue lors de l\'enregistrement de votre paiement. Envoyez nous les informations suivantes à contact@doudoujoli.fr<br/><br/>Client ID : '+cartStore.customer.id+'<br/>Transaction ID : '+response.transaction.id,
                        confirmButtonText: "Retour à l'accueil",
                        showConfirmButton: true,
                        confirmButtonColor: "#94BCD8",
                    })
                })
            }
        })

        
    })

</script>

<style scoped>
p{
    font-size: 13pt;
    margin-top: 30px;
}
#check-group {
    animation: 0.32s ease-in-out 1.03s check-group;
    transform-origin: center;
}

#check-group #check {
    animation: 0.34s cubic-bezier(0.65, 0, 1, 1) 0.8s forwards check;
    stroke-dasharray: 0, 75px;
    stroke-linecap: round;
    stroke-linejoin: round;
}

#check-group #outline {
    animation: 0.38s ease-in outline;
    transform: rotate(0deg);
    transform-origin: center;
}

#check-group #white-circle {
    animation: 0.35s ease-in 0.35s forwards circle;
    transform: none;
    transform-origin: center;
}

@keyframes outline {
  from {
    stroke-dasharray: 0, 345.576px;
  }
  to {
    stroke-dasharray: 345.576px, 345.576px;
  }
}
@keyframes circle {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
}
@keyframes check {
  from {
    stroke-dasharray: 0, 75px;
  }
  to {
    stroke-dasharray: 75px, 75px;
  }
}
@keyframes check-group {
  from {
    transform: scale(1);
  }
  50% {
    transform: scale(1.09);
  }
  to {
    transform: scale(1);
  }
}
</style>