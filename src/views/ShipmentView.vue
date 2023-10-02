<template>
    <loading :active="isLoading"></loading>
    <div class="container mt-4">
        <div class="mx-1 d-flex flex-md-wrap flex-wrap-reverse row justify-content-around">
            <ShipmentForm class="col-md-8 col-12 ml-auto mb-md-0 mt-3 mt-md-0" @sendShipmentAddress="postShipmenttAddress"/>
            <CartDetails class="col-md-4 col-12 h-fit" :checkoutButton="false" />
        </div>
    </div>
    
</template>
<script setup>
    import ShipmentForm from '@/components/ShipmentComponents/ShipmentForm.vue';
    import CartDetails from '@/components/CartComponents/CartDetails.vue';
    import router from '@/router'
    import {saveCustomer} from '@/services/CustomerService.js'
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import {onMounted, ref, toRaw } from 'vue'
    import {useCartStore} from '@/stores/CartStore.js'
    
    const cartStore = useCartStore();
    let isLoading = ref(false);

    // onMounted(async() => {
    //     isLoading.value=false;
    // });

    function postShipmenttAddress(event){
        isLoading.value = true;
        const customerData = {...event, ...{products:toRaw(cartStore.items)}}
        saveCustomer(customerData).then((response) => {
            router.push({ name: 'payment' })
        }).catch((error) => {
            console.log(error.message)
        })
    }
    
</script>

<style scoped>
    .h-fit{
        height: fit-content;
    }
</style>