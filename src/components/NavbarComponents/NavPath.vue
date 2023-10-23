<template>
    <div class="navPath">
        <p v-for="pathElement in path">
            <a href="#">{{ pathElement }}</a>
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
        height: 90px;
        background-image: url("@/assets/images/clouds.jpg");
        background-size: contain;
        opacity: 60%;
        display: flex;
    }
    a{
        color:white;
    }
    p{
        margin: auto 0;
    }
</style>