<template>
    <div class="detailsContainer">
        <h1>Détails du panier</h1>
        <hr>
        <ol>
            <li class="d-flex align-items-center">
                <h3 class="m-0 font-weight-normal">Total HT</h3><span>{{ ((cartStore.subTotal)-20*(cartStore.subTotal)/100).toFixed(2) }}€</span>
            </li>
            <li class="d-flex align-items-center">
                <h3 class="tva m-0 font-weight-normal">TVA 20%</h3><span>{{ ((20*(cartStore.subTotal)/100).toFixed(2)) }}€</span>
            </li>
        </ol>
        <hr>
        <li class="d-flex align-items-center">
            <h2 class="m-0">Total TTC</h2><span class="mt-1 font-weight-bold">{{ cartStore.subTotal.toFixed(2) }}€</span>
        </li>
        <li class="d-flex align-items-center">
            <h3 class="frais m-0 font-weight-normal">Frais de port</h3><span>10€</span>
        </li>
        <hr>
        <RouterLink to="/paiement"><button @click="buyItem" class="btn btn-primary"><h4>Passer la commande</h4></button></RouterLink>
    </div>
</template>
<script setup>
    import { useCartStore } from '@/stores/CartStore'

    const cartStore = useCartStore();
</script>

<style scoped>
    h1{
        font-size: 14pt;
    }
    h3, h2{
        font-size: 11pt;
        width: calc(100% - 58px); 
        overflow: hidden; 
        white-space: nowrap;
    }
    .frais, .tva{
        width: calc(100% - 45px); 
    }
    h3:after, h2:after { 
        content: " ...................................................................................................................................................................................................................................................................." 
    }
    span{
        font-weight: normal;
        float: left; 
        width: fit-content;
        overflow: hidden;
        margin-left:auto;
        font-size: 11pt;
    }
    ol{
        list-style-type: none;
        padding: 0;
    }
    li {
        width: 100%;
    }
    h2{
        font-size: 12pt;
    }
    h4{
        font-size: 100%;
        margin: 0;
    }
    .btn, a{
        background-color: #6baaca;
        width: 100%;
        height: 40px;
        padding: 0;
        position: relative;
        display: inline-block;
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
    .detailsContainer{
        background: white;
        border-radius: 10px;
        padding:15px;
    }
</style>