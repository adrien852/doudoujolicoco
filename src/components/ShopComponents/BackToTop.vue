<template>
    <button @click="scrollToTop" ref="backTopButton" class="backTopButton btn"></button>
</template>

<script setup>
    import { onMounted, ref, nextTick } from 'vue';
    const backTopButton = ref({})
    const app = document.getElementById('app');

    onMounted(() => {
        const button = document.querySelector('button.backTopButton')
        app.addEventListener('scroll', e => {
            if(app.scrollTop > 100) {
                button.style.opacity = 100
            }
            else{
                button.style.opacity = 0
            }
        });
    })

    function scrollToTop(){
        const header = document.querySelector('header')
        nextTick(() => {
            header.scrollIntoView({ behavior: 'smooth'});
        });
    }
</script>

<style scoped>
    .backTopButton{
        border-radius: 100%;
        background-color: #e7e7e6;
        width: 60px;
        height: 60px;
        z-index: 300;
        display: flex;
        opacity: 0;
        left: 30px;
        top:70px;
        padding: 0;
        transition: opacity 0.2s ease-out;
        -webkit-transition: opacity 0.2s ease-out;
        -moz-transition: opacity 0.2s ease-out;
        -o-transition: opacity 0.2s ease-out;
        transition: opacity 0.2s ease-out;
    }
    .backTopButton::after{
        content:"\02191";
        font-size: 32pt;
        margin: auto;
    }
</style>