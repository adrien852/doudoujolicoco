<template>
  <form class="col-lg-6 col-md-8 col-12" id="payment-form" action="#">
    <!-- Putting the empty container you plan to pass to
      'braintree.dropin.create' inside a form will make layout and flow
      easier to manage -->
    <div id="dropin-container"></div>
    <div class="text-center mt-3" id="submitButtons"></div>
  </form>
</template>
<script setup>
  const emit = defineEmits(['paymentInit']);
  import {onMounted, ref} from 'vue';
  onMounted(() => {
    emit('paymentInit');
  })
</script>
<style>
  #submitButtons .btn{
    background-color: #6baaca;
  }
</style>