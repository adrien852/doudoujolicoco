<template>
    <div class="orderDetails mb-3 col-xl-3 col-md-6 col-12">
        <div class="card">
            <div class="card-header">
                Informations client
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ order.customer?.shippingAddress.firstName+' '+order.customer?.shippingAddress.lastName}}</h5>
                <p class="card-text">{{ order.customer?.shippingAddress.address1 }}</p>
                <p class="card-text">{{ order.customer?.shippingAddress.address2 }}</p>
                <p class="card-text">{{ order.customer?.shippingAddress.postalCode+' '+order.customer?.shippingAddress.city }}</p>
                <p class="card-text">{{ order.customer?.shippingAddress.phone }}</p>
                <p class="card-text">{{ order.customer?.email }}</p>
                <br />
                <p class="card-text"><i>Braintree Payment ID : </i><br />{{ order.payment?.paymentId }}</p>
            </div>
        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    order: Object
})
</script>

<style scoped>
p{
    margin:0
}
</style>