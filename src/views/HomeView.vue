<template>
  <main id="main" class="w-100">
    <Hero />
      <div class="carouselDiv position-relative">
        <div class="container">
          <loading class="position-relative" style="height: 363px;" :is-full-page="false" :active="categoryCarouselLoading"></loading>
          <CategoryCarousel v-if="!noCategoryCarousel" :categories="categories" />
        </div>
      </div>
      <KeyPoints :noAnimation="noAnimation" />
      <div class="container newProductsDiv position-relative">
        <loading class="position-relative" style="height: 250px;" :is-full-page="false" :active="newProductsLoading"></loading>
        <NewProducts v-if="!noNewProducts" :items="sampleShopItemStore.items" />
      </div>
  </main>
</template>

<script setup>
  import Hero from '@/components/HomeComponents/HeroComponents/Hero.vue'
  import CategoryCarousel from '@/components/HomeComponents/CategoryCarousel.vue';
  import KeyPoints from '@/components/HomeComponents/KeyPoints.vue'
  import NewProducts from '@/components/HomeComponents/NewProducts.vue'
  import { useSampleItemStore } from '@/stores/SampleShopItemStore';
  import { onBeforeMount, reactive, ref, watch} from 'vue';
  import Loading from 'vue3-loading-overlay';
  import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import { onMounted } from 'vue';

  const sampleShopItemStore = useSampleItemStore();
  let categoryCarouselLoading = ref(true);
  let noCategoryCarousel = ref(true);
  let newProductsLoading = ref(true);
  let noNewProducts = ref(true);
  let categories = ref(null);
  let noAnimation = ref(false);

  watch(sampleShopItemStore, () => {
    categories = sampleShopItemStore.categories;
    setCategories()
  })

  function setCategories(){
    if(categories.length > 0){
      categories = sampleShopItemStore.categories;
      noCategoryCarousel.value = false;
    }
    else{
      noAnimation.value = true;
      newProductsLoading.value = false;
    }
    categoryCarouselLoading.value = false;
  }

  onMounted(() => {
    if(!categories.value){
        categories = sampleShopItemStore.categories;
        setCategories();
    }
    sampleShopItemStore.fillItems()
    .then(response => {
      newProductsLoading.value = false;
      noNewProducts.value = false;
    })
    .catch(function (error) {
      noAnimation.value = true;
      newProductsLoading.value = false;
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