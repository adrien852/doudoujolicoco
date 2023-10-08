<template>
    <div id="shopItems" class="row d-flex justify-content-left col-xl-6 col-lg-7 mx-auto">
        <div class="position-relative mb-3 w-100" v-for="(item, index) in items">
            <div @click="cartStore.deleteItem(index)" class="bin"><img class="w-100" src="@/assets/images/bin.png"/></div>
            <ShopItem :item="item" :longDisplay="true"/>
        </div>
        <div class="d-flex totalContainer align-items-center justify-content-between w-100">
            <p class="m-0">Total</p>
            <p class="m-0">{{ cartStore.subTotal }}€</p>
        </div>
    </div>
</template>

<script setup>
    import ShopItem from '@/components/ShopComponents/ShopItem.vue';
    import { useCartStore } from '@/stores/CartStore'

    const cartStore = useCartStore();

    const props = defineProps({
        items: Array
    });
</script>

<style scoped>
p{
    font-size: 15pt;
}
.bin{
    padding:5px;
    position: absolute;
    width: 35px;
    z-index: 50;
    top: 5px;
    right: 25px;
    cursor: pointer;
    -webkit-transition: transform 0.1s ease-out;
        -moz-transition: transform 0.1s ease-out;
        -o-transition: transform 0.1s ease-out;
        transition: transform 0.1s ease-out;
}
.bin:hover{
    transform: scale(1.15);
        -webkit-transition: transform 0.1s ease-out;
        -moz-transition: transform 0.1s ease-out;
        -o-transition: transform 0.1s ease-out;
        transition: transform 0.1s ease-out;
}
.totalContainer{
        background-color: #94bcd814;
        padding: 10px 15px;
    }
</style>