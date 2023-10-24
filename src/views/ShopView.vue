<template>
    <NavPath :path="path"/>
    <div class="container">
        <loading :active="isLoading"></loading>
        <div class="d-flex">
            <!-- <ShopFilters :categoryNormalized="categoryNormalized" @filterByCategory="filterItemsByCategory" /> -->
            <ShopItems :categoryNormalized="categoryNormalized"/>
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
    import ShopFilters from '@/components/ShopComponents/ShopFilters.vue';
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import { useRoute } from 'vue-router'
    import { onMounted, ref, onBeforeMount, watch } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    
    let path = null;
    let isLoading = ref(true);
    let filtersLoading = ref(true);
    let itemsLoading = ref(true);
    let categoryNormalized = ref(null);
    let categories = null;
    const route = useRoute();

    onBeforeMount(() => {
        categoryNormalized.value = route.params.categoryNormalized;
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
                name: categoryNormalized.value,
                route: '/boutique/'+categoryNormalized
            },
        ]
    })

    onMounted(() => {
        isLoading.value = false;
    })

    // function filterItemsByCategory(normalized){
    //     categoryNormalized.value = normalized;
    // }

    watch(route, () =>{
        categoryNormalized.value = route.params.categoryNormalized;
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
                name: categoryNormalized.value,
                route: '/boutique/'+categoryNormalized
            },
        ]
    })
</script>