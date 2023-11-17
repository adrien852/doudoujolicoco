const API = import.meta.env.VITE_EXPRESS_API_URL;
import axios from 'axios'

export async function sendContact(data) {
    const response = await axios.post(API+'/email/contact', {payload: data});
    return response.data;
}