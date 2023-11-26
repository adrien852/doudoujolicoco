<template>
    
    <div v-if="!isLoading">
        <loading :is-full-page="false" :active="isLoading"></loading>
        <swiper
            :speed="300"
            :slides-per-view="'auto'"
            :spaceBetween="8"
        >
            <swiper-slide class="category-container text-uppercase mt-lg-0 mt-2" v-for="category in categories">
                <RouterLink :to="'/boutique/'+category.normalized">
                    <p class="m-0">{{ category.name }}</p>
                </RouterLink>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { onMounted, ref, watch } from 'vue';
    import 'swiper/css';
    import { useSampleItemStore } from '@/stores/SampleShopItemStore';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    
    let isLoading = ref(true)
    let categories = ref(null);
    const sampleShopItemStore = useSampleItemStore();

    watch(sampleShopItemStore, () => {
        if(!categories.value){
          categories = sampleShopItemStore.categories;
        }
        isLoading.value = false;
    })

    onMounted(() => {
        if(sampleShopItemStore.categories.length > 0){
          categories = sampleShopItemStore.categories;
          isLoading.value = false;
        }
    })
</script>

<style scoped>
    .category-container{
        width: fit-content;
        color: #22211F;
        opacity: 0.6;
        font-size: 9pt;
        
    }
    a{
        text-decoration: none;
        color:initial;
        padding: 10px 15px;
        background-color: #a18f7b1a;
    }
</style>