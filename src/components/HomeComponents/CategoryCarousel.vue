<template>
    <div class="homeCategories">
        <swiper 
            class="shopCarousel"
            :modules="modules"
            :spaceBetween="30"
            :slidesPerView="1"
            :navigation="true"
            :breakpoints="{
                500: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                }
            }"
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
</script>

<style>
.swiper-button-prev, .swiper-button-next {
    color:white;
}
.homeCategories{
    padding: 40px 0;
    margin: 60px 0;
}
@media (max-width:991px) {
    .homeCategories{
        padding: 50px 0;
        margin: 0 0;
    }
}
</style>