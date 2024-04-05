<template>
    <div class="itemSummary flex-wrap d-flex mt-lg-4 justify-content-center align-items-center">
        <ItemImageCarousel :item="item" />
        <div class="itemDetails d-flex flex-column col-lg-5 col-12 mt-lg-0 mt-3">
            <div class="d-flex align-items-center">
                <h1 class="mb-2 pr-2">{{ item.name }}</h1>
                <div class="d-flex ml-auto" v-if="parseFloat(item.originalPrice) !== 0 && item.originalPrice !== item.price">
                    <h2 class="discountedPrice mb-2 mr-2">{{ parseFloat(item.price).toFixed(2).replace('.', ',').replace(',00', '') }}€</h2>
                    <h2 class="originalPrice">{{ parseFloat(item.originalPrice).toFixed(2).replace('.', ',').replace(',00', '') }}€</h2>
                </div>
                <h2 v-if="item.originalPrice === item.price || parseFloat(item.originalPrice) === 0" class="itemPrice ml-auto mb-1">{{ parseFloat(item.price).toFixed(2).replace('.', ',').replace(',00', '') }}€</h2>
            </div>
            <p>
                {{ item.description }}
            </p>
            <button @click="addItemToCart" class="btn btn-primary cartTriggerToggler"><h3 class="cartTriggerToggler">Ajouter au panier</h3></button>
            <div class="shipment mt-3">
                <h4 class="shipmentTitle">Livraison</h4>
                <!-- <h4><span id="availibility">Disponible</span> - Expedition immediate</h4> -->
                <h4>Livraison garantie de 5 à 10 jours ouvrés en France métropolitaine</h4>
                <h4>Retours acceptés sous conditions</h4>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '@/router'
import { useCartStore } from '@/stores/CartStore'
import ItemImageCarousel from "@/components/ItemComponents/ItemImageCarousel.vue"
import { inject } from 'vue'
const swal = inject('$swal')

const props = defineProps({
    item: Object
})

const cartStore = useCartStore();

function addItemToCart(){
    cartStore.addItem(props.item);
    openSideCart();
    // swal.fire({
    //     title: 'Article ajouté !',
    //     imageUrl: new URL(`/src/assets/images/${props.item.images[0]}`, import.meta.url).href,
    //     imageWidth: 280,
    //     imageAlt: props.item.name,
    //     width: 400,
    //     showDenyButton: true,
    //     confirmButtonText: "Voir mon panier",
    //     denyButtonText: "Retour à la boutique",
    //     showCloseButton: true,
    //     confirmButtonColor: "#f4aa46",
    //     denyButtonColor: "#F39E6A",
    //     showClass: {
    //         popup: 'animate__animated animate__fadeIn'
    //     },
    // }).then((result) => {
    //     if (result.isConfirmed) {
    //         router.push({ path: '/panier' })
    //     } else if (result.isDenied) {
    //         router.push({ path: '/boutique' })
    //     }
    // })
   
}

function openSideCart(){
    let sideCart = document.getElementById("sideCart");
    let appContent = document.querySelector(".appContent");
    let app = document.getElementById("app");
    sideCart.style.right = "0";
    sideCart.classList.add('toggled');
    if(window.innerWidth < 992){
        appContent.style.pointerEvents = 'none';
        appContent.style.opacity = '0.5';
        app.style.overflow = "hidden"
    }
}

</script>


<style scoped>
    .discountedPrice{
        color: #c52222;
        font-weight: bold;
    }
    .originalPrice{
        font-size: 15pt;
        text-decoration:line-through;
        opacity: 80%;
        vertical-align: middle;
        height: fit-content;
        margin-top:5px;
    }
    .itemImage{
        width: 100%;
        min-height: 36vw;
    }

    .itemImage div{
        width: fit-content;
        position: relative;
    }

    /* h1::before{
        position: absolute;
        content: '';
        background: url("@/assets/images/handmade.png") left center no-repeat;
        background-size: auto;
        background-size: 70%;
        padding: 10%;
        left: -12%;
        top: -50px;
    } */

    .itemImage img{
        max-height: calc(100vh - 60px - 48px);
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
    }
    h1::after{
        background-color: transparent;
    }
    h2{
        color: #779AB3;
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
        background-color: #f4aa46;
        margin:auto;
        width: 350px;
        max-width: 100%;
        height: 40px;
        padding: 0;
        position: relative;
        border: none;
    }
    .btn h3{
        color: white;
        font-size: 100%;
        height: auto;
        margin: auto;
    }
    .btn-primary:hover {
        border-color: none;
        background-color: #f39a25;
    }
    .btn-primary.focus, .btn-primary:focus {
        background-color: #f39a25;
        border-color: #f39a25;
        box-shadow: none;
    }
    .shipment{
        padding:20px;
        background-color: #F39E6A24;
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
<style>
    button.swal2-styled{
        font-weight: bold!important;
        font-size: 11pt!important;
    }
    .animate__animated.animate__fadeIn {
    --animate-duration: 0.4s;
    }
</style>