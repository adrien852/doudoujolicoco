<template>
    <RouterLink to="/cart" :number="cartStore.isEmpty ? '' : cartStore.count" :style="{'--show': cartStore.isEmpty ? 'none' : 'block'}" class="iconContainer">
        <img src="@/assets/images/trolley.png" />
    </RouterLink>
</template>
<script setup>
    import { useCartStore } from "@/stores/CartStore";
    import { RouterLink, RouterView } from 'vue-router'
    import { onMounted, watch, ref } from "vue"

    const cartStore = useCartStore();
    cartStore.fill();

</script>
<style scoped>
    .iconContainer{
        width: auto;
        height: auto;
        position: relative;
    }
    img{
        width: 100%;
    }
    .iconContainer::after{
        position: absolute;
        right:-10px;
        top:-5px;
        display: var(--show);
        content: attr(number);
        font-size: 10pt;
        color:white;
        font-weight: bold;
        text-align: center;
        width:21px;
        height:21px;
        background-color: red;
        border-radius: 100%;
    }
</style>