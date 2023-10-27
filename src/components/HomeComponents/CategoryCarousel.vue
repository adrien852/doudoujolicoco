<template>
    <Carousel id="shopCarousel" v-bind="settings" :breakpoints="breakpoints" :wrapAround="true" :transition="500">
        <Slide v-for="category in categories" :key="item">
            <ShopCategory class="w-100" :category="category" />
        </Slide>

        <template #addons>
            <Navigation v-if="categories" />
        </template>
    </Carousel>
    <!-- <div class="container">
      <div class="mt-lg-4">
        <div class="flex-wrap d-flex justify-content-left mx-auto w-100">
            <ShopCategory class="col-lg-4 col-sm-6 col-12 p-3" v-for="category in categories" :category="category" />
        </div>
      </div>
    </div> -->
</template>
<script setup>
import ShopCategory from '@/components/ShopComponents/ShopCategory.vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
const props = defineProps({
    categories: Array,
})
let settings = {
    itemsToShow: 1,
    snapAlign: 'left',
}
let breakpoints = {
    768: {
        itemsToShow: 2,
        snapAlign: 'left',
    },
    992: {
        itemsToShow: 2,
        snapAlign: 'left',
    },
    1200: {
        itemsToShow: 3,
        snapAlign: 'left',
    },
}
</script>
<style scoped>
</style>