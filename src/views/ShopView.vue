<template>
<div class="">
    <div class="container">
        <loading :active="isLoading"></loading>
        <h1 class="mb-lg-1 text-left">Boutique</h1>
        <div class="d-flex">
            <!-- <ShopFilters :categoryNormalized="categoryNormalized" @filterByCategory="filterItemsByCategory" /> -->
            <ShopItems :categoryNormalized="categoryNormalized"/>
        </div>
    </div>
</div>

</template>

<style scoped>
.container{
    /* max-width: 1600px; */
}
.btn{
    margin-bottom: 5px;
}
</style>

<script setup>
    import ShopItems from '@/components/ShopComponents/ShopItems.vue';
    import ShopFilters from '@/components/ShopComponents/ShopFilters.vue';
    import { useRoute } from 'vue-router'
    import { onMounted, ref, onBeforeMount, watch } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    
    let isLoading = ref(true);
    let filtersLoading = ref(true);
    let itemsLoading = ref(true);
    let categoryNormalized = ref(null);
    const route = useRoute();

    onBeforeMount(() => {
        categoryNormalized.value = route.params.categoryNormalized;
    })

    onMounted(() => {
        isLoading.value = false;
    })

    function filterItemsByCategory(normalized){
        categoryNormalized.value = normalized;
    }

    watch(route, () =>{
        categoryNormalized.value = route.params.categoryNormalized;
    })
</script>