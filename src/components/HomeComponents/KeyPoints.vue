<template>
    <div class="keyPointsDiv pt-md-5 pb-md-3 py-3">
        <div class="container">
            <div class="position-relative">
                <div class="d-flex flex-wrap w-100">
                    <div class="keyCards d-flex text-center flex-column col-md-4 col-12">
                        <div class="keyCard">
                            <div id="keyCard1">
                            <img class="m-auto" src="@/assets/images/yarn-ball.png" />
                            <h4>Avantage 1</h4>
                            <p>Particularité concrète qui justifie l'avantage</p>
                        </div>
                        </div>
                        
                    </div>
                    <div class="d-flex text-center flex-column col-md-4 col-12">
                        <div class="keyCard">
                            <div id="keyCard2"><img class="m-auto" src="@/assets/images/knitting.png" />
                                <h4>Avantage 2</h4>
                                <p>Particularité concrète qui justifie l'avantage</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex text-center flex-column col-md-4 col-12">
                        <div class="keyCard">
                            <div id="keyCard3">
                                <img class="m-auto" src="@/assets/images/yarn.png" />
                                <h4>Avantage 3</h4>
                                <p>Particularité concrète qui justifie l'avantage</p>
                            </div>
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
    import {onMounted, onUnmounted, watch} from 'vue'
    const props = defineProps({
        noAnimation: Boolean
    });

    function scrollListener() {
        if(document.getElementById("app").scrollTop > 250){
            if(document.getElementById("keyCard1").className != "initialClass" && document.getElementById("keyCard1").className != "initialClassReached"){
                document.getElementById("keyCard1").className = "animate__animated animate__fadeInLeft"
                document.getElementById("keyCard2").className = "animate__animated animate__fadeInLeft"
                document.getElementById("keyCard3").className = "animate__animated animate__fadeInLeft"
            }
            else{
                document.getElementById("keyCard1").className = "initialClassReached"
            }
        }
        else if(document.getElementById("keyCard1").className != "initialClass"){
        document.getElementById("keyCard1").className = "animate__animated animate__fadeOutLeft"
        document.getElementById("keyCard2").className = "animate__animated animate__fadeOutLeft"
        document.getElementById("keyCard3").className = "animate__animated animate__fadeOutLeft"
        }
    }

    onMounted(() => {
        window.addEventListener("scroll", scrollListener, true);
        document.getElementById("keyCard1").className = "initialClass"
        document.getElementById("keyCard2").className = "initialClass"
        document.getElementById("keyCard3").className = "initialClass"
    })

    onUnmounted(() => {
        window.removeEventListener("scroll", scrollListener, true);
    })

    watch(props, () => {
        if(props.noAnimation){
            window.removeEventListener("scroll", scrollListener, true);
        }
    })
</script>

<style scoped>
.keyCard{
    /* border: #dbaa93be solid 5px; */
    border-radius: 25px;
    min-height: 176px;
}
.keyPointsDiv{
  /* margin: 40px 0; */
  padding: 70px 0;
  background-color: #dbaa933e;
}
.keyCards{
    min-height: 176px;
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
    transform: scale3d(1.03, 1.03, 1.03);
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