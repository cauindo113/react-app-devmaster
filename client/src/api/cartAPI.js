import { axiosClient } from './axiosClient';

const CartAPI = {
    getAll(){
        const url = `/cart`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/cart/${id}`;
        return axiosClient.get(url); 
    },
    add(cart){
        const url = `/cart`;
        return axiosClient.post(url, cart);
    },
    remove(id){
        const url = `/cart/${id}`;
        return axiosClient.delete(url);
    },
    update(id,data){
        const url = `/cart/${id}`;
        return axiosClient.put(url,data);
    }
}
export default CartAPI;