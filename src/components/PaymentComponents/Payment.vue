<template>
    <form id="payment-form" action="#">
    <!-- Putting the empty container you plan to pass to
      'braintree.dropin.create' inside a form will make layout and flow
      easier to manage -->
    <div id="dropin-container"></div>
    <input type="submit" />
    <input type="hidden" id="nonce" name="payment_method_nonce" />
  </form>
</template>
<script setup>
  const emit = defineEmits(['paymentInit']);
  import {onMounted, ref} from 'vue';
  onMounted(() => {
    emit('paymentInit');
  })


</script>