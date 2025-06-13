const API = import.meta.env.VITE_EXPRESS_API_URL;
import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: API
 })

export async function getHomeElements() {

    const response = await instance.get('/home');
    return response.data;
}

export async function updateHomeElements(item) {

    const response = await instance.put('/home/'+item.id, {payload: item});
    return response.data;
}