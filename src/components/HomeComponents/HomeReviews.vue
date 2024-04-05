<template>
    <div class="reviewContainer py-5">
        <div class="container d-flex flex-wrap">
                <div id="animated1" class="initialClass d-flex flex-sm-row flex-column col-lg-6 col-12">
                    <div class="col-sm-6 d-flex flex-column justify-content-center">
                        <img class="reviewPic col-sm-6 mx-auto pb-sm-0 mb-3" src="@/assets/images/review1.png" />
                        <div class="stars d-flex p-2">
                            <img class="px-1" src="@/assets/images/star.png"/>
                            <img class="px-1" src="@/assets/images/star.png"/>
                            <img class="px-1" src="@/assets/images/star.png"/>
                            <img class="px-1" src="@/assets/images/star.png"/>
                            <img class="px-1" src="@/assets/images/star.png"/>
                        </div>
                    </div>
                    <div class="col-sm-6 d-flex flex-column justify-content-center">
                        <q class="review">
                            La laine est si douce et les couleurs sont si vives.
                        </q>
                        <cite class="blockquote-footer" title="name">Julie</cite>
                    </div>
                </div>
                <div id="animated2" class="initialClass d-flex flex-sm-row flex-column col-lg-6 col-12 mt-lg-0 mt-5">
                    <div class="col-sm-6 d-flex flex-column justify-content-center">
                        <img class="reviewPic col-sm-6 mx-auto pb-sm-0 mb-3" src="@/assets/images/review2.png" />
                        <div class="stars d-flex p-2">
                            <img class="px-1" src="@/assets/images/star.png"/>
                            <img class="px-1" src="@/assets/images/star.png"/>
                            <img class="px-1" src="@/assets/images/star.png"/>
                            <img class="px-1" src="@/assets/images/star.png"/>
                            <img class="px-1" src="@/assets/images/star.png"/>
                        </div>
                    </div>
                    <div class="col-sm-6 d-flex flex-column justify-content-center">
                        <q class="review">
                            Mes petits adorent leurs nouvelles peluches.
                        </q>
                        <cite class="blockquote-footer" title="name">Laura</cite>
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
        if(document.getElementById("app") && document.getElementById("app").scrollTop > 1300){
            if(!document.getElementById("animated1").className.includes("initialClass") && !document.getElementById("animated1").className.includes("initialReached")){
                document.getElementById("animated1").className = "d-flex flex-sm-row flex-column col-lg-6 col-12 animate__animated animate__fadeInLeft"
                document.getElementById("animated2").className = "d-flex flex-sm-row flex-column col-lg-6 col-12 mt-lg-0 mt-5 animate__animated animate__fadeInRight"
            }
            else{
                document.getElementById("animated1").className = "initialReached d-flex flex-sm-row flex-column col-lg-6 col-12"
            }
        }
        else if(!document.getElementById("animated1").className.includes("initialClass")){
            document.getElementById("animated1").className = "d-flex flex-sm-row flex-column col-lg-6 col-12 animate__animated animate__fadeOutLeft"
            document.getElementById("animated2").className = "d-flex flex-sm-row flex-column col-lg-6 col-12 mt-lg-0 mt-5 animate__animated animate__fadeOutRight"
        }
    }

    onMounted(() => {
        window.addEventListener("scroll", scrollListener, true);
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
    .reviewContainer{
        min-height: 390px;
        overflow-x: hidden;
    }

    .review{
        font-size: 15pt;
    }

    .reviewPic{
        max-width: 262px;
        width: 100%;
        border-radius: 100%;
        height: 100%;
        object-fit: cover;
    }

    .blockquote-footer{
        font-size: 13pt;
        color: initial;
    }

    .stars{
        max-width: 232px;
        margin: 0 auto;
    }

    .stars img{
        width: 34px;
    }
</style>