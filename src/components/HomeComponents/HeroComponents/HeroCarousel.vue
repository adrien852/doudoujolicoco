<template>
  <Carousel :wrapAround="true" transition="800" >
    <Slide v-for="(slide, index) in carouselImages" :key="index">
      <div :id="'image'+(index+1)" class="carousel__item"><img alt="Peluche de vache en crochet" class="d-block" :src="slide"></div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  <RouterLink class="d-lg-none d-block" to="/shop"><button class="btn carouselBtn">
      <h2 class="m-0">Visiter la boutique</h2>
    </button></RouterLink>
</template>

<script setup>
import image2 from "@/assets/images/olaf.jpg"
import image3 from "@/assets/images/pikachu.jpg"
import image4 from "@/assets/images/reine.jpg"
import image5 from "@/assets/images/elephant1.jpg"
import image6 from "@/assets/images/lapins.jpg"
import image7 from "@/assets/images/souris.jpg"
import image1 from "@/assets/images/vache.jpg"

import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { RouterLink, RouterView } from 'vue-router'

import 'vue3-carousel/dist/carousel.css'

</script>

<script>
let carouselImages = [
  image1,image2,image3,image4,image5,image6,image7
]
</script>
    
<style>

.carousel__item, .carousel__item img{
  width:100%;
  height:calc(100vh);
  filter: saturate(var(--value, 1.1))
}
.carousel__item img{
  object-fit: cover;
}
.carousel__icon{
  fill: white;
}
.carousel__pagination-button::after {
  background-color: white!important;
}
.carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
  background-color: rgb(185, 185, 185) !important;
}
.carousel__pagination{
  position: relative;
  bottom: 30px;
  margin:0;
  height:0;
}

#image4 img{
  object-position: 67% 50%;
}
#image5 img{
  object-position: 50% 50%;
}
#image2 img{
  object-position: 50%;
}
#image7 img{
  object-position: 0% 61%;
}
#image1 img{
  object-position: 29% 70%;
}
#image3 img{
  object-position: 50% 74%;
}
#image6 img{
  object-fit: none;
  object-position: 7% 13%;
}
.carouselBtn{
  width:40%;
  height: 100px;
  min-width: 200px;
  max-width: 500px;
  position: absolute;
  right: 0;
  bottom: 80px;
  left: 0;
  z-index: 15;
  margin-right: auto;
  margin-left: auto;
  background-color: #aac2cee7;
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
    -webkit-transition: transform 0.2s ease-out;
    -moz-transition: transform 0.2s ease-out;
    -o-transition: transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
    text-decoration: none;
}
.carouselBtn h2{
  font-size: clamp(14pt, 4vw, 20pt);
  /* -webkit-filter: drop-shadow( 2px 1px 2px rgb(0, 0, 0));
    filter: drop-shadow( 2px 1px 2px rgb(0, 0, 0)); */
}
.heroRight .carousel__viewport{
  height: max(calc(100vh - 92px), 495px);
}
</style>

