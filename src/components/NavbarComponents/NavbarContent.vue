<template>
        <div class="navbarContent d-flex">
            <div class="w-100 d-lg-flex d-none h-100 col-lg-5 col-12 p-0">
              <RouterLink class="d-flex justify-content-center align-items-center col-4 h-100 nav-item nav-link active text-uppercase" to="/">
                  <h3 class="p-0">Accueil</h3>
              </RouterLink>
              <RouterLink class="d-flex justify-content-center align-items-center col-4 h-100 nav-item nav-link active text-uppercase" to="/a-propos">
                  <h3 class="p-0">À propos</h3>
              </RouterLink>
              <RouterLink class="d-flex justify-content-center justify-items-center align-items-center col-4 h-100 nav-item nav-link active text-uppercase" to="/boutique">
                  <h3 class="p-0">Boutique</h3>
              </RouterLink>
            </div>
            <!-- <SearchBar class="col-lg-5 col-12 justify-content-center" /> -->
            <RouterLink class="logo position-absolute" to="/"><img alt="Doudou Joli logo" class="py-3" src="@/assets/full_logo_text_only.png"/></RouterLink>
          </div>
</template>
<script setup>
    import SearchBar from '@/components/NavbarComponents/SearchBar.vue';
    import CartIconToggler from '@/components/CartComponents/CartIconToggler.vue';

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
h3{
  font-size: 11pt;
  color:#22211F;
  margin: 0;
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
    background-color: #a18f7b1a;
    -webkit-transition: background-color 0.2s ease-out;
    -moz-transition: background-color 0.2s ease-out;
    -o-transition: background-color 0.2s ease-out;
    transition: background-color 0.2s ease-out;
  }

</style>