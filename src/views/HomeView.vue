<template>
  <loading :active="isLoading"></loading>
  <main id="main" class="w-100">
    <Hero />
    <div class="container">
      <div class="mt-lg-4">
        <div class="flex-wrap d-flex justify-content-left mx-auto w-100">
            <ShopCategory class="col-lg-4 col-sm-6 col-12 p-3" :category="category" v-for="category in categories" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import Hero from '@/components/HomeComponents/HeroComponents/Hero.vue'
  import ShopCategory from '@/components/ShopComponents/ShopCategory.vue';
  import { useSampleItemStore } from '@/stores/SampleShopItemStore';
  import { onBeforeMount, onMounted, ref} from 'vue';
  import {getCategories} from '@/services/ShopService.js';

  const sampleShopItemStore = useSampleItemStore();
  let isLoading = ref(true);
  let categories = ref(null);

  onMounted(() => {
    getCategories().then(response => {
        categories = response;
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