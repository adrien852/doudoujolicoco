<template>
  <main id="main" class="w-100">
    <Hero />
    <div class="container">
      <div class="mt-lg-4">
        <ShopCarousel class="" v-if="dataLoaded" :items="sampleShopItemStore.items" />
      </div>
    </div>
  </main>
</template>

<script setup>
  import Hero from '@/components/HomeComponents/HeroComponents/Hero.vue'
  import ShopCarousel from '@/components/ShopComponents/ShopCarousel.vue';
  import { useSampleItemStore } from '@/stores/SampleShopItemStore';
  import { onBeforeMount, onMounted, ref} from 'vue';

  const sampleShopItemStore = useSampleItemStore();
  let isLoading = ref(true);
  let dataLoaded = ref(false);

  onBeforeMount(() => {
    sampleShopItemStore.fill().then(() => {
      dataLoaded.value = true;
    });
  })

  onMounted(() => {
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