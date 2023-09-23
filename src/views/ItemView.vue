<template>
    <loading :active="isLoading"></loading>
    <div v-if="dataLoaded" class="container">
        <Item :item="item"/>
        <ShopCarousel class="mt-5" :items="sampleShopItemStore.items" />
    </div>
    
</template>

<script setup>
    import Item from '@/components/ItemComponents/Item.vue'
    import ShopCarousel from '@/components/ShopComponents/ShopCarousel.vue';
    import {getItem} from '@/services/ShopService.js'
    import { useRoute } from 'vue-router'
    import { useSampleItemStore } from '@/stores/SampleShopItemStore';
    import { onBeforeMount, onMounted, ref} from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

    const route = useRoute();

    const sampleShopItemStore = useSampleItemStore();
    let isLoading = ref(true);
    let dataLoaded = ref(false);
    let item = null;

    onBeforeMount(async() => {
        sampleShopItemStore.fill().then(() => {
            getItem(route.params.id).then(response => {
                item = response;
                dataLoaded.value = true;
                isLoading.value = false;
            });
        });

    })
</script>
