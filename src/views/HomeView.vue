<script setup>
import Carousel from '../components/HomeComponents/CarouselVue.vue'
</script>

<template>
  <main class="position-absolute">
    <div class="d-flex align-items-center">
      <div class="col-lg-5 col-12 h-100 m-auto d-lg-block d-none">
        <div class="heroLeft text-center">
          <img alt="Vue logo" class="logo py-3" src="@/assets/logo.png" width="200"/>
          <h1 class="m-0">Bienvenue chez Coco</h1>
          <h5>Des doudous faits au crochet, et avec amour</h5>
          <RouterLink class="d-none d-lg-block" to="/shop">
            <button class="btn">
              <h4 class="m-0">Visiter la boutique</h4>
            </button>
          </RouterLink>
        </div>
      </div>
      <div class="col-lg-7 col-12 p-0 heroRight">
        <Carousel />
      </div>
    </div>
      
  </main>
</template>

<style scoped>
.heroLeft{
  top: 0;
}
h1{
  color: black;
}
main{
  top: 0;
}

.btn{
  background-color: #98aeb9;
  color: white;
  border-radius: 10px;
  -webkit-transition: transform 0.2s ease-out;
    -moz-transition: transform 0.2s ease-out;
    -o-transition: transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
    padding: 20px;
    margin-top: 20px;
}
.btn:hover{
    transform: scale(1.03);
    -webkit-transition: transform 0.2s ease-out;
    -moz-transition: transform 0.2s ease-out;
    -o-transition: transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
    text-decoration: none;
}
</style>