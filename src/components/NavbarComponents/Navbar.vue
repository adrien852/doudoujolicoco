<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import SearchBar from '@/components/NavbarComponents/SearchBar.vue';
    import CartIcon from '@/components/NavbarComponents/CartIcon.vue';
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light py-0">
      <RouterLink class="" to="/"><img alt="Vue logo" class="logo py-3" src="@/assets/logo.png" width="60"/></RouterLink>
      <div class="d-flex d-lg-none align-items-center justify-content-center">
        <CartIcon style="width: 40px;" />
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <div class="navbarContent d-flex flex-lg-row flex-column">
          <div class="navbar-nav h-100 col-lg-6 col-12">
            <RouterLink class="d-flex justify-content-center align-items-center w-100 h-100 nav-item nav-link active" to="/">
              <h3 class="px-4">Home</h3>
            </RouterLink>
            <RouterLink class="d-flex justify-content-center align-items-center w-100 h-100 nav-item nav-link active" to="/about">
              <h3 class="px-4">About</h3>
            </RouterLink>
            <RouterLink class="d-flex justify-content-center justify-items-center align-items-center w-100 h-100 nav-item nav-link active" to="/shop">
              <h3 class="px-4">Shop</h3>
            </RouterLink>
            
          </div>
          <SearchBar class="col-lg-5 col-12 justify-content-center" />

          <div class="col-1 d-lg-flex d-none align-items-center justify-content-center">
            <CartIcon style="width: 40px;" />
          </div>
        </div>

      </div>
      
    </nav>
</template>

<style scoped>
  .navbar-nav{
    padding-left: 15px;
  }
  nav{
    z-index: 3000;
    width: 100%;
    background-color: #e6ecee;
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
    background-color: #aac2ce40;
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