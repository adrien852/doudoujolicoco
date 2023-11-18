<template>
    <loading :is-full-page="false" :active="isLoading"></loading>
    <div class="container">
        <div class="mb-3">
            <RouterLink to="/admin/commandes"><button class="btn btn-secondary">Retour</button></RouterLink>
        </div>
        <div class="d-flex flex-wrap">
            <OrderDetails :order="order"/>
            <OrderCustomerInfo :order="order"/>
            <OrderManage :order="order"/>
        </div>
    </div>

</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { getAdminOrder } from '@/services/OrderService.js'
    import OrderDetails from '@/components/AdminComponents/OrderComponents/OrderDetails.vue';
    import OrderCustomerInfo from '@/components/AdminComponents/OrderComponents/OrderCustomerInfo.vue';
    import OrderManage from '@/components/AdminComponents/OrderComponents/OrderManage.vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import { ref, onMounted, reactive } from 'vue';

    const route = useRoute();
    let isLoading = ref(true);
    
    let order = reactive({})

    onMounted(() => {
        getAdminOrder(route.params.reference)
        .then(response => {
            order = response;
            isLoading.value = false;

        })
    })


</script>

<style scoped>

</style>