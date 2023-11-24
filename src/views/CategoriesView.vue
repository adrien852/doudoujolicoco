<template>
    <loading :active="isLoading"></loading>
    <NavPath :path="path"/>
    <div class="container">
        <div id="shopItems" class="flex-wrap d-flex justify-content-left mx-auto w-100">
            <ShopCategory class="col-lg-4 col-sm-6 col-12 p-3" :category="category" v-for="category in categories" />
        </div>
    </div>
</template>
<script setup>
    import ShopCategory from '@/components/ShopComponents/ShopCategory.vue';
    import {useSampleItemStore} from '@/stores/SampleShopItemStore.js'
    import { onMounted, reactive, ref, watch } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import { inject } from 'vue'
    const swal = inject('$swal')
    import router from '@/router'

    let categories = ref(null);
    let isLoading = ref(true);
    let path = null;
    const sampleShopItemStore = useSampleItemStore();

    watch(sampleShopItemStore, () => {
        categories = sampleShopItemStore.categories;
        setCategories();
    })

    function setCategories(){
        if(categories.length > 0){
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
                    name: 'catégories',
                    route: ''
                }
            ]
        }
        else{
            swal.fire({
                icon: 'error',
                title: 'Désolé',
                text: 'Le site fait face à un soucis technique. Veuillez nous excuser pour le désagrément.',
                confirmButtonText: "Retour à l'accueil",
                showCloseButton: true,
                showConfirmButton: true,
                confirmButtonColor: "#94BCD8",
            }).then(() => {
                router.push({ path: '/' })
            })
        }
    }

    onMounted(() => {
        if(!categories.value){
            categories = sampleShopItemStore.categories;
            setCategories();
        }
    })

</script>