<script setup>
import { ref } from 'vue'

import { useRequestUrlStore } from '../stores/RequestsUrls'
import { useAuthService } from '../services/Auth'
const requestUrls = useRequestUrlStore()
const authService = useAuthService()

const username = ref('')
const password = ref('')
const email = ref('')
const nome = ref('')
const cpf = ref('')
const telefone = ref('')
const data_nascimento = ref(null)
const foto = ref(null)

function onFileChange(event) {
  const selectedFile = event.target.files[0]
  if (selectedFile) {
    foto.value = selectedFile
  }
}
</script>
<template>
  <form
    @submit.prevent="
      authService.register(requestUrls.register, {
        username,
        password,
        email,
        nome,
        cpf,
        telefone,
        data_nascimento,
        foto,
      })
    "
    class="flex flex-col items-center gap-20"
  >
    <div class="flex justify-around gap-10 w-[100%]">
      <ul class="flex flex-col items-center">
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-white">*Usuario</label>
          <input
            class="text-2xl text-[#9EAF50] py-1 px-2 my-2 border-2 rounded-xl w-120"
            placeholder="Usuario."
            type="text"
            v-model="username"
            required
          />
        </li>
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-white">*Senha</label>
          <input
            class="text-2xl text-[#FDA202] py-1 px-2 my-2 border-2 rounded-xl w-120"
            placeholder="Senha."
            type="password"
            v-model="password"
            required
          />
        </li>
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-white">*Email:</label>
          <input
            class="text-2xl text-[#69A2A8] py-1 px-2 my-2 border-2 rounded-xl w-120"
            placeholder="Email."
            type="email"
            v-model="email"
            required
          />
        </li>
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-white">*Nome completo</label>
          <input
            class="text-2xl text-[#EE7104] py-1 px-2 my-2 border-2 rounded-xl w-120"
            placeholder="Nome."
            type="text"
            v-model="nome"
            required
          />
        </li>
      </ul>
      <ul class="flex flex-col items-center">
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-white">*CPF</label>
          <input
            class="text-2xl text-[#EE7104] py-1 px-2 my-2 border-2 rounded-xl w-120"
            placeholder="CPF."
            type="text"
            v-model="cpf"
            required
          />
        </li>
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-white">*Telefone</label>
          <input
            class="text-2xl text-[#FDA202] py-1 px-2 my-2 border-2 rounded-xl w-120"
            placeholder="Telefone."
            type="text"
            v-model="telefone"
            required
          />
        </li>
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-white">Data de Nascimento</label>
          <input
            class="text-2xl text-[#69A2A8] py-1 px-2 my-2 border-2 rounded-xl w-120 hover:cursor-pointer"
            type="date"
            v-model="data_nascimento"
          />
        </li>
        <li class="flex flex-col w-[100%]">
          <p class="text-2xl text-white">Foto de Perfil</p>
          <input id="fileInput" class="hidden" type="file" @change="onFileChange" />
          <label
            for="fileInput"
            class="text-2xl text-[#9EAF50] border-2 py-1 px-2 my-2 rounded-xl w-120 cursor-pointer"
            >Selecionar Arquivo</label
          >
          <div v-if="foto" class="text-xl text-[#9EAF50]">
            <p>Arquivo para foto selecionado:</p>
            <p>{{ foto.name }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex gap-30">
      <button
        class="text-xl rounded-xl py-2 px-6 bg-[#FDA202] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FDA202] hover:text-[#FDA202]"
        type="reset"
      >
        Limpar
      </button>
      <button
        class="text-xl rounded-xl py-2 px-6 bg-[#FF7700] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FF7700] hover:text-[#FF7700]"
        type="submit"
      >
        Cadastrar-se
      </button>
    </div>
  </form>
</template>
<style scoped>
/*cor do calendario para branco*/
input[type='date']::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
</style>
