import { defineStore } from "pinia";
import api from "../../plugins/api";
import { useRequestUrlStore } from "../../stores/RequestsUrls";
import { useUserStore } from "../../stores/UserStore";


export const useUserService = defineStore('userService', () => {

    const urlStore = useRequestUrlStore()
    const userStore = useUserStore()

    const getUserList = async () => {
        try{
            const response = await api.get(urlStore.userList);
            if(response.data){
                console.log('Usuários puxados com sucesso!')
                userStore.userList = response.data
            }
        } catch(err) {
            console.log(err)
        }
    }

    return{
        getUserList
    }
})