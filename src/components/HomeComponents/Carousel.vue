<script setup>
import image2 from "../../assets/images/boite1.jpg"
import image3 from "../../assets/images/doudous1.jpg"
import image4 from "../../assets/images/dragon.jpg"
import image5 from "../../assets/images/elephant1.jpg"
import image6 from "../../assets/images/elephant2.jpg"
import image7 from "../../assets/images/elephant3.jpg"
import image8 from "../../assets/images/lapins.jpg"
import image9 from "../../assets/images/souris.jpg"
import image10 from "../../assets/images/vache.jpg"
</script>

<template>
<div id="carouselIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
        <li data-target="#carouselIndicators" data-slide-to="3"></li>
        <li data-target="#carouselIndicators" data-slide-to="4"></li>
        <li data-target="#carouselIndicators" data-slide-to="5"></li>
        <li data-target="#carouselIndicators" data-slide-to="6"></li>
    </ol>
    <div class="carousel-inner">
        <div id="image10" class="carousel-item active">
          <img alt="Indigo Lights rocking on Fibber Magee's stage" class="d-block" :src="image10">
        </div>
        <div id="image3" class="carousel-item">
          <img alt="Adrien, Indigo Lights' backing vocalist and bassist" class="d-block" :src="image3">
        </div>
        <div id="image6" class="carousel-item">
          <img alt="Gerard, Indigo Lights' lead singer and guitarist" class="d-block" :src="image6">
        </div>
        <div id="image1" class="carousel-item">
          <img alt="Indigo Lights is playing at Tsunami Studios" class="d-block" :src="image2">
        </div>
        <div id="image5" class="carousel-item">
          <img alt="Enzo, Indigo Lights' drummer" class="d-block" :src="image5">
        </div>
        <div id="image8" class="carousel-item">
          <img alt="Close up of Rob performing a solo on stage" class="d-block" :src="image8">
        </div>
        <div id="image9" class="carousel-item">
          <img alt="Rob singing on stage, Adrien in the background" class="d-block" :src="image9">
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
    <RouterLink class="" to="/shop"><button class="btn">
      <h2 class="m-0">Visiter la boutique</h2>
    </button></RouterLink>
</div>

</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
    
<style scoped>

#carouselIndicators, .carousel-item, .carousel-inner, .carousel-item img{
  width:100%;
  height:calc(100vh);
  filter: saturate(var(--value, 1.1))
}
.carousel-item img{
  object-fit: cover;
}
#image1 img{
  object-position: 30% 55%;
}
#image3 img{
  object-position: 20% 20%;
}
#image6 img{
  object-position: 60% 20%;
}
#image7 img{
  object-position: 70% 40%;
}
#image5 img {
  object-position: 70% 40%;
}
#image8 img{
  object-position: 100% 10%;
}
#image9 img{
  object-position: 30% 25%;;
}
#image10 img{
  object-position: 30% 34%;;
}
.btn{
  width:40%;
  height: 100px;
  min-width: 200px;
  max-width: 500px;
  position: absolute;
  right: 0;
  bottom: 80px;
  left: 0;
  z-index: 15;
  margin-right: auto;
  margin-left: auto;
  background-color: #aac2cee7;
  color: white;
  border-radius: 10px;
  -webkit-transition: transform 0.2s ease-out;
    -moz-transition: transform 0.2s ease-out;
    -o-transition: transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
    -webkit-filter: drop-shadow( 2px 2px 5px rgb(0, 0, 0));
    filter: drop-shadow( 2px 2px 5px rgb(0, 0, 0));
}
.btn:hover{
    transform: scale(1.03);
    -webkit-transition: transform 0.2s ease-out;
    -moz-transition: transform 0.2s ease-out;
    -o-transition: transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
    text-decoration: none;
}
h2{
  font-size: clamp(14pt, 4vw, 20pt);
  -webkit-filter: drop-shadow( 2px 1px 2px rgb(0, 0, 0));
    filter: drop-shadow( 2px 1px 2px rgb(0, 0, 0));
}
</style>

