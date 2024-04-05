<template>
    <div class="bg-white d-flex w-100 flex-column shopItemCard">
        <img class="" width="300" height="300" :src="category.image">
    </div>
    <button class="btn position-absolute">
        <RouterLink to="/boutique">
            <h4 class="m-0">Découvrir</h4>
        </RouterLink>
    </button>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
    category: Object,
})

</script>

<style scoped>
    .btn{
        left: calc(50% - 77.5px);
        bottom: 10px;
        background-color: white;
        border-radius: 10px;
        -webkit-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
            -moz-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
            -o-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
            transition: transform 0.1s ease-out, background-color 0.2s ease-out;
        padding: 10px 20px;
    }
    .btn:hover{
        background-color: #F39E6A;
        color: white;
    }
    .shopItemCard{
        overflow: hidden;
    }
    a{
        color: #F39E6A;
        height: fit-content;
    }
    a:hover{
        text-decoration: none;
        color: white;
    }
    .shopItemCard img{
        width: auto;
        height: 420px;
    }
    img{
        object-fit: cover;
        object-position: 50% 40%;
    }
</style>