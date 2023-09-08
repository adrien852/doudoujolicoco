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
    
<style>

#carouselIndicators, .carousel-item, .carousel-inner, .carousel-item img{
  width:100%;
  height:calc(100vh);
}
.carousel-item img{
  object-fit: cover;
}
#image1 img{
  object-position: 100% 55%;
}
#image3 img{
  object-position: 100% 20%;
}
#image6 img{
  object-position: 100% 20%;
}
#image5 img, #image7 img{
  object-position: 100% 40%;
}
#image8 img{
  object-position: 100% 10%;
}
#image9 img{
  object-position: 100% 25%;;
}
#image10 img{
  object-position: 100% 34%;;
}

</style>

