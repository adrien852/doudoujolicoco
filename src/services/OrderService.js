const API = import.meta.env.VITE_EXPRESS_API_URL;
import axios from 'axios'

export async function getAdminOrders() {

    const response = await axios.get(API+'/orders');
    return response.data;
}

export async function getAdminOrder(reference) {

    const response = await axios.get(API+'/order/'+reference);
    return response.data;
}

export async function updateOrderStatus(order) {

    const response = await axios.put(API+'/order/'+order.reference, {payload: order});
    return response.data;
}