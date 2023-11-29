<template>
    <RouterLink :to="'/boutique/'+category.normalized">
        <div class="d-flex flex-column justify-content-center text-center mx-auto mb-2">
            <div class="itemTitle d-flex">
                <p class="m-auto text-uppercase">{{ category.name }}</p>
            </div>
        </div>
        <div class="bg-white d-flex w-100 flex-column shopItemCard">
            <img class="zoom" width="300" height="300" :src="category.image">
        </div>
    </RouterLink>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
    category: Object,
})

</script>

<style scoped>
    .shopItemCard{
        border-radius: 10px;
        box-shadow: 2px 3px 8px #0000001f;
        overflow: hidden;
    }
    a{
        color:#22211F;
        height: fit-content;
    }
    .zoom{
        transform: scale3d(1,1,1);
        -webkit-transition: transform 0.1s ease-out;
        -moz-transition: transform 0.1s ease-out;
        -o-transition: transform 0.1s ease-out;
        transition: transform 0.1s ease-out;
    }
    .zoom:hover{
        transform: scale3d(1.02,1.02,1.02);
        -webkit-transform: scale3d(1.02,1.02,1.02);
        -moz-transform: scale3d(1.02,1.02,1.02);
        -webkit-transition: transform 0.1s ease-out;
        -moz-transition: transform 0.1s ease-out;
        -o-transition: transform 0.1s ease-out;
        transition: transform 0.1s ease-out;
    }
    a:hover{
        color: #22211F;
        text-decoration: none;
    }
    .shopItemCard img{
        border-radius: 10px;
        width: auto;
        height: 200px;
    }
    .cartImg{
        object-position: 50% 40%;
        width: 160px;
    }
    img{
        object-fit: cover;
    }
</style>