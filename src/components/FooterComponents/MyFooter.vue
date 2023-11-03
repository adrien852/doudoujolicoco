<template>
    <footer class="mt-4">
        <div class="p-3 d-flex align-items-center h-100">
            <RouterLink class="logo d-sm-block d-none" to="/"><img alt="Doudou Joli logo" class="py-3" src="@/assets/full_logo.png"/></RouterLink>
            <div class="flex-wrap d-flex justify-content-center w-100">
                <div class="col-lg-4 col-12">
                    <h4>Pages</h4>
                    <ul>
                        <li>
                            <RouterLink to="#">Accueil</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="#">A propos</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="#">Boutique</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="#">Catégories</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-4 col-12">
                    <h4>Information légales</h4>
                    <ul>
                        <li>
                            <RouterLink to="#">Mentions Légales</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="#">Conditions générales de vente</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="#">Politique de confidentialité</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="#">Politique des cookies</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-4 col-12">
                    <h4>Contact</h4>
                    <ul>
                        <li>
                            <RouterLink to="#">Formulaire de contact</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="#"><span class="phoneEmoji">06 00 00 00 00</span></RouterLink>
                        </li>
                        <li>
                            <RouterLink to="#"><span class="emailEmoji">contact@doudoujoli.fr</span></RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>

<style scoped>
footer{
    /* height:150px; */
    background-color:#a18f7b1a;
}
.logo{
  top: 8px;
  left:calc(50% - 60px);
  width: 200px;
}
img{
  width: 100%;
}
h4{
    position: relative;
    margin-bottom: 15px;
}
h4::after {
  position: absolute;
  content: '';
  bottom: -7px;
  height: 4px;
  background-color: #94BCD8;
  left: 0;
  right: 40px;
}
ul{
    padding: 0;
}
li{
    list-style: none;
}
li a{
    text-decoration: none;
    color:black;
    height: fit-content;
    background-repeat: no-repeat;
    transition: background-size .4s cubic-bezier(.22,.61,.36,1),color .2s ease-out;
    background-size: 0 1px;
    background-image: linear-gradient(black,black);
    background-position: 0 100%;
}
li a:hover{
    background-size: 100% 1px;
}
.phoneEmoji::before{
    content:"🕿";
    margin-right: 4px;
}
.emailEmoji::before{
    content:"🖂";
    margin-right: 4px;
}
</style>