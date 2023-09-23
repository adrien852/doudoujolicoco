<template>
  <main class="w-100">
    <Hero />
    <div class="container">
      <ShopCarousel class="" v-if="dataLoaded" :items="items" />
    </div>

  </main>
</template>

<script setup>
  import Hero from '@/components/HomeComponents/Hero.vue'
  import ShopCarousel from '@/components/HomeComponents/ShopCarousel.vue';
  import {getItems} from '@/services/ShopService.js'
  import { onMounted, ref} from 'vue';

  let items = [];
  let isLoading = ref(true);
  let dataLoaded = ref(false);

  onMounted(async() => {
      getItems().then(response => {
          items = response;
          dataLoaded.value = true;
      })
      
  })

</script>

<style scoped>
h1{
  color: black;
}
main{
  top: 0;
}
</style>