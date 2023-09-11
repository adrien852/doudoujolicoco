<template>
    <div class="filterContainer">
        <h4>Filtres</h4>
        <loading :active="isLoading"></loading>
        <div class="filterList">
            <ShopFilter v-for="(filter, index) in filters" :filter="filter" :index="index" @closeAllFiltersBut="closeAllFiltersBut(filter)" @radio="filterShop" @checkbox="filterShopAndCollapse"/>
        </div>
                
    </div>
</template>

<script setup>
    import ShopFilter from './ShopFilter.vue'
    import {getCategories,} from '../../services/ShopService.js'
    import { onMounted, ref } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

    let filters = null
    let isLoading = ref(true)

    onMounted(async() => {
        getCategories().then(response => {
            filters = response;
            isLoading.value = false;
        })
        
    })


    function filterShop(category){
        // alert('Radio: '+category)
    }

    function filterShopAndCollapse(category, id){
        // alert('Checkbox: '+category)
    }
    function closeAllFiltersBut(){
        
    }
</script>

<style scoped>
.filterContainer{
    position: -webkit-sticky;
    position: sticky;
    top: 2rem;
    display: block !important;
    height: calc(100vh - 7rem);
    padding-left: .25rem;
    margin-left: -.25rem;
    overflow-y: auto;
    border-right: solid #a3867264 1px;
}

.filterList{
    min-width: 150px;
    width:auto;
}
</style>