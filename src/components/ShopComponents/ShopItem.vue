<template>
    <RouterLink :to="'/item/'+item.normalized" :class="{'zoom': !longDisplay}">
        <div :style="{height: longDisplay ? '150px' : 'initial'}" :class="['bg-white d-flex', {'flex-column shopItemCard':!longDisplay}]">
            <img :class="[{'h-auto cartImg': longDisplay}]" width="300" height="300" :src="imageUrl">
            <div :class="['d-flex flex-column justify-content-center', longDisplay ? 'text-left mr-auto px-4' : 'text-center m-auto']">
                <p class="itemCategory pt-2 text-capitalize">{{ item.category.name }}</p>
                <div class="itemTitle d-flex">
                    <p :class="['my-auto', {'m-auto': !longDisplay}]">{{ item.name }}</p>
                </div>
            </div>
            <p :class="['itemPrice text-center ml-auto my-auto mr-4', {'d-none':!longDisplay}]">{{ item.price }}€</p>
        </div>
    </RouterLink>
    
</template>

<script setup>
import { RouterLink } from 'vue-router'
import {computed} from 'vue'
const props = defineProps({
    item: Object,
    longDisplay: Boolean
})

const imageUrl = computed(() => new URL(`/src/assets/images/${props.item.image}`, import.meta.url).href)

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
    }
    .zoom:hover{
        transform: scale(1.03);
        -webkit-transition: transform 0.1s ease-out;
        -moz-transition: transform 0.1s ease-out;
        -o-transition: transform 0.1s ease-out;
        transition: transform 0.1s ease-out;
    }
    a:hover{
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
        word-wrap: anywhere;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .cartImg{
        object-position: 50% 40%;
        max-width: 35%;
    }
    img{
        object-fit: cover;
    }
    .itemPrice{
        color: #6baaca;
        font-size: 13pt;
        font-weight: bold;
    }
</style>