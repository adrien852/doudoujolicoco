<template>
    <NavPath :path="path"/>
    <div class="container position-relative mt-3">
        <loading :is-full-page="false" :active="isLoading"></loading>
        <div class="mb-3">
            <RouterLink to="/admin/commandes"><button class="btn btn-secondary">Retour</button></RouterLink>
        </div>
        <div class="d-flex flex-wrap mb-4">
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
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import { onBeforeMount } from 'vue';

    const route = useRoute();
    let isLoading = ref(true);
    
    let order = reactive({})
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
            {
                name: route.params.reference,
                route: ''
            },
        ]
    })

    onMounted(() => {
        getAdminOrder(route.params.reference)
        .then(response => {
            order = response;
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
                confirmButtonColor: "#F39E6A",
            }).then(() => {
                router.push({ path: '/admin' })
            })
        })
    })


</script>

<style scoped>

</style>