<template>
    <NavPath :path="path"/>
    <div class="container mt-3">
        <FaqAccordion />
    </div>

</template>

<script setup>
    import FaqAccordion from '@/components/FaqComponents/FaqAccordion.vue';
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
                name: 'Foire Aux Questions',
                route: '/faq'
            },
        ]
    })
</script>

<style scoped>
</style>