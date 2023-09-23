<template>
    <RouterLink :to="'/item/'+item.id" class="">
        <div class="shopItemCard bg-white d-flex flex-column">
            <img width="300" height="300" :id="'item'+item.id" :src="item.image">
            <p class="itemCategory text-center pt-2 text-capitalize">{{ item.category }}</p>
            <div class="itemTitle text-center d-flex">
                <p class="m-auto">{{ item.title }}</p>
            </div>
        </div>
    </RouterLink>
    
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
    item: Object
})
</script>

<style scoped>
    .shopItemCard{
        border-radius: 10px;
        box-shadow: 2px 3px 8px #0000001f;
    }
    a{
        -webkit-transition: transform 0.1s ease-out;
        -moz-transition: transform 0.1s ease-out;
        -o-transition: transform 0.1s ease-out;
        transition: transform 0.1s ease-out;
        color:initial;
        height: fit-content;
        width: 100%;
    }
    a:hover{
        transform: scale(1.03);
        -webkit-transition: transform 0.1s ease-out;
        -moz-transition: transform 0.1s ease-out;
        -o-transition: transform 0.1s ease-out;
        transition: transform 0.1s ease-out;
        color: initial;
        text-decoration: none;
    }
    .shopItemCard img{
        border-radius:10px 10px 0 0;
        width: auto;
    }
    .itemCategory{
        font-size: small;
        opacity: 0.6;
        margin-bottom: 0;
    }
    .itemTitle{
        font-size:larger;
        opacity: 1;
        height:78px;
        overflow: hidden;
    }
    .itemTitle p{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        padding: 15px;
    }
    img{
        padding:15px;
        object-fit: contain;
    }
</style>