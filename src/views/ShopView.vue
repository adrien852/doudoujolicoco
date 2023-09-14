<template>
<div class="">
    <div class="container py-5">
        <loading :active="isLoading"></loading>
        <!-- <button class="btn btn-primary d-lg-none d-block" data-toggle="modal" data-target="#filterModal">Filtres</button>  -->
        <div class="d-flex">
            <ShopFilters />
            <ShopItems />
        </div>
        
    </div>
</div>

</template>

<style scoped>
.container{
    max-width: 1600px;
}
.btn{
    margin-bottom: 5px;
}
</style>

<script setup>
    import ShopItems from '../components/ShopComponents/ShopItems.vue';
    import ShopFilters from '../components/ShopComponents/ShopFilters.vue';
    import { onMounted, ref } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    
    let isLoading = ref(true)
    let filtersLoading = ref(true)
    let itemsLoading = ref(true)

    onMounted(() => {
        isLoading.value = false;
    })
</script>