<template>
    <Carousel id="shopCarousel" v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="item in props.items" :key="item">
            <ShopItem :item="item" />
            <!-- {{ item.title }} -->
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
      1024: {
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
        fill: #98aeb9!important;
    }
    .carousel__next{
        right: -30px;
    }
    .carousel__prev{
        left: -30px;
    }
</style>