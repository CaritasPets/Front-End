<script setup>
import { ref } from 'vue'
import api from '../services/api'

import { useRequestUrlStore } from '../stores/RequestsUrls'
const urlStore = useRequestUrlStore();

const isLoading = ref(false)
const username = ref('')
const password = ref('')
const error = ref('')
const login = async () => {
    error.value = '';
    try{
        isLoading.value = true;
        const response = await api.post(urlStore.token, {
            username: username.value,
            password: password.value
        })

        const { access, refresh } = response.data
        localStorage.setItem('accessToken', access)
        localStorage.setItem('refreshToken', refresh)

    } catch(err){
        error.value = 'Usuário ou senha inválidos'
        console.log(err)
    } finally{
        isLoading.value = false
        console.log('login bem sucedido')
    }
}
</script>
<template>
  <form @submit.prevent="login" class="flex flex-col items-center gap-y-10">
    <div class="flex flex-col gap-y-2">
      <label class="text-2xl">Nome de usuário:</label>
      <input class="text-2xl text-[#FDA202] border-2 border-[#FDA202] rounded-xl px-2 py-1"
        placeholder="Nome de usuário" 
        v-model="username" 
        required 
       />
    </div>
    <div class="flex flex-col gap-y-2">
        <label class="text-2xl">Senha:</label>
        <input class="text-2xl text-[#FF7700] border-2 border-[#FF7700] rounded-xl px-2 py-1"
            placeholder="Senha" 
            v-model="password" 
            type="password"
            required 
       />
    </div>
    <button type="submit" class=" text-xl rounded-xl py-2 px-6 bg-[#FDA202] cursor-pointer">Fazer Login</button>
  </form>
</template>
