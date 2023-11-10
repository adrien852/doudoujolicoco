<template>
    <SideCart />
    <div id="cartIcon" :number="cartStore.isEmpty ? '' : cartStore.count" :style="{'--show': cartStore.isEmpty ? 'none' : 'block'}" class="iconContainer cartTriggerToggler">
        <img class="cartTriggerToggler" src="@/assets/images/trolley.png" />
    </div>
</template>
<script setup>
    import { useCartStore } from "@/stores/CartStore";
    import SideCart from '@/components/CartComponents/SideCart.vue';
    import { RouterLink, RouterView } from 'vue-router'
    import { onMounted, watch, ref } from "vue"



    const cartStore = useCartStore();

</script>
<style scoped>
    #cartIcon{
        cursor: pointer;
    }
    .iconContainer{
        width: auto;
        height: auto;
        position: relative;
    }
    img{
        width: 40px;
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
        background-color: #c52222;
        border-radius: 100%;
    }
</style>