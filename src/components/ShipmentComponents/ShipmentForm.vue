<template>
    <div>
        <FormKit type="form" @submit="sendShipmentAddress" submit-label="Confirmer">
            <div class="d-flex row">
                <FormKit
                    type="text"
                    validation="required"
                    name="firstName"
                    id="firstName"
                    label="Prénom"
                    placeholder="Jeanne"
                    outer-class="col-md-6 col-12"
                />
                <FormKit
                    type="text"
                    validation="required"
                    name="lastName"
                    id="lastName"
                    label="Nom"
                    placeholder="Dupont"
                    outer-class="col-md-6 col-12"
                />
            </div>

            <div class="d-flex row">
                <FormKit
                    type="text"
                    validation="email|required"
                    name="email"
                    id="email"
                    label="E-mail"
                    placeholder="jeanne@gmail.com"
                    outer-class="col-md-6 col-12"
                />
                <FormKit
                    type="text"
                    :validation="[['required'],['matches', /^(33|0)([1-9])\d{8}$/]]"
                    :validation-messages="{
                        matches: 'Numéro de téléphone incorrect',
                    }"
                    name="phone"
                    id="phone"
                    label="Numéro de téléphone"
                    placeholder="0601020304"
                    outer-class="col-md-6 col-12"
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
                />
                <FormKit
                    type="text"
                    name="address2"
                    id="address2"
                    label="Complément d'adresse"
                    placeholder="Résidence Le Cigalon"
                    outer-class="col-lg-6 col-12"
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
                />
                <FormKit
                    type="text"
                    validation="required|length:5"
                    name="postalCode"
                    id="postalCode"
                    label="Code Postal"
                    placeholder="75000"
                    outer-class="col-md-6 col-12"
                />
            </div>
        </FormKit>
    </div>
</template>
<script setup>

const emit = defineEmits('sendShipmentAddress');

function sendShipmentAddress(event){
    emit('sendShipmentAddress', event)
}

</script>

<style>
[data-invalid] .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px red;
}

[data-complete] .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px green;
}
[data-complete] .formkit-inner::after {
  content: '✓';
  color: green;
  display: block;
  padding: 0.5em;
}
.formkit-form{
    background: white;
    border-radius: 10px;
    padding:15px;
}

button.formkit-input {
    color: white;
    background-color: #98aeb9!important;
    border-color: #98aeb9!important;
  }

  button.formkit-input:hover {
    color: #fff;
    background-color: #6c7c83!important;
    border-color: #6c7c83!important;
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