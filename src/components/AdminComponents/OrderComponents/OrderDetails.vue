<template>
    <div class="orderDetails mb-3 col-xl-5 col-12">
        <div class="card">
            <div class="card-header">
                Commande <b>#{{ order.reference }}</b>
            </div>
            <div class="card-body px-sm-2 px-0 d-flex flex-wrap">
                <div v-if="order.promo" class="w-100">
                    <p class="m-0"> Code promo utilisé : <span class="font-weight-bold">{{ order.promo.code }}</span></p>
                    <hr/>
                </div>
                <div class="col-12 mb-2" v-for="item in order.items">
                    <ShopItem :item="item.product" :longDisplay="true" /><span class="quantity">x {{ item.quantity }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ShopItem from '@/components/ShopComponents/ShopItem.vue'

const props = defineProps({
    order: Object
})
</script>

<style scoped>
.orderDetails img{
    object-fit: contain;
}
.quantity {
    font-weight: bold;
    position: absolute;
    right: 10px;
    bottom: 5px;
}
</style>