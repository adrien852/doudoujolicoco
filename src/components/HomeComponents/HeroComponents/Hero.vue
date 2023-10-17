<template>
    <div class="d-flex align-items-center heroContainer">
      <div class="col-lg-6 col-12 p-0 heroLeft">
        <HeroCarousel />
      </div>
      <div class="heroRight col-lg-6 col-12 m-auto d-lg-block d-none position-relative">
        <div class="text-center">
          <img alt="Doudou Joli Logo" class="logo py-3" src="@/assets/full_logo.png"/>
          <RouterLink class="d-none d-lg-block mb-3" to="/boutique">
            <button class="btn">
              <h4 class="m-0">Visiter la boutique</h4>
            </button>
          </RouterLink>
          <div class="mt-3">
            <h5>Notre adorable collection de doudous uniques est confectionnée avec amour.</h5>
            <h5>Nos créations apporteront une touche de mignonnerie à votre intérieur.</h5>
            <h5>Plongez dans l'univers douillet des doudous au crochet !</h5>
          </div>
        </div>
      </div>
    </div>

</template>

<script setup>
  import HeroCarousel from '@/components/HomeComponents/HeroComponents/HeroCarousel.vue'
  import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
.btn{
  background-color: #94BCD8;
  color: white;
  border-radius: 10px;
  -webkit-transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    -moz-transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    -o-transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    padding: 10px;
}
.btn:hover{
    transform: scale(1.03);
    -webkit-transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    -moz-transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    -o-transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    text-decoration: none;
    background-color: #4c778d;
}
h5{
  font-weight: normal;
  line-height: 15px;
  font-size: 16px;
}
img{
  max-width: 100%;
}
.heroContainer{
  height:400px;
}
h4{
  font-size: 18px;
}
</style>