<template>
    <loading :active="isLoading"></loading>
    <div id="shopItems" class="row d-flex justify-content-left offset-lg-1 col-lg-8 col-12">
        <ShopItem v-for="item in items" :item="item" />
    </div>
</template>

<style scoped>
#shopItems{
    height: fit-content;
}
</style>

<script setup>
    import ShopItem from './ShopItem.vue';
    import {getItems} from '../../services/ShopService.js'
    import { onMounted, ref } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

    let items = null
    let isLoading = ref(true)

    onMounted(async() => {
        getItems().then(response => {
            items = response;
            isLoading.value = false;
        })
        
    })
</script>