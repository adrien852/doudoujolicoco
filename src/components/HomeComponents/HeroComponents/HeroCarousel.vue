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
    <swiper-slide class="swipeImg" v-for="(slide, index) in carouselImages">
      <img alt="Article de la boutique" class="d-block w-100" :id="'heroImg'+index" :src="slide">
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
  "https://firebasestorage.googleapis.com/v0/b/doudoujoli-610f9.appspot.com/o/product_images%2Ftest-adrien%2Ffile1?alt=media&token=00d10b04-4bca-4e4b-b4fa-ff766e76f60a",
  "https://firebasestorage.googleapis.com/v0/b/doudoujoli-610f9.appspot.com/o/product_images%2Ftest-adrien%2Ffile2?alt=media&token=c8482065-5d87-471a-a91b-9dc930d825f7",
  "https://firebasestorage.googleapis.com/v0/b/doudoujoli-610f9.appspot.com/o/product_images%2Ftest-adrien%2Ffile3?alt=media&token=44eb6074-92e1-44e7-8ea3-0d2d10cc4ad8"
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
  object-position: 50% 50%;
}
#heroImg0{
    object-position: 50% 45%;
  }
@media (min-width: 960px) {
  #heroImg0{
    object-position: 50% 60%;
  }
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

