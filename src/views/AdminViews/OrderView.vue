<template>
    <loading :is-full-page="true" :active="isLoading"></loading>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="title in tableHeaders">{{ title }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders">
                    <td v-for="value in order">
                        {{ value }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

import { onBeforeMount, onMounted } from 'vue';
import { getAdminOrders } from '../../services/OrderService';
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