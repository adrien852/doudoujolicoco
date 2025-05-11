<template>
    <loading :is-full-page="false" :active="isLoading"></loading>
    <SideNav :categories="categories" />

    <nav :class="['navbar navbar-light px-3', {'navBlock': false}]">
      <!-- <RouterLink class="logo position-absolute" to="/"><img alt="Doudou Joli logo" class="" src="@/assets/logo_white.png"/></RouterLink> -->
      <RouterLink class="logo position-absolute" to="/">Doudou Joli</RouterLink>
      <div id="navbarNav" class="d-flex flex-grow-1 align-items-center">
        <button id="sideToggler" class="navbar-toggler mr-3" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <NavbarContent />
        <div class="col-2 d-flex align-items-center justify-content-end p-0">
          <CartIconToggler />
        </div>
      </div>
    </nav>

</template>

<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import NavbarContent from '@/components/NavbarComponents/NavbarContent.vue';
    import CartIconToggler from '@/components/CartComponents/CartIconToggler.vue';
    import SideNav from '@/components/NavbarComponents/SideNav.vue';
    import { useSampleItemStore } from '@/stores/SampleShopItemStore'; 
    import { onMounted, ref, onBeforeMount } from 'vue';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

    let isLoading = ref(true)
    let categories = ref(null)
    const sampleItemStore = useSampleItemStore();
    
    onMounted(() => {
      if(sampleItemStore.categories.length === 0){
        sampleItemStore.fillCategories()
        .then(() => {
          categories = sampleItemStore.categories;
          isLoading.value = false;
        })
        .catch(function(error) {
          isLoading.value = false;
        })
      }
      else {
        categories = sampleItemStore.categories;
        isLoading.value = false;
      }
    })
</script>

<style scoped>
 
.logo{
  left:calc(50% - 85px);
  width: 170px;
  font-family: "Dancing Script", cursive;
  text-decoration: none;
  color: #22211F;
  font-size: 40px;
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
    height: 60px;
    background-color: rgba(255, 255, 255, 0.866);
    position: fixed;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;
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