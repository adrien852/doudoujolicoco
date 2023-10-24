<template>
  <NavPath :path="path"/>
  <div class="about container pt-4">
    <div class="d-flex flex-wrap align-items-center justify-content-center">
      <div class="col-lg-7">
        <AboutText />
      </div>
      <div class="col-lg-5 col-md-8 text-center">
        <AboutPictures />
      </div>
    </div>
    <div class="d-flex">
      <img alt="Vue logo" class="logo py-3 mx-auto" src="@/assets/full_logo.png"/>
    </div>
  </div>
</template>

<script setup>
  import AboutText from '@/components/AboutComponents/AboutText.vue';
  import AboutPictures from '@/components/AboutComponents/AboutPictures.vue';
  import NavPath from '@/components/NavbarComponents/NavPath.vue';
  import { onBeforeMount } from 'vue';

  let path = null;

  onBeforeMount(() => {
    path = [
      {
          name: 'accueil',
          route: '/'
      },
      {
          name: 'à propos',
          route: '/a-propos'
      },
    ]
  })
</script>

<style scoped>
  img{
    width: 100%;
    max-width: 400px;
  }

</style>
