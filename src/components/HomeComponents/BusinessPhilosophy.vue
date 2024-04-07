<template>
    <div class="">
            <div class="mt-5 position-relative">
                <div class="bg-image w-100">
                    
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
</style>