<template>
  <img alt="Doudou Joli Logo" class="heroLogo py-2 d-block" src="@/assets/full_logo_colored_contoured.png">
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
  "https://firebasestorage.googleapis.com/v0/b/doudoujoli-610f9.appspot.com/o/product_images%2FMouton-balancoire%2Ffile1?alt=media&token=a4cca777-fecf-4af0-af54-64e9a5703788", 
  "https://firebasestorage.googleapis.com/v0/b/doudoujoli-610f9.appspot.com/o/product_images%2Fboitecoeur%2Ffile1?alt=media&token=78833807-64ba-48d3-a58a-88675bef23a2",
  "https://firebasestorage.googleapis.com/v0/b/doudoujoli-610f9.appspot.com/o/product_images%2Fchale%2Ffile1?alt=media&token=fd3644d3-ccf6-4633-bd37-f957e33e7638"
]
</script>

<style scoped>
.heroLogo{
  position: absolute;
  left:5px;
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
  background-color: #F39E6A;
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

