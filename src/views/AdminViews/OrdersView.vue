<template>
    <loading :is-full-page="false" :active="isLoading"></loading>
    <div class="container">
        <div class="mb-3">
            <RouterLink to="/admin"><button class="btn btn-secondary">Retour</button></RouterLink>
        </div>
        <h1>Commandes</h1>
        <OrdersTable :orders="orders" :tableHeaders="tableHeaders"/>
    </div>
</template>

<script setup>
    import OrdersTable from '@/components/AdminComponents/OrderComponents/OrdersTable.vue'
    import { onMounted } from 'vue';
    import { getAdminOrders } from '@/services/OrderService';
    import { ref, reactive } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

    let isLoading = ref(true)
    let orders = reactive({})
    let tableHeaders = reactive({})

    onMounted(async() => {
        getAdminOrders().then((response) => {
            orders = response.map((order) => {
                return {
                    "Référence": order.reference,
                    "Montant": order.payment.amount+'€',
                    "Client": order.customer.shippingAddress.firstName+' '+order.customer.shippingAddress.lastName,
                    "Produits": order.products.map((product) => product.name).join(', '),
                    "Date de commande": new Date(order.payment.createdAt).toLocaleDateString("fr-FR"),
                    "Statut": order.status
                }
            })
            tableHeaders = Object.keys(orders[0]);
            isLoading.value = false;
        });
        
    })
</script>

<style scoped>

</style>