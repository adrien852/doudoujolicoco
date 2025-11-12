<template>
  <!-- <img alt="Doudou Joli Logo" class="heroLogo py-2 d-block" src="@/assets/logo.png"> -->
  <swiper 
    class="homeSwiper"
    :modules="modules" 
    effect="fade"
    :loop="true"
    :autoplay="{ delay: 14000, disableOnInteraction: true }"
  >
    <swiper-slide class="swipeImg" v-for="(slide, index) in carouselImages" :key="index">
      <RouterLink :to="slide.redirect" class="cartImgContainer" style="position:relative;">
        <img alt="Article de la boutique" class="d-block w-100" :id="'heroImg'+index" :src="slide.link">
        <div
          v-if="slide.link === promoHero"
          class="promoHeroOverlay promoHeroContent justify-content-center align-items-center"
        >
            <h2 class="">{{ promo?.description }}</h2>
            <div class="d-flex flex-column align-items-end w-100 promoContentText">
              <div v-if="promo" class="col-7">
                <p>Réduction de 
                  <b v-if="promo?.type === 'Pourcentage'">{{ Math.round(promo?.amount) }}%</b> 
                  <b v-else>{{ promo?.amount }}€</b>
                  <span v-if="promo?.minimumOrderTotal > 0">*</span>
                <br/>sur toute la boutique</p>
                <button class="btn btn-primary mt-2 promoTag" @click.stop.prevent="applyPromo">{{ promo?.code }}</button>
                <p v-if="promo?.minimumOrderTotal > 0" class="minimumOrderText mt-1 mt-lg-3">*Pour un total de commande minimum de {{ promo?.minimumOrderTotal }}€</p>
              </div>
            </div>
        </div>
      </RouterLink>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Autoplay, EffectFade } from 'swiper/modules';
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/CartStore'
import { inject, ref, watch } from 'vue';
import promoHero from '@/assets/images/promoHero.png'
const swal = inject('$swal')

let modules = [Autoplay, EffectFade]

const baseImages = [
  { redirect: "/article/mouton-balancoire", link: "https://firebasestorage.googleapis.com/v0/b/doudoujoli-610f9.appspot.com/o/product_images%2Fhomepage%2Ffile1.webp?alt=media&token=a73c41b3-b3f4-410d-8b0e-1fde60364d38" },
  { redirect: "/article/boitecoeur", link: "https://firebasestorage.googleapis.com/v0/b/doudoujoli-610f9.appspot.com/o/product_images%2Fhomepage%2Ffile2.webp?alt=media&token=35ae6246-5258-44ae-9d19-9406d49d29c3" },
  { redirect: "/article/chale", link: "https://firebasestorage.googleapis.com/v0/b/doudoujoli-610f9.appspot.com/o/product_images%2Fhomepage%2Ffile3.webp?alt=media&token=8f4e6924-dbde-4e98-8cd3-9637f6510cce" }
]

const carouselImages = ref([...baseImages])

const cartStore = useCartStore();

const props = defineProps({
  promo: Object
});

watch(
  () => props.promo,
  (newPromo) => {
    let images = [...baseImages]
    if (newPromo && newPromo.id !== null && newPromo.id !== -1) {
      images.unshift({
        redirect: '/boutique',
        link: promoHero
      })
    }
    carouselImages.value = images
  },
  { immediate: true }
)

function applyPromo() {
  if (props.promo?.code) {
    cartStore.applyPromoCode(props.promo.code).then((result) => {
      if (result.success) {
        swal.fire({
          icon: 'success',
          title: 'Code promo appliqué !',
          text: result.message,
          confirmButtonColor: "#F39E6A"
        });
      } else {
        swal.fire({
          icon: 'info',
          title: 'Attention !',
          text: result.message,
          confirmButtonColor: "#F39E6A"
        });
      }
    });
  }
}
</script>

<style scoped>
.heroLogo{
  position: absolute;
  left:5px;
  z-index: 10;
  width: 80px;
}
.homeSwiper, .swipeImg, .swipeImg img{
  height:100%;
  filter: saturate(var(--value, 1.1))
}
.swipeImg img{
  object-fit: cover;
  object-position: 50% 50%;
}
#heroImg0{
    object-position: 50% 45%;
  }
@media (min-width: 960px) {
  #heroImg0{
    object-position: 50% 60%;
  }
}

.carouselBtn{
  width:40%;
  height: 60px;
  min-width: 200px;
  max-width: 500px;
  position: absolute;
  right: 0;
  bottom: 10px;
  left: 0;
  z-index: 15;
  margin-right: auto;
  margin-left: auto;
  background-color: #F39E6A;
  color: white;
  border-radius: 10px;
  -webkit-transition: transform 0.2s ease-out;
    -moz-transition: transform 0.2s ease-out;
    -o-transition: transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
    -webkit-filter: drop-shadow( 2px 2px 5px rgb(0, 0, 0));
    filter: drop-shadow( 2px 2px 5px rgb(0, 0, 0));
}
.carouselBtn:hover{
    transform: scale(1.03);
    -webkit-transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    -moz-transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    -o-transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    text-decoration: none;
    background-color: #d48b5e;
    color: white;
}
.carouselBtn h2{
  font-size: clamp(14pt, 4vw, 20pt);
  /* -webkit-filter: drop-shadow( 2px 1px 2px rgb(0, 0, 0));
    filter: drop-shadow( 2px 1px 2px rgb(0, 0, 0)); */
}
@media (min-width: 960px) {
  .homeSwiper{
    border-radius: 0 50px 50px 0;
  }
  .heroLogo{
    width: 150px;
  }
}
.promoHeroOverlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
}

.promoHeroContent h2 {
  color: #fff;
  font-size: clamp(2.3rem, 5vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  text-align: center;
  letter-spacing: -1px;
  margin-bottom: 15px;
}

.promoHeroContent p {
  font-size: clamp(1rem, 2vw, 3rem);
  margin-bottom: 0px;
}
.promoHeroContent b{
  font-family: "Kalam", sans-serif;
}
.promoTag{
    background-color: #e15629;
    border-color: #e15629;
    width: fit-content;
    font-weight: bold;
}
h1::after, h2::after {
  background-color: #e15629;
}
.promoContentText{
  min-height: 100px;
}
p.minimumOrderText{
  font-size: 9px;
}
@media (min-width: 992px) {
  p.minimumOrderText{
    font-size: 13px;
  }
  .promoHeroContent h2 {
    top: -150px;
  }
  .promoTag{
    font-size: 35px;
  }
  .promoHeroContent b{
    font-size: 45px;
  }
  .promoContentText{
    min-height: 226px;
  }
}
</style>

