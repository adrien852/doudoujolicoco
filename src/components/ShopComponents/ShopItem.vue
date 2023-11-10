<template>
    <div>
        <div :style="{height: longDisplay ? '150px' : 'initial'}" :class="['bg-white d-flex w-100', {'flex-column shopItemCard position-relative':!longDisplay}]">
            <span @click="addItemToCart" v-if="!longDisplay" class="addBasket cartTriggerToggler">
                <img class="cartTriggerToggler" src="@/assets/images/add-to-cart-white2.png" />
            </span>
            <RouterLink :to="'/article/'+item.normalized" class="cartImgContainer">
                <img :class="[{'h-100 cartImg': longDisplay}, {'w-100 zoom': !longDisplay}]" width="300" height="300" :src="imageUrl">
            </RouterLink>
            <RouterLink :to="'/article/'+item.normalized" v-if="!hideDescription" :style="{minWidth: longDisplay ? '140px' : 'initial'}" :class="['d-flex flex-column justify-content-center', longDisplay ? 'text-left mr-auto px-md-4 pl-2' : 'text-center m-auto']">
                <p class="itemCategory text-uppercase">{{ item.category.name }}</p>
                <div class="itemTitle d-flex">
                    <p :class="['my-auto', {'m-auto': !longDisplay}]">{{ item.name }}</p>
                </div>
                <p class="itemCategory">{{ item.price }}€</p>
            </RouterLink>
            <!-- <p :class="['itemPrice text-center ml-3 my-auto mr-4', {'d-none':!longDisplay}]">{{ item.price }}€</p> -->
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import {computed} from 'vue'
import { useCartStore } from '@/stores/CartStore'
const props = defineProps({
    item: Object,
    longDisplay: Boolean,
    hideDescription: {
        type: Boolean,
        default: false
    }
})

const cartStore = useCartStore();

const imageUrl = computed(() => new URL(`/src/assets/images/${props.item.images[0]}`, import.meta.url).href)


function addItemToCart(){
    cartStore.addItem(props.item);
    openSideCart();
}

function openSideCart(){
    let sideCart = document.getElementById("sideCart");
    sideCart.style.right = "0";
    sideCart.classList.add('toggled');
}


</script>

<style scoped>
    .addBasket{
        border: 2px dashed #ffffff;
        position: absolute;
        background-color: #94BCD8;
        border-radius: 100%;
        width: 55px;
        height: 53px;
        z-index: 500;
        padding: 8px;
        right:5px;
        top:5px;
        transform: scale(1) rotate(0.01deg);
        -webkit-transform: scale(1) rotate(0.01deg);
        -moz-transform: scale(1) rotate(0.01deg);
        -webkit-transition: transform 0.1s ease-out;
        -moz-transition: transform 0.1s ease-out;
        -o-transition: transform 0.1s ease-out;
        transition: transform 0.1s ease-out;
    }
    .addBasket:hover{
        transform: scale(1.05) rotate(0.01deg);
        -webkit-transform: scale(1.05) rotate(0.01deg);
        -moz-transform: scale(1.05) rotate(0.01deg);
        -webkit-transition: transform 0.1s ease-out;
        -moz-transition: transform 0.1s ease-out;
        -o-transition: transform 0.1s ease-out;
        transition: transform 0.1s ease-out;
    }
    .addBasket img{
        width: 100%;
    }
    .shopItemCard{
        box-shadow: 2px 3px 8px #0000001f;
        border-radius: 10px;
    }
    a{
        color:#22211F;
        /* height: fit-content; */
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
    .cartImgContainer img{
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
        max-width: 210px;
        width: 100%;
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
        border-radius: 10px;
    }
</style>