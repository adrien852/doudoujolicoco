<template>
    <div class="navPath mb-lg-3">
        <p class="ml-sm-5 ml-3">
            <span v-for="(pathElement, index) in path">
                <span v-if="index !== path.length - 1">
                    <RouterLink class="text-uppercase" :to="pathElement.route">{{ pathElement.name }}</RouterLink> 
                </span>
                <span v-if="index !== path.length - 1 && path[index+1].name"> / </span>
                <span class="text-uppercase" v-if="index === path.length - 1">{{ pathElement.name }}</span>
            </span>
        </p>
    </div>
</template>

<script setup>
const props = defineProps({
    path: Array
})
</script>

<style scoped>
    .navPath{
        width: 100%;
        height: 50px;
        background-image: url("@/assets/images/clouds.jpg");
        background-size: contain;
        opacity: 90%;
        display: flex;
        z-index: 151;
        position: relative;
    }
    a{
        text-decoration: none;
        color:#22211F;
        height: fit-content;
        background-repeat: no-repeat;
        transition: background-size .4s cubic-bezier(.22,.61,.36,1),color .2s ease-out;
        background-size: 0 1px;
        background-image: linear-gradient(white,white);
        background-position: 0 100%;
    }
    a:hover{
        background-size: 100% 1px;
    }
    p{
        margin: auto 0;
        color: #22211F;
        text-shadow:white 1px 1px 0px;
        font-size: 14px;
        font-weight: bold;
    }
    @media(max-width:575px) {
        p{
            font-size: 12px;
        }
    }
</style>