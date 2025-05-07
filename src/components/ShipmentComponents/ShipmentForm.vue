<template>
    <div>
        <FormKit type="form" :actions="false" name="shipping">
            <div class="d-flex row">
                <FormKit
                    type="text"
                    validation="required"
                    name="firstName"
                    id="firstName"
                    label="Prénom"
                    placeholder="Jeanne"
                    outer-class="col-md-6 col-12"
                    v-model="shippingValues.firstName"
                />
                <FormKit
                    type="text"
                    validation="required"
                    name="lastName"
                    id="lastName"
                    label="Nom"
                    placeholder="Dupont"
                    outer-class="col-md-6 col-12"
                    v-model="shippingValues.lastName"
                />
            </div>

            <div class="d-flex row">
                <FormKit
                    type="text"
                    validation="required"
                    name="address1"
                    id="address1"
                    label="Adresse postale"
                    placeholder="1 rue Jean Jaurès"
                    outer-class="col-lg-6 col-12"
                    v-model="shippingValues.address1"
                />
                <FormKit
                    type="text"
                    name="address2"
                    id="address2"
                    label="Complément d'adresse"
                    placeholder="Résidence Le Cigalon"
                    outer-class="col-lg-6 col-12"
                    v-model="shippingValues.address2"
                />
            </div>
            <div class="d-flex row">
                <FormKit
                    type="text"
                    validation="required"
                    name="city"
                    id="city"
                    label="Ville"
                    placeholder="Paris"
                    outer-class="col-md-6 col-12"
                    v-model="shippingValues.city"
                />
                <FormKit
                    type="text"
                    :validation="[['required'],['matches', /^\d{5}$/]]"
                    :validation-messages="{
                        matches: 'Code Postal doit être exactement 5 chiffres',
                    }"
                    name="postalCode"
                    id="postalCode"
                    label="Code Postal"
                    placeholder="75000"
                    outer-class="col-md-6 col-12"
                    v-model="shippingValues.postalCode"
                />
            </div>
            
            <div class="d-flex row">
                <FormKit
                    type="text"
                    prefix-icon="email"
                    validation="email|required"
                    name="email"
                    id="email"
                    label="E-mail"
                    placeholder="jeanne@gmail.com"
                    outer-class="col-md-6 col-12"
                    v-model="shippingValues.email"
                />
                <FormKit
                    type="text"
                    :validation="[['required'],['matches', /^(33|0)([1-9])\d{8}$/]]"
                    :validation-messages="{
                        matches: 'Numéro de téléphone incorrect',
                    }"
                    name="phone"
                    prefix-icon="telephone"
                    id="phone"
                    label="Numéro de téléphone"
                    placeholder="0601020304"
                    outer-class="col-md-6 col-12"
                    v-model="shippingValues.phone"
                />
            </div>
            <FormKit
                type="checkbox"
                label="Même addresse de facturation"
                name="sameAsShipping"
                v-model="shippingValues.sameAsShipping"
            />
            <FormKit
                type="hidden"
                name="id"
                v-model="shippingValues.id"
            >
            </FormKit>
        </FormKit>
            
    </div>
</template>
<script setup>
import { FormKit } from '@formkit/vue';
import {watch, reactive} from 'vue'

const emit = defineEmits(['sameAsShipping']);

const props = defineProps({
    initShippingValues: Object
});

let shippingValues = reactive({...props.initShippingValues})

watch(shippingValues, () => {
    emit('sameAsShipping', shippingValues.sameAsShipping)
})

</script>

<style>
[data-invalid]:not([data-type='checkbox']) .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px red;
}

[data-complete]:not([data-type='checkbox']) .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px green;
}
[data-complete]:not([data-type='checkbox']) .formkit-inner::after {
  content: '✓';
  color: #22211F;
  display: block;
  padding: 0.5em;
}
.formkit-form{
    background: white;
    border-radius: 10px;
    padding:15px;
    padding-top: 0;
    width: 100%;
}

button.formkit-input {
    color: white;
    background-color: #F39E6A!important;
    border-color: #F39E6A!important;
  }

  button.formkit-input:hover {
    color: #fff;
    background-color: #d48b5e!important;
    border-color: #d48b5e!important;
  }

  button.formkit-input.focus, button.formkit-input:focus, button.formkit-input:not(:disabled):not(.disabled).active, button.formkit-input:not(:disabled):not(.disabled):active, .show > button.formkit-input.dropdown-toggle {
    color: #fff;
    background-color: #515d62!important;
    border-color: #515d62!important;
  }

.formkit-outer[data-type="submit"]{
    text-align: center;
    margin: 0;
}
.formkit-outer[data-type="submit"] .formkit-wrapper{
    margin: auto;
}
</style>