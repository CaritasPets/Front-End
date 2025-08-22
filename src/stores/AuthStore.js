import { defineStore } from "pinia";
import api from "../services/api";
import { ref } from "vue";

export const useAuthStore = defineStore('authStore', () => {
    const loading = ref(false);
    const error = ref('');
    const authenticated = ref(false);
    const registred = ref(false);

    const login = async (urlPost, objUser) =>{
        try{
            loading.value = true;
            const response = await api.post(urlPost, objUser)

            const { access, refresh } = response.data
            localStorage.setItem('accessToken', access)
            localStorage.setItem('refreshToken', refresh)
            authenticated.value = true;
        } catch(err) {
            error.value = 'Usuário ou senha inválidos'
            console.log(err)
        } finally{
            loading.value = false;
            error.value = '';
        }
    }

    const register = async (urlPost, objUser) => {
        try{
            loading.value = true
            const response = await api.post(urlPost, objUser)
            alert(response.data.message)    
        } catch(err) {
            error.value = 'Algum campo não foi inserido corretamente'
            console.log(err)
        } finally{
            loading.value = false
            error.value = ''
        }
    }
    return{
        error,
        loading,
        registred,
        authenticated,
        login,
        register,
    }
})