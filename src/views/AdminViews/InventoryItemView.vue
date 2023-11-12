<template>
    <loading :is-full-page="false" :active="isLoading"></loading>
    <div v-if="item && categories" class="container">
        <FormKit
            type="form"
            #default="{ value }"
            @submit="handleSubmit"
            v-model="item"

            >
            <div class="d-flex flex-wrap">
                <FormKit
                    type="text"
                    label="Nom"
                    name="name"
                    validation="required"
                    outer-class="col-md-6 col-12"
                />
                <FormKit
                    type="text"
                    label="Nom normalisé"
                    name="normalized"
                    placeholder="elephant_rouge"
                    validation="required"
                    help="Doit être unique, sans accent ni espace"
                    outer-class="col-md-6 col-12"
                />
            </div>
            <div class="d-flex flex-wrap">
                <FormKit
                    type="number"
                    prefix-icon="euro"
                    number
                    step="0.01"
                    label="Prix"
                    name="price"
                    validation="required"
                    outer-class="col-md-6 col-12"
                />
                <FormKit
                    type="select"
                    label="Catégorie"
                    v-model="item.category.name"
                    :options="categoryNames"
                    outer-class="col-md-6 col-12"
                />
            </div>

            <FormKit
                type="textarea"
                label="Description"
                name="description"
                validation="required"
                outer-class="col-md-6 col-12"
            />
        </FormKit>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { getCategories } from '@/services/ShopService.js'
    import { getItem, updateItem } from '@/services/InventoryService.js'
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import { ref, onMounted, inject } from 'vue';
    const swal = inject('$swal')

    const route = useRoute();
    let isLoading = ref(true);
    let item = null;
    let categories = null;
    let categoryNames = null;

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

    function handleSubmit() {
        isLoading.value = true;
        let reqItem = {
            id: item.id,
            name: item.name,
            normalized: item.normalized,
            description: item.description,
            price: item.price,
            category: categories.find((category) => category.name == item.category.name),
        }
        updateItem(reqItem).then(() => {
            swal.fire({
                icon: 'success',
                title: 'Sauvegarde réussie',
                text: 'Votre article a bien été enregistré.',
                confirmButtonText: "OK",
                showCloseButton: true,
                confirmButtonColor: "#94BCD8",
                showClass: {
                    popup: 'animate__animated animate__fadeIn'
                },
            })
            isLoading.value = false;
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