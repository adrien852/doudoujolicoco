<template>
  <img alt="Doudou Joli Logo" class="heroLogo py-2 d-block" src="@/assets/full_logo.png">
  <swiper 
    class="homeSwiper"
    :modules="modules" 
    effect="fade"
    :loop="true"
    :autoplay="{
      delay: 4000,
    }"
  >
    <swiper-slide class="swipeImg" v-for="slide in carouselImages">
      <img alt="Peluche de vache en crochet" class="d-block w-100" :src="slide">
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Autoplay, EffectFade } from 'swiper/modules';
import { RouterLink, RouterView } from 'vue-router'

let modules = [Autoplay, EffectFade]

let carouselImages = [
  "https://firebasestorage.googleapis.com/v0/b/doudoujoli-610f9.appspot.com/o/product_images%2Fporte-tetine%2Ffile4?alt=media&token=7c205c76-f5f1-4fed-b32d-b65df559b0e0",
  "https://firebasestorage.googleapis.com/v0/b/doudoujoli-610f9.appspot.com/o/product_images%2Fvache_crochet%2Ffile1?alt=media&token=6f311b31-39a1-4c2e-acd7-3a6930f00fdc",
  "https://firebasestorage.googleapis.com/v0/b/doudoujoli-610f9.appspot.com/o/product_images%2Folaf%2Ffile1?alt=media&token=51c9bd00-d603-4bd7-8fbb-eb440aad39b2",
  "https://firebasestorage.googleapis.com/v0/b/doudoujoli-610f9.appspot.com/o/product_images%2Freine_des_neiges%2Ffile1?alt=media&token=79cc3b8a-8544-4e6d-a563-79ff7d13e77e"
]
</script>

<style scoped>
.heroLogo{
  position: absolute;
  z-index: 10;
  width: 110px;
}
.homeSwiper, .swipeImg, .swipeImg img{
  height:100%;
  filter: saturate(var(--value, 1.1))
}
.swipeImg img{
  object-fit: cover;
  object-position: 50% 40%;
}
.carouselBtn{
  width:40%;
  height: 60px;
  min-width: 200px;
  max-width: 500px;
  position: absolute;
  right: 0;
  bottom: 10px;
  left: 0;
  z-index: 15;
  margin-right: auto;
  margin-left: auto;
  background-color: #94BCD8;
  color: white;
  border-radius: 10px;
  -webkit-transition: transform 0.2s ease-out;
    -moz-transition: transform 0.2s ease-out;
    -o-transition: transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
    -webkit-filter: drop-shadow( 2px 2px 5px rgb(0, 0, 0));
    filter: drop-shadow( 2px 2px 5px rgb(0, 0, 0));
}
.carouselBtn:hover{
    transform: scale(1.03);
    -webkit-transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    -moz-transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    -o-transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    text-decoration: none;
    background-color: #4c778d;
    color: white;
}
.carouselBtn h2{
  font-size: clamp(14pt, 4vw, 20pt);
  /* -webkit-filter: drop-shadow( 2px 1px 2px rgb(0, 0, 0));
    filter: drop-shadow( 2px 1px 2px rgb(0, 0, 0)); */
}
@media (min-width: 960px) {
  .homeSwiper{
    border-radius: 0 50px 50px 0;
  }
  .heroLogo{
    width: 220px;
  }
}
</style>

