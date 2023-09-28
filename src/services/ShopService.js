const API = import.meta.env.VITE_EXPRESS_API_URL;
import axios from 'axios'

export async function getCategories() {

    const response = await axios.get(API+'/categories');
    return response.data;
}

export async function getItems() {

    const response = await axios.get(API+'/products');
    return response.data;
}

export async function getItem(itemId) {

    const response = await axios.get(API+'/products/'+itemId);
    return response.data;
}

export async function getCategoryItems(categoryNormalized) {

    const response = await axios.get(API+'/'+categoryNormalized+'/products');
    return response.data;
}