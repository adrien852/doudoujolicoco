<template>
    <loading :active="isLoading"></loading>
    <div ref="shopContainer" class="d-flex flex-column w-100">
        <vue-paginate class="row mx-auto my-2"
            v-model="page" :page-count="pageCount" :active-class="'active'" :containerClass="'pagination'" :prev-text="'<'" :next-text="'>'" :click-handler="clickCallback">
        </vue-paginate>
        <div id="shopItems" class="flex-wrap d-flex justify-content-left mx-auto">
            <ShopItem class="col-lg-3 col-sm-6 col-12 p-3" v-for="item in paginatedItems" :item="item" :longDisplay="false"/>
        </div>
        <vue-paginate class="row mx-auto my-2"
            v-model="page" :page-count="pageCount" :active-class="'active'" :containerClass="'pagination'" :prev-text="'<'" :next-text="'>'" :click-handler="clickCallback">
        </vue-paginate>    </div>
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
    background-color: #a18f7b1a;
}

.pagination li:not(.active, .disabled){
    cursor: pointer;
}

.pagination li:not(.active, .disabled):hover{
    background-color: #a18f7b1a;
    transition: background-color .5s;
}

.pagination .disabled a{
    color: lightgray;
}
</style>

<script setup>
    import ShopItem from './ShopItem.vue';
    import {getItems, getCategoryItems} from '@/services/ShopService.js'
    import { onMounted, ref, watch, nextTick} from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import { VuePaginate } from '@svifty7/vue-paginate';

    const props = defineProps({
        categoryNormalized: String,
    })

    let items = null
    let paginatedItems = null
    let isLoading = ref(true)
    const itemsPerPage = 8
    let page = ref(1)
    let pageCount = ref(1)
    const shopContainer = ref(null)

    onMounted(async() => {
        getItems().then(response => {
            items = response;
            paginatedItems = paginateItems(page.value);
            pageCount.value = Math.ceil(items.length / itemsPerPage);
            isLoading.value = false;
        })
    })

    watch(props, () =>{
        isLoading.value = true;
        if(props.categoryNormalized == null){
            getItems().then(response => {
                items = response;
                page.value = 1;
                paginatedItems = paginateItems(page.value);
                pageCount.value = Math.ceil(items.length / itemsPerPage);
                isLoading.value = false;
            })
        }
        else{
            getCategoryItems(props.categoryNormalized).then(response => {
                items = response;
                page.value = 1;
                paginatedItems = paginateItems(page.value);
                pageCount.value = Math.ceil(items.length / itemsPerPage);
                isLoading.value = false;
            }) 
        }
        nextTick(() => {
            shopContainer.value?.scrollIntoView({behavior: "smooth"});
        });
    })

    function paginateItems(selectedPage){
        const startFrom = (selectedPage*itemsPerPage)-itemsPerPage;
        return items.slice(startFrom, startFrom+itemsPerPage);
    }

    function clickCallback(pageNum){
        nextTick(() => {
            shopContainer.value?.scrollIntoView({behavior: "smooth"});
        });
        isLoading.value = true;
        paginatedItems = paginateItems(pageNum);
        isLoading.value = false;
    }
</script>