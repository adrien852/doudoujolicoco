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
                <tr v-for="order in filteredOrders">
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
import { computed } from 'vue';

const props = defineProps({
    orders: Object,
    tableHeaders: Object,
    search: String
})

const filteredOrders = computed(() => {
  if (!props.search || props.search.trim() === '') {
    return props.orders;
  }

  const keyword = props.search.toLowerCase();

  return props.orders.filter((item) => {
    return props.tableHeaders.some((field) => {
      const value = item[field]
      return (
          value &&
          value.toString().toLowerCase().includes(keyword)
      )
    })
  })
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
    background-color: #d48b5e;
}
td{
    vertical-align: middle;
}
</style>