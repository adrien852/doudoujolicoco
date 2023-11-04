<template>
    <div class="marginDiv">
        <h1 class="ml-3 text-left">Nouvelles confections</h1>
        <div class="d-flex flex-wrap">
            <div class="col-lg-3 col-sm-6 col-12 d-flex flex-column">
                <ShopItem class="py-2" :hideDescription="true" :item="items[0]" />
                <ShopItem class="py-2" :hideDescription="true" :item="items[6]" />
            </div>
            <div class="col-lg-3 col-sm-6 col-12 d-flex flex-column">
                <ShopItem class="py-2" :hideDescription="true" :item="items[5]" />
                <ShopItem class="py-2" :hideDescription="true" :item="items[4]" />
            </div>
            <div class="d-sm-flex d-none col-lg-6 p-0 col-12 flex-wrap">
                <ShopItem class="col-lg-12 col-6 py-2" :hideDescription="true" :item="items[7]" />
                <ShopItem class="col-lg-12 col-6 py-2" :hideDescription="true" :item="items[9]" />
            </div>
        </div>
    </div>
</template>

<script setup>
  import ShopItem from '@/components/ShopComponents/ShopItem.vue'

  const props = defineProps({
    items: Array,
    isLoading: Boolean
  });
  
</script>

<style scoped>
.marginDiv{
    margin: 40px 0;
    padding: 30px 0;
}
</style>