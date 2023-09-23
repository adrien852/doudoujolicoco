<template>
    <loading :active="isLoading"></loading>
    <div v-if="dataLoaded" class="container">
        <Item v-if="!isLoading" :item="item"/>
        <ShopCarousel class="mt-5" :items="items" />
    </div>
    
</template>

<script setup>
    import Item from '@/components/ItemComponents/Item.vue'
    import ShopCarousel from '@/components/HomeComponents/ShopCarousel.vue';
    import {getItem, getItems} from '@/services/ShopService.js'
    import { useRoute } from 'vue-router'
    import { onMounted, ref} from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

    const route = useRoute();

    let item = null;
    let isLoading = ref(true);
    let dataLoaded = ref(false);
    let items = [];

    onMounted(async() => {
        getItem(route.params.id).then(response => {
            item = response;
            getItems().then(response => {
                items = response;
                dataLoaded.value = true;
                isLoading.value = false;
            })
        });

        
    })
</script>
