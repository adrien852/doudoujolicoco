<template>
    <NavPath :path="path"/>
    <loading :active="isLoading"></loading>
    <div id="itemContainer" v-if="dataLoaded" class="container">
        <Item :item="item"/>
    </div>
    <div class="container">
        <div v-if="dataLoaded" class="mt-lg-4">
            <h4>Vous aimerez aussi...</h4>
            <ShopCarousel @itemClicked="changeItem" :items="sampleShopItemStore.items" />
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
    import { onMounted, ref, reactive} from 'vue';
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

    onMounted(() => {
        getItem(route.params.id)
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
            sampleShopItemStore.fill()
            .catch(function(error) {

            })
        })
        .catch(function(error) {
            swal.fire({
                icon: 'error',
                title: 'Désolé',
                text: 'Le site fait face à un soucis technique. Veuillez nous excuser pour le désagrément.',
                confirmButtonText: "Retour à l'accueil",
                showCloseButton: true,
                showConfirmButton: true,
            }).then(() => {
                router.push({ path: '/' })
            })
        })
    });
    function changeItem(itemClicked){
        item = itemClicked;
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
    }
</script>

<style scoped>
h4{
    position: relative;
    margin-bottom: 15px;
}
h4::after {
  position: absolute;
  content: '';
  bottom: -7px;
  height: 4px;
  background-color: #94BCD8;
  left: 0;
  right: 40px;
}
</style>
