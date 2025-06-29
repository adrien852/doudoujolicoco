<template>
    <div class="detailsContainer">
        <div class="detailsTitle text-uppercase">
            <h1 class="m-0">Détails du panier</h1>
        </div>
        <div class="detailsColor py-3">
            <ol class="pb-3 m-0">
                <li class="d-flex align-items-center">
                    <p class="m-0 font-weight-normal text-uppercase">Total</p><span>{{ cartStore.subTotal.toFixed(2) }}€</span>
                </li>
                <!-- <li class="d-flex align-items-center">
                    <h3 class="tva m-0 font-weight-normal text-uppercase">TVA 20%</h3><span>{{ ((20*(cartStore.subTotal)/100)).toFixed(2) }}€</span>
                </li> -->
                <li class="d-flex align-items-center text-success" v-if="cartStore.promo && cartStore.promoValue < 0">
                    <p class="m-0 font-weight-normal text-uppercase">Code promotionnel</p>
                    <span class="">-{{ Math.abs(cartStore.promoValue).toFixed(2) }}€</span>
                </li>
                <li class="d-flex align-items-center">
                    <p class="frais m-0 font-weight-normal text-uppercase">Frais de port</p><span>Offerts</span>
                </li>
            </ol>
            <hr class="py-2 my-0">
            <li class="d-flex align-items-center">
                <p class="m-0 text-uppercase">Total</p><span class="mt-1 font-weight-bold">{{ cartStore.total.toFixed(2) }}€</span>
            </li>
            <div class="d-flex align-items-center mt-3">
                <div class="pr-2">
                    <input placeholder="Utiliser un code promo" class="form-control" type="text" v-model="cartStore.promoCode">
                </div>
                <button class="btn btn-primary col-4" @click="applyPromo">Appliquer</button>
            </div>
            <div v-if="showApplyMessage" 
                :class="{'text-red': showApplyMessage.success !== true,'text-success': showApplyMessage.success === true}" 
                class="text-red mt-2"
            >
                {{ showApplyMessage.message }}
            </div>
            <div v-if="checkoutButton">
                <RouterLink class="mt-4" to="/paiement"><button class="btn btn-primary checkoutButton px-2"><h4 class="text-uppercase">Passer la commande</h4></button></RouterLink>
                <div class="d-flex flex-column">
                    <RouterLink class="mt-3 w-75 mx-auto" to="/boutique"><button class="btn btn-primary px-2 "><h4 class="text-uppercase">Continuer mes achats</h4></button></RouterLink> 
                    <img class="mt-3 mx-auto" src="@/assets/images/paiement_icons.png" alt="Méthodes de paiement">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { useCartStore } from '@/stores/CartStore'
    import { ref } from 'vue';
    const cartStore = useCartStore();
    const showApplyMessage = ref(null);

    const props = defineProps({
        checkoutButton: {
            type: Boolean,
            default: true
        },
    });

    async function applyPromo() {
        cartStore.applyPromoCode(cartStore.promoCode).then((response) => {
            showApplyMessage.value = response;
        });
    }
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
        word-spacing: normal;
        letter-spacing: 1px;
    }
    p{
        font-size: 10pt;
        width: calc(100% - 60px); 
        overflow: hidden; 
        white-space: nowrap;
    }
    .frais, .tva{
        width: calc(100% - 60px); 
    }
    p:after, h2:after { 
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
        font-size: 9pt;
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
        background-color: #F39E6A;
    }
    .btn-primary:hover {
        border-color: none;
        background-color: #d48b5e;
    }
    .btn-primary.focus, .btn-primary:focus {
        background-color: #d48b5e;
        border-color: #d48b5e;
        box-shadow: none;
    }
    .detailsContainer{
        background: white;
        border-radius: 10px;
        padding:15px;
    }
    .detailsTitle{
        background-color: #F39E6A;
        color: white;
        text-align: center;
        padding: 7px 0;
    }
    .checkoutButton{
        background-color: #f4aa46;
        border-color: #f4aa46;
    }
    .checkoutButton h4{
        font-size: 12pt;
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