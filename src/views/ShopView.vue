<template>
<div class="">
    <div class="container py-3">
        <loading :active="isLoading"></loading>
        <div class="d-flex">
            <ShopFilters @filterByCategory="filterItemsByCategory" />
            <ShopItems :categoryId="categoryId"/>
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
    import ShopItems from '@/components/ShopComponents/ShopItems.vue';
    import ShopFilters from '@/components/ShopComponents/ShopFilters.vue';
    import { onMounted, ref } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    
    let isLoading = ref(true)
    let filtersLoading = ref(true)
    let itemsLoading = ref(true)
    let categoryId = null

    onMounted(() => {
        isLoading.value = false;
    })

    function filterItemsByCategory(id){
        categoryId = id;
    }
</script>