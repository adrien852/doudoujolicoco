<template>
    <swiper 
        class="shopCarousel"
        :modules="modules"
        :spaceBetween="30"
        :slidesPerView="1"
        :breakpoints="{
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 5
            }
        }"
        :freeMode="true"
        :loop="true"
        :autoplay="{
            delay: 4000,
        }"
    >
        <swiper-slide class="swipeImg" v-for="item in items" :key="item">
            <ShopItem @click="$emit('itemClicked', item)" :item="item" />
        </swiper-slide>
    </swiper>
</template>

<script setup>
    import ShopItem from '@/components/ShopComponents/ShopItem.vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, FreeMode } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/free-mode';

    let modules = [FreeMode, Autoplay]

    const props = defineProps({
        items: Array
    });
</script>

<style>
    #shopCarousel li{
        padding: 10px;
    }
    #shopCarousel .carousel__icon{
        fill: #5f6c73 !important;
        background-color: white;
        border-radius: 100%;
        box-shadow: 2px 3px 8px #0000001f;
    }
    .carousel__next{
        right: 0px;
    }
    .carousel__prev{
        left: 0px;
    }
</style>