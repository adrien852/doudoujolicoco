<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from './components/NavbarComponents/Navbar.vue'

</script>

<template>
  <header :class="{'noNavMargin': ($route.name == 'shop')}">
    <Navbar />
  </header>
  <RouterView />
</template>
<style>
header{
  margin-bottom: 100px;
}
.noNavMargin{
  margin-bottom: 0px;
}
</style>
