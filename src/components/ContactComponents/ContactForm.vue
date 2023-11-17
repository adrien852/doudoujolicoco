<template>
    <FormKit v-model="contactData" type="form" :actions="false" name="contact" @submit="handleSubmit">
        <div class="d-flex flex-wrap justify-content-center">
            <FormKit
                type="text"
                validation="required"
                name="name"
                id="name"
                label="Nom"
                placeholder="Jeanne Dupont"
                outer-class="col-md-5 col-12"
            />
            <FormKit
                type="email"
                validation="required"
                name="email"
                id="email"
                label="E-mail"
                prefix-icon="email"
                placeholder="dupont@gmail.com"
                outer-class="col-md-5 col-12"
            />
        </div>
        <div class="d-flex justify-content-center">
            <FormKit
                type="textarea"
                validation="required|length:10"
                name="body"
                id="body"
                label="Message"
                placeholder="Votre message..."
                outer-class="col-md-10 col-12"
            />
        </div>
        <FormKit type="submit">Envoyer</FormKit>
    </FormKit>
</template>

<script setup>
import {sendContact} from '@/services/ContactService.js'
const swal = inject('$swal')
import { inject } from 'vue';
import router from '@/router'

let contactData = {}

function handleSubmit(){
    sendContact(contactData).then((response) => {
        swal.fire({
            icon: 'success',
            title: 'Message envoyé',
            text: 'Nous vous répondrons dans les plus brefs délais',
            confirmButtonText: "OK",
            showCloseButton: false,
            confirmButtonColor: "#94BCD8",
            showClass: {
                popup: 'animate__animated animate__fadeIn'
            },
        })
        .then(() => {
            router.push({ path: '/' })
        })
    })
    .catch(() => {
        swal.fire({
            icon: 'error',
            title: 'Message non envoyé',
            html: 'Veuillez réessayer ultérieurement.',
            confirmButtonText: "OK",
            showCloseButton: true,
            confirmButtonColor: "#94BCD8",
            showClass: {
                popup: 'animate__animated animate__fadeIn'
            },
        })
    })
}
</script>

<style scoped>
</style>