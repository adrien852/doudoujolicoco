<template>
    <swiper 
        class="shopCarousel pb-3"
        :modules="modules"
        :spaceBetween="20"
        :slidesPerView="'auto'"
        :freeMode="true"
        :loop="true"
    >
        <swiper-slide class="swipeImg" v-for="item in items" :key="item">
            <SimpleShopItem @click="$emit('itemClicked', item)" :item="item" />
        </swiper-slide>
    </swiper>
</template>

<script setup>
    import SimpleShopItem from '@/components/ShopComponents/SimpleShopItem.vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, FreeMode } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/free-mode';

    let modules = [FreeMode, Autoplay]

    const props = defineProps({
        items: Array
    });
</script>

<style scoped>
    .swipeImg{
        width: 250px;
    }
</style>