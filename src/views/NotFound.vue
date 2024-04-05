<template>
    <div id="errorPage" class="d-flex flex-wrap justify-content-center align-items-center">
        <div class="col-md-2 text-center">
            <img src="@/assets/images/knitting_crossed.png" />
        </div>
        <div class="col-md-5">
            <h1>Oups !</h1>
            <h2>Cette page n'existe pas</h2>
            <div class="text-center mt-4">
                <RouterLink to="/">
                    <button class="btn text-center">
                        <h3 class="m-0">Retour à l'accueil</h3>
                    </button>
                </RouterLink>
            </div>
            
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
img{
    max-width: 150px;
    width: 100%
}
#errorPage{
    margin-top: 250px;
}
h1{
    font-size: 40pt;
}
h2{
    font-size: 22pt;
}
h3{
    font-size: 13pt;
}
.btn{
  background-color: #F39E6A;
  color: white;
  border-radius: 10px;
  -webkit-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    -moz-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    -o-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    padding: 10px;
}
.btn:hover{
    transform: scale(1.01);
    -webkit-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    -moz-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    -o-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    text-decoration: none;
    background-color: #4c778d;
}
</style>