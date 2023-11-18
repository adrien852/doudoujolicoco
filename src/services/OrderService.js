const API = import.meta.env.VITE_EXPRESS_API_URL;
import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: API
 })

export async function getAdminOrders() {

    const response = await instance.get('/orders');
    return response.data;
}

export async function getAdminOrder(reference) {

    const response = await instance.get('/order/'+reference);
    return response.data;
}

export async function updateOrderStatus(order) {

    const response = await instance.put('/order/'+order.reference, {payload: order});
    return response.data;
}