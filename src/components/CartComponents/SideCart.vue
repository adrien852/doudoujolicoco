<template>
    <div id="sideCart" class="sideCart pb-3">
        <div v-if="cartStore.count > 0" class="sideCartContent mt-2">
            <CartItems :items="cartStore.cartItems"/>
            <div class="d-flex flex-column">
                <RouterLink class="mx-auto mt-1" to="/panier"><button class="btn btn-primary checkoutButton px-2"><span class="text-uppercase">Voir mon panier</span></button></RouterLink> 
                <RouterLink class="mx-auto mt-1" to="/boutique"><button class="btn btn-primary px-2"><span class="text-uppercase">Retour à la boutique</span></button></RouterLink> 
            </div>
        </div>
        <div class="mt-2" v-if="cartStore.count <= 0">
            <div class="text-center mb-md-1 mb-3">
                <img src="@/assets/images/yarn-ball.png" />
            </div>
            <div class="px-3 text-center">
                <h3 class="mt-3">Votre panier est vide !</h3>
                <RouterLink to="/boutique">
                    <button class="btn btn-primary mt-1">
                    <b><p class="m-0">Visiter la boutique</p></b>
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>

</template>

<script setup>
    import { useCartStore } from "@/stores/CartStore";
    import CartDetails from '@/components/CartComponents/CartDetails.vue';
    import CartItems from '@/components/CartComponents/CartItems.vue';
    import { onMounted } from "vue";

    const cartStore = useCartStore();

    function closeSideCart(){

        let appContent = document.querySelector(".appContent");
        let sideCart = document.getElementById("sideCart");
        let app = document.getElementById("app");
        sideCart.style.right = "-350px";
        sideCart.classList.remove('toggled');
        appContent.style.pointerEvents = '';
        appContent.style.opacity = '1';
        app.style.overflow = "auto"
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

    onMounted(() => {
        let sideCart = document.getElementById("sideCart");
        document.getElementById("header").addEventListener('mouseleave', () => {
            if(sideCart.className.includes('toggled')){
                setTimeout(() => {
                    // closeSideCart()
                }, 300);
            }
        })
        document.getElementById("cartIcon").addEventListener('click', (event) => {
            if(sideCart.className.includes('toggled')){
                closeSideCart()
            }
            else{
                openSideCart()
            }
        })
    })
</script>

<style scoped>
    h3{
        font-size: 14pt;
    }
    img{
        max-width: 100px;
        width: 100%
    }
    .checkoutButton{
        background-color: #f4aa46;
        border-color: #f4aa46;
    }
    .checkoutButton:hover, .checkoutButton.focus, .checkoutButton:focus, .checkoutButton:not(:disabled):not(.disabled).active, .checkoutButton:not(:disabled):not(.disabled):active, .show > .checkoutButton.dropdown-toggle {
        background-color: #f39a25;
        border-color: #f39a25;
    }
    .btn{
        width: 100%;
        padding: 5px;
        position: relative;
        display: inline-block;
        border-radius: .25rem;
        font-size: 12pt;
    }
    a{
        width: 90%;
    }
    .sideCart {
    height: calc(100% - 60px);
    width: 300px;
    position: fixed;
    z-index: 200;
    top: 60px;
    right: -350px;
    background-color: rgba(255, 255, 255, 0.866);
    overflow-x: hidden;
    transition: 0.3s;
    text-transform: uppercase !important;
    letter-spacing: 1px;
    }
</style>

<style>
    .sideCart .cartDetailsContainer p{
        font-size: 10pt;
    }
    .sideCart .cartDetailsContainer .discountedPrice{
        margin-top: 3px;
    }
    .sideCart .cartDetailsContainer{
        padding: 10px!important;
    }
    .sideCart .itemCategory{
        font-size: 7pt!important;
    }
</style>