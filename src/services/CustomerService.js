const API = import.meta.env.VITE_EXPRESS_API_URL;
const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_API_PRIVATE_KEY;
import axios from 'axios'
import CryptoJS from 'crypto-js';

function generateHmac(privateKey, payload){
    return CryptoJS.enc.Hex.stringify(CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, privateKey).update(payload).finalize());
}

export async function saveCustomer(data) {
    const payload = data;
    const response = await axios.post(API+'/customers', {hmac: generateHmac(privateKey, payload), publicKey: publicKey, payload: payload});
    return response.data;
}