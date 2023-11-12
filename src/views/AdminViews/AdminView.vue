<template>
    <div class="container">
        <h1>Tableau de bord</h1>
        <div class="d-flex flex-wrap">
            <RouterLink class="mr-3 mb-3" :to="'/admin/commandes'"><button class="btn btn-primary">Mes commandes</button></RouterLink>
            <RouterLink :to="'/admin/inventaire'"><button class="btn btn-primary">Mon inventaire</button></RouterLink>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
</style>