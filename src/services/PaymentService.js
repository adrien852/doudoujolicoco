const API = import.meta.env.VITE_EXPRESS_API_URL;
const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_API_PRIVATE_KEY;
import axios from 'axios'
import CryptoJS from 'crypto-js';

function generateHmac(privateKey, payload){
    return CryptoJS.enc.Hex.stringify(CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, privateKey).update(payload).finalize());
}

export async function getBraintreeToken() {

    const response = await axios.get(API+'/payment/initialize');
    return response.data;
}

export async function checkout(nonce, items) {
    items = items.map((item) => item = {'normalized': item.normalized, 'qty': 1});
    const payload = {paymentMethodNonce: nonce, cartItems: items};
    const response = await axios.post(API+'/payment/checkout', {hmac: generateHmac(privateKey, payload), publicKey: publicKey, payload: payload});
    return response.data;
}

export async function savePaymentId(payment) {
    let data = payment;
    const response = await axios.post(API+'/payment/save', {payload: data});
    return response.data;
}