<template>
    <div class="">
            <div class="mt-5 position-relative">
                <div class="bg-image w-100 d-flex align-items-center justify-content-center">
                    <div class="textContainer col-xl-4 col-lg-6 col-md-8 col-11 p-4 d-flex flex-column">
                        <h1>Rencontrez Coco</h1>
                        <p class="mt-2">
                            Corinne a toujours été animée par sa créativité manuelle, mais c'est lorsqu'elle a découvert l'art du crochet qu'elle a trouvé sa véritable passion. Ce qui la fait vibrer, c'est de voir les yeux de ses clients, petits et grands, s'illuminer de joie à la vue de ses créations.
                        </p>
                        <RouterLink class="keyPointsButton mt-3 mx-auto" to="/a-propos">
                            <button class="btn btn-primary">
                                <p class="px-3 m-0">En savoir plus</p>
                            </button>
                        </RouterLink>
                    </div>
                    <div class="col-xl-7 col-lg-5 d-lg-block d-none">
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
.bg-image{
    height:100vh;
    background-image: url("@/assets/images/coco2.jpg");
    background-repeat: no-repeat;
    background-size:cover;
    background-position: 50% 60%;
    opacity: 80%;
}
.textContainer{
    background-color: #21201f78;
    color: white;
}
.btn{
    background-color: #9D877A;
    border-color: #9D877A;
    width: fit-content;
}
.btn-primary:hover {
    color: #fff;
    background-color: #806e64;
    border-color: #806e64;
}
h1::after{
    background-color: #9D877A;
}
h1{
    color:white;
}
</style>