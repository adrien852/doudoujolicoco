<template>
    <div class="d-lg-flex flex-wrap justify-content-center">
        <div class="col-lg-6 col-12 p-0">
            <CategoryCarousel :categories="categories"/>
        </div>
        <div class="col-lg-6 col-12 d-flex">
            <div class="col-10 d-flex flex-column justify-content-center m-auto">
                <h1>Découvrez nos catégories</h1>
                <p class="mt-2">
                    Chez Doudou Joli, nous vous proposons une large sélection de produits crochetés tels que des peluches, des accessoires de mode, de la décoration pour la maison et bien plus encore. 
                    Chaque pièce est réalisée avec amour et minutie par notre créatrice, Corinne Boyer.
                </p>
                <ul>
                    <li class="mt-0">
                        Peluches faites mains avec des matériaux doux
                    </li>
                    <li>
                        Idées originales de décoration pour chambres d'enfants
                    </li>
                    <li>
                        Accessoires de mode élégants et originaux
                    </li>
                </ul>
                <RouterLink class="mx-auto" to="/boutique/categories">
                    <button class="btn btn-primary">
                        <p class="px-4 m-0">Découvrir</p>
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>
    
    
</template>

<script setup>
    import CategoryCarousel from '@/components/HomeComponents/CategoryComponents/CategoryCarousel.vue'
    const props = defineProps({
        categories: Array,
    })
</script>

<style scoped>
ul{
    padding: 0;
}
li{
    list-style: none;
    display:flex;
    margin: 20px 0px;
}
li::before {
    content: '';
    display: inline-block;
    margin-right: 10px;
    height: 25px;
    width: 25px;
    background-image: url("@/assets/images/yes.png");
    background-size: contain;
    background-repeat: no-repeat;
}
</style>