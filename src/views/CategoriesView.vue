<template>
    <loading :active="isLoading"></loading>
    <NavPath :path="path"/>
    <div class="container">
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
    import NavPath from '@/components/NavbarComponents/NavPath.vue';

    let categories = ref(null);
    let isLoading = ref(true);
    let path = null;

    onMounted(() => {
        getCategories().then(response => {
            categories = response;
            isLoading.value = false;
            path = [
                {
                    name: 'accueil',
                    route: '/'
                },
                {
                    name: 'boutique',
                    route: '/boutique'
                },
                {
                    name: 'catégories',
                    route: ''
                }
            ]
        })
    });

</script>