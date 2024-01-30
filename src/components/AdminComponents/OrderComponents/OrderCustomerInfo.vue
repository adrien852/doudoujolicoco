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
    let date = new Date(props.order.payment?.createdAt);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();

    var formattedTime = hours + ':' + minutes.substring(-2);
    return date.getDate()+'/'+date.getMonth()+1+'/'+date.getFullYear()+' '+formattedTime
  })
</script>

<style scoped>
p{
    margin:0
}
</style>