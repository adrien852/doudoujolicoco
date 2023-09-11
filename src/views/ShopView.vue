<template>
<div class="">
    <div class="container py-5 d-flex">
        <loading :active="isLoading"></loading>
        <ShopFilters />
        <ShopItems />
    </div>
</div>

</template>

<style scoped>
.container{
    max-width: 1600px;
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