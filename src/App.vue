<template>
  <header :class="{'noNavMargin': false}">
    <Navbar />
  </header>
  <RouterView />
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from './components/NavbarComponents/Navbar.vue'


</script>

<style>
  header{
    margin-bottom: 100px;
  }
  .noNavMargin{
    margin-bottom: 0px;
  }
</style>
