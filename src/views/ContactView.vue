<template>
    <NavPath :path="path"/>
    <div class="container mt-3">
        <ContactForm />
    </div>
</template>

<script setup>
    import ContactForm from '@/components/ContactComponents/ContactForm.vue';
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
                name: 'Contact',
                route: '/contact'
            },
        ]
    })
</script>

<style scoped>
</style>