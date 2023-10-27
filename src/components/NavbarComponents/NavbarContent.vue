<template>
        <div class="navbarContent d-flex flex-lg-row flex-column">
          <div class="w-100 d-lg-flex d-none">
            <div class="navbar-nav h-100 col-xl-4 col-lg-4 col-12 p-0">
              <RouterLink class="d-flex justify-content-center align-items-center w-100 h-100 nav-item nav-link active text-uppercase" to="/">
                  <h3 class="p-0">Accueil</h3>
              </RouterLink>
              <RouterLink class="d-flex justify-content-center align-items-center w-100 h-100 nav-item nav-link active text-uppercase" to="/a-propos">
                  <h3 class="p-0">À propos</h3>
              </RouterLink>
              <RouterLink class="d-flex justify-content-center justify-items-center align-items-center w-100 h-100 nav-item nav-link active text-uppercase" to="/boutique">
                  <h3 class="p-0">Boutique</h3>
              </RouterLink>
            </div>
            <!-- <SearchBar class="col-lg-5 col-12 justify-content-center" /> -->
            <RouterLink class="logo position-absolute" to="/"><img alt="Vue logo" class="py-3" src="@/assets/full_logo_text_only.png"/></RouterLink>

            <div class="ml-auto pr-3 col-1 d-lg-flex d-none align-items-center justify-content-center">
              <CartIcon   style="width: 40px;" />
            </div>
          </div>
          <div class="d-block d-lg-none">
            <div class="navbar-nav h-100 col-lg-6 col-12 p-0">
              <RouterLink data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" class="d-flex justify-content-center align-items-center w-100 h-100 nav-item nav-link active" to="/">
                  <h3 class="px-4 py-1">Accueil</h3>
              </RouterLink>
              <RouterLink data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" class="d-flex justify-content-center align-items-center w-100 h-100 nav-item nav-link active" to="/a-propos">
                  <h3 class="px-4 py-1">A propos</h3>
              </RouterLink>
              <RouterLink data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" class="d-flex justify-content-center justify-items-center align-items-center w-100 h-100 nav-item nav-link active" to="/boutique">
                  <h3 class="px-4 py-1">Boutique</h3>
              </RouterLink>
              <RouterLink data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" class="d-flex justify-content-center justify-items-center align-items-center w-100 h-100 nav-item nav-link active" to="/boutique/categories">
                  <h3 class="px-4 py-1">Catégories</h3>
              </RouterLink>
            </div>
          </div>

        </div>

</template>
<script setup>
    import SearchBar from '@/components/NavbarComponents/SearchBar.vue';
    import CartIcon from '@/components/NavbarComponents/CartIcon.vue';
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