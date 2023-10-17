<template>
    <loading :active="isLoading"></loading>
    <div class="container">
        <h1 class="mb-lg-1 text-left mb-2">Catégories</h1>
        <div id="shopItems" class="flex-wrap d-flex justify-content-left mx-auto w-100">
            <ShopCategory class="col-lg-4 col-sm-6 col-12 p-3" :category="category" v-for="category in categories" />
        </div>
    </div>
</template>
<script setup>
    import ShopCategory from '@/components/ShopComponents/ShopCategory.vue';
    import {getCategories} from '@/services/ShopService.js'
    import { onMounted, ref, onBeforeMount } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

    let categories = ref(null);
    let isLoading = ref(true);

    onMounted(() => {
        getCategories().then(response => {
            categories = response;
            isLoading.value = false;
        })
    });

</script>