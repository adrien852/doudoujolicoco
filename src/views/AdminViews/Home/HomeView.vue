<template>
    <NavPath :path="path"/>
    <div v-if="!isLoading" class="container position-relative mt-2">
        <loading :is-full-page="false" :active="isLoading"></loading>
        <div class="mb-3">
            <RouterLink to="/admin"><button class="btn btn-secondary">Retour</button></RouterLink>
        </div>
        <FormKit
            type="form"
            @submit="handleSubmit"
            :actions="false"
            >
            <div class="d-flex justify-content-center flex-wrap">
                <FormKit
                    type="select"
                    label="Promo"
                    v-model="item.promo.id"
                    :options="promoCodes"
                    outer-class="col-md-5 col-12"
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
    import { getAdminPromos } from '@/services/PromoService.js'
    import { getHomeElements, updateHomeElements } from '@/services/HomeService.js';
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import { ref, onMounted, inject } from 'vue';
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import { onBeforeMount } from 'vue';
    const swal = inject('$swal')
    import router from '@/router'
    
    const route = useRoute();
    let path = null;
    const item = ref({
        promo: {
            id: null
        }
    });

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
                name: 'Page d\'accueil',
                route: '/admin/home'
            },
        ]
    })

    let isLoading = ref(true);
    let promos = null;
    let promoCodes = ref([]);
    let submitDisabled = ref(false);

    onMounted(async () => {
        isLoading.value = true;

        try {
            const [homeResponse, promosResponse] = await Promise.all([
                getHomeElements(route.params.id),
                getAdminPromos()
            ]);

            item.value = homeResponse;
            promoCodes.value = [{ value: null, label: '' }].concat(
                promosResponse.map(promo => ({ value: String(promo.id), label: promo.code }))
            );
            promos = promosResponse;
        } catch (error) {
            swal.fire({
                icon: 'error',
                title: 'Désolé',
                text: 'Le site fait face à un soucis technique. Veuillez nous excuser pour le désagrément.',
                confirmButtonText: "Retour à l'accueil",
                showCloseButton: true,
                showConfirmButton: true,
                confirmButtonColor: "#F39E6A",
            }).then(() => {
                router.push({ path: '/admin' });
            });
        } finally {
            isLoading.value = false;
        }
    });

    function handleSubmit() {
        isLoading.value = true;
        updateHomeElements(item.value).then((response) => {
            swal.fire({
                icon: 'success',
                title: 'Sauvegarde réussie',
                text: 'Votre page d\'accueil a bien été enregistrée.',
                confirmButtonText: "OK",
                showCloseButton: false,
                confirmButtonColor: "#F39E6A",
                showClass: {
                    popup: 'animate__animated animate__fadeIn'
                },
            })
            .then(() => {
                router.push({ path: '/admin' })
            })
        })
        .catch(() => {
            swal.fire({
                icon: 'error',
                title: 'Sauvegarde échouée',
                text: 'Votre page d\'accueil n\'a pas été enregistrée. Veuillez réessayer plus tard.',
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
</script>

<style>

</style>