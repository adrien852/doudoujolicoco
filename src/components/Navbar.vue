<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-0">
      <RouterLink class="" to="/"><img alt="Vue logo" class="logo py-3" src="@/assets/logo.png" width="80"/></RouterLink>
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
  .navbarContent{
    height: initial;
  }
  @media (min-width: 992px) {
    .navbarContent{
      height: 112px;
    }
  }
  .nav-item:hover{
    background-color: #aac2ce2d;
    -webkit-transition: background-color 0.2s ease-out;
    -moz-transition: background-color 0.2s ease-out;
    -o-transition: background-color 0.2s ease-out;
    transition: background-color 0.2s ease-out;
  }
  h3{
    margin:0
  }

  
</style>