import { axiosClient } from './axiosClient';

const userAPI = {
    getAll(){
        const url = `list_user/`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/user/${id}`;
        return axiosClient.get(url);
    },
    add(user){
        const url = `/signup`;
        return axiosClient.post(url, user);
    },
    signin(user){
        const url = `/signin`;
        return axiosClient.post(url, user);
    },
    remove(id){
        const url = `/user/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data){
        const url = `/user/${id}`;
        return axiosClient.put(url,data);
    }
}
export default userAPI;