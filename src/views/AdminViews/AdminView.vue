<template>
    <NavPath :path="path"/>
    <div v-if="adminStore.isAdmin" class="container mt-3">
        <div class="d-flex flex-wrap">
            <RouterLink class="mb-3 col-md-6 col-12" :to="'/admin/commandes'"><button class="btn btn-primary w-100">Mes commandes</button></RouterLink>
            <RouterLink class="mb-3 col-md-6 col-12" :to="'/admin/inventaire'"><button class="btn btn-primary w-100">Mon inventaire</button></RouterLink>
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

    if(!adminStore.isAdmin){
        swal.fire({
            icon: 'error',
            title: 'Oops !',
            text: 'Vous n\'êtes pas connecté comme admin.',
            confirmButtonText: "Se connecter",
            showCloseButton: false,
            showConfirmButton: true,
            confirmButtonColor: "#94BCD8",
        }).then(() => {
            router.push({ path: '/se-connecter' })
        })
    }
</script>

<style scoped>
button{
    font-size: 18pt;
}
</style>