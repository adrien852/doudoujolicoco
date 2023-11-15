<template>
    <loading :is-full-page="false" :active="isLoading"></loading>
    <div v-if="item && categories" class="container">
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
                    type="select"
                    label="Catégorie"
                    v-model="item.category.name"
                    :options="categoryNames"
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
                <div class="col-md-5">

                </div>
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
                    </ol>
                </div>
                <div class="col-md-5">
                </div>
            </div>
            <div class="d-flex justify-content-center flex-wrap">
                <div class="position-relative col-md-5 col-12">
                    <loading :is-full-page="false" :active="fileUploading"></loading>
                    <FormKit
                        type="file"
                        label="Image principale"
                        accept="image/*"
                        name="file1"
                        @change="uploadImage($event, 0)"
                    />
                </div>
                <div class="position-relative col-md-5 col-12">
                    <loading :is-full-page="false" :active="fileUploading"></loading>
                    <FormKit
                        type="file"
                        label="Image 2"
                        ignore="true"
                        name="file2"
                        accept="image/*"
                        @change="uploadImage($event, 1)"
                    />
                </div>
                <div class="position-relative col-md-5 col-12">
                    <loading :is-full-page="false" :active="fileUploading"></loading>
                    <FormKit
                        type="file"
                        label="Image 3"
                        ignore="true"
                        name="file3"
                        accept="image/*"
                        @change="uploadImage($event, 2)"
                    />
                </div>
                <div class="position-relative col-md-5 col-12">
                    <loading :is-full-page="false" :active="fileUploading"></loading>
                    <FormKit
                        type="file"
                        label="Image 4"
                        ignore="true"
                        name="file4"
                        accept="image/*"
                        @change="uploadImage($event, 3)"
                    />
                </div>
            </div>
            <FormKit type="submit" :disabled="submitDisabled">Enregistrer</FormKit>
        </FormKit>
            <div v-if="imageData!=null">                     
                <img class="preview" height="268" width="356" :src="imageData">
            </div>  
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { getCategories } from '@/services/ShopService.js'
    import { getItem, updateItem } from '@/services/InventoryService.js'
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import { ref, onMounted, inject } from 'vue';
    import { getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
    import {ref as firebaseRef} from "firebase/storage";
    const swal = inject('$swal')
    import router from '@/router'

    const route = useRoute();
    let isLoading = ref(true);
    let item = null;
    let categories = null;
    let categoryNames = null;
    let imageData = null;
    let photos = {};
    let fileUploading = ref(false);
    let submitDisabled = ref(false);

    onMounted(async() => {
        await getItem(route.params.id)
        .then(response => {
            item = response;
        })
        await getCategories()
        .then(response => {
            categoryNames = response.map(category => category.name);
            categories = response;
        }) 
        isLoading.value = false;
    })

    function uploadImage(event, id) {
        fileUploading.value = true;
        submitDisabled.value = true;
        const file = event.target.files[0];
        const storage = getStorage();

        const storageRef = firebaseRef(storage, 'product_images/'+item.normalized+'/'+event.target.name);

        uploadBytes(storageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(function(downloadURL) {
                item.images[id] = downloadURL;
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
            description: item.description,
            price: item.price,
            category: categories.find((category) => category.name == item.category.name),
            images: item.images
        }
        updateItem(reqItem).then((response) => {
            if(response.code === 'ER_DUP_ENTRY'){
                swal.fire({
                    icon: 'error',
                    title: 'Sauvegarde échouée',
                    html: 'Un article avec ce <b>Nom normalisé</b> existe déjà. Réessayez avec un nom différent.',
                    confirmButtonText: "OK",
                    showCloseButton: true,
                    confirmButtonColor: "#94BCD8",
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
                    confirmButtonColor: "#94BCD8",
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
                confirmButtonColor: "#94BCD8",
                showClass: {
                    popup: 'animate__animated animate__fadeIn'
                },
            })
        })
        isLoading.value = false;
    }
</script>

<style>
[data-type="select"]:not([data-multiple]) .formkit-inner::after {
  background-color: transparent!important;
}

[data-type="textarea"] .formkit-inner::after {
  content:none!important;
}
</style>