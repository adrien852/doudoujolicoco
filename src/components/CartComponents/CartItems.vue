<template>
    <div id="cartItems" class="row d-flex justify-content-left col mx-auto">
        <div class="position-relative mb-3 w-100" v-for="(item, index) in items">
            <div @click="cartStore.deleteItem(index)" class="bin"><img class="w-100 cartTriggerToggler" src="@/assets/images/bin.png"/></div>
            <ShopItem :item="item" :longDisplay="true"/>
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
    right: 6px;
    cursor: pointer;
    transform: scale3d(1, 1, 1);
    -webkit-transition: transform 0.1s ease-out;
        -moz-transition: transform 0.1s ease-out;
        -o-transition: transform 0.1s ease-out;
        transition: transform 0.1s ease-out;
}
.bin:hover{
    transform: scale3d(1.10, 1.10, 1.10);
        -webkit-transition: transform 0.1s ease-out;
        -moz-transition: transform 0.1s ease-out;
        -o-transition: transform 0.1s ease-out;
        transition: transform 0.1s ease-out;
}
.totalContainer{
    background-color: #d2d2d214;
    padding: 10px 15px;
    height: 50px;
}
#cartItems{
    height: fit-content;
}
</style>