<template>
    <NavPath :path="path"/>
    <div class="container justify-content-center d-flex mt-3">
        <div class="col-xl-5 col-lg-6 col-md-8 col-12">
            <ContactForm />
        </div>
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