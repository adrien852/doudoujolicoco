<template>
    <div>
        <div id="shopItems" class="flex-wrap d-flex justify-content-left mx-auto w-100">
            <SimpleShopItem class="col-lg-3 col-sm-6 col-12 pt-sm-3 pb-5" v-for="item in paginatedItems" :item="item"/>
        </div>
    </div>
</template>

<script setup>
    import SimpleShopItem from './SimpleShopItem.vue';

    const props = defineProps({
        paginatedItems: Array,
    })

</script>


<style>
#shopItems{
    height: fit-content;
}

.pagination a {
  color: #22211F;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination .active{
    font-weight: bold;
    background-color: #a18f7b1a;
}

.pagination li:not(.active, .disabled){
    cursor: pointer;
}

.pagination li:not(.active, .disabled):hover{
    background-color: #a18f7b1a;
    transition: background-color .5s;
}

.pagination .disabled a{
    color: lightgray;
}
</style>