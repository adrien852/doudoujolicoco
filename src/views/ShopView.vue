<template>
    <NavPath :path="path"/>
    <div class="container">
        <loading :active="isLoading"></loading>
        <div ref="shopContainer" class="d-flex flex-column w-100">
            <vue-paginate v-if="pageCount > 0" class="row mx-auto mt-sm-4 my-2"
                v-model="page" :page-count="pageCount" :active-class="'active'" :containerClass="'pagination'" :prev-text="'<'" :next-text="'>'" :click-handler="clickCallback">
            </vue-paginate>
            <!-- <ShopFilters :categoryNormalized="categoryNormalized" @filterByCategory="filterItemsByCategory" /> -->
            <ShopItems :paginatedItems="paginatedItems"/>
            <vue-paginate v-if="pageCount > 1" class="row mx-auto my-2"
                v-model="page" :page-count="pageCount" :active-class="'active'" :containerClass="'pagination'" :prev-text="'<'" :next-text="'>'" :click-handler="clickCallback">
            </vue-paginate> 
        </div>
    </div>
</template>

<style scoped>
.container{
    /* max-width: 1600px; */
}
.btn{
    margin-bottom: 5px;
}
</style>

<script setup>
    import ShopItems from '@/components/ShopComponents/ShopItems.vue';
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import {getItems, getCategoryItems, getCategory} from '@/services/ShopService.js'
    import { useRoute } from 'vue-router'
    import { onMounted, ref, nextTick, watch, reactive } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import { VuePaginate } from '@svifty7/vue-paginate';
    
    let path = null;
    let isLoading = ref(true);
    let items = reactive({});
    let paginatedItems = reactive([]);
    const itemsPerPage = 8;
    let page = ref(1);
    let pageCount = ref(1);
    const route = useRoute();
    let category = reactive({});
    const shopContainer = ref(null)

    onMounted(async() => {
        await getCategory(route.params.categoryNormalized).then(async(response) => {
            category = response;
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
                    name: category.name,
                    route: '/boutique/'+route.params.categoryNormalized
                },
            ]
            if(!route.params.categoryNormalized){
                await getItems().then(response => {
                    items = response;
                    paginatedItems = paginateItems(page.value);
                    pageCount.value = Math.ceil(items.length / itemsPerPage);
                })
            }
            else{
                await getCategoryItems(route.params.categoryNormalized).then(response => {
                    items = response;
                    page.value = 1;
                    paginatedItems = paginateItems(page.value);
                    pageCount.value = Math.ceil(items.length / itemsPerPage);
                }) 
            }
        });
        
        
        isLoading.value = false;
    })

    watch(route, async() =>{
        isLoading.value = true;
        await getCategory(route.params.categoryNormalized).then(async(response) => {
            category = response;
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
                    name: category.name,
                    route: '/boutique/'+route.params.categoryNormalized
                },
            ]
            if(!route.params.categoryNormalized) {
                await getItems().then(response => {
                    items = response;
                    paginatedItems = paginateItems(page.value);
                    pageCount.value = Math.ceil(items.length / itemsPerPage);
                })
            }
            else{
                await getCategoryItems(route.params.categoryNormalized).then(response => {
                    items = response;
                    page.value = 1;
                    paginatedItems = paginateItems(page.value);
                    pageCount.value = Math.ceil(items.length / itemsPerPage);
                }) 
            }
        });
        isLoading.value = false;
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