const API = import.meta.env.VITE_API_URL;
import axios from 'axios'

export async function getCategories() {

    const response = await axios.get(API+'/products/categories');
    return response.data;
}

export async function getItems() {

    const response = await axios.get(API+'/products');
    return response.data;
}

export async function getCategoryItems(category) {

    const response = await axios.get(API+'/products/category/'+category);
    return response.data;
}