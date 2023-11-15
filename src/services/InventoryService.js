const API = import.meta.env.VITE_EXPRESS_API_URL;
import axios from 'axios'

export async function getItem(itemId) {

    const response = await axios.get(API+'/inventory/products/'+itemId);
    return response.data;
}

export async function updateItem(item) {

    const response = await axios.put(API+'/inventory/products/'+item.id, {payload: item});
    return response.data;
}

export async function saveItem(item) {

    const response = await axios.post(API+'/inventory/products', {payload: item});
    return response.data;
}

export async function deleteItem(itemId) {

    const response = await axios.delete(API+'/inventory/products/'+itemId);
    return response.data;
}