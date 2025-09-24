import { defineStore } from "pinia";
import api from "../../plugins/api";
import { useRequestUrlStore } from "../../stores/RequestsUrls";

export const useAuthService = defineStore('authService', () => {
    
    const urlStore = useRequestUrlStore()

    const register = async (formData) => {
        try{
            const response = await api.post(urlStore.register, formData);
            if (response.data && response.data.tokens) {
                const { access, refresh } = response.data.tokens;
                localStorage.setItem("accessToken", access);
                localStorage.setItem("refreshToken", refresh);
                console.log(response.data);
            }
        } catch(err) {
            console.log(err)
        }
    }

    const login = async (username, password) => {
        try{
            const response = await api.post(urlStore.login, { username, password });
            if(response.data && response.data.tokens){
                const { access, refresh } = response.data.tokens;
                localStorage.setItem('accessToken', access);
                localStorage.setItem('refreshToken', refresh)
            }
            if(response.data.user){
                console.log(`Bem vindo(a) ${response.data.user.username}`)
            }
        } catch(err){
            console.log(err)
        }
    }

    const logout = () => {
        localStorage.clear()
        window.location.href = '/user/login/'
    }

    const deleteUser = async () => {
        try{
            const response = await api.delete(urlStore.delete);
            if(response.data.detail){
                console.log(response.data.detail)
            }
        } catch(err){
            console.log(err)
        }
    }

    const patchUser = async (formData) => {
        try{
            const response = await api.patch(urlStore.update, formData);
            if(response.data){
                console.log('Informações alteradas com sucesso!')
            }
        } catch(err){
            console.log(err)
        }
    }
    return {
        register,
        login,
        logout,
        deleteUser,
        patchUser
    }
})
