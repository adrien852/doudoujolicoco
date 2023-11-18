const API = import.meta.env.VITE_EXPRESS_API_URL;
import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: API
 })

export async function getItems() {

    const response = await instance.get('/inventory/products');
    return response.data;
}

export async function getItem(itemId) {

    const response = await instance.get('/inventory/products/'+itemId);
    return response.data;
}

export async function updateItem(item) {

    const response = await instance.put('/inventory/products/'+item.id, {payload: item});
    return response.data;
}

export async function saveItem(item) {

    const response = await instance.post('/inventory/products', {payload: item});
    return response.data;
}

export async function deleteItem(itemId) {

    const response = await instance.delete('/inventory/products/'+itemId);
    return response.data;
}