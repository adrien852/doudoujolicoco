<template>
    <loading :is-full-page="false" :active="isLoading"></loading>
    <SideNav :categories="categories" />

    <nav :class="['navbar navbar-expand-lg navbar-light p-0', {'navBlock': false}]">
      <!-- <RouterLink class="" to="/"><img alt="Vue logo" class="logo py-3" src="@/assets/full_logo_text_only.png" width="120"/></RouterLink> -->
      <div class="d-flex px-3" style="height: 85px;">
        <button id="toggler" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      </div>
      <RouterLink class="logo position-absolute" to="/"><img alt="Vue logo" class="py-3" src="@/assets/full_logo_text_only.png"/></RouterLink>

      <div class="d-flex d-lg-none align-items-center justify-content-center px-3">
        <CartIcon style="width: 40px;" />
      </div>
      <div id="navbarNav" class="collapse navbar-collapse">
        <button id="sideToggler" class="navbar-toggler d-none d-lg-block" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
        <NavbarContent />
      </div>
    </nav>

</template>

<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import CartIcon from '@/components/NavbarComponents/CartIcon.vue';
    import NavbarContent from '@/components/NavbarComponents/NavbarContent.vue';
    import SideNav from '@/components/NavbarComponents/SideNav.vue';
    import {getCategories} from '@/services/ShopService.js';
    import { onMounted, ref, onBeforeMount } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

    let isLoading = ref(true)
    let categories = ref(null)
    
    onMounted(() => {
      getCategories()
      .catch(function(error) {
        isLoading.value = false;
      })
      .then(response => {
            categories = response;
            isLoading.value = false;
        })
      document.getElementById("sideToggler").addEventListener('click', () => {
        let sidebar = document.getElementById("mySidebar");
        if(sidebar.className.includes('toggled')){
          sidebar.style.width = "0";
          sidebar.classList.remove('toggled');
        }
        else{
          sidebar.style.width = "250px";
          sidebar.classList.add('toggled');
        }
      })
      
    })
</script>

<style scoped>
.logo{
  top: 8px;
  left:calc(50% - 60px);
  width: 120px;
}
img{
  width: 100%;
}
  #toggler{
    margin: auto;
    height:50px;
  }
  .navbar-nav{
    padding-left: 15px;
  }
  nav{
    z-index: 1000;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.866);
    position: absolute;
  }
  .navBlock{
    position: relative;
  }
  h3{
    color: #22211F;
    margin:0;
    /* -webkit-filter: drop-shadow( 2px 2px 3px #4a545940);
    filter: drop-shadow( 2px 2px 3px #4a545940); */
  }
  /* .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
  .navbar-light .navbar-toggler{
    border-color: white;
  } */
  
</style>