<template>
    <NavPath :path="path"/>
    <div class="container position-relative mt-2">
        <loading :is-full-page="false" :active="isLoading"></loading>
        <div class="mb-3">
            <RouterLink to="/admin"><button class="btn btn-secondary">Retour</button></RouterLink>
            <RouterLink class="position-relative ml-2" to="/admin/inventaire/nouveau"><button id="deleteButton" class="btn btn-primary">Nouveau</button></RouterLink>
        </div>
        <div ref="inventoryContainer" class="d-flex flex-column w-100">
            <vue-paginate v-if="pageCount > 1" class="row mx-auto"
                v-model="page" :page-count="pageCount" :active-class="'active'" :containerClass="'pagination'" :prev-text="'<'" :next-text="'>'" :click-handler="clickCallback">
            </vue-paginate> 
            <InventoryTable @itemIdDeleted="removeItem" :items="paginatedItems" :tableHeaders="tableHeaders"/>
            <vue-paginate v-if="pageCount > 1" class="row mx-auto"
                v-model="page" :page-count="pageCount" :active-class="'active'" :containerClass="'pagination'" :prev-text="'<'" :next-text="'>'" :click-handler="clickCallback">
            </vue-paginate>
        </div> 
    </div>
</template>

<script setup>
    import InventoryTable from '@/components/AdminComponents/InventoryComponents/InventoryTable.vue'
    import { onMounted, reactive } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import {getItems} from '@/services/InventoryService.js'
    import { VuePaginate } from '@svifty7/vue-paginate';
    import { inject, ref, nextTick } from 'vue'
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import { onBeforeMount } from 'vue';
    import router from '@/router'
    const swal = inject('$swal')

    let items = reactive({})
    let paginatedItems = reactive([]);
    let mappedItems = reactive([]);
    let tableHeaders = reactive({})
    const itemsPerPage = 8;
    let page = ref(1);
    let pageCount = ref(1);
    let isLoading = ref(true);
    let inventoryContainer = ref(null)

    let path = null;

    onBeforeMount(() => {
        path = [
            {
                name: 'accueil',
                route: '/'
            },
            {
                name: 'Admin',
                route: '/admin'
            },
            {
                name: 'Inventaire',
                route: '/admin/inventaire'
            },
        ]
    })

    onMounted(async() => {
        await getItems()
        .then(response => {
            items = response;
            mappedItems = mapItems(items);
            paginatedItems = paginateItems(page.value);
            tableHeaders = {
                id: "ID",
                name: "Nom",
                normalized: "Nom normalisé",
                categoryName:"Catégorie",
                price: "Prix",
                stock: "Stock",
                createdAt: "Date de création",
                modifiedAt: "Dernière modification",
            }
            pageCount.value = Math.ceil(items.length / itemsPerPage);
            isLoading.value = false;
        })
        .catch(function(error) {
            swal.fire({
                icon: 'error',
                title: 'Désolé',
                text: 'Le site fait face à un soucis technique. Veuillez nous excuser pour le désagrément.',
                confirmButtonText: "Retour à l'accueil",
                showCloseButton: true,
                showConfirmButton: true,
                confirmButtonColor: "#F39E6A",
            }).then(() => {
                router.push({ path: '/admin' })
            })
        })
       
    })

    
    function paginateItems(selectedPage){
        const startFrom = (selectedPage*itemsPerPage)-itemsPerPage;
        return mappedItems.slice(startFrom, startFrom+itemsPerPage);
    }

    function mapItems(items){
        return items.map((item) => {
            return {
                id: item.id,
                name: item.name,
                normalized: item.normalized,
                categoryName: item.category.name,
                price: item.price+"€",
                stock: item.stock,
                createdAt: new Date(item.createdAt).toLocaleDateString("fr-FR"),
                modifiedAt: new Date(item.modifiedAt).toLocaleDateString("fr-FR"),
            }
        })
    }

    function removeItem(deletedItem){
        isLoading.value = true;
        items = items.filter((item) => (item.id !== deletedItem.id));
        mappedItems = mapItems(items);
        paginatedItems = paginateItems(page.value);
        isLoading.value = false;
    }
    
    function clickCallback(pageNum){
        nextTick(() => {
            inventoryContainer.value?.scrollIntoView();
        });
        isLoading.value = true;
        paginatedItems = paginateItems(pageNum);
        isLoading.value = false;
    }

</script>

<style scoped>
    #deleteButton::before{
        content: "+";
        position: relative;
        bottom: 1px;
        left: -3px;
        font-weight: bold;
    }
</style>