<template>
    <loading :active="isLoading"></loading>
    <div ref="shopContainer" class="d-flex flex-column">
        <vue-paginate class="row mx-auto my-2"
            v-model="page" :page-count="pageCount" :active-class="'active'" :containerClass="'pagination'" :prev-text="'<'" :next-text="'>'" :click-handler="clickCallback">
        </vue-paginate>
        <div id="shopItems" class="row d-flex justify-content-center col-lg-10 col-12 mx-auto">
            <ShopItem class="col-lg-3 col-sm-6 col-12 my-2" v-for="item in paginatedItems" :item="item" />
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
    import {getItems, getCategoryItems} from '@/services/ShopService.js'
    import { onMounted, ref, watch, nextTick} from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import { VuePaginate } from '@svifty7/vue-paginate';

    const props = defineProps({
        categoryId: Number,
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
        console.log('watch props')
        isLoading.value = true;
        if(props.categoryId == null){
            getItems().then(response => {
                items = response;
                page.value = 1;
                paginatedItems = paginateItems(page.value);
                pageCount.value = Math.ceil(items.length / itemsPerPage);
                isLoading.value = false;
            })
        }
        else{
            getCategoryItems(props.categoryId).then(response => {
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