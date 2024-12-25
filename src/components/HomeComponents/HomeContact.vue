<template>
    <div class="container my-5">
        <h1 class="ml-3 mb-4 text-left">Prenons contact</h1>
        <div class="d-flex flex-wrap justify-content-lg-between justify-content-md-center align-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 col-12">
                <ContactForm />
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-12 py-3 d-flex flex-column">
                <p>Si vous avez la moindre question concernant nos produits ou nos services, vous pouvez nous contacter par email à <a class="mailLink" href="mailto:doudoujolicoco@gmail.com">doudoujolicoco@gmail.com</a> ou en utilisant le formulaire de contact. Nous vous répondrons dans les plus brefs délais.</p>
                <p>Vous pouvez également consulter notre Foire Aux Questions pour en savoir plus sur les modalités de livraison et bien d'autres.</p>
                <RouterLink class="mx-auto" to="/faq">
                    <button class="btn btn-primary">
                        <p class="m-0">Foire Aux Questions</p>
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    import ContactForm from '@/components/ContactComponents/ContactForm.vue'
</script>

<style scoped>
.mailLink{
    text-decoration: none;
    color:#22211F;
    height: fit-content;
    background-repeat: no-repeat;
    transition: background-size .4s cubic-bezier(.22,.61,.36,1),color .2s ease-out;
    background-size: 0 1px;
    background-image: linear-gradient(black,black);
    background-position: 0 100%;
}
.mailLink:hover{
    background-size: 100% 1px;
}
</style>