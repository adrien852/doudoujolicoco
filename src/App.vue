<template>
  <header style="position: relative;" id="header" ref="header" :class="{'noNavMargin': false}">
    <Navbar />
  </header>
  <div class="appContent position-relative">
    <loading :is-full-page="false" :active="adminStore.isAdminRouteLoading"></loading>
    <RouterView />
  </div>
  <CookieBanner/>
  <MyFooter />
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import Navbar from '@/components/NavbarComponents/Navbar.vue'
  import MyFooter from '@/components/FooterComponents/MyFooter.vue'
  import CookieBanner from '@/components/HomeComponents/CookieBanner.vue'
  import { useAdminStore } from '@/stores/AdminStore';
  import { useRoute } from 'vue-router'
  import { watch, onMounted, nextTick, ref } from 'vue';
  import Loading from 'vue3-loading-overlay';
  import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
  const route = useRoute();
  const header = ref(null)
  const adminStore = useAdminStore()
  
  onMounted(() => {
    watch(route, () =>{
      nextTick(() => {
        header.value?.scrollIntoView();
      })
    })
    document.getElementById("app").addEventListener('click', (event) => {
      let sidebar = document.getElementById("mySidebar");
      let sideCart = document.getElementById("sideCart");
      let appContent = document.querySelector(".appContent");
      if(typeof event.target.className == "string"){
        if(
          !event.target.className.includes('navbar-toggler-icon') &&
          !event.target.className.includes('navbar-toggler')
        ){
          if(sidebar.className.includes('toggled')){
              sidebar.style.left = "-250px";
              sidebar.classList.remove('toggled');
              if(
                !event.target.className.includes('cartTriggerToggler')
              ){
                appContent.style.pointerEvents = '';
                appContent.style.opacity = '1';
                app.style.overflow = "auto"
              }
          }
        }
        if(
          !event.target.className.includes('cartTriggerToggler')
        ){
          sideCart.style.right = "-350px";
          sideCart.classList.remove('toggled');
          if(
            !event.target.className.includes('navbar-toggler-icon') &&
            !event.target.className.includes('navbar-toggler')
          ){
            appContent.style.pointerEvents = '';
            appContent.style.opacity = '1';
            app.style.overflow = "auto"
          }
        }
      }
    })

    
  })
  

</script>

<style>
  header{
    margin-bottom: 60px;
    scroll-margin-top: 100px;
  }
  .noNavMargin{
    margin-bottom: 0px;
  }
  .appContent{
    min-height: calc(100vh - 191px - 60px);
  }
</style>
