<template>
    <div class="d-flex flex-wrap align-items-center heroContainer">
      <div class="heroCarousel col-lg-6 col-12 p-0">
        <HeroCarousel />
      </div>
      <div class="container heroRight col-lg-5 m-auto position-relative">
        <div class="text-center">
          <!-- <img alt="Doudou Joli Logo" class="d-none d-lg-block logo py-3" src="@/assets/full_logo.png"/> -->
          <h1 class="text-left mb-4">Un doudou crocheté<br/>rien que pour vous</h1>
          <div class="mt-3 text-left">
            <h5>Notre adorable collection de peluches et accessoires au crochet est confectionnée avec amour.</h5>
            <h5>Nos créations apporteront une touche de mignonnerie à votre intérieur.</h5>
          </div>
          <RouterLink to="/boutique">
            <button class="btn">
              <h4 class="m-0">Visiter la boutique</h4>
            </button>
          </RouterLink>
        </div>
      </div>
    </div>

</template>

<script setup>
  import HeroCarousel from '@/components/HomeComponents/HeroComponents/HeroCarousel.vue'
  import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
.heroRight{
  line-height: 90px;
}
h1{
  text-decoration: none;
  /* font-family: Questrial; */
  color: #3E82B0;
  font-size: min(4.1vw + 10px, 62pt);
  letter-spacing: -2px;
  line-height: 55px;
}
h1::after{
  content: none;
}
.btn{
  background-color: #94BCD8;
  color: white;
  border-radius: 10px;
  -webkit-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    -moz-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    -o-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    transition: transform 0.1s ease-out, background-color 0.2s ease-out;
  padding: 10px 20px;
}
.btn:hover{
    transform: scale(1.01);
    -webkit-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    -moz-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    -o-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    text-decoration: none;
    background-color: #4c778d;
}
h4{
  font-size: 27px;
}
h5{
  font-weight: normal;
  line-height: 15px;
  font-size: 16px;
}
img{
  max-width: 50%;
}
.heroCarousel{
  height:400px;
}
@media (max-width:991px) {
  .heroCarousel{
    height:180px;
  }
  h1{
    margin-top: 15px;
    font-size: 32pt;
    line-height: 30px;
  }
  .heroRight{
    line-height: 70px;
  }
}
</style>