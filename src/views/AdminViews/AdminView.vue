<template>
    <NavPath :path="path"/>
    <div class="container mt-3">
        <div class="d-flex flex-wrap">
            <RouterLink class="mb-3 col-lg-4 col-12" :to="'/admin/commandes'"><button class="btn btn-primary w-100">Mes commandes</button></RouterLink>
            <RouterLink class="mb-3 col-lg-4 col-12" :to="'/admin/inventaire'"><button class="btn btn-primary w-100">Ma boutique</button></RouterLink>
            <RouterLink class="mb-3 col-lg-4 col-12" :to="'/admin/categories'"><button class="btn btn-primary w-100">Mes catégories</button></RouterLink>
            <RouterLink class="mb-3 col-lg-4 col-12" :to="'/admin/promos'"><button class="btn btn-primary w-100">Mes codes promo</button></RouterLink>
            <RouterLink class="mb-3 col-lg-4 col-12" :to="'/admin/accueil'"><button class="btn btn-primary w-100">Ma page d'accueil</button></RouterLink>
        </div>
    </div>
</template>

<script setup>
    import { useAdminStore } from '../../stores/AdminStore';
    import { inject } from 'vue'
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import { onBeforeMount } from 'vue';
    const swal = inject('$swal')
    import router from '@/router'

    const adminStore = useAdminStore();

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
        ]
    })
</script>

<style scoped>
button{
    font-size: 18pt;
}
</style>