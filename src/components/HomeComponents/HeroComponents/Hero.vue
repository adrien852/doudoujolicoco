<template>
    <div class="d-flex flex-wrap align-items-center heroContainer">
      <div class="heroCarousel col-lg-6 col-12 p-0">
        <HeroCarousel />
      </div>
      <div class="container heroRight d-flex flex-column col-xl-5 col-lg-6 position-relative">
          <h1 class="mainTitle text-lg-left text-center mb-3">Commandez votre<br/>article au crochet</h1>
          <HeroBulletPoints class="mb-3" />
          <div class="text-left">
            <h5>Chez <b>Doudou Joli</b>, nous vous proposons une large sélection de produits crochetés tels que des accessoires de mode, de la décoration pour la maison et bien plus encore. Chaque pièce est réalisée avec amour et minutie par notre créatrice, <b>Corinne Boyer</b>.</h5>
          </div>
          <button class="btn btn-primary mt-3 mx-auto">
              <RouterLink class="mainButtonText m-0" to="/boutique">
                  Visiter la boutique
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
h1{
  text-decoration: none;
  /* font-family: Questrial; */
  color: #22211F;
  font-size: min(5.3vw + 0px, 75pt);
  letter-spacing: -2px;
  line-height: min(89px, 5vw + 0px);
}
h1::after{
  content: none;
}
.btn{
  padding: 15px 23px;
  width: fit-content;
  background-color: #f08f54;
  border-color: #f08f54;
}
.mainButtonText{
  font-size: 20px;
  font-weight: bold;;
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
    line-height: 58px;
  }
}
@media (max-width:575px) {
  h1{
    font-size: 35pt;
    line-height: 46px;
    margin-bottom: 10px;
    letter-spacing: -1px;
  }
}
</style>