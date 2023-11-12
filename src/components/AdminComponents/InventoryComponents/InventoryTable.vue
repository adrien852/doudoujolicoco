<template>
    <div v-if="items" class="table-responsive-md">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="title in tableHeaders">{{ title }}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td v-for="value in item">
                        {{ value }}
                    </td>
                    <td class="text-center">
                        <RouterLink :to="'/admin/inventaire/'+item.id"><button class="btn btn-primary">Voir</button></RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const props = defineProps({
    items: Object,
    tableHeaders: Object
})
</script>

<style scoped>
td{
    vertical-align: middle;
}
</style>