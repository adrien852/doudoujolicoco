<template>
        <div class="navbarContent d-flex">
            <div class="w-100 d-lg-flex d-none h-100 col-lg-5 col-12 p-0">
              <RouterLink class="d-flex justify-content-center align-items-center col-4 h-100 nav-item nav-link active text-uppercase" to="/">
                Accueil
              </RouterLink>
              <RouterLink class="d-flex justify-content-center align-items-center col-4 h-100 nav-item nav-link active text-uppercase" to="/a-propos">
                À propos
              </RouterLink>
              <RouterLink class="d-flex justify-content-center justify-items-center align-items-center col-4 h-100 nav-item nav-link active text-uppercase" to="/boutique">
                Boutique
              </RouterLink>
            </div>
          </div>
</template>
<script setup>
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
a{
  font-size: min(1.1vw, 11pt);
  font-weight: bold;
  color:#22211F;
  margin: 0;
}
.navbarContent{
    height: initial;
    width: 100%;
  }
  @media (min-width: 960px) {
    .navbarContent{
      height: 60px;
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