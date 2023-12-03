<template>
    <div class="reviewContainer py-5">
        <div class="container d-flex flex-wrap">
                <div id="animated1" class="d-none flex-sm-row flex-column col-lg-6 col-12">
                    <img class="reviewPic col-sm-6 mx-auto pb-sm-0 mb-3" src="@/assets/images/review1.jpg" />
                    <div class="col-sm-6 d-flex flex-column justify-content-center">
                        <q class="review">
                            Mes petits adorent leurs doudous ! Ils ne les lachent plus et en demandent d'autres.
                        </q>
                        <cite class="blockquote-footer" title="name">Laura</cite>
                        <div class="stars d-flex p-2">
                            <img class="w-100 px-1" src="@/assets/images/star.png"/>
                            <img class="w-100 px-1" src="@/assets/images/star.png"/>
                            <img class="w-100 px-1" src="@/assets/images/star.png"/>
                            <img class="w-100 px-1" src="@/assets/images/star.png"/>
                            <img class="w-100 px-1" src="@/assets/images/star.png"/>
                        </div>
                    </div>
                </div>
                <div id="animated2" class="d-none flex-sm-row flex-column col-lg-6 col-12 mt-lg-0 mt-5">
                    <img class="reviewPic col-sm-6 mx-auto pb-sm-0 mb-3" src="@/assets/images/review1.jpg" />
                    <div class="col-sm-6 d-flex flex-column justify-content-center">
                        <q class="review">
                            Mes petits adorent leurs doudous ! Ils ne les lachent plus et en demandent d'autres.
                        </q>
                        <cite class="blockquote-footer" title="name">Laura</cite>
                        <div class="stars d-flex p-2">
                            <img class="w-100 px-1" src="@/assets/images/star.png"/>
                            <img class="w-100 px-1" src="@/assets/images/star.png"/>
                            <img class="w-100 px-1" src="@/assets/images/star.png"/>
                            <img class="w-100 px-1" src="@/assets/images/star.png"/>
                            <img class="w-100 px-1" src="@/assets/images/star.png"/>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    
</template>

<script setup>
    import {onMounted} from 'vue'

    onMounted(() => {
        window.addEventListener("scroll", function () {
        if(document.getElementById("app") && document.getElementById("app").scrollTop > 1344){
            document.getElementById("animated1").className = "d-flex flex-sm-row flex-column col-lg-6 col-12 animate__animated animate__fadeInLeft"
            document.getElementById("animated2").className = "d-flex flex-sm-row flex-column col-lg-6 col-12 mt-lg-0 mt-5 animate__animated animate__fadeInRight"
        }
        else if(document.getElementById("animated1") && document.getElementById("animated1").className != "d-none flex-sm-row flex-column col-lg-6 col-12"){
            document.getElementById("animated1").className = "d-flex flex-sm-row flex-column col-lg-6 col-12 animate__animated animate__fadeOutLeft"
            document.getElementById("animated2").className = "d-flex flex-sm-row flex-column col-lg-6 col-12 mt-lg-0 mt-5 animate__animated animate__fadeOutRight"
        }
        }, true);
    })
</script>

<style scoped>
    .reviewContainer{
        background-color: #94bcd877;
        min-height: 390px;
    }

    .review{
        font-size: 16pt;
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
        width: 80%;
        max-width: 232px;
        margin: 0 auto;
    }
</style>