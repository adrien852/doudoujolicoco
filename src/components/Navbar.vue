<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-0">
      <RouterLink class="" to="/"><img alt="Vue logo" class="logo py-3" src="@/assets/logo.png" width="125"/></RouterLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav h-100 align-items-center">
          <RouterLink class="d-flex justify-content-center align-items-center w-100 h-100 nav-item nav-link active" to="/">
            <span class="">Home</span>
          </RouterLink>
          <RouterLink class="d-flex justify-content-center align-items-center w-100 h-100 nav-item nav-link active" to="/about">
            <span class="">About</span>
          </RouterLink>
          <RouterLink class="d-flex justify-content-center justify-items-center align-items-center w-100 h-100 nav-item nav-link active" to="/shop">
            <span class="">Shop</span>
          </RouterLink>
        </div>
      </div>
    </nav>
</template>

<style scoped>
  #navbarNav{
    height: 157px;
  }
  .nav-item:hover{
    background-color: #d2b08c2b;
    -webkit-transition: background-color 0.2s ease-out;
    -moz-transition: background-color 0.2s ease-out;
    -o-transition: background-color 0.2s ease-out;
    transition: background-color 0.2s ease-out;
  }
</style>