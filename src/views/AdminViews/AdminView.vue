<template>
    <div v-if="adminStore.isAdmin" class="container">
        <h1>Tableau de bord</h1>
        <div class="d-flex flex-wrap">
            <RouterLink class="mr-3 mb-3" :to="'/admin/commandes'"><button class="btn btn-primary">Mes commandes</button></RouterLink>
            <RouterLink class="mr-3 mb-3" :to="'/admin/inventaire'"><button class="btn btn-primary">Mon inventaire</button></RouterLink>
        </div>
    </div>
</template>

<script setup>
    import { useAdminStore } from '../../stores/AdminStore';
    import { inject } from 'vue'
    const swal = inject('$swal')
    import router from '@/router'

    const adminStore = useAdminStore();

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
</style>