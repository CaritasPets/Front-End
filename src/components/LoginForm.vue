<script setup>
import { ref } from 'vue'

import { useRequestUrlStore } from '../stores/RequestsUrls'
const urlStore = useRequestUrlStore();

import { useAuthStore } from '../stores/AuthStore';
const authStore = useAuthStore()

const username = ref('')
const password = ref('')


</script>
<template>
  <form @submit.prevent="authStore.login(urlStore.token, { username, password })" class="flex flex-col items-center gap-y-12">
    <div class="flex flex-col gap-y-2">
      <label class="text-2xl text-white">Nome de usuário:</label>
      <input class="text-lg text-[#FDA202] border-2 border-[#FDA202] rounded-xl px-2 py-2 w-100"
        placeholder="Nome de usuário" 
        v-model="username" 
        required 
       />
    </div>
    <div class="flex flex-col gap-y-2">
        <label class="text-2xl text-white">Senha:</label>
        <input class="text-lg text-[#FF7700] border-2 border-[#FF7700] rounded-xl px-2 py-2 w-100"
            placeholder="Senha" 
            v-model="password" 
            type="password"
            required 
       />
    </div>
    <button type="submit" class=" text-xl rounded-xl py-2 px-6 bg-[#FDA202] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FDA202] hover:text-[#FDA202]">Fazer Login</button>
  </form>
</template>
