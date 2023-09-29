<template>
        <div class="navbarContent d-flex flex-lg-row flex-column">
          <div class="w-100 d-lg-flex d-none">
            <div class="navbar-nav h-100 col-lg-6 col-12">
              <RouterLink class="d-flex justify-content-center align-items-center w-100 h-100 nav-item nav-link active" to="/">
                  <h3 class="px-4">Home</h3>
              </RouterLink>
              <RouterLink class="d-flex justify-content-center align-items-center w-100 h-100 nav-item nav-link active" to="/a-propos">
                  <h3 class="px-4">About</h3>
              </RouterLink>
              <RouterLink class="d-flex justify-content-center justify-items-center align-items-center w-100 h-100 nav-item nav-link active" to="/boutique">
                  <h3 class="px-4">Shop</h3>
              </RouterLink>
              
            </div>
            <SearchBar class="col-lg-5 col-12 justify-content-center" />

            <div class="col-1 d-lg-flex d-none align-items-center justify-content-center">
              <CartIcon style="width: 40px;" />
            </div>
          </div>
          <div class="d-block d-lg-none">
            <div class="navbar-nav h-100 col-lg-6 col-12">
              <RouterLink data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" class="d-flex justify-content-center align-items-center w-100 h-100 nav-item nav-link active" to="/">
                  <h3 class="px-4">Home</h3>
              </RouterLink>
              <RouterLink data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" class="d-flex justify-content-center align-items-center w-100 h-100 nav-item nav-link active" to="/a-propos">
                  <h3 class="px-4">About</h3>
              </RouterLink>
              <RouterLink data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" class="d-flex justify-content-center justify-items-center align-items-center w-100 h-100 nav-item nav-link active" to="/boutique">
                  <h3 class="px-4">Shop</h3>
              </RouterLink>
              
            </div>
          </div>

        </div>

</template>
<script setup>
    import SearchBar from '@/components/NavbarComponents/SearchBar.vue';
    import CartIcon from '@/components/NavbarComponents/CartIcon.vue';
</script>