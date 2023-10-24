<template>
  <header id="header" :class="{'noNavMargin': false}">
    <Navbar />
  </header>
  <RouterView />
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from '@/components/NavbarComponents/Navbar.vue'
  import { useRoute } from 'vue-router'
  import { watch, onMounted, nextTick } from 'vue';
  const route = useRoute();
  
  onMounted(() => {
    watch(route, () =>{
      nextTick(() => {
        const el = document.getElementById("header");
        el.scrollIntoView({block: "start", behavior: "smooth"});
      })
    })
  })
  

</script>

<style>
  header{
    margin-bottom: 92px;
    scroll-margin-top: 100px;
  }
  .noNavMargin{
    margin-bottom: 0px;
  }
</style>
