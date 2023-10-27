<template>
  <header style="position: relative;" id="header" :class="{'noNavMargin': false}">
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
    document.getElementById("app").addEventListener('click', (event) => {
        let sidebar = document.getElementById("mySidebar");
        if(
          !event.target.className.includes('navbar-toggler-icon') &&
          !event.target.className.includes('navbar-toggler')
        ){
          if(sidebar.className.includes('toggled')){
              sidebar.style.width = "0";
              sidebar.classList.remove('toggled');
          }
        }
        
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
