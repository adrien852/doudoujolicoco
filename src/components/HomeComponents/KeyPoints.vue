<template>
    <div class="keyPointsDiv pt-md-5 pb-md-3 py-3">
        <div class="container">
            <div class="position-relative">
                <div class="d-flex flex-wrap w-100">
                    <div class="d-flex text-center flex-column col-md-4 col-12">
                        <div id="keyCard1" class="keyCard d-none">
                            <img class="m-auto" src="@/assets/images/yarn-ball.png" />
                            <h4>Text 1</h4>
                            <p>Longer text to describe</p>
                        </div>
                    </div>
                    <div class="d-flex text-center flex-column col-md-4 col-12">
                        <div id="keyCard2" class="keyCard d-none"><img class="m-auto" src="@/assets/images/knitting.png" />
                            <h4>Text 1</h4>
                            <p>Longer text to describe</p>
                        </div>
                    </div>
                    <div class="d-flex text-center flex-column col-md-4 col-12">
                        <div id="keyCard3" class="keyCard d-none">
                            <img class="m-auto" src="@/assets/images/yarn.png" />
                            <h4>Text 1</h4>
                            <p>Longer text to describe</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex">
                    <RouterLink class="keyPointsButton m-auto" to="/a-propos">
                        <button class="btn">
                            <p class="m-0">En savoir plus</p>
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted} from 'vue'


  onMounted(() => {
    window.addEventListener("scroll", function () {
      // propertyName.value = Math.round(window.pageYOffset)
      if(document.getElementById("app").scrollTop > 450){
        document.getElementById("keyCard1").className = "keyCard animate__animated animate__fadeInLeft"
        document.getElementById("keyCard2").className = "keyCard animate__animated animate__fadeInLeft"
        document.getElementById("keyCard3").className = "keyCard animate__animated animate__fadeInLeft"
      }
      else{
        document.getElementById("keyCard1").className = "keyCard animate__animated animate__fadeOutLeft"
        document.getElementById("keyCard2").className = "keyCard animate__animated animate__fadeOutLeft"
        document.getElementById("keyCard3").className = "keyCard animate__animated animate__fadeOutLeft"
      }
    }, true);
  })
</script>

<style scoped>
.keyCard{
    /* border: #dbaa93be solid 5px; */
    border-radius: 25px;
}
.keyPointsDiv{
  margin: 40px 0;
  padding: 70px 0;
  background-color: #dbaa933e;
}
img{
    width: 100px;
}
.btn{
  background-color: #daa991;
  color: white;
  border-radius: 10px;
  -webkit-transition: transform 0.1s ease-out, background-color 0.1s ease-out;
    -moz-transition: transform 0.1s ease-out, background-color 0.1s ease-out;
    -o-transition: transform 0.1s ease-out, background-color 0.1s ease-out;
    transition: transform 0.1s ease-out, background-color 0.1s ease-out;
    padding: 10px;
}
.btn:hover{
    transform: scale(1.03);
    -webkit-transition: transform 0.1s ease-out, background-color 0.1s ease-out;
    -moz-transition: transform 0.1s ease-out, background-color 0.1s ease-out;
    -o-transition: transform 0.1s ease-out, background-color 0.1s ease-out;
    transition: transform 0.1s ease-out, background-color 0.1s ease-out;
    text-decoration: none;
    background-color: #bc7d63;
}
.btn p{
    font-weight: bold;
}
.keyPointsButton{
    /* position: absolute; */
    left: calc(50% - 63.4px);
}
</style>