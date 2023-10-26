<template>
    <div class="itemImage d-flex align-items-center justify-content-center col-md-6 col-12 text-center px-4">
        <Carousel
            id="thumbnails"
            :items-to-show="4"
            v-model="currentSlide"
            v-bind="settings"
            ref="carousel"
            class="d-sm-block d-none"
        >
            <Slide v-for="(slide, index) in imageUrls" :key="index">
            <div class="carousel__item" @click="slideTo(index)"><img :src="slide"/></div>
            </Slide>
        </Carousel>
        <Carousel 
            id="imageGallery" 
            :items-to-show="1"
            v-model="currentSlide" 
            v-bind="settings"
        >
            <Slide v-for="(slide, index) in imageUrls" :key="index">
            <div class="carousel__item">
                <VueMagnifier class="d-sm-block d-none" :src="slide" :mg-width="350" :mg-height="350" :mg-show-overflow="false" :zoom-factor="0.4"/>
                <img class="d-block d-sm-none" :src="slide"/>
            </div>
            </Slide>
        </Carousel>
    </div>
</template>
<script setup>
import VueMagnifier from '@websitebeaver/vue-magnifier'
import '@websitebeaver/vue-magnifier/styles.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { computed, ref } from 'vue';

const props = defineProps({
    item: Object
})
let settings = {
        wrapAround: false,
        mouseDrag: false,
        touchDrag: false,
        transition: 0
    }

function slideTo(val) {
    currentSlide.value = val
}

let currentSlide = ref(new URL(`/src/assets/images/${props.item.images[0]}`, import.meta.url).href);

const imageUrls = computed(() => {
    return props.item.images.map((image) => new URL(`/src/assets/images/${image}`, import.meta.url).href);
})
</script>

<style>
#thumbnails{
    margin-right: 10px;
}
#thumbnails .carousel__track{
    flex-direction: column;
    gap:10px;
}
#thumbnails .carousel__slide{
    width: 100%!important;
}
#thumbnails .carousel__item{
    width: 80%;
}
#imageGallery .carousel__slide{
    height: 100%!important;
    margin: auto;
}
#imageGallery .carousel__viewport, #thumbnails .carousel__viewport{
    border-radius: 0;
}
</style>