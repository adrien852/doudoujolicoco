<template>
    <RouterLink :to="'/article/'+item.normalized" >
        <div :style="{height: longDisplay ? '150px' : 'initial'}" :class="['bg-white d-flex w-100', {'flex-column shopItemCard':!longDisplay}]">
            <div class="cartImgContainer">
                <img :class="[{'h-100 cartImg': longDisplay}, {'w-100 zoom': !longDisplay}]" width="300" height="300" :src="imageUrl">
            </div>
            <div :class="['d-flex flex-column justify-content-center', longDisplay ? 'text-left mr-auto px-md-4 pl-2' : 'text-center m-auto']">
                <p class="itemCategory text-uppercase">{{ item.category.name }}</p>
                <div class="itemTitle d-flex">
                    <p :class="['my-auto', {'m-auto': !longDisplay}]">{{ item.name }}</p>
                </div>
                <p class="itemCategory">{{ item.price }}€</p>
            </div>
            <!-- <p :class="['itemPrice text-center ml-3 my-auto mr-4', {'d-none':!longDisplay}]">{{ item.price }}€</p> -->
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

const imageUrl = computed(() => new URL(`/src/assets/images/${props.item.images[0]}`, import.meta.url).href)

</script>

<style scoped>
    .shopItemCard{
        border-radius: 10px;
        box-shadow: 2px 3px 8px #0000001f;
    }
    a{
        color:#22211F;
        height: fit-content;
    }
    .zoom:hover{
        transform: scale(1.02) rotate(0.03deg);
        -webkit-transform: scale(1.02) rotate(0.03deg);
        -moz-transform: scale(1.02) rotate(0.03deg);
        -webkit-transition: transform 0.3s ease-out;
        -moz-transition: transform 0.3s ease-out;
        -o-transition: transform 0.3s ease-out;
        transition: transform 0.3s ease-out;
    }
    .zoom{
        -webkit-transition: transform 0.3s ease-out;
        -moz-transition: transform 0.3s ease-out;
        -o-transition: transform 0.3s ease-out;
        transition: transform 0.3s ease-out;
    }
    a:hover{
        color: #22211F;
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
        font-size:16pt;
        opacity: 1;
        height:38px;
        overflow: hidden;
    }
    .itemTitle p{
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: anywhere;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .cartImg{
        object-position: 50% 40%;
        width: 160px;
    }
    img{
        object-fit: cover;
    }
    .itemPrice{
        color: #94BCD8;
        font-size: 13pt;
        font-weight: bold;
    }
    .cartImgContainer{
        overflow: hidden;
    }
</style>