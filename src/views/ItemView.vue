<template>
    <div v-if="item" class="position-relative item-containter">
        <loading :is-full-page="false" :active="isLoading"></loading>
        <NavPath :path="path"/>
        <div id="itemContainer" v-if="dataLoaded" class="">
            <Item :item="item"/>
        </div>
    </div>
    <div class="position-relative carousel-containter my-5">
        <loading :is-full-page="false" :active="isCarouselLoading"></loading>
        <div class="container">
            <div class="mt-4">
                <h1>Vous aimerez aussi...</h1>
            </div>
        </div>
        <ShopCarousel v-if="!isCarouselLoading" :items="sampleShopItemStore.items" />
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
    let isCarouselLoading = ref(true);
    let item = reactive({});
    let path = null;

    function getRouteItem(itemId){
        dataLoaded.value = false;
        isLoading.value = true;
        getItem(itemId)
        .then(response => {
            item = response;
            injectProductJsonLD(item);
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

    function injectProductJsonLD(item) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": item.name,
            "image": item.images,
            "description": item.description ?? '',
            "sku": item.id,
            "brand": {
                "@type": "Brand",
                "name": "Doudou Joli",
                "logo": "https://doudoujoli.fr/assets/logo-80f4d317.png"
            },
            "offers": {
                "@type": "Offer",
                "url": `https://doudoujoli.fr/article/${item.normalized}`, // adjust if needed
                "priceCurrency": "EUR",
                "price": item.price,
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition"
            },
            "keywords": "fait main, crochet, artisanal, cadeau unique, décoration chambre bébé, vêtements faits main, objet déco"
        });

        const existing = document.querySelector('script[type="application/ld+json"]');
        if (existing) existing.remove();
        document.head.appendChild(script);
    }

    onBeforeMount(() => {
        sampleShopItemStore.fillItems().then(() => {
            isCarouselLoading.value = false;
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
.item-containter{
    min-height: 600px;
}
.carousel-containter{
    min-height: 300px;
}
h1{
    font-size: 25pt;
}
.container{
    max-width: 1600px;
}
</style>
