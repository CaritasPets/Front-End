import { defineStore } from 'pinia'
import api from '../plugins/api'
import { ref } from 'vue'

export const useAuthService = defineStore('authService', () => {
  const loading = ref(false)
  const error = ref('')
  const authenticated = ref(false)
  const registred = ref(false)

  const register = async (urlPost, objUser, attachment_key) => {
    try {
      loading.value = true
      const response = await api.post(urlPost, {
        ...objUser,
        foto_perfil: attachment_key,
      })
      registred.value = true
      alert(response.data.message)
      if(response.data.tokens){
        const { accessToken, refreshToken} = response.data.tokens;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        alert(`Bem vindo(a) ${response.data.user.name}`);
        window.location.href = '/user/profile'
      }
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
      window.location.href = '/user/profile'
    } catch (err) {
      error.value = 'Usuário ou senha inválidos'
      alert(error.value)
      console.log(err)
    } finally {
      loading.value = false
      error.value = ''
    }
  }
  const logOut = () => {
    localStorage.clear();
    window.location.href = '/user/login'
  }
  const profile = async () => {
    try{
      const response = await api.get('auth/profile/');
      console.log('Perfil atualizado!')
      console.log(response.data.user)
      return response.data.user
    } catch (err){
      if (err.response) {
        if (err.response.status === 401) {
          alert('Token inválido ou expirado. Faça login novamente.')
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')
          window.location.href = '/user/login'
        } else {
          alert(`Erro: ${err.response.status} - ${err.response.data.message || 'Erro desconhecido'}`)
        }
      } else {
        alert('Erro de conexão')
      }
      console.log(err)
    }
  }
  // Retorno das funções
  return {
    error,
    loading,
    registred,
    authenticated,
    register,
    login,
    profile,
    logOut
  }
})
