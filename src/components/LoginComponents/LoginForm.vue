<template>
    <loading :active="isLoading"></loading>
        <FormKit
            type="form"
            #default="{ value }"
            @submit="loginSubmit"
            v-model="credentials"
            :actions="false"
            >
            <div class="d-flex justify-content-center flex-column">
                <FormKit
                    type="text"
                    label="E-mail"
                    name="email"
                    validation="required"
                    outer-class="col-lg-5 col-md-8 col-12 mx-auto mt-2"
                />
                <FormKit
                    type="password"
                    label="Mot de passe"
                    name="password"
                    validation="required"
                    outer-class="col-lg-5 col-md-8 col-12 mx-auto mt-2"
                />
            </div>
            <FormKit type="submit">Se connecter</FormKit>
        </FormKit>
</template>

<script setup>
    import { login } from '@/services/CustomerService';
    import router from '@/router'
    import { inject, ref } from 'vue'
    const swal = inject('$swal')
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import { useAdminStore } from '../../stores/AdminStore';

    let isLoading = ref(false)
    let credentials = {}
    const adminStore = useAdminStore();

    function loginSubmit(){
        isLoading.value = true;
        login(credentials).then((response) => {
            if(response.isAdmin){
                adminStore.isAdminLoggedIn(true);
                router.push({ path: '/admin' })
            }
            else{
                router.push({ path: '/' })
            }
        })
        .catch((error) => {
            if(error.response.data.code == 'password'){
                swal.fire({
                    icon: 'error',
                    title: 'Oups !',
                    text: 'Le mot de passe est erroné. Veuillez réessayer.',
                    confirmButtonText: "OK",
                    showCloseButton: true,
                    showConfirmButton: true,
                })
            }
            else if(error.response.data.code == 'email'){
                swal.fire({
                    icon: 'error',
                    title: 'Oups !',
                    text: 'Ce compte n\'existe pas.',
                    confirmButtonText: "OK",
                    showCloseButton: true,
                    showConfirmButton: true,
                })
            }
            isLoading.value = false;
        })
    }
</script>

<style scoped>
</style>