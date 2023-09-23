<template>
    <div id="shopItems" class="row d-flex justify-content-center col-lg-10 col-12 mx-auto mt-4">
        <ShopItem class="col" v-for="item in items" :item="item" />
    </div>
</template>

<script setup>
    import ShopItem from '@/components/ShopComponents/ShopItem.vue';

    const props = defineProps({
        items: Array
    });
</script>