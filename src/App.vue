<template>
  <header style="position: relative;" id="header" :class="{'noNavMargin': false}">
    <Navbar />
  </header>
  <div class="content">
    <RouterView />
  </div>
  <MyFooter />
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from '@/components/NavbarComponents/Navbar.vue'
  import MyFooter from '@/components/FooterComponents/MyFooter.vue'
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
        let sideCart = document.getElementById("sideCart");
        if(
          !event.target.className.includes('navbar-toggler-icon') &&
          !event.target.className.includes('navbar-toggler')
        ){
          if(sidebar.className.includes('toggled')){
              sidebar.style.left = "-250px";
              sidebar.classList.remove('toggled');
          }
        }
        else{
          sideCart.style.right = "-350px";
          sideCart.classList.remove('toggled');
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
  .content{
    min-height: 600px;
  }
</style>
