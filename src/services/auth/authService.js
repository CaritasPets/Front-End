import { defineStore } from "pinia";
import api from "../../plugins/api";
import { useRequestUrlStore } from "../../stores/RequestsUrls";
import { useMessageStore } from "../../stores/MessagesStore";
import { useRouter } from "vue-router";
import { ref } from "vue";


export const useAuthService = defineStore('authService', () => {
    
    const router = useRouter();
    const user = ref(null)

    const loading = ref(false)

    const urlStore = useRequestUrlStore();
    const messageStore = useMessageStore();

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
                
                messageStore.addNotification({
                    type:'success',
                    message: 'Conta criada com sucesso! 🎉',
                })

                setTimeout(() => router.push("/user/profile"), 3500);
            }
        } catch(err) {
            console.log(err);
            messageStore.addNotification({
                type: "error",
                message:
                err.response?.data?.username[0] ||
                err.response?.data?.cpf[0] ||
                err.response?.data?.email[0] ||
                "Erro ao registrar usuário.",
            });
        }
    }

    const login = async (username, password) => {
        try{
            const response = await api.post(urlStore.login, { username, password });
            const { access, refresh } = response.data;
            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh)
            messageStore.addNotification({
                type: "success",
                message: `Bem vindo(a)! 👋`,
            });
            setTimeout(() => router.push("/user/profile"), 3500);
        } catch(err){
            console.log(err)
            messageStore.addNotification({
                type: 'error',
                message: 'Usuário ou senha inválidos'
            })
        }
    }
    const profile = async () => {
        try{
            loading.value = true
            const response = await api.get(urlStore.profile)
            console.log('Informações puxadas com sucesso!')
            user.value = response.data
        } catch(err){
            messageStore.addNotification({
                type: "error",
                message: "Você precisa fazer login primeiro.",
            });
            console.log(err)
            router.push('/user/login/')
        } finally{
            loading.value = false
        }
    }
    const logout = () => {
        localStorage.clear()
        router.push('/user/login/')
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
