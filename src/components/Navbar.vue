<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light py-0">
      <RouterLink class="" to="/"><img alt="Vue logo" class="logo py-3" src="@/assets/logo.png" width="60"/></RouterLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <div class="navbarContent d-flex flex-lg-row flex-column" style="flex-grow: 1;">
          <div class="navbar-nav h-100 align-items-center mr-lg-auto">
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
          <form class="form-inline my-2 my-lg-0 mx-lg-0 mx-auto">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-primary my-2 my-sm-0 mx-auto" type="submit">Search</button>
          </form>
        </div>
      </div>
      
    </nav>
</template>

<style scoped>
  nav{
    z-index: 3000;
    width: 100%;
    background-color: #e6ecee;
  }
  .navbarContent{
    height: initial;
  }
  @media (min-width: 992px) {
    .navbarContent{
      height: 100px;
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
  .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
  .navbar-light .navbar-toggler{
    border-color: white;
  }
  
</style>