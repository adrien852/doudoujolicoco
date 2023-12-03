<template>
    <div class="marginDiv">
        <h1 class="ml-3 text-left">Nouvelles confections</h1>
        <div class="itemContainer d-flex flex-wrap">
            <div id="items1" class="d-none col-lg-3 col-sm-6 col-12 flex-column">
                <ShopItem class="py-2" :hideDescription="true" :item="items[0]" />
                <ShopItem class="py-2" :hideDescription="true" :item="items[6]" />
            </div>
            <div id="items2" class="d-none col-lg-3 col-sm-6 col-12 flex-column">
                <ShopItem class="py-2" :hideDescription="true" :item="items[5]" />
                <ShopItem class="py-2" :hideDescription="true" :item="items[4]" />
            </div>
            <div id="items3" class="d-none col-lg-6 p-0 col-12 flex-wrap">
                <ShopItem class="col-lg-12 col-6 py-2" :hideDescription="true" :item="items[7]" />
                <ShopItem class="col-lg-12 col-6 py-2" :hideDescription="true" :item="items[9]" />
            </div>
        </div>
    </div>
</template>

<script setup>
  import ShopItem from '@/components/ShopComponents/ShopItem.vue'
  import {onMounted} from 'vue'

  const props = defineProps({
    items: Array,
    isLoading: Boolean
  });
  
  
  onMounted(() => {
    window.addEventListener("scroll", function () {
      if(document.getElementById("app") && document.getElementById("app").scrollTop > 860){
        document.getElementById("items1").className = "col-lg-3 col-sm-6 col-12 d-flex flex-column animate__animated animate__fadeInLeft"
        document.getElementById("items2").className = "col-lg-3 col-sm-6 col-12 d-flex flex-column animate__animated animate__fadeInLeft"
        document.getElementById("items3").className = "d-sm-flex d-none col-lg-6 p-0 col-12 flex-wrap animate__animated animate__fadeInRight"
      }
      if(document.getElementById("items1") && document.getElementById("items1").className != "d-none col-lg-3 col-sm-6 col-12 flex-column"){
        document.getElementById("items1").className = "col-lg-3 col-sm-6 col-12 d-flex flex-column animate__animated animate__fadeOutLeft"
        document.getElementById("items2").className = "col-lg-3 col-sm-6 col-12 d-flex flex-column animate__animated animate__fadeOutLeft"
        document.getElementById("items3").className = "d-sm-flex d-none col-lg-6 p-0 col-12 flex-wrap animate__animated animate__fadeOutRight"
      }
    }, true);
  })
</script>

<style scoped>
.marginDiv{
    margin: 40px 0;
    padding: 30px 0;
}
.itemContainer{
  min-height: 632px;
}
</style>
<style>
    .animate__fadeInRight, .animate__fadeInLeft {
        --animate-duration: 0.7s;
    }
</style>