import { axiosClient } from './axiosClient';

const commentAPI = {
    getAll(){
        const url = `/comment`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/comment/${id}`;
        return axiosClient.get(url); 
    },
    add(comment){
        const url = `/comment`;
        return axiosClient.post(url, comment);
    },
    remove(id){
        const url = `/comment/${id}`;
        return axiosClient.delete(url);
    },
    update(id,data){
        const url = `/comment/${id}`;
        return axiosClient.put(url,data);
    }
}
export default commentAPI;