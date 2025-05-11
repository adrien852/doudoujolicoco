<template>
    <footer class="">
        <div class="px-3 pt-3 d-flex align-items-center h-100">
            <RouterLink class="logo d-sm-block d-none" to="/"><img alt="Doudou Joli logo" class="pt-3" src="@/assets/logo_faded.png"/></RouterLink>
            <div class="flex-wrap d-flex justify-content-center w-100">
                <div class="col-lg-4 col-12">
                    <h1>Pages</h1>
                    <div class="d-flex">
                        <div class="col-6">
                            <ul>
                                <li>
                                    <RouterLink to="/">Accueil</RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/boutique">Boutique</RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/boutique/categories">Catégories</RouterLink>
                                </li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul>
                                <li>
                                    <RouterLink to="/a-propos">A propos</RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/faq">FAQ</RouterLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-12">
                    <h1>Informations légales</h1>
                    <ul>
                        <li>
                            <RouterLink to="/conditions-generales-vente">Conditions générales de vente & Mentions Légales</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/politique-confidentialite">Politique de confidentialité</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/politique-cookies">Politique des cookies</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-4 col-12">
                    <h1>Contact</h1>
                    <ul>
                        <li>
                            <RouterLink to="/contact">Formulaire de contact</RouterLink>
                        </li>
                        <li>
                            <a href="mailto:doudoujolicoco@gmail.com"><span class="emailEmoji">doudoujolicoco@gmail.com</span></a>
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
.creator{
    font-size: 10pt;
}

.creator a{
    color: #2087CE;
}

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
h1{
    font-size: 22pt;
}
h1::after {
    background-color: #22211F;
  }
ul{
    padding: 0;
}
li{
    list-style: none;
}
li a{
    text-decoration: none;
    color:#22211F;
    height: fit-content;
    background-repeat: no-repeat;
    transition: background-size .4s cubic-bezier(.22,.61,.36,1),color .2s ease-out;
    background-size: 0 1px;
    background-image: linear-gradient(black,black);
    background-position: 0 100%;
    font-size: 10pt;
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