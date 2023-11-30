<template>
    <loading :is-full-page="false" :active="isLoading"></loading>
    <NavPath :path="path"/>
    <CategoryNavSlider />
    <BackToTop class="position-fixed" />
    <div class="container">
        <div ref="shopContainer" class="d-flex flex-column w-100 py-3">
            <ShopItems :paginatedItems="paginatedItems"/>
        </div>
    </div>
</template>

<style scoped>
.container{
    max-width: 1600px;
}
.btn{
    margin-bottom: 5px;
}
</style>

<script setup>
    import ShopItems from '@/components/ShopComponents/ShopItems.vue';
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import BackToTop from '@/components/ShopComponents/BackToTop.vue'
    import {getItems, getCategoryItems} from '@/services/ShopService.js'
    import { useSampleItemStore } from '@/stores/SampleShopItemStore';
    import { useRoute } from 'vue-router'
    import { onMounted, ref, nextTick, watch, reactive } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import { VuePaginate } from '@svifty7/vue-paginate';
    import { inject } from 'vue'
    const swal = inject('$swal')
    import router from '@/router'
    import CategoryNavSlider from '@/components/NavbarComponents/CategoryNavSlider.vue';
    
    let path = reactive([]);
    let isLoading = ref(true);
    let items = reactive({});
    let paginatedItems = reactive([]);
    const itemsPerPage = 8;
    let page = ref(1);
    let pageCount = ref(1);
    const route = useRoute();
    let category = ref(null);
    const shopContainer = ref(null)
    const sampleShopItemStore = useSampleItemStore()

    onMounted(async() => {
        if(!route.params.categoryNormalized){
            await getItems()
            .then(response => {
                items = response;
                paginatedItems = paginateItems(page.value);
                pageCount.value = Math.ceil(items.length / itemsPerPage);
            })
            .catch(function(error) {
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
            })
        }
        else{
            await getCategoryItems(route.params.categoryNormalized)
            .then(response => {
                items = response;
                page.value = 1;
                paginatedItems = paginateItems(page.value);
                pageCount.value = Math.ceil(items.length / itemsPerPage);
            }) 
            .catch(function(error) {
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
            })
        }
        
        if(!category.value){
            if(route.params.categoryNormalized){
                category = sampleShopItemStore.categories.find((category) => category.normalized === route.params.categoryNormalized);
            }            
            setCategory()
        }

        app.addEventListener('scroll', e => {
            if(app.scrollTop + app.clientHeight >= shopContainer.value?.scrollHeight) {
                page.value++;
                clickCallback(page)
            }
        });
        
        isLoading.value = false;
    })

    watch(sampleShopItemStore, () => {
        if(route.params.categoryNormalized){
            category = sampleShopItemStore.categories.find((category) => category.normalized === route.params.categoryNormalized);
        }
        setCategory();
    })

    function setCategory(){
        path = [
            {
                name: 'accueil',
                route: '/'
            },
            {
                name: 'boutique',
                route: '/boutique'
            },
        ]
        if(route.params.categoryNormalized){
            path.push(
                {
                    name: category.name,
                    route: '/boutique/'+route.params.categoryNormalized
                }
            )
        }
    }

    watch(route, async() =>{
        isLoading.value = true;
        if(route.params.categoryNormalized){
            category = sampleShopItemStore.categories.find((category) => category.normalized === route.params.categoryNormalized);
        }
        setCategory();
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
        isLoading.value = false;
    })

    function paginateItems(selectedPage){
        const startFrom = (selectedPage*itemsPerPage)-itemsPerPage;
        return items.slice(startFrom, startFrom+itemsPerPage);
    }

    function clickCallback(pageNum){
        isLoading.value = true;
        paginatedItems = items.concat(paginateItems(pageNum));
        isLoading.value = false;
    }
</script>