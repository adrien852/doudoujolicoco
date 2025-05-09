<template>
  <main id="main" class="w-100">
    <Hero />
      <div class="carouselDiv position-relative my-5">
          <loading class="position-relative" style="height: 363px;" :is-full-page="false" :active="categories && categories.length === 0"></loading>
          <Category v-if="categories && categories.length > 0" :categories="categories" />
      </div>
      <div class="container newProductsDiv position-relative">
        <loading class="position-relative" style="height: 250px;" :is-full-page="false" :active="newProductsLoading"></loading>
        <NewProducts v-if="!noNewProducts && sampleShopItemStore.items.length > 0" :items="sampleShopItemStore.items" />
      </div>
      <BusinessPhilosophy :noAnimation="noAnimation" class="my-5"/>
      <KeyPoints :noAnimation="noAnimation" class="my-5"/>
      <HomeReviews :noAnimation="noAnimation" class="my-5"/>
      <HomeContact />
  </main>
</template>

<script setup>
  import Hero from '@/components/HomeComponents/HeroComponents/Hero.vue'
  import Category from '@/components/HomeComponents/CategoryComponents/Category.vue';
  import BusinessPhilosophy from '@/components/HomeComponents/BusinessPhilosophy.vue';
  import KeyPoints from '@/components/HomeComponents/KeyPoints.vue'
  import NewProducts from '@/components/HomeComponents/NewProducts.vue'
  import HomeReviews from '@/components/HomeComponents/HomeReviews.vue'
  import HomeContact from '@/components/HomeComponents/HomeContact.vue'
  import { useSampleItemStore } from '@/stores/SampleShopItemStore';
  import { computed, onBeforeMount, reactive, ref, watch} from 'vue';
  import Loading from 'vue3-loading-overlay';
  import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
  import { onMounted } from 'vue';

  const sampleShopItemStore = useSampleItemStore();
  let newProductsLoading = ref(true);
  let noNewProducts = ref(true);
  let categories = computed(() => {
    return sampleShopItemStore.categories
  })
  let noAnimation = ref(false);

  onMounted(() => {
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
.newProductsDiv{
  overflow-x: hidden;
}
h1{
  color: #22211F;
}
main{
  top: 0;
}
</style>