<template>
    <NavPath :path="path"/>
    <div v-if="!isLoading" class="container position-relative mt-2">
        <loading :is-full-page="false" :active="isLoading"></loading>
        <div class="mb-3">
            <RouterLink to="/admin/inventaire"><button class="btn btn-secondary">Retour</button></RouterLink>
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
            <div class="d-flex justify-content-center flex-wrap">
                <FormKit
                    type="number"
                    prefix-icon="euro"
                    number
                    step="0.01"
                    label="Prix"
                    name="price"
                    validation="required"
                    outer-class="col-md-5 col-12"
                />
                <FormKit
                    type="number"
                    prefix-icon="euro"
                    number
                    step="0.01"
                    label="Prix d'origine"
                    help="Avant offre promotionnel"
                    name="originalPrice"
                    validation="required"
                    outer-class="col-md-5 col-12"
                />
            </div>
            <div class="d-flex justify-content-center flex-wrap">
                <FormKit
                    type="number"
                    label="Stock"
                    name="stock"
                    outer-class="col-md-5 col-12"
                />
                
                <FormKit
                    type="select"
                    label="Catégorie"
                    v-model="item.category.name"
                    :options="categoryNames"
                    validation="required"
                    outer-class="col-md-5 col-12"
                />
            </div>
            <div class="d-flex justify-content-center flex-wrap">
                <FormKit
                    type="textarea"
                    label="Description"
                    name="description"
                    validation="required"
                    outer-class="col-md-5 col-12"
                />
                <FormKit
                    type="textarea"
                    label="Matériaux"
                    name="material"
                    outer-class="col-md-5 col-12"
                />
            </div>
            <div class="d-flex justify-content-center flex-wrap">
                <FormKit
                    type="textarea"
                    label="Dimensions"
                    name="dimensions"
                    outer-class="col-md-5 col-12"
                />
                <FormKit
                    type="checkbox"
                    label="Pas un jouet ?"
                    name="isNotForChildren"
                    :value="false"
                    outer-class="col-md-5 col-12 mt-md-4"
                />
            </div>
            <div class="d-flex justify-content-center">
                <div class="col-12 offset-md-7">
                    <h4>Images</h4>
                    <p>Pour conserver une présentation stable et uniforme sur le site, quelques règles à retenir : </p>
                    <ol>
                        <li>Orientation portrait.</li>
                        <li>Centrer parfaitement le sujet sur la photo.</li>
                        <li>Laisser suffisamment d'espace autour du sujet. Il ne devrait pas occuper plus de &#8531; de la photo.</li>
                        <li>Privilégier les formats suivants : jpg, jpeg, png.</li>
                        <li>L'<b>image principale</b> correspond à l'image représentant l'objet à travers le site. Les autres images sont visibles uniquement sur la page produit.</li>
                        <li>N'enregistrez pas de photos tant que <b>Nom normalisé</b> n'est pas définitivement choisi.</li>
                        <li class="text-red">Ne pas oublier d'<b>Enregistrer</b> avec le bouton tout en bas de la page pour sauvegarder le formulaire ET les images !</li>
                    </ol>
                </div>
                <div class="col-md-5">
                </div>
            </div>
            <div class="d-flex align-items-center">
                <div class="d-flex justify-content-center flex-wrap col-lg-7">
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
                            <div @click="previewClick('file1')" v-if="item.images[0] !== ''" class="imagePreview m-auto card"><img  :src="item.images[0]" /></div>
                            <div @click="previewClick('file1')" v-if="item.images[0] === ''" class="imagePreview w-100 card"><img class="missingPhoto w-25 opacity-50 m-auto" src="@/assets/images/missing_photo.png"/></div>
                        </div>
                    </div>
                    <div class="position-relative col-md-5 col-12 mb-4">
                        <loading :is-full-page="false" :active="fileUploading"></loading>
                        <div class="d-flex flex-column">
                            <FormKit
                                type="file"
                                label="Image 2"
                                accept="image/*"
                                name="file2"
                                id="file2"
                                :disabled="!(item.normalized)"
                                @change="uploadImage($event, 1)"
                            />
                            <div @click="previewClick('file2')" v-if="item.images[1] !== ''" class="imagePreview m-auto card"><img  :src="item.images[1]" /></div>
                            <div @click="previewClick('file2')" v-if="item.images[1] === ''" class="imagePreview w-100 card"><img class="missingPhoto w-25 opacity-50 m-auto" src="@/assets/images/missing_photo.png"/></div>
                        </div>
                    </div>
                    <div class="position-relative col-md-5 col-12 mb-4">
                        <loading :is-full-page="false" :active="fileUploading"></loading>
                        <div class="d-flex flex-column">
                            <FormKit
                                type="file"
                                label="Image 3"
                                accept="image/*"
                                name="file3"
                                id="file3"
                                :disabled="!(item.normalized)"
                                @change="uploadImage($event, 2)"
                            />
                            <div @click="previewClick('file3')" v-if="item.images[2] !== ''" class="imagePreview m-auto card"><img  :src="item.images[2]" /></div>
                            <div @click="previewClick('file3')" v-if="item.images[2] === ''" class="imagePreview w-100 card"><img class="missingPhoto w-25 opacity-50 m-auto" src="@/assets/images/missing_photo.png"/></div>
                        </div>
                    </div>
                    <div class="position-relative col-md-5 col-12 mb-4">
                        <loading :is-full-page="false" :active="fileUploading"></loading>
                        <div class="d-flex flex-column">
                            <FormKit
                                type="file"
                                label="Image 4"
                                accept="image/*"
                                name="file4"
                                id="file4"
                                :disabled="!(item.normalized)"
                                @change="uploadImage($event, 3)"
                            />
                            <div @click="previewClick('file4')" v-if="item.images[3] !== ''" class="imagePreview m-auto card"><img  :src="item.images[3]" /></div>
                            <div @click="previewClick('file4')"  v-if="item.images[3] === ''" class="imagePreview w-100 card"><img class="missingPhoto w-25 opacity-50 m-auto" src="@/assets/images/missing_photo.png"/></div>
                        </div>
                    </div>
                </div>
                <div v-if="item.images[0] !== ''" class="col-6 position-relative">
                    <h4>Aperçu du produit en boutique</h4>
                    <loading :is-full-page="false" :active="fileUploading"></loading>
                    <SimpleShopItem :item="{
                        ...item,
                        images: {
                            0: item.images[0]
                        }
                    }"/>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-3">
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
    import SimpleShopItem from '@/components/ShopComponents/SimpleShopItem.vue';
    import { getCategories } from '@/services/ShopService.js'
    import { saveItem } from '@/services/InventoryService.js'
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import { ref, onMounted, inject } from 'vue';
    import { getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
    import {ref as firebaseRef} from "firebase/storage";
    import NavPath from '@/components/NavbarComponents/NavPath.vue';
    import { onBeforeMount } from 'vue';
    const swal = inject('$swal')
    import router from '@/router'
    import Compressor from 'compressorjs';
    
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
                name: 'Inventaire',
                route: '/admin/inventaire'
            },
            {
                name: 'Nouveau',
                route: ''
            },
        ]
    })

    const route = useRoute();
    let isLoading = ref(true);
    let item = {
        images: [
            "",
            "",
            "",
            ""
        ],
        category: {
            name: null
        }
    };
    let categories = null;
    let categoryNames = null;
    let imageData = null;
    let photos = {};
    let fileUploading = ref(false);
    let submitDisabled = ref(false);

    onMounted(async() => {
        await getCategories()
        .then(response => {
            categoryNames = [""].concat(response.map(category => category.name))
            categories = response;
        }) 
        isLoading.value = false;
    })

    function uploadImage(event, id) {
        fileUploading.value = true;
        submitDisabled.value = true;
        const file = event.target.files[0];
        const storage = getStorage();
        const directory = import.meta.env.VITE_ENV === 'production' ? 'product_images' : 'product_images_staging';

        const storageRef = firebaseRef(storage, directory+'/'+item.normalized+'/'+event.target.name);

        new Compressor(file, {
            quality: 0.1,
            mimeType: 'image/webp',
            success(result) {
                uploadBytes(storageRef, result).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then(function(downloadURL) {
                        item.images[id] = downloadURL;
                        fileUploading.value = false;
                        submitDisabled.value = false;
                    });
                });
            }
        });
    }

    function handleSubmit() {
        isLoading.value = true;
        let reqItem = {
            ...item,
            category: categories.find((category) => category.name == item.category.name),
        }
        saveItem(reqItem).then((response) => {
            if(response.code === 'ER_DUP_ENTRY'){
                swal.fire({
                    icon: 'error',
                    title: 'Sauvegarde échouée',
                    html: 'Un article avec ce <b>Nom normalisé</b> existe déjà. Réessayez avec un nom différent.',
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
                    text: 'Votre article a bien été enregistré.',
                    confirmButtonText: "OK",
                    showCloseButton: false,
                    confirmButtonColor: "#F39E6A",
                    showClass: {
                        popup: 'animate__animated animate__fadeIn'
                    },
                })
                .then(() => {
                    router.push({ path: '/admin/inventaire' })
                })
            }
        })
        .catch(() => {
            swal.fire({
                icon: 'error',
                title: 'Sauvegarde échouée',
                text: 'Votre article n\'a pas été enregistré. Veuillez réessayer plus tard.',
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

    function previewClick(id){
        document.getElementById(id).click();
    }
</script>

<style>

</style>