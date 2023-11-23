<template>
    <div v-if="item">
        <NavPath :path="path"/>
        <loading :active="isLoading"></loading>
        <div id="itemContainer" v-if="dataLoaded" class="container">
            <Item :item="item"/>
        </div>
        <div class="container">
            <div v-if="dataLoaded" class="mt-4">
                <h1>Vous aimerez aussi...</h1>
                <ShopCarousel :items="sampleShopItemStore.items" />
            </div>
        </div> 
    </div>

    
</template>

<script setup>
    import Item from '@/components/ItemComponents/Item.vue';
    import ShopCarousel from '@/components/ShopComponents/ShopCarousel.vue';
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import {getItem} from '@/services/ShopService.js';
    import { useRoute } from 'vue-router';
    import { useSampleItemStore } from '@/stores/SampleShopItemStore';
    import { onMounted, ref, reactive, watch, onBeforeMount} from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import router from '@/router'
    import { inject } from 'vue'
    const swal = inject('$swal')

    const route = useRoute();
    const itemContainer = ref(null)

    const sampleShopItemStore = useSampleItemStore();
    let isLoading = ref(true);
    let dataLoaded = ref(false);
    let item = reactive({});
    let path = null;



    function getRouteItem(itemId){
        dataLoaded.value = false;
        isLoading.value = true;
        getItem(itemId)
        .then(response => {
            item = response;
            dataLoaded.value = true;
            isLoading.value = false;
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
                    name: item.category.name,
                    route: '/boutique/'+item.category.normalized
                },
                {
                    name: item.name,
                    route: ''
                }
            ]
            
        })
        .catch(function(error) {
            router.push({ path: '/404' })
        })
    }

    onBeforeMount(() => {
        sampleShopItemStore.fill()
        .catch(function(error) {

        })
    })

    onMounted(() => {
        getRouteItem(route.params.id)

        watch(route, async() =>{
            getRouteItem(route.params.id)
        })
    });
</script>

<style scoped>
h1{
    font-size: 25pt;
}
.container{
    max-width: 1600px;
}
</style>
