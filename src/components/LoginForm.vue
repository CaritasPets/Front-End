<script setup>
import { ref } from 'vue'

import { useRequestUrlStore } from '../stores/RequestsUrls'
const urlStore = useRequestUrlStore()

import { useAuthService } from '../services/Auth'
const authService = useAuthService()

const username = ref('')
const password = ref('')
</script>
<template>
  <form
    @submit.prevent="authService.login(urlStore.token, { username, password })"
    class="flex flex-col items-center gap-y-8 w-full md:mt-20 md:ml-50 max-w-md px-4 sm:px-0"
  >
    <div class="flex flex-col gap-y-2 w-full">
      <label class="text-2xl text-[#1E0B00] font-[Sen]">Nome de usuário:</label>
      <input
        class="text-base sm:text-lg text-[#FDA202] border-2 border-[#FDA202] rounded-xl px-4 py-2 w-full"
        placeholder="Nome de usuário"
        v-model="username"
        required
      />
    </div>
    <div class="flex flex-col gap-y-2 w-full">
      <label class="text-2xl text-[#1E0B00] font-[Sen]">Senha:</label>
      <input
        class="text-base sm:text-lg text-[#FDA202] border-2 border-[#FDA202] rounded-xl px-4 py-2 w-full"
        placeholder="Senha"
        v-model="password"
        type="password"
        required
      />
    </div>
    <button
      type="submit"
      class="text-lg sm:text-xl rounded-xl py-2 px-6 bg-[#FDA202] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FDA202] hover:text-[#FDA202] font-[Sen]"
    >
      Fazer Login
    </button>
  </form>
</template>
