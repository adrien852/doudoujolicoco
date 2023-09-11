<script setup>
import ShopItem from '../components/ShopComponents/ShopItem.vue'
import Filters from '../components/ShopComponents/ShopFilters.vue'
</script>

<template>
<div class="">
    <div class="container py-5 d-flex">
        <Filters />
        <div class="row d-flex justify-content-left offset-lg-1 col-lg-8 col-12">
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
        </div>
    </div>
</div>

</template>

<style scoped>
.container{
    max-width: 1600px;
}
</style>
