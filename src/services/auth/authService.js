import { defineStore } from "pinia";
import api from "../../plugins/api";
import { useRequestUrlStore } from "../../stores/RequestsUrls";
import { ref } from "vue";

export const useAuthService = defineStore('authService', () => {
    
    const user = ref(null)

    const loading = ref(false)

    const urlStore = useRequestUrlStore()

    const register = async (formData) => {
        try{
            const response = await api.post(urlStore.register, formData,{
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
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
            const { access, refresh } = response.data;
            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh)
            window.location.href = '/user/profile'
        } catch(err){
            console.log(err)
        }
    }
    const profile = async () => {
        try{
            loading.value = true
            const response = await api.get(urlStore.profile)
            console.log('Informações puxadas com sucesso!')
            user.value = response.data
        } catch(err){
            alert('Você precisa fazer login primeiro')
            console.log(err)
            window.location.href = '/user/login/'
        } finally{
            loading.value = false
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
        patchUser,
        profile,
        loading,
        user
    }
})
