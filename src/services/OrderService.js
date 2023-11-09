const API = import.meta.env.VITE_EXPRESS_API_URL;
import axios from 'axios'

export async function getAdminOrders() {

    const response = await axios.get(API+'/orders');
    return response.data;
}