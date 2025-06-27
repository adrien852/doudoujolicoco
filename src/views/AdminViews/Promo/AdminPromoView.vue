<template>
    <NavPath :path="path"/>
    <div v-if="!isLoading" class="container position-relative mt-2">
        <loading :is-full-page="false" :active="isLoading"></loading>
        <div class="mb-3">
            <RouterLink to="/admin/promos"><button class="btn btn-secondary">Retour</button></RouterLink>
            <button @click="deletePromo(item)" class="btn btn-delete ml-2">Suppr.</button>
        </div>
        <FormKit
            type="form"
            #default="{ value }"
            @submit="handleSubmit"
            v-model="item"
            :actions="false"
            >
            <div class="d-flex justify-content-center flex-wrap">
                <FormKit
                    type="text"
                    label="Code"
                    name="code"
                    validation="required"
                    outer-class="col-md-5 col-12"
                    help="En majuscules, sans espace ni accents. Chiffres et tirets autorisés"
                />
                <FormKit
                    type="radio"
                    label="Type de promo"
                    name="type"
                    :options="['Pourcentage', 'Valeur fixe']"
                    validation="required"
                    outer-class="col-md-5 col-12"
                />
            </div>
            <div class="d-flex justify-content-center flex-wrap">
                <FormKit
                    type="number"
                    prefix-icon="tag"
                    number
                    :step="(item.type === 'Valeur Fixe') ? '0.01' : '1'"
                    label="Valeur de la réduction"
                    name="amount"
                    validation="required"
                    outer-class="col-md-5 col-12"
                />
                <FormKit
                    type="number"
                    prefix-icon="euro"
                    number
                    step="0.01"
                    label="Valeur minimum de commande"
                    help="Le code promotionnel ne fonctionnera pas pour une commande d'un total inférieur à la valeur indiquée"
                    name="minimumOrderTotal"
                    outer-class="col-md-5 col-12"
                    validation="required"
                />
            </div>
            <div class="d-flex justify-content-center flex-wrap">
               <FormKit
                    type="text"
                    label="Description"
                    name="description"
                    validation="required"
                    outer-class="col-md-5 col-12"
                    :transform="(val) => val.toUpperCase()"
                    help="Affichée sur la page d'accueil"
                />
                <FormKit
                    type="checkbox"
                    :value="false"
                    label="Usage unique ?"
                    name="singleUse"
                    validation="required"
                    outer-class="col-md-5 col-12 align-self-center"
                />
            </div>
            <div class="d-flex justify-content-center mt-3">
                <FormKit type="submit" :disabled="submitDisabled">Enregistrer</FormKit>
            </div>
        </FormKit>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { getAdminPromo, updateAdminPromo, deleteAdminPromo } from '@/services/PromoService.js'
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import { ref, onMounted, inject } from 'vue';
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import { onBeforeMount } from 'vue';
    const swal = inject('$swal')
    import router from '@/router'
    
    const route = useRoute();
    let path = null;
    let item = 
    {
        type: "Pourcentage"
    }

    onBeforeMount(() => {
        path = [
            {
                name: 'accueil',
                route: '/'
            },
            {
                name: 'Admin',
                route: '/admin'
            },
            {
                name: 'Promos',
                route: '/admin/promos'
            },
            {
                name: 'Promo '+route.params.id,
                route: ''
            },
        ]
    })

    let isLoading = ref(true);

    let categories = null;
    let submitDisabled = ref(false);

    onMounted(async() => {
        await getAdminPromo(route.params.id)
        .then(response => {
            item = response;
        })
        .catch(function(error) {
            console.log(error)
            swal.fire({
                icon: 'error',
                title: 'Désolé',
                text: 'Le site fait face à un soucis technique. Veuillez nous excuser pour le désagrément.',
                confirmButtonText: "Retour à l'accueil",
                showCloseButton: true,
                showConfirmButton: true,
                confirmButtonColor: "#F39E6A",
            }).then(() => {
                router.push({ path: '/admin' })
            })
        })
        isLoading.value = false;
    })

    function handleSubmit() {
        isLoading.value = true;
        updateAdminPromo(item).then((response) => {
            if(response.code === 'ER_DUP_ENTRY'){
                swal.fire({
                    icon: 'error',
                    title: 'Sauvegarde échouée',
                    html: 'Un code promo avec ce <b>Code</b> existe déjà. Réessayez avec un nom différent.',
                    confirmButtonText: "OK",
                    showCloseButton: true,
                    confirmButtonColor: "#F39E6A",
                    showClass: {
                        popup: 'animate__animated animate__fadeIn'
                    },
                })
            }
            else{
                swal.fire({
                    icon: 'success',
                    title: 'Sauvegarde réussie',
                    text: 'Votre code promo a bien été enregistré.',
                    confirmButtonText: "OK",
                    showCloseButton: false,
                    confirmButtonColor: "#F39E6A",
                    showClass: {
                        popup: 'animate__animated animate__fadeIn'
                    },
                })
                .then(() => {
                    router.push({ path: '/admin/promos' })
                })
            }
        })
        .catch(() => {
            swal.fire({
                icon: 'error',
                title: 'Sauvegarde échouée',
                text: 'Votre code promo n\'a pas été enregistré. Veuillez réessayer plus tard.',
                confirmButtonText: "OK",
                showCloseButton: true,
                confirmButtonColor: "#F39E6A",
                showClass: {
                    popup: 'animate__animated animate__fadeIn'
                },
            })
        })
        isLoading.value = false;
    }

    function deletePromo(item){
        swal.fire({
            icon: 'question',
            title: 'Supprimer '+item.code+' ?',
            text: 'Êtes-vous sûr de vouloir supprimer ce code promotionnel ?',
            showCancelButton: true,
            confirmButtonText: "Supprimer",
            cancelButtonText: "Annuler",
            showCloseButton: true,
            confirmButtonColor: "#D89494",
            denyButtonColor: "#F39E6A",
            showClass: {
                popup: 'animate__animated animate__fadeIn'
            },
        }).then((result) => {
            if (result.isConfirmed) {
                deleteAdminPromo(item.id).then((response) => {
                    router.push({ path: '/admin/promos' })
                })
            }
        })
        
    }
</script>

<style>

</style>