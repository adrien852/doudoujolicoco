<template>
    <div class="itemSummary row d-flex mt-sm-4 justify-content-between align-items-center">
        <ItemImageCarousel :item="item" />
        <div class="itemDetails col-md-5 col-12 mt-md-0 mt-3">
            <div class="d-flex align-items-center">
                <h1 class="mb-2">{{ item.name }}</h1>
                <h2 class="ml-auto mb-2">{{ item.price }}€</h2>
            </div>
            <p>
                {{ item.description }}
            </p>
            <button @click="addItemToCart" class="btn btn-primary"><h3>Ajouter au panier</h3></button>
            <div class="shipment mt-3">
                <h4 class="shipmentTitle">Livraison</h4>
                <!-- <h4><span id="availibility">Disponible</span> - Expedition immediate</h4> -->
                <h4>Livraison rapide - 2 - 4 jours ouvrés en France métropolitaine</h4>
                <h4>Retours acceptés sous conditions</h4>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/CartStore'
import ItemImageCarousel from "./ItemImageCarousel.vue"

const props = defineProps({
    item: Object
})

const cartStore = useCartStore();

function addItemToCart(){
    cartStore.addItem(props.item);
}

</script>


<style scoped>
    .itemImage{
        width: 100%;
        min-height: 36vw;
    }

    .itemImage div{
        width: fit-content;
        position: relative;
    }

    .itemImage div::after{
        position: absolute;
        content: '';
        background: url("@/assets/images/main.png") left center no-repeat;
        background-size: auto;
        background-size: 100%;
        padding: 10%;
        right:-25px;
        top: -10px;
    }

    .itemImage img{
        max-height: calc(100vh - 92px - 48px);
        max-width: 100%;
        border-radius: 20px;
        box-shadow: 3px 3px 5px rgba(106, 106, 106, 0.437);
    }

    @media (max-width:767px) {
        .itemImage img{
            max-width: 310px;
            width: 100%;
        }
    }

    h1{
        font-size: clamp(25pt, 4vw, 35pt);
        font-family: 'Arizonia';
        color: #22211F;
    }
    h2{
        color: #94BCD8;
        font-size: 20pt;
    }
    h3{
        color: #A18F7B;
        font-size: 13pt;
        margin: 0;
        width: fit-content;
        position: relative;
    }
    h4{
        font-size: 10pt;
        margin: 0;
        font-weight: normal;
    }
    p{
        font-size: 11pt;
    }
    .itemSummary{
        position: relative;
    }
    .stamp{
        position: absolute;
        top:0;
        right:0;
        width: 8%;
    }
    .btn{
        background-color: #94BCD8;
        width: 100%;
        height: 40px;
        padding: 0;
        position: relative;
    }
    .btn h3{
        color: white;
        font-size: 100%;
        height: auto;
        margin: auto;
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
    .shipment{
        padding:20px;
        background-color: #94BCD824;
        border-radius: 10px;
    }
    .shipmentTitle{
        font-size: 11pt;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .shipmentTitle::before{
        content: '';
        background: url("@/assets/images/livraison.png") left 40% no-repeat;
        background-size: 40px auto;
        padding: 24px;
    }
    #availibility::before{
        content: "🟢";
        padding: 3px;
    }
    button h3::before{
        content: '';
        position: absolute;
        background: url("@/assets/images/add-to-cart-white.png") left 40% no-repeat;
        background-size: 30px auto;
        padding: 15px;
        left: -40px;
        bottom:-4px;
    }
</style>