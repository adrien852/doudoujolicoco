<template>
    <loading :is-full-page="false" :active="isLoading"></loading>
    <div class="container">
        <div class="mb-3">
            <RouterLink to="/admin/commandes"><button class="btn btn-secondary">Retour</button></RouterLink>
        </div>
        <div v-if="order" class="d-flex flex-wrap">
            <div class="orderDetails mb-3 col-xl-5 col-12">
                <div class="card">
                    <div class="card-header">
                        Commande <b>#{{ order.reference }}</b>
                    </div>
                    <div class="card-body px-sm-2 px-0 d-flex flex-wrap">
                        <div class="col-12 mb-2" v-for="product in order.products">
                            <ShopItem :item="product" :longDisplay="true" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="orderDetails mb-3 col-xl-3 col-md-6 col-12">
                <div class="card">
                    <div class="card-header">
                        Informations client
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ order.customer.shippingAddress.firstName+' '+order.customer.shippingAddress.lastName }}</h5>
                        <p class="card-text">{{ order.customer.shippingAddress.address1 }}</p>
                        <p class="card-text">{{ order.customer.shippingAddress.address2 }}</p>
                        <p class="card-text">{{ order.customer.shippingAddress.postalCode+' '+order.customer.shippingAddress.city }}</p>
                        <p class="card-text">{{ order.customer.shippingAddress.phone }}</p>
                        <p class="card-text">{{ order.customer.email }}</p>
                        <br />
                        <p class="card-text"><i>Braintree Payment ID : </i><br />{{ order.payment.paymentId }}</p>
                    </div>
                </div>

            </div>
            <div class="orderDetails col-xl-4 col-md-6 col-12">
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
                            <button @click="sendEmail('IN_PROGRESS')" class="btn btn-primary w-100">Commande traitée</button>
                            <button @click="sendEmail('SHIPPED')" class="btn btn-primary w-100 mt-2">Commande expédiée</button>
                            <button @click="sendEmail('DELIVERED')" class="btn btn-primary w-100 mt-2">Commande livrée</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { getAdminOrder, updateOrderStatus } from '@/services/OrderService.js'
    import ShopItem from '@/components/ShopComponents/ShopItem.vue'
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import { ref, onMounted, reactive, inject } from 'vue';
    const swal = inject('$swal')

    const route = useRoute();
    let isLoading = ref(true);
    let isStatusLoading = ref(false);
    let order = reactive(null)
    const statusFr = {
        PENDING: "En attente",
        IN_PROGRESS: "En traitement",
        SHIPPED: "Expédié",
        DELIVERED: "Livré"
    }

    function getOrder(reference){
        getAdminOrder(reference)
        .then(response => {
            order = response;
            isLoading.value = false;

        })
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

    function sendEmail(status){
        swal.fire({
            icon: 'question',
            title: 'Statut : "'+statusFr[status]+'"',
            text: 'Êtes-vous sûr de vouloir envoyer un email pour notifier le client ?',
            width: 600,
            showCancelButton: true,
            confirmButtonText: "Envoyer",
            cancelButtonText: "Annuler",
            showCloseButton: true,
            confirmButtonColor: "#f4aa46",
            denyButtonColor: "#94BCD8",
            showClass: {
                popup: 'animate__animated animate__fadeIn'
            },
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("test")
            }
        })
    }

    onMounted(() => {
        getOrder(route.params.reference)
    })

    async function saveStatus(){
        let statusContainer = document.getElementById("statusChangeIcon")
        isStatusLoading.value = true;
        updateOrderStatus(order)
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
</script>

<style scoped>
p{
    margin:0
}
.orderDetails img{
    object-fit: contain;
}
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