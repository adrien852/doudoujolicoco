<template>
    <nav :class="['navbar navbar-expand-lg navbar-light py-0', {'navBlock': ($route.name == 'shop')}]">
      <RouterLink class="" to="/"><img alt="Vue logo" class="logo py-3" src="@/assets/logo.png" width="60"/></RouterLink>
      <div class="d-flex d-lg-none align-items-center justify-content-center">
        <CartIcon style="width: 40px;" />
      </div>
      <button id="toggler" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <NavbarContent />
      </div>
    </nav>
</template>

<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import CartIcon from '@/components/NavbarComponents/CartIcon.vue';
    import NavbarContent from '@/components/NavbarComponents/NavbarContent.vue';
</script>

<style scoped>
  .navbar-nav{
    padding-left: 15px;
  }
  nav{
    z-index: 3000;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.322);
    position: absolute;
  }
  .navBlock{
    position: relative;
  }
  .navbarContent{
    height: initial;
    width: 100%;
  }
  @media (min-width: 992px) {
    .navbarContent{
      height: 92px;
    }
  }
  .nav-item:hover{
    background-color: #aac2ce81;
    -webkit-transition: background-color 0.2s ease-out;
    -moz-transition: background-color 0.2s ease-out;
    -o-transition: background-color 0.2s ease-out;
    transition: background-color 0.2s ease-out;
  }
  h3{
    color: black;
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