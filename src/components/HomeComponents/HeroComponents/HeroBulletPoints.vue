<template>
    <div class="d-flex flex-sm-row flex-column justify-content-center align-items-center">
        <div class="bulletPoint col-sm-4 my-1 d-flex align-items-center">
            <img class="checkImg" src="@/assets/images/yes.png"/>
            <p class="m-0 pl-2">Faits main</p>
        </div>
        <div class="bulletPoint col-sm-4 my-1 d-flex align-items-center">
            <img class="checkImg" src="@/assets/images/yes.png"/>
            <p class="m-0 pl-2">Top qualité</p>
        </div>
        <div class="bulletPoint col-sm-4 my-1 d-flex align-items-center">
            <img class="checkImg" src="@/assets/images/yes.png"/>
            <p class="m-0 pl-2">Modèles uniques</p>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .checkImg{
        width:25px;
        height: 25px;
    }

    .bulletPoint{
        max-width: 190px;
        font-weight: bold;
    }
</style>