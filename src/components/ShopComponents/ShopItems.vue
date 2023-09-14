<template>
    <loading :active="isLoading"></loading>
    <div class="d-flex w-100 flex-column">
        <vue-paginate class="row mx-auto my-2" v-model="page" :page-count="pageCount" :active-class="active" :containerClass="'pagination'" />
        <div id="shopItems" class="row d-flex justify-content-center col-lg-10 col-12 mx-auto">
            <ShopItem v-for="item in paginatedItems" :item="item" />
        </div>
        <vue-paginate class="row mx-auto mt-4" v-model="page" :page-count="pageCount" :active-class="active" :containerClass="'pagination'" />
    </div>
</template>

<style>
#shopItems{
    height: fit-content;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination .active{
    font-weight: bold;
    background-color: #d2b08c32;
}

.pagination li:not(.active, .disabled){
    cursor: pointer;
}

.pagination li:not(.active, .disabled):hover{
    background-color: #d2b08c32;
    transition: background-color .5s;
}

.pagination .disabled a{
    color: lightgray;
}
</style>

<script setup>
    import ShopItem from './ShopItem.vue';
    import {getItems} from '../../services/ShopService.js'
    import { onMounted, ref, watch } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import { VuePaginate } from '@svifty7/vue-paginate';


    let items = null
    let paginatedItems = null
    let isLoading = ref(true)
    const itemsPerPage = 8
    let page = ref(1)
    let pageCount = ref(1)

    onMounted(async() => {
        getItems().then(response => {
            items = response;
            paginatedItems = filterItems(page.value);
            pageCount.value = Math.ceil(items.length / itemsPerPage);
            isLoading.value = false;
        })
        
    })

    watch(page, (x) => {
        paginatedItems = filterItems(page.value);
    })

    function filterItems(selectedPage){
        const startFrom = (selectedPage*itemsPerPage)-itemsPerPage;
        return items.slice(startFrom, startFrom+itemsPerPage);
    }
</script>