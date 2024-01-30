<template>
    <NavPath :path="path"/>
    <div class="container mt-3 position-relative">
        <loading :is-full-page="false" :active="isLoading"></loading>
        <div class="mb-3">
            <RouterLink to="/admin"><button class="btn btn-secondary">Retour</button></RouterLink>
        </div>
        <OrdersTable :orders="orders" :tableHeaders="tableHeaders"/>
    </div>
</template>

<script setup>
    import OrdersTable from '@/components/AdminComponents/OrderComponents/OrdersTable.vue'
    import { onMounted } from 'vue';
    import { getAdminOrders } from '@/services/OrderService';
    import { ref, reactive, inject } from 'vue';
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import { onBeforeMount } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import router from '@/router'
    const swal = inject('$swal')


    let isLoading = ref(true)
    let orders = reactive({})
    let tableHeaders = reactive({})
    let path = null;

    onBeforeMount(() => {
        path = [
            {
                name: 'accueil',
                route: '/'
            },
            {
                name: 'Admin',
                route: '/admin'
            },
            {
                name: 'Commandes',
                route: '/admin/commandes'
            },
        ]
    })

    onMounted(async() => {
        getAdminOrders().then((response) => {
            orders = response.map((order) => {
                return {
                    "Référence": order.reference,
                    "Montant": order.payment.amount+'€',
                    "Client": order.customer.shippingAddress.name,
                    "Produits": order.products.map((product) => product.name).join(', '),
                    "Date de commande": new Date(order.payment.createdAt).toLocaleDateString("fr-FR"),
                    "Statut": order.status
                }
            })
            tableHeaders = Object.keys(orders[0]);
            isLoading.value = false;
        })
        .catch(function(error) {
            console.log(error)
            swal.fire({
                icon: 'error',
                title: 'Désolé',
                text: 'Le site fait face à un soucis technique. Veuillez nous excuser pour le désagrément.',
                confirmButtonText: "Retour à l'accueil",
                showCloseButton: true,
                showConfirmButton: true,
                confirmButtonColor: "#94BCD8",
            }).then(() => {
                router.push({ path: '/admin' })
            })
        })
        
    })
</script>

<style scoped>

</style>