<script setup>
import ShopFilter from './ShopFilter.vue'

function filterShop(category){
    // alert('Radio: '+category)
}

function filterShopAndCollapse(category, id){
    // alert('Checkbox: '+category)
}
function closeAllFiltersBut(){
    
}
</script>

<template>
    <div class="filterContainer">
        <h4>Filtres</h4>
        <div class="filterList">
            <ShopFilter :id="1" :filter="null" @closeAllFiltersBut="closeAllFiltersBut(filter)" @radio="filterShop" @checkbox="filterShopAndCollapse"/>

            <ShopFilter :id="2" :filter="null" @radio="filterShop" @checkbox="filterShopAndCollapse"/>

            <ShopFilter :id="3" :filter="null" @radio="filterShop" @checkbox="filterShopAndCollapse"/>
        </div>
                
    </div>
</template>

<style scoped>
.filterContainer{
    position: -webkit-sticky;
    position: sticky;
    top: 2rem;
    display: block !important;
    height: calc(100vh - 7rem);
    padding-left: .25rem;
    margin-left: -.25rem;
    overflow-y: auto;
    border-right: solid #a3867264 1px;
}

.filterList{
    width:150px;
}
</style>