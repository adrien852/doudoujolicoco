<template>
    <Carousel id="shopCarousel" v-bind="settings" :breakpoints="breakpoints" :wrapAround="true" autoplay="3000">
        <Slide v-for="item in props.items" :key="item">
            <ShopItem :item="item" />
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>

<script setup>
    import ShopItem from '../ShopComponents/ShopItem.vue';
    import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'
    import { watch, ref} from 'vue';

    const props = defineProps({
        items: Array
    });

    let settings = {
      itemsToShow: 1,
      snapAlign: 'center',
    }
    let breakpoints = {
      700: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
      992: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    }
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