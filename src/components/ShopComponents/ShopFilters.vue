<template>
    <div :class="['filterContainer']">
        <!-- <h4>Filtres</h4> -->
        <loading :active="isLoading"></loading>
        <a href="#" v-if="activeCategoryNormalized" @click="activeCategoryNormalized = null" class="btn btn-primary mb-3"><span style="text-shadow:black 0px 0px 1px;">&#10060;</span> Effacer filtrage</a>
        <div class="filterList" v-for="filter in filters">
            <ShopFilter :filter="filter" :normalized="filter.normalized" :activeCategory="activeCategoryNormalized" @categoryClick="(isAlreadyActive) => activeCategoryNormalized = (isAlreadyActive) ? null : filter.normalized"/>
        </div>
                
    </div>
</template>

<script setup>
    import ShopFilter from '@/components/ShopComponents/ShopFilter.vue';
    import {getCategories,} from '@/services/ShopService.js';
    import { onMounted } from 'vue';
    import { onBeforeMount, ref, watch, computed } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

    const props = defineProps({
        categoryNormalized: String
    })

    let filters = []
    let isLoading = ref(true)
    const emit = defineEmits(['filterByCategory'])
    let activeCategoryNormalized = ref(null);

    watch(props, (x) =>{
        activeCategoryNormalized.value = props.categoryNormalized;
        emit('filterByCategory', activeCategoryNormalized.value);
    })

    watch(activeCategoryNormalized, (x) =>{
        emit('filterByCategory', activeCategoryNormalized.value);
    })

    onBeforeMount(async() => {
        getCategories().then(response => {
            filters = response;
            isLoading.value = false;
        })
    })

    onMounted(() => {
        activeCategoryNormalized.value = props.categoryNormalized;
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

.btn{
    width: fit-content;
    font-size: 10pt;
    text-align: center;
    padding: 1px 3px;
    margin: 0 2px 5px 0px;
}
</style>