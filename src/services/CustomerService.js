const API = import.meta.env.VITE_EXPRESS_API_URL;
import axios from 'axios'

export async function saveCustomer(data) {
    const response = await axios.post(API+'/customers', {payload: data});
    return response.data;
}