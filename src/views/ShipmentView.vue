<template>
    <loading :active="isLoading"></loading>
    <div ref="scroll" class="container mt-4">
        <div class="mx-1 d-flex flex-md-wrap flex-wrap-reverse row justify-content-around">
            <div class="d-flex row m-0 col-md-8 col-12 ml-auto mb-md-0 mt-3 mt-md-0">
                <FormKit
                    type="form"
                    #default="{ value }"
                    @submit="postAddress"
                    >

                    <ul class="steps nav-tabs nav ">
                        <li
                        v-for="stepName in stepNames"
                        class="step nav-item col p-0"
                        @click="step = stepName"
                        :data-step-active="step === stepName"
                        >
                        <a v-if="(!isSameAsShipping && stepName == 'billing') || stepName == 'shipping'" href="#" class="nav-link text-center">{{ stepName == 'shipping' ? "Livraison" : 'Facturation'}}</a>
                        </li>
                    </ul>

                    <div class="form-body pt-3">
                        <section v-show="step === 'shipping'">
                            <ShipmentForm id="test" class="col-12 mb-2" @sameAsShipping="(event) => isSameAsShipping = event"/>

                        </section>

                        <section v-if="!isSameAsShipping" v-show="step === 'billing'">
                            <BillingForm class="col-12"/>
                        </section>
                    </div>
                </FormKit>
            </div>
            <CartDetails class="col-md-4 col-12 h-fit" :checkoutButton="false" />
        </div>
    </div>
    
</template>
<script setup>
    import ShipmentForm from '@/components/ShipmentComponents/ShipmentForm.vue';
    import BillingForm from '@/components/ShipmentComponents/BillingForm.vue';
    import CartDetails from '@/components/CartComponents/CartDetails.vue';
    import router from '@/router'
    import {saveCustomer} from '@/services/CustomerService.js'
    import Loading from 'vue3-loading-overlay';
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
    import {onMounted, ref, toRaw, nextTick } from 'vue'
    import {useCartStore} from '@/stores/CartStore.js'
    
    const cartStore = useCartStore();
    let isLoading = ref(false);
    let isSameAsShipping = ref(true);
    let step = ref('shipping')
    const stepNames = ['shipping','billing']
    let scroll = ref(null)

    onMounted(() => {
        nextTick(() => {
            scroll.value?.scrollIntoView({behavior: "smooth"});
        });
    });

    function postAddress(event){
        isLoading.value = true;
        let addresses = (isSameAsShipping.value) ? {...event.shipping, ...{billing: event.shipping}} : {...event.shipping, ...{billing: event.billing}};
        const addressesWithItems = {...addresses, ...{products:toRaw(cartStore.items)}}
        saveCustomer(addressesWithItems).then((response) => {
            addresses.customerId = response._id;
            cartStore.setAddress(addresses);
            router.push({ name: 'payment' })
        }).catch((error) => {
            console.log(error.message)
        })
    }
    
</script>

<style scoped>
    .h-fit{
        height: fit-content;
    }
    .nav-link{
        color: #22211F;
    }
</style>