<template>
    <div class="d-flex flex-wrap align-items-center heroContainer">
      <div class="heroCarousel col-lg-6 col-12 p-0">
        <HeroCarousel />
      </div>
      <div class="container heroRight d-flex flex-column col-xl-5 col-lg-6 position-relative">
          <!-- <img alt="Doudou Joli Logo" class="d-none d-lg-block logo py-3" src="@/assets/full_logo.png"/> -->
          <h1 class="mainTitle text-left mb-3">Commandez votre<br/>déco au crochet</h1>
          <HeroBulletPoints class="mb-3" />
          <div class="text-left">
            <h5>Chez Doudou Joli, nous vous proposons une large sélection de produits crochetés tels que des peluches, des accessoires de mode, de la décoration pour la maison et bien plus encore. Chaque pièce est réalisée avec amour et minutie par notre créatrice, Corinne Boyer.</h5>
          </div>
          <button class="btn btn-primary mt-3 mx-auto">
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
  color: #22211F;
  font-size: min(4.9vw + 0px, 62pt);
  letter-spacing: -2px;
  line-height: 65px;
}
h1::after{
  content: none;
}
.btn{
  padding: 10px 20px;
  width: fit-content;
}
h4{
  font-size: 16px;
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
  height:780px;
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