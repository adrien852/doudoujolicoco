<template>
  <loading :active="isLoading"></loading>
  <main id="main" class="w-100">
    <Hero />
    <div class="container mt-4">
      <CategoryCarousel :categories="categories" />

    </div>
  </main>
</template>

<script setup>
  import Hero from '@/components/HomeComponents/HeroComponents/Hero.vue'
  import CategoryCarousel from '@/components/HomeComponents/CategoryCarousel.vue';
  import { useSampleItemStore } from '@/stores/SampleShopItemStore';
  import { onBeforeMount, onMounted, ref} from 'vue';
  import {getCategories} from '@/services/ShopService.js';
  import { inject } from 'vue'
  const swal = inject('$swal')
  import Loading from 'vue3-loading-overlay';
  import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

  const sampleShopItemStore = useSampleItemStore();
  let isLoading = ref(true);
  let categories = ref(null);

  onMounted(() => {
    getCategories()
    .then(response => {
        console.log(response)
        categories = response;
        isLoading.value = false;
    })
    .catch(function (error) {
      isLoading.value = false;
    })
    document.getElementById("main").addEventListener('click', () => {
      let sidebar = document.getElementById("mySidebar");
      if(sidebar.className.includes('toggled')){
        sidebar.style.width = "0";
        sidebar.classList.remove('toggled');
      }
    })
  })

</script>

<style scoped>
h1{
  color: #22211F;
}
main{
  top: 0;
}
</style>