<template>
    <div v-if="items" class="table-responsive-md">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="title in tableHeaders">{{ title }}</th>
                    <th colspan="2"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td v-for="value in item">
                        {{ value }}
                    </td>
                    <td class="justify-content-end d-flex">
                        <button @click="deleteItem(item)" class="btn btn-delete mr-2">Suppr.</button>
                        <RouterLink :to="'/admin/categories/'+item.id"><button class="btn btn-primary">Voir</button></RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { inject } from 'vue';
import { deleteCategory } from '@/services/InventoryService.js'
const swal = inject('$swal')

const props = defineProps({
    items: Object,
    tableHeaders: Object
})

const emit = defineEmits(['itemIdDeleted'])

function deleteItem(item){
    swal.fire({
        icon: 'question',
        title: 'Supprimer '+item.name+' ?',
        text: 'Êtes-vous sûr de vouloir supprimer cette catégorie ?',
        showCancelButton: true,
        confirmButtonText: "Supprimer",
        cancelButtonText: "Annuler",
        showCloseButton: true,
        confirmButtonColor: "#D89494",
        denyButtonColor: "#94BCD8",
        showClass: {
            popup: 'animate__animated animate__fadeIn'
        },
    }).then((result) => {
        if (result.isConfirmed) {
            deleteCategory(item.id).then((response) => {
                emit('itemIdDeleted', item)
            })
        }
    })
    
}
</script>

<style scoped>
td{
    vertical-align: middle;
}
</style>