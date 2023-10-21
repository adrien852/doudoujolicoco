<template>
    <div>
        <FormKit type="form" :actions="false" name="billing">
            <div class="d-flex row">
                <FormKit
                    type="text"
                    validation="required"
                    name="firstName"
                    id="firstName"
                    label="Prénom"
                    placeholder="Jeanne"
                    outer-class="col-md-6 col-12"
                    v-model="billingValues.firstName"
                />
                <FormKit
                    type="text"
                    validation="required"
                    name="lastName"
                    id="lastName"
                    label="Nom"
                    placeholder="Dupont"
                    outer-class="col-md-6 col-12"
                    v-model="billingValues.lastName"
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
                    v-model="billingValues.address1"
                />
                <FormKit
                    type="text"
                    name="address2"
                    id="address2"
                    label="Complément d'adresse"
                    placeholder="Résidence Le Cigalon"
                    outer-class="col-lg-6 col-12"
                    v-model="billingValues.address2"
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
                    v-model="billingValues.city"
                />
                <FormKit
                    type="text"
                    validation="required|length:5"
                    name="postalCode"
                    id="postalCode"
                    label="Code Postal"
                    placeholder="75000"
                    outer-class="col-md-6 col-12"
                    v-model="billingValues.postalCode"
                />
            </div>
            <div class="d-flex row">
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
                    v-model="billingValues.phone"
                />
            </div>
            <FormKit
                type="hidden"
                name="id"
                v-model="billingValues.id"
            >
            </FormKit>
        </FormKit>
            
    </div>
</template>
<script setup>
import { FormKit } from '@formkit/vue';
import {reactive} from 'vue'

const props = defineProps({
    initBillingValues: Object
});

let billingValues = reactive({...props.initBillingValues})

</script>