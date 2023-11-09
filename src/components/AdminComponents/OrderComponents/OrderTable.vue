<template>
    <loading :is-full-page="false" :active="isLoading"></loading>
    <div v-if="orders" class="table-responsive-md">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="title in tableHeaders">{{ title }}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders">
                    <td v-for="value in order">
                        {{ value }}
                    </td>
                    <td class="text-center">
                        <RouterLink :to="'/admin/commandes/'+order.Référence"><button class="btn">Voir</button></RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { getAdminOrders } from '@/services/OrderService';
    import { ref, reactive } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

    let isLoading = ref(true)
    let orders = reactive(null)
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
.btn{
  background-color: #94BCD8;
  color: white;
  border-radius: 10px;
  -webkit-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    -moz-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    -o-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    transition: transform 0.1s ease-out, background-color 0.2s ease-out;
}
.btn:hover{
    -webkit-transition: background-color 0.2s ease-out;
    -moz-transition: background-color 0.2s ease-out;
    -o-transition: background-color 0.2s ease-out;
    transition: background-color 0.2s ease-out;
    text-decoration: none;
    background-color: #4c778d;
}
td{
    vertical-align: middle;
}
</style>