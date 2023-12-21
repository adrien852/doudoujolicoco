<template>
    <div class="d-flex flex-wrap align-items-center heroContainer">
      <div class="heroCarousel col-lg-6 col-12 p-0">
        <HeroCarousel />
      </div>
      <div class="container heroRight d-flex flex-column col-xl-5 col-lg-6 position-relative">
          <!-- <img alt="Doudou Joli Logo" class="d-none d-lg-block logo py-3" src="@/assets/full_logo.png"/> -->
          <h1 class="mainTitle text-left">Un doudou crocheté<br/>rien que pour vous</h1>
          <div class="text-left">
            <h5>Notre adorable collection de peluches et accessoires au crochet est confectionnée avec amour.</h5>
          </div>
          <HeroBulletPoints class="mt-2" />
          <button class="btn mt-3">
              <RouterLink class="m-0" to="/boutique">
                  <h4 class="m-0">Visiter la boutique</h4>
              </RouterLink>
          </button>
      </div>
    </div>

</template>

<script setup>
  import HeroCarousel from '@/components/HomeComponents/HeroComponents/HeroCarousel.vue'
  import HeroBulletPoints from '@/components/HomeComponents/HeroComponents/HeroBulletPoints.vue'
  import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
a{
  color: white;
  text-decoration: none;
}
.heroRight button{
  line-height: 90px;
}
h1{
  text-decoration: none;
  /* font-family: Questrial; */
  color: #3E82B0;
  font-size: min(4.9vw + 0px, 62pt);
  letter-spacing: -2px;
  line-height: 60px;
  margin-bottom: 25px;
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
    /* transform: scale3d(1.01, 1.01, 1.01); */
    -webkit-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    -moz-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    -o-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    background-color: #4c778d;
}
h4{
  font-size: 27px;
}
h5{
  font-weight: normal;
  line-height: 20px;
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
    margin-top: 25px;
    font-size: 48pt;
    line-height: 45px;
  }
  .heroRight button{
    line-height: 70px;
  }
}
@media (max-width:575px) {
  h1{
    font-size: 35pt;
    line-height: 45px;
    margin-bottom: 10px;
    letter-spacing: -1px;
  }
}
</style>