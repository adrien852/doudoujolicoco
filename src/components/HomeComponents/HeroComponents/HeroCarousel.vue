<template>
  <Carousel :wrapAround="true" transition="800" autoplay="4000">
    <Slide v-for="(slide, index) in carouselImages" :key="index">
      <div :id="'image'+index" class="carousel__item"><img alt="Peluche de vache en crochet" class="d-block" :src="slide"></div>
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
import image2 from "@/assets/images/boite1.jpg"
import image3 from "@/assets/images/doudous1.jpg"
import image4 from "@/assets/images/dragon.jpg"
import image5 from "@/assets/images/elephant1.jpg"
import image6 from "@/assets/images/elephant2.jpg"
import image7 from "@/assets/images/elephant3.jpg"
import image8 from "@/assets/images/lapins.jpg"
import image9 from "@/assets/images/souris.jpg"
import image1 from "@/assets/images/vache.jpg"

import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { RouterLink, RouterView } from 'vue-router'

import 'vue3-carousel/dist/carousel.css'

</script>

<script>
let carouselImages = [
  image1,image3,image2,image5,image8,image9,image4
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

#image3 img{
  object-position: 67% 100%;
  object-fit: none;
}
#image4 img{
  object-fit: none;
  object-position: 5% 0%;
}
#image1 img{
  object-position: 15%;
}
#image6 img{
  object-fit: cover;
  object-position: 67% 0%;
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
.carousel__viewport{
  height: max(calc(100vh - 92px), 495px);
}
</style>

