<template>
    <h2>Toutes les catégories</h2>
    <Carousel id="shopCarousel" v-bind="settings" :breakpoints="breakpoints" :wrapAround="true" :transition="500">
        <Slide v-for="category in categories" :key="item">
            <ShopCategory class="w-100" :category="category" />
        </Slide>

        <template #addons>
            <Navigation v-if="categories" />
        </template>
    </Carousel>
</template>
<script setup>
import ShopCategory from '@/components/ShopComponents/ShopCategory.vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel'

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
h2{
    position: relative;
    margin-bottom: 15px;
}
h2::after {
  position: absolute;
  content: '';
  bottom: -7px;
  height: 4px;
  background-color: #94BCD8;
  left: 0;
  right: 40px;
}
</style>