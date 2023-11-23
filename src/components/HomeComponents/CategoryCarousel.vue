<template>
    <div class="py-4">
        <h1>Toutes les catégories</h1>
        <swiper 
            class="shopCarousel"
            :modules="modules"
            :spaceBetween="30"
            :slidesPerView="3"
            :navigation="true"
        >
            <swiper-slide class="swipeImg" v-for="category in categories" :key="category">
                <ShopCategory class="w-100" :category="category" />
            </swiper-slide>
        </swiper>
    </div>

</template>
<script setup>
import ShopCategory from '@/components/ShopComponents/ShopCategory.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

let modules = [Navigation]

const props = defineProps({
    categories: Array,
})
let settings = {
    itemsToShow: 1
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

<style>
.swiper-button-prev, .swiper-button-next {
    color:white;
}
</style>