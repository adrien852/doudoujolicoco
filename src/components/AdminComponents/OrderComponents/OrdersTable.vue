<template>
    <div v-if="orders" class="table-responsive-md">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="title in tableHeaders">{{ title }}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders">
                    <td v-for="value in order">
                        {{ value }}
                    </td>
                    <td class="text-center">
                        <RouterLink :to="'/admin/commandes/'+order.Référence"><button class="btn">Voir</button></RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const props = defineProps({
    orders: Object,
    tableHeaders: Object
})
</script>

<style scoped>
.btn{
  background-color: #F39E6A;
  color: white;
  border-radius: 10px;
  -webkit-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    -moz-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    -o-transition: transform 0.1s ease-out, background-color 0.2s ease-out;
    transition: transform 0.1s ease-out, background-color 0.2s ease-out;
}
.btn:hover{
    -webkit-transition: background-color 0.2s ease-out;
    -moz-transition: background-color 0.2s ease-out;
    -o-transition: background-color 0.2s ease-out;
    transition: background-color 0.2s ease-out;
    text-decoration: none;
    background-color: #4c778d;
}
td{
    vertical-align: middle;
}
</style>