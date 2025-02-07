<template>
    <loading :is-full-page="false" :active="isLoading"></loading>
        <div class="item-gallery col-lg-6 col-12 px-lg-2 p-0 d-flex">
            <swiper
                :modules="modulesPhone"
                :speed="300"
                :zoom="true"
                :pagination="{
                  clickable: true,
                }"
                class="d-block d-lg-none"
                @zoom-change="disableSwipe"
                ref="phoneSwiper"
            >
                
            <swiper-slide v-for="slide in sliderImages">
                <div class="swiper-zoom-container">
                    <img :src="slide"/>
                </div>
            </swiper-slide>
                
            </swiper>
            <swiper
                @swiper="setThumbsSwiper"
                :spaceBetween="10"
                :slidesPerView="4"
                :resistance="true"
                :mousewheel="true"
                :resistanceRatio="0"
                :watchSlidesProgress="true"
                :modules="modules"
                :direction="'vertical'"
                class="mySwiper d-lg-block d-none"
            >
                <swiper-slide v-for="slide in sliderImages">
                    <img :src="slide"/>
                </swiper-slide>
            </swiper>
            <swiper
                :thumbs="{ swiper: thumbsSwiper.value }"
                :modules="modules"
                :allow-touch-move="false"
                :speed="0"
                class="mySwiper2 d-lg-block d-none"
            >
                <swiper-slide v-for="slide in sliderImages">
                    <VueMagnifier class="d-sm-block d-none" :src="slide" :mg-border-width="0" :mg-shape="'square'" :mg-width="2000" :mg-height="2000" :mg-show-overflow="false" :zoom-factor="0.08"/>
                </swiper-slide>
            </swiper>
        </div>
</template>
<script setup>
import VueMagnifier from '@websitebeaver/vue-magnifier'
import '@websitebeaver/vue-magnifier/styles.css'
import { computed, reactive, ref } from 'vue';
import { onMounted } from 'vue';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import { Thumbs, Mousewheel, Pagination, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

const props = defineProps({
    item: Object
})

let modules = [Thumbs, Mousewheel]
let modulesPhone = [Pagination, Zoom]

const thumbsSwiper = reactive({});
const phoneSwiper = ref(null);

function disableSwipe(swiper, scale){
  if(scale > 1){
    swiper.allowTouchMove = false;
  }
  else{
    swiper.allowTouchMove = true;
  }
}

function setThumbsSwiper(swiperRef) {
  thumbsSwiper.value = swiperRef;
}

let isLoading = ref(true);

onMounted(() => {
    isLoading.value = false;
})

const sliderImages = computed(() => props.item.images.filter((image) => {
    return image !== '';
}))
</script>

<style>
.item-gallery .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.item-gallery .swiper-pagination-bullet {
  width: 100%;
  height: 5px;
  border-radius: 0;
  -webkit-transition: background 0.2s ease-out;
    -moz-transition:  background 0.2s ease-out;
    -o-transition:  background 0.2s ease-out;
    transition:  background 0.2s ease-out;
}

.item-gallery .swiper-pagination-bullet-active {
  -webkit-transition: opacity 0.2s ease-out;
    -moz-transition: opacity 0.2s ease-out;
    -o-transition: opacity 0.2s ease-out;
    transition: opacity 0.2s ease-out;
}

.item-gallery .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0;
}

.swiper-button-prev, .swiper-button-next {
    color:white;
  }
.item-gallery .swiper {
  max-height: 600px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 991px) {
  .item-gallery .swiper {
    max-height: 650px;
  }
}

@media (max-width: 575px) {
  .item-gallery .swiper {
    max-height: 350px;
  }
}

.item-gallery .mySwiper.swiper{
    width: 30%;
    padding-right: 10px;
}

.item-gallery .swiper-container{
    max-height: 600px;
}

.item-gallery .swiper {
  width: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-gallery .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  background: #000;
  color: #000;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  width: 100%;
}

.mySwiper .swiper-slide {
  opacity: 0.8;
  cursor: pointer;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide {
  overflow: hidden;
}
</style>