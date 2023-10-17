<template>
    <div class="detailsContainer">
        <div class="detailsTitle text-uppercase">
            <h1 class="m-0">Détails du panier</h1>
        </div>
        <div class="detailsColor py-3">
            <ol class="pb-3 m-0">
                <li class="d-flex align-items-center">
                    <h3 class="m-0 font-weight-normal text-uppercase">Total HT</h3><span>{{ ((cartStore.subTotal)-20*(cartStore.subTotal)/100).toFixed(2).replace(".", ",") }}€</span>
                </li>
                <li class="d-flex align-items-center">
                    <h3 class="tva m-0 font-weight-normal text-uppercase">TVA 20%</h3><span>{{ ((20*(cartStore.subTotal)/100).toFixed(2)).replace(".", ",") }}€</span>
                </li>
                <li class="d-flex align-items-center">
                    <h3 class="frais m-0 font-weight-normal text-uppercase">Frais de port</h3><span>10€</span>
                </li>
            </ol>
            <hr class="py-2 my-0">
            <li class="d-flex align-items-center">
                <h2 class="m-0 text-uppercase">Total TTC</h2><span class="mt-1 font-weight-bold">{{ ((cartStore.subTotal+10).toFixed(2)).replace(".", ",") }}€</span>
            </li>
            <div v-if="checkoutButton">
                <RouterLink class="mt-4" to="/boutique"><button class="btn btn-primary px-2"><h4 class="text-uppercase">Continuer mes achats</h4></button></RouterLink> 
                <RouterLink class="mt-3" to="/livraison"><button class="btn btn-primary checkoutButton px-2"><h4 class="text-uppercase">Passer la commande</h4></button></RouterLink> 
                <div class="d-flex mt-3">
                    <img class="mx-auto" src="@/assets/images/paiement_icons.png" alt="Méthodes de paiement">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { useCartStore } from '@/stores/CartStore'
    const cartStore = useCartStore();

    const props = defineProps({
        checkoutButton: {
            type: Boolean,
            default: true
        },
    });
</script>

<style scoped>
    img{
        width: 150px;
        max-width: 100%;
    }
    h1{
        font-size: 10pt;
        font-family: 'Questrial', sans-serif;
        color: white;
    }
    h3, h2{
        font-size: 10pt;
        width: calc(100% - 60px); 
        overflow: hidden; 
        white-space: nowrap;
    }
    .frais, .tva{
        width: calc(100% - 60px); 
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
    h4{
        font-size: 10pt;
        margin: 0;
    }
    .btn, a{
        width: 100%;
        height: 40px;
        padding: 0;
        position: relative;
        display: inline-block;
        border-radius: .25rem;
    }
    .btn{
        background-color: #94BCD8;
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
    .detailsTitle{
        background-color: #94bcd8;
        color: white;
        text-align: center;
        padding: 7px 0;
    }
    .checkoutButton{
        background-color: #f4aa46;
        border-color: #f4aa46;
    }
    .checkoutButton:hover, .checkoutButton.focus, .checkoutButton:focus, .checkoutButton:not(:disabled):not(.disabled).active, .checkoutButton:not(:disabled):not(.disabled):active, .show > .checkoutButton.dropdown-toggle {
        background-color: #f39a25;
        border-color: #f39a25;
    }
    .detailsColor{
        background-color: #d2d2d214;
        padding: 0 15px;
    }
</style>