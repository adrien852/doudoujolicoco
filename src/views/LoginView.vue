<template>
    <NavPath :path="path"/>
    <div class="container position-relative mt-3">
        <LoginForm />
    </div>
</template>

<script setup>
    import LoginForm from '@/components/LoginComponents/LoginForm.vue'
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import { onBeforeMount } from 'vue';

    let path = null;

    onBeforeMount(() => {
        path = [
            {
                name: 'accueil',
                route: '/'
            },
            {
                name: 'Connexion',
                route: '/se-connecter'
            },
        ]
    })
</script>

<style scoped>
</style>