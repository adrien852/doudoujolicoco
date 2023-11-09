<template>
    <div id="sideCart" class="sideCart pb-3">
        <div class="sideCartContent mt-2">
            <CartItems @close-side-cart="closeSideCart" v-if="cartStore.count > 0" :items="cartStore.items"/>
            <div class="d-flex flex-column">
                <RouterLink class="mx-auto mt-1" @click="closeSideCart" to="/panier"><button class="btn btn-primary px-2"><span class="text-uppercase">Voir mon panier</span></button></RouterLink> 
                <RouterLink class="mx-auto mt-1" @click="closeSideCart" to="/livraison"><button class="btn btn-primary checkoutButton px-2"><span class="text-uppercase">Passer la commande</span></button></RouterLink> 
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
        let sideCart = document.getElementById("sideCart");
                sideCart.style.right = "-350px";
                sideCart.classList.remove('toggled');
    }

    function openSideCart(){
        let sideCart = document.getElementById("sideCart");
                sideCart.style.right = "0";
                sideCart.classList.add('toggled');
    }

    onMounted(() => {
        let sideCart = document.getElementById("sideCart");
        sideCart.addEventListener('mouseover', () => {
            openSideCart()
        })
        document.getElementById("header").addEventListener('mouseleave', () => {
            if(sideCart.className.includes('toggled')){
                setTimeout(() => {
                    closeSideCart()
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
    height: calc(100% - 92px);
    width: 350px;
    position: fixed;
    z-index: 200;
    top: 92px;
    right: -350px;
    background-color: rgba(255, 255, 255, 0.866);
    overflow-x: hidden;
    transition: 0.5s;
    text-transform: uppercase !important;
    letter-spacing: 1px;
    }
</style>