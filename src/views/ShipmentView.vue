<template>
    <loading :active="isLoading"></loading>
    <div class="container mt-4">
        <div class="mx-1 d-flex flex-md-wrap flex-wrap-reverse row justify-content-around">
            <div class="d-flex row m-0 col-md-8 col-12 ml-auto mb-md-0 mt-3 mt-md-0">
                <FormKit
                    id="mainForm"
                    type="form"
                    #default="{ value }"
                    :actions="false"
                    :plugins="[stepPlugin]"
                    @submit="postAddress"
                    >

                    <ul class="steps nav-tabs nav ">
                        <li
                        v-for="stepName in stepNames"
                        class="step nav-item col p-0"
                        @click="step = stepName"
                        :data-step-active="step === stepName"
                        >
                        <a :class="{'step--errors': formErrors[stepName] > 0 && showError}" v-if="(!isSameAsShipping && stepName == 'billing') || stepName == 'shipping'" href="#" class="nav-link text-center">
                            {{ stepName == 'shipping' ? "Livraison" : 'Facturation'}}
                            <span
                                v-if="formErrors[stepName] > 0 && showError"
                                class="step--errors"
                                v-text="formErrors[stepName]"
                            ></span>
                        </a>
                        </li>
                    </ul>

                    <div class="form-body pt-3">
                        <section v-show="step === 'shipping'">
                            <FormKit
                                type="group"
                                id="shipping"
                                name="shipping"
                            >
                                <ShipmentForm :initShippingValues="cartStore.customer.shippingAddress??{sameAsShipping: initSameAsShipping}" id="test" class="col-12 mb-2" @sameAsShipping="sameAsShipping"/>
                            </FormKit>

                        </section>

                        <section v-if="!isSameAsShipping" v-show="step === 'billing'">
                            <FormKit
                                type="group"
                                id="billing"
                                name="billing"
                            >
                                <BillingForm :initBillingValues="cartStore.customer.billingAddress??{}" class="col-12"/>
                            </FormKit>
                        </section>
                    </div>
                        <FormKit
                            type="hidden"
                            name="customerId"
                            v-model="cartStore.customer.id"
                        >
                        </FormKit>
                    <FormKit type="submit" @click="showError = true" />
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
    import {onMounted, ref, toRaw, nextTick, reactive, onBeforeMount } from 'vue'
    import {useCartStore} from '@/stores/CartStore.js'
    
    const cartStore = useCartStore();
    let isLoading = ref(false);
    let initSameAsShipping = ref(true);
    let isSameAsShipping = ref(true);
    let step = ref('shipping')
    const stepNames = ['shipping','billing']
    let scroll = ref("scroll")
    let formErrors = reactive({})
    let showError = ref(false);

    onBeforeMount(() => {
        isSameAsShipping.value = cartStore.customer.isSameAsShipping??true
    })

    const stepPlugin = (node) => {
        if (node.props.type == "group") {

        node.on('count:blocking', ({ payload: count }) => {
            formErrors[node.name] = count;
        })

            return false
        }
    }

    function postAddress(event){
        
        isLoading.value = true;
        let addresses = {
            shippingAddress: event.shipping.shipping
        }
        if(!isSameAsShipping.value){
            addresses = {
                billingAddress: event.billing.billing,
                ...addresses
            }
        }
        let customer = {
            id: event.customerId,
            email: event.shipping.shipping.email,
            isSameAsShipping: isSameAsShipping.value,
            ...addresses,
            
        }
        const customerWithItems = {...customer, ...{products:toRaw(cartStore.items)}}
        saveCustomer(customerWithItems).then((response) => {
            customer.id = response.id;
            customer.shippingAddress.id = response.shippingAddress.id
            if(!customer.isSameAsShipping){
                customer.billingAddress.id = response.billingAddress.id
            }
            cartStore.setCustomer(customer);
            router.push({ name: 'payment' })
        }).catch((error) => {
            console.log(error.message)
        })
    }

    function sameAsShipping(event){
        if(isSameAsShipping.value !== event){
            isSameAsShipping.value = event;
            if(!isSameAsShipping.value){
                step.value = 'billing';
                nextTick(() => {
                    const el = document.getElementById("mainForm");
                    el.scrollIntoView({block: "start", behavior: "smooth"});
                });
            }
        }
    }
    
</script>

<style scoped>
    .h-fit{
        height: fit-content;
    }
    .nav-link{
        color: #22211F;
    }
    [data-step-active = "true"]{
        background-color: #d2d2d214;
    }
    span.step--errors{
        position: absolute;
        right: 30px;
        border-radius: 100%;
        background-color: red;
        width: 24px;
        color:white;
    }
    a.step--errors{
        background-color: rgba(255, 0, 0, 0.07);
    }
    #mainForm{
        scroll-margin-top: 100px;
    }
</style>