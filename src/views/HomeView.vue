<template>
  <main class="w-100">
    <Hero />
    <div class="mx-5">
      <ShopCarousel class="" v-if="dataLoaded" :items="sampleShopItemStore.items" />
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

</script>

<style scoped>
h1{
  color: black;
}
main{
  top: 0;
}
</style>