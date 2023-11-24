<template>
    <div>
        <div class="bg-white d-flex w-100 flex-column shopItemCard position-relative">
            <span @click="addItemToCart" v-if="!longDisplay" class="addBasket cartTriggerToggler">
                <img class="cartTriggerToggler" src="@/assets/images/add-to-cart-white2.png" />
            </span>
            <RouterLink :to="'/article/'+item.normalized" class="cartImgContainer">
                <img class="w-100 zoom" width="300" height="300" :src="item.images[0]">
            </RouterLink>
            <RouterLink :to="'/article/'+item.normalized" class="mt-2 px-1">
                <div class="itemTitle text-left">
                    <p class="m-0">{{ item.name }}</p>
                </div>
            </RouterLink>
            <RouterLink class="d-flex align-items-center justify-content-between px-1" :to="'/boutique/'+item.category.normalized">
                <p class="itemCategory text-uppercase ">{{ item.category.name }}</p>
                <p class="itemPrice m-0">{{ parseFloat(item.price) }}€</p>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/CartStore'
const props = defineProps({
    item: Object
})

const cartStore = useCartStore();

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
        background-color: #f4aa46;
        border-radius: 100%;
        width: 55px;
        height: 53px;
        z-index: 10;
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
        cursor: pointer;
    }
    .addBasket img{
        width: 100%;
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
        /* width: auto; */
    }
    .itemCategory{
        opacity: 0.6;
        margin-bottom: 0;
        font-size: 8pt;
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
        font-size: 13pt;
    }
    .cartImgContainer{
        overflow: hidden;
    }
</style>