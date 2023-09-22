<template>
    <div class="container">
        <div class="itemSummary row d-flex mt-4 justify-content-between align-items-center">
            <img class="stamp" src="@/assets/images/main.png">
            <div class="itemImage col-md-6 col-12 p-0">
                <img src="@/assets/images/vache.jpg">
            </div>
            <div class="itemDetails col-md-5 col-12 mt-md-0 mt-3">
                <h3>Categorie peluche</h3>
                <div class="d-flex d-md-block align-items-center">
                    <h1 class="">Vache</h1>
                    <h2 class="m-auto">39,00€</h2>
                </div>
                <p>
                    Peluche tricotee a la main en 2023, faite en 30h de tricotage.<br>
                    Qualite certifiee, coton 100% allergene, materiaux ininflammable, securite maximale pour petits enfants.
                    Taille et couleurs personnalisables sur demande.
                </p>
                <h4>Disponible - Expedition immediate</h4>
                <h4>Livraison rapide - 2 - 4 jours ouvres en France metropolitaine</h4>
                <h4>Retours acceptes sous conditions</h4>
            </div>
        </div>
    </div>
    
</template>

<script setup>
    import { useRoute } from 'vue-router'

    const route = useRoute();
</script>

<style scoped>
    .itemImage{
        border-radius: 20px;
        box-shadow: 3px 3px 5px rgba(106, 106, 106, 0.437);
        width: 100%;
    }

    .itemImage img{
        width: 100%;
        border-radius: 20px;
    }

    h1{
        font-size: 20pt;
    }
    h2{
        color: #6baaca;
        font-size: 20pt;
    }
    h3{
        color: #a2785b;
        font-size: 13pt;
        margin: 0;
    }
    h4{
        font-size: 11pt;
        margin: 0;
    }
    p{
        font-size: 10pt;
    }
    .itemSummary{
        position: relative;
    }
    .stamp{
        position: absolute;
        top:0;
        right:0;
        width: 13%;
    }
</style>