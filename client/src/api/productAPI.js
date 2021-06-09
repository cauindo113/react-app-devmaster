import { axiosClient } from './axiosClient';

const ProductAPI = {
    getAll(){
        // let url = '';
        // if(limit){
        //     url = `/products?_limit=${limit}`;
        // } else {
        //     url = `/products`;
        // }
        const url = `/products`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    add(product){
        const url = `/product/create`;
        return axiosClient.post(url, product);
    },
    remove(id){
        const url = `/product/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data){
        const url = `/editproduct/${id}`;
        return axiosClient.put(url, data);
    }
}
export default ProductAPI;