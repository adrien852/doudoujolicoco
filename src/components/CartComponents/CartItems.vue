<template>
    <div class="container">
        <div class="d-flex row mt-4">
            <div id="shopItems" class="row d-flex justify-content-left col-lg-9 mx-auto">
                <div class="col-12 position-relative mb-3" v-for="(item, index) in items">
                    <div @click="cartStore.deleteItem(index)" class="bin"><img class="w-100" src="@/assets/images/bin.png"/></div>
                    <ShopItem :item="item" :longDisplay="true"/>
                </div>
            </div>
            <div id="cartDetails" class="col-lg-3">
                <CartDetails />
            </div>
        </div>
    </div>

    
</template>

<script setup>
    import ShopItem from '@/components/ShopComponents/ShopItem.vue';
    import CartDetails from '@/components/CartComponents/CartDetails.vue';
    import { useCartStore } from '@/stores/CartStore'

    const cartStore = useCartStore();

    const props = defineProps({
        items: Array
    });
</script>

<style scoped>
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
#shopItems img:hover{
    transform: scale(1.15);
        -webkit-transition: transform 0.1s ease-out;
        -moz-transition: transform 0.1s ease-out;
        -o-transition: transform 0.1s ease-out;
        transition: transform 0.1s ease-out;
}
</style>