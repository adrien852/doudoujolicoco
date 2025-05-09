<template>
    <div class="homeCategories">
        <swiper 
            class="shopCarousel"
            :modules="modules"
            :spaceBetween="0"
            :slidesPerView="1"
            :navigation="true"
            :pagination="{
                  clickable: true,
                }"
            :loop="true"
            :autoplay="{
                delay: 4000,
            }"
        >
            <swiper-slide class="swipeImg" v-for="category in computedCategories" :key="category">
                <ShopCategory class="w-100" :category="category" />
            </swiper-slide>
        </swiper>
    </div>

    <!-- <div class="homeCategories">
        <swiper 
            class="shopCarousel"
            :modules="modules"
            :spaceBetween="0"
            :slidesPerView="1"
            :navigation="true"
        >
            <swiper-slide class="swipeImg" v-for="category in categories" :key="category">
                <HomeCategory class="w-100" :category="category" />
            </swiper-slide>
        </swiper>
    </div> -->

</template>
<script setup>
import ShopCategory from '@/components/ShopComponents/ShopCategory.vue';
import HomeCategory from '@/components/HomeComponents/HomeCategory.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { computed } from 'vue';

let modules = [Navigation, Pagination, Autoplay]

const props = defineProps({
    categories: Array,
})

let computedCategories = computed(() => {
    return [
        props.categories[2],
        props.categories[1],
        props.categories[0]
    ]
  })
</script>

<style>
.swiper-button-prev, .swiper-button-next {
    color:white;
}
@media (max-width:991px) {
    .homeCategories{
        padding: 30px 0;
        margin: 0 0;
    }
}
.item-gallery .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
  justify-content:center!important;
}
.item-gallery .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 5px 12px!important;
}
</style>