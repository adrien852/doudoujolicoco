<template>
    <div class="orderDetails col-xl-4 col-md-6 col-12">
        <loading :is-full-page="false" :active="isLoading"></loading>
        <div class="card">
            <div class="card-header">
                Gérér la commande
            </div>
            <div class="card-body">
                <div id="statusContainer position-relative">
                    <loading :is-full-page="false" :active="isStatusLoading"></loading>
                    <h5 class="card-title">Statut</h5>
                    <select class="my-2" v-model="order.status" @change="saveStatus()">
                        <option>En attente</option>
                        <option>En traitement</option>
                        <option>Expédié</option>
                        <option>Livré</option>
                    </select>
                    <span id="statusChangeIcon" ></span>
                </div>
                <hr />
                <div>
                    <h5 class="card-title">Envoyer email de confirmation</h5>
                    <button @click="sendEmail('IN_PROGRESS')" class="btn btn-primary w-100">Commande en traitement</button>
                    <div class="d-flex flex-column align-items-center mt-4">
                        <input placeholder="Numéro de suivi" class="form-control" type="text" v-model="order.trackingNumber" />
                        <button @click="sendEmail('SHIPPED')" class="btn btn-primary mt-1 w-100">Commande expédiée</button>
                    </div>
                    <button @click="sendEmail('DELIVERED')" class="btn btn-primary w-100 mt-4">Commande livrée</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { updateOrderStatus, sendStatusEmail } from '@/services/OrderService.js';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import { ref, inject } from 'vue';
    const swal = inject('$swal');

    const props = defineProps({
        order: Object
    })

    let isStatusLoading = ref(false);
    let isLoading = ref(false);

    const statusFr = {
        PENDING: "En attente",
        IN_PROGRESS: "En traitement",
        SHIPPED: "Expédiée",
        DELIVERED: "Livrée"
    }

    function removeStatusIcon(statusContainer){
        setTimeout(() => {
            statusContainer.style.opacity = 0
        }, 3000);
    }

    function showStatusIcon(statusContainer, color, content){
        statusContainer.style.backgroundColor = color;
        statusContainer.innerHTML = content;
        statusContainer.style.opacity = 100
    }

    async function saveStatus(){
        let statusContainer = document.getElementById("statusChangeIcon")
        isStatusLoading.value = true;
        updateOrderStatus(props.order)
        .then(() => {
            showStatusIcon(statusContainer, "green", "&check;");
            removeStatusIcon(statusContainer);
            isStatusLoading.value = false;
        })
        .catch((response) => {
            showStatusIcon(statusContainer, "red", "&cross;");
            removeStatusIcon(statusContainer);
            isStatusLoading.value = false;
        })
        
        
    }

    function sendEmail(status){
        swal.fire({
            icon: 'question',
            title: 'Statut : "'+statusFr[status]+'"',
            html: 
                'Êtes-vous sûr de vouloir envoyer un email pour notifier le client ?<br/>' +
                (
                    props.order.trackingNumber && props.order.trackingNumber.trim() !== ''
                        ? `Numéro de suivi : <b>${props.order.trackingNumber}</b><br/>`
                        : 'Sans numéro de suivi<br/>'
                ) +
                'Email client : <b>' + props.order.customer.email + '</b>.',
            width: 600,
            showCancelButton: true,
            confirmButtonText: "Envoyer",
            cancelButtonText: "Annuler",
            showCloseButton: true,
            confirmButtonColor: "#f4aa46",
            denyButtonColor: "#F39E6A",
            showClass: {
                popup: 'animate__animated animate__fadeIn'
            },
        }).then(async(result) => {
            if (result.isConfirmed) {
                isLoading.value = true;
                await sendStatusEmail(props.order, status).then(() => {
                    swal.fire({
                        icon: 'success',
                        title: 'Email envoyé',
                        text: 'L\'email de confirmation a bien été envoyé',
                        confirmButtonText: "OK",
                        showCloseButton: true,
                        showConfirmButton: true,
                        confirmButtonColor: "#F39E6A",
                    })
                })
                .catch(() => {
                    swal.fire({
                        icon: 'error',
                        title: 'Erreur d\'envoi',
                        text: 'L\'email de confirmation n\'a pas été envoyé. Réessayer plus tard.',
                        confirmButtonText: "OK",
                        showCloseButton: true,
                        showConfirmButton: true,
                        confirmButtonColor: "#F39E6A",
                    })
                })
                isLoading.value = false;
            }
        })
    }
</script>

<style scoped>
#statusChangeIcon{
    color:white; 
    border-radius: 100%; 
    font-size: 15pt; 
    padding: 3px 5px; 
    margin-left: 5px;
    opacity: 0;
    -webkit-transition: opacity 0.2s ease-out;
    -moz-transition: opacity 0.2s ease-out;
    -o-transition: opacity 0.2s ease-out;
    transition: opacity 0.2s ease-out;
}
</style>