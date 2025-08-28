import { defineStore } from 'pinia'
import api from '../plugins/api'
import { ref } from 'vue'

export const useAuthService = defineStore('authService', () => {
  const loading = ref(false)
  const error = ref('')
  const authenticated = ref(false)
  const registred = ref(false)

  const login = async (urlPost, objUser) => {
    try {
      loading.value = true
      const response = await api.post(urlPost, objUser)

      const { access, refresh } = response.data
      localStorage.setItem('accessToken', access)
      localStorage.setItem('refreshToken', refresh)
      authenticated.value = true
      
      const name = response.data.user.nome
      alert(`Bem vindo(a) ${name}`);
    } catch (err) {
      error.value = 'Usuário ou senha inválidos'
      alert(error.value)
      console.log(err)
    } finally {
      loading.value = false
      error.value = ''
    }
  }

  const register = async (urlPost, objUser) => {
    try {
      loading.value = true
      const response = await api.post(urlPost, objUser)
      registred.value = true

      alert(response.data.message)
    } catch (err) {
      if(err.response && err.response.data){
        const errData = err.response.data;

        for(let key in errData){
            error.value+= `${key.toUpperCase()}: ${errData[key]}\n`
        }
        alert(error.value)
      }

    } finally {
      loading.value = false
      error.value = ''
      registred.value = false
    }
  }
  return {
    error,
    loading,
    registred,
    authenticated,
    login,
    register,
  }
})
