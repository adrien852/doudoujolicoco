<template>
    <RouterLink :to="'/boutique/'+category.normalized">
        <div class="bg-white d-flex w-100 flex-column shopItemCard">
            <div class="itemTitle d-flex justify-content-center position-relative">
                <p class="m-auto text-uppercase position-absolute">{{ category.name }}</p>
            </div>
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
        box-shadow: 2px 3px 8px #0000001f;
        overflow: hidden;
    }
    a{
        color:#22211F;
        height: fit-content;
    }
    .zoom:hover{
        transform: scale(1.02) rotate(0.01deg);
        -webkit-transform: scale(1.02) rotate(0.01deg);
        -moz-transform: scale(1.02) rotate(0.01deg);
        -webkit-transition: transform 0.1s ease-out;
        -moz-transition: transform 0.1s ease-out;
        -o-transition: transform 0.1s ease-out;
        transition: transform 0.1s ease-out;
    }
    .zoom{
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
        width: auto;
        height: 600px;
    }
    @media(max-width: 991px) {
        .shopItemCard img{
            height: 300px;
        }
    }
    .cartImg{
        object-position: 50% 40%;
        width: 160px;
    }
    img{
        object-fit: cover;
    }
    .itemTitle p{
        font-family: 'Kalam';
        letter-spacing: -1px;
        z-index: 10;
        top:10px;
        background-color: white;
        padding: 3px 50px 1px 50px;
        border-radius: 25px;
    }
    .itemTitle p::after{
        content:"●";
        position: absolute;
        right: 10px;
        color: #9D877A;
    }
    .itemTitle p::before{
        content:"●";
        position: absolute;
        left: 10px;
        color: #9D877A;
    }
</style>