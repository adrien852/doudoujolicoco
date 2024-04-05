<template>
    <NavPath :path="path"/>
    <div v-if="!isLoading" class="container position-relative mt-2">
        <loading :is-full-page="false" :active="isLoading"></loading>
        <div class="mb-3">
            <RouterLink to="/admin/categories"><button class="btn btn-secondary">Retour</button></RouterLink>
            <button @click="deleteProduct(item)" class="btn btn-delete ml-2">Suppr.</button>
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
                    label="Nom"
                    name="name"
                    validation="required"
                    outer-class="col-md-5 col-12"
                />
                <FormKit
                    type="text"
                    label="Nom normalisé"
                    name="normalized"
                    placeholder="elephant_rouge"
                    validation="required"
                    help="Doit être unique, sans accent ni espace"
                    outer-class="col-md-5 col-12"
                />
            </div>
            <div class="d-flex justify-content-center">
                <div class="col-md-11 col-12 offset-md-6">
                    <h4>Image</h4>
                    <p>Pour conserver une présentation stable et uniforme sur le site, quelques règles à retenir : </p>
                    <ol>
                        <li>Orientation paysage.</li>
                        <li>Centrer parfaitement le sujet sur la photo.</li>
                        <li>Laisser suffisamment d'espace autour du sujet. Il ne devrait pas occuper plus de &#8531; de la photo.</li>
                        <li>Privilégier les formats suivants : jpg, jpeg, png.</li>
                        <li>N'enregistrez pas de photos tant que <b>Nom normalisé</b> n'est pas définitivement choisi.</li>
                        <li class="text-red">Ne pas oublier d'<b>Enregistrer</b> avec le bouton tout en bas de la page pour sauvegarder le formulaire ET les images !</li>
                    </ol>
                </div>
                <div class="col-md-5">
                </div>
            </div>
            <div class="d-flex justify-content-center flex-wrap align-items-center">
                <div class="d-flex justify-content-center flex-wrap col-lg-7 col-12">
                    <div class="position-relative col-md-5 col-12 mb-4">
                        <loading :is-full-page="false" :active="fileUploading"></loading>
                        <div class="d-flex flex-column">
                            <FormKit
                                type="file"
                                label="Image principale"
                                accept="image/*"
                                name="file1"
                                id="file1"
                                :disabled="!(item.normalized)"
                                @change="uploadImage($event, 0)"
                            />
                            <div @click="previewClick('file1')" v-if="item.image !== ''" class="imagePreview m-auto card"><img  :src="item.image" /></div>
                            <div @click="previewClick('file1')" v-if="item.image === ''" class="imagePreview w-100 card"><img class="missingPhoto w-25 opacity-50 m-auto" src="@/assets/images/missing_photo.png"/></div>
                        </div>
                    </div>
                </div>
                <div v-if="item.image !== ''" class="col-lg-5 col-md-8">
                    <loading :is-full-page="false" :active="fileUploading"></loading>
                    <h4>Aperçu du produit en boutique</h4>
                    <ShopCategory :category="{
                        ...item,
                        images: {
                            0: item.image
                        }
                    }"/>
                </div>
            </div>
            <div class="mt-3">
                <FormKit type="submit" :disabled="submitDisabled">Enregistrer</FormKit>
            </div>
        </FormKit>
            <div v-if="imageData!=null">                     
                <img class="preview" height="268" width="356" :src="imageData">
            </div>  
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import ShopCategory from '@/components/ShopComponents/ShopCategory.vue';
    import { getCategory, updateCategory, deleteCategory } from '@/services/InventoryService.js'
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import { ref, onMounted, inject } from 'vue';
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import { onBeforeMount } from 'vue';
    import { getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
    import {ref as firebaseRef} from "firebase/storage";
    const swal = inject('$swal')
    import router from '@/router'

    const route = useRoute();
    let isLoading = ref(true);
    let item = {};
    let categories = null;
    let categoryNames = null;
    let imageData = null;
    let photos = {};
    let fileUploading = ref(false);
    let submitDisabled = ref(false);
    let path = null;

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
                name: 'Catégories',
                route: '/admin/categories'
            },
            {
                name: route.params.id,
                route: ''
            },
        ]
    })

    onMounted(async() => {
        await getCategory(route.params.id)
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

    function uploadImage(event, id) {
        fileUploading.value = true;
        submitDisabled.value = true;
        const file = event.target.files[0];
        const storage = getStorage();

        const storageRef = firebaseRef(storage, 'category_images/'+item.normalized+'/'+event.target.name);

        uploadBytes(storageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(function(downloadURL) {
                item.image = downloadURL;
                fileUploading.value = false;
                submitDisabled.value = false;
            });
        });
    }

    function handleSubmit() {
        isLoading.value = true;
        let reqItem = {
            id: item.id,
            name: item.name,
            normalized: item.normalized,
            image: item.image
        }
        updateCategory(reqItem).then((response) => {
            if(response.code === 'ER_DUP_ENTRY'){
                swal.fire({
                    icon: 'error',
                    title: 'Sauvegarde échouée',
                    html: 'Une catégorie avec ce <b>Nom normalisé</b> existe déjà. Réessayez avec un nom différent.',
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
                    text: 'Votre catégorie a bien été enregistré.',
                    confirmButtonText: "OK",
                    showCloseButton: false,
                    confirmButtonColor: "#F39E6A",
                    showClass: {
                        popup: 'animate__animated animate__fadeIn'
                    },
                })
                .then(() => {
                    router.push({ path: '/admin/categories' })
                })
            }
        })
        .catch(() => {
            swal.fire({
                icon: 'error',
                title: 'Sauvegarde échouée',
                text: 'Votre catégorie n\'a pas été enregistré. Veuillez réessayer plus tard.',
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

    function deleteProduct(item){
        swal.fire({
            icon: 'question',
            title: 'Supprimer '+item.name+' ?',
            text: 'Êtes-vous sûr de vouloir supprimer cette catégorie ?',
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
                deleteCategory(item.id).then((response) => {
                    router.push({ path: '/admin/categories' })
                })
            }
        })
        
    }

    function previewClick(id){
        document.getElementById(id).click();
    }
</script>

<style>

</style>