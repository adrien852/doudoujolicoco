<template>
    <NavPath :path="path"/>
    <div class="container mt-3 position-relative">
        <loading :is-full-page="false" :active="isLoading"></loading>
        <div class="mb-3">
            <RouterLink to="/admin"><button class="btn btn-secondary">Retour</button></RouterLink>
            <RouterLink class="position-relative ml-2" to="/admin/promos/nouveau"><button id="deleteButton" class="btn btn-primary">Nouveau</button></RouterLink>
        </div>
        <div v-if="!isLoading">
            <PromoTable v-if="items.length > 0" @itemIdDeleted="removeItem" :items="items" :tableHeaders="tableHeaders"/>
            <div class="text-center" v-else>
                Aucun code promo
            </div>
        </div>
    </div>
</template>

<script setup>
    import PromoTable from '@/components/AdminComponents/PromoComponents/PromoTable.vue'
    import { onMounted } from 'vue';
    import { getAdminPromos } from '@/services/PromoService';
    import { ref, reactive, inject } from 'vue';
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import { onBeforeMount } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import router from '@/router'
    const swal = inject('$swal')


    let isLoading = ref(true)
    let items = reactive({})
    let tableHeaders = reactive({})
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
                name: 'Promos',
                route: '/admin/promos'
            },
        ]
    })

    onMounted(async() => {
        getAdminPromos().then((response) => {
            items = response.map((item) => {
                return {
                    id: item.id,
                    code: item.code,
                    valeur: (item.type === "Pourcentage") ? parseInt(item.amount) + "%" : item.amount + '€',
                    minimumOrderTotal: item.minimumOrderTotal + "€"
                }
            })
            tableHeaders = [
                "ID",
                "Code",
                "Valeur",
                "Valeur minimum de commande"
            ]
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
                router.push({ path: '/admin/promos' })
            })
        })
        
    })

    function removeItem(deletedItem){
        isLoading.value = true;
        items = items.filter((item) => (item.id !== deletedItem.id));
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