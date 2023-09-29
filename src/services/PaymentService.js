const API = import.meta.env.VITE_EXPRESS_API_URL;
import axios from 'axios'

export async function getBraintreeToken() {

    const response = await axios.get(API+'/payment/initialize');
    return response.data;
}

export async function checkout(nonce, items) {

    items = items.map((item) => item = {'normalized': item.normalized, 'qty': 1})
    const response = await axios.post(API+'/payment/checkout', {paymentMethodNonce: nonce, cartItems: items});
    return response.data;
}