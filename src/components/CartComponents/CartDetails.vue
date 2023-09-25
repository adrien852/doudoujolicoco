<template>
    <div class="detailsContainer">
        <h1>Détails du panier</h1>
        <hr>
        <ol>
            <li class="d-flex align-items-center">
                <h3 class="m-0 font-weight-normal">Sous-total</h3><span>50€</span>
            </li>
            <li class="d-flex align-items-center">
                <h3 class="m-0 font-weight-normal">Frais de port</h3><span>10€</span>
            </li>
            <li class="d-flex align-items-center">
                <h3 class="m-0 font-weight-normald">TVA</h3><span>10%</span>
            </li>
        </ol>
        <hr>
        <li class="d-flex align-items-center">
            <h2 class="m-0">Total</h2><span class="mt-1 font-weight-bold">66€</span>
        </li>
        <hr>
        <button @click="buyItem" class="btn btn-primary"><h4>Passer la commande</h4></button>
    </div>
</template>
<script setup>
    
</script>

<style scoped>
    h1{
        font-size: 14pt;
    }
    h3, h2{
        font-size: 11pt;
        width: calc(100% - 40px); 
        overflow: hidden; 
        white-space: nowrap;
    }
    h3:after, h2:after { 
        content: " ..........................................................................................." 
    }
    span{
        font-weight: normal;
        float: left; 
        width: fit-content;
        overflow: hidden;
        margin-left:auto;
    }
    ol{
        list-style-type: none;
        padding: 0;
    }
    li {
        width: 100%;
    }
    h2{
        font-size: 14pt;
    }
    h4{
        font-size: 100%;
        margin: 0;
    }
    .btn{
        background-color: #6baaca;
        width: 100%;
        height: 40px;
        padding: 0;
        position: relative;
    }
    .btn-primary:hover {
        border-color: none;
        background-color: #4c778d;
    }
    .btn-primary.focus, .btn-primary:focus {
        background-color: #4c778d;
        border-color: #4c778d;
        box-shadow: none;
    }
</style>