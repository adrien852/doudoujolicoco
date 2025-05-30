const API = import.meta.env.VITE_EXPRESS_API_URL;
import axios from 'axios'

const instance = axios.create({
    baseURL: API
 })

export async function getAdminPromos() {

    const response = await instance.get('/promos');
    return response.data;
}

export async function getAdminPromo(id) {

    const response = await instance.get('/promo/'+id);
    return response.data;
}

export async function getPromo(code) {

    const response = await instance.get('/promo/code/'+code);
    return response.data;
}

export async function updateAdminPromo(item) {

    const response = await instance.put('/promo/'+item.id, {payload: item});
    return response.data;
}

export async function saveAdminPromo(item) {

    const response = await instance.post('/promos', {payload: item});
    return response.data;
}

export async function deleteAdminPromo(id) {

    const response = await instance.delete('/promo/'+id);
    return response.data;
}