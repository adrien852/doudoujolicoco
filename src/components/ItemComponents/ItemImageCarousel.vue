<template>
    <loading :is-full-page="false" :active="isLoading"></loading>
        <div class="item-gallery col-lg-6 col-12 d-flex">
            <swiper
                :modules="modulesPhone"
                :speed="300"
                :zoom="true"
                :navigation="true"
                class="d-block d-sm-none"
            >
                
                    <swiper-slide v-for="slide in item.images">
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
                class="mySwiper d-sm-block d-none"
            >
                <swiper-slide v-for="slide in item.images">
                    <img :src="slide"/>
                </swiper-slide>
            </swiper>
            <swiper
                :thumbs="{ swiper: thumbsSwiper.value }"
                :modules="modules"
                :allow-touch-move="false"
                :speed="1"
                class="mySwiper2 d-sm-block d-none"
            >
                <swiper-slide v-for="slide in item.images">
                    <VueMagnifier class="d-sm-block d-none" :src="slide" :mg-border-width="0" :mg-shape="'square'" :mg-width="1200" :mg-height="1200" :mg-show-overflow="false" :zoom-factor="0.15"/>
                </swiper-slide>
            </swiper>
        </div>
</template>
<script setup>
import VueMagnifier from '@websitebeaver/vue-magnifier'
import '@websitebeaver/vue-magnifier/styles.css'
import { reactive, ref } from 'vue';
import { onMounted } from 'vue';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import { Thumbs, Mousewheel, Navigation, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

const props = defineProps({
    item: Object
})

let modules = [Thumbs, Mousewheel]
let modulesPhone = [Navigation, Zoom]

const thumbsSwiper = reactive({});

function setThumbsSwiper(swiperRef) {
  thumbsSwiper.value = swiperRef;
}

let isLoading = ref(true);

onMounted(() => {
    isLoading.value = false;
})
</script>

<style>

.swiper-button-prev, .swiper-button-next {
    color:white;
  }
.item-gallery .swiper {
  max-height: 600px;
  margin-left: auto;
  margin-right: auto;
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