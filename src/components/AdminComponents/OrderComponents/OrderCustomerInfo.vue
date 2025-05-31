<template>
    <div class="orderDetails mb-3 col-xl-3 col-md-6 col-12">
        <div class="card">
            <div class="card-header">
                Informations client
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ order.customer?.shippingAddress.name}}</h5>
                <p class="card-text">{{ order.customer?.shippingAddress.address1 }}</p>
                <p class="card-text">{{ order.customer?.shippingAddress.address2 }}</p>
                <p class="card-text">{{ order.customer?.shippingAddress.postalCode+' '+order.customer?.shippingAddress.city }}</p>
                <p class="card-text">{{ order.customer?.shippingAddress.phone }}</p>
                <p class="card-text">{{ order.customer?.email }}</p>
                <br />
                <p class="card-text"><i>Payé le :</i><br />{{ paymentDate }}</p>
                <br />
                <p class="card-text"><i>Stripe Payment ID : </i><br />{{ order.payment?.paymentId }}</p>
            </div>
        </div>

    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    order: Object
})

let paymentDate = computed(() => {
    if (!props.order.payment?.createdAt) return '';
    const date = new Date(props.order.payment?.createdAt);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  })
</script>

<style scoped>
p{
    margin:0
}
</style>