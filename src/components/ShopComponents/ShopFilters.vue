<template>
    <div :class="['filterContainer']">
        <!-- <h4>Filtres</h4> -->
        <loading :active="isLoading"></loading>
        <div class="filterList" v-for="(filter, index) in filters">
            <ShopFilter :filter="filter" :index="index" :activeCategory="activeCategoryIndex" @filterByCategory="activeCategoryIndex = index" />
        </div>
                
    </div>
</template>

<script setup>
    import ShopFilter from './ShopFilter.vue'
    import {getCategories,} from '../../services/ShopService.js'
    import { onMounted, ref, watch, computed } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

    defineProps({
        showFilterModal: Boolean,
    })

    let filters = null
    let isLoading = ref(true)
    let activeCategoryIndex = ref(0)

    watch(activeCategoryIndex, (x) =>{
        console.log(activeCategoryIndex.value);
    })

    onMounted(async() => {
        getCategories().then(response => {
            filters = response;
            isLoading.value = false;
        })
        
    })
</script>

<style scoped>
.filterContainer{
    min-width: 150px;
    width:auto;
    position: -webkit-sticky;
    position: sticky;
    top: 2rem;
    display: block ;
    height: calc(100vh - 7rem);
    padding-left: .25rem;
    margin-left: -.25rem;
    overflow-y: auto;
    border-right: solid #a3867264 1px;
    overflow: hidden;
    -webkit-transition: width 0.3s ease-out;
    -moz-transition: width 0.3s ease-out;
    -o-transition: width 0.3s ease-out;
    transition: width 0.3s ease-out;
}

@media (max-width:991px) {
    .filterContainer{
        display: none!important;;
    }
}

.showFilterModal{
    width: 0;
    -webkit-transition: width 0.2s ease-out;
    -moz-transition: width 0.2s ease-out;
    -o-transition: width 0.2s ease-out;
    transition: width 0.2s ease-out;
}
.btn{
    width: fit-content;
    font-size: clamp(10pt, 2vw, 13pt);
    text-align: center;
    padding: 1px 3px;
    margin: 0 2px 5px 0px;
}
</style>