<script setup>
import { ref } from 'vue'

import { useRequestUrlStore } from '../stores/RequestsUrls'
import { useAuthService } from '../services/Auth'
import { useImageService } from '../services/image'
const requestUrls = useRequestUrlStore()
const authService = useAuthService()
const imageService = useImageService()
const form = ref({
  username: '',
  password: '',
  email: '',
  nome: '',
  cpf: '',
  telefone: '',
  data_nascimento: ''
})
const file = ref(null)
const previewUrl = ref(null)

function onFileChange(event) {
  const selectedFile = event.target.files[0]
  if (selectedFile) {

    if (!selectedFile.type.startsWith('image/')) {
      return alert('Por favor, selecione apenas arquivos de imagem.')
    }


    if (selectedFile.size > 5 * 1024 * 1024) {
      return alert('A imagem deve ter no máximo 5MB.')
    }

    file.value = selectedFile
    if (selectedFile) {
      previewUrl.value = URL.createObjectURL(selectedFile)
    }
  }
}

const handleRegister = async () => {
  try {
    let attachmentKey = null
    if (file.value) {
      attachmentKey = await imageService.uploadImage(file.value)
    }

    await authService.register(requestUrls.register, form.value, attachmentKey)
  } catch (err) {
    if (err.response && err.response.data) {
      alert(err.response.data)
    } else {
      alert('Erro desconhecido. Tente novamente.')
    }
  }
}
</script>
<template>
  <form @submit.prevent="handleRegister" class="flex flex-col items-center gap-10 sm:gap-16 lg:gap-20">
    <div class=" sm:flex md:flex lg:flex justify-around gap-10 w-full">
      <ul class="flex flex-col items-center w-full lg:w-1/3 gap-6">
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-[#1E0B00]">*Usuario</label>
          <input class="text-2xl text-[#104C00] py-1 px-2 my-2 border-2 rounded-xl w-full" placeholder="Usuario."
            type="text" v-model="form.username" />
        </li>
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-[#1E0B00]">*Senha</label>
          <input class="text-2xl text-[#FDA202] py-1 px-2 my-2 border-2 rounded-xl w-full" placeholder="Senha."
            type="password" v-model="form.password" />
        </li>
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-[#1E0B00]">*Email:</label>
          <input class="text-2xl text-[#03497B] py-1 px-2 my-2 border-2 rounded-xl w-full" placeholder="Email."
            type="email" v-model="form.email" />
        </li>
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-[#1E0B00]">*Nome completo</label>
          <input class="text-2xl text-[#EE7104] py-1 px-2 my-2 border-2 rounded-xl w-full" placeholder="Nome."
            type="text" v-model="form.nome" />
        </li>
      </ul>
      <ul class="flex flex-col items-center gap-6 w-full lg:w-[40%]">
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-[#1E0B00]">*CPF</label>
          <input class="text-2xl text-[#EE7104] py-1 px-2 my-2 border-2 rounded-xl w-full" placeholder="CPF."
            type="text" v-model="form.cpf" />
        </li>
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-[#1E0B00]">*Telefone</label>
          <input class="text-2xl text-[#FDA202] py-1 px-2 my-2 border-2 rounded-xl w-full" placeholder="Telefone."
            type="text" v-model="form.telefone" />
        </li>
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-[#1E0B00]">Data de Nascimento</label>
          <input class="text-2xl text-[#03497B] py-1 px-2 my-2 border-2 rounded-xl w-full hover:cursor-pointer"
            type="date" v-model="form.data_nascimento" />
        </li>
        <li class="flex flex-col w-[100%]">
          <p class="text-2xl text-[#1E0B00]">Foto de Perfil</p>
          <input id="fileInput" class="hidden" type="file" @change="onFileChange" />
          <label for="fileInput" class="w-50 h-60 my-2 cursor-pointer">
            <img v-if="file" class="w-full h-full rounded-2xl hover:opacity-50 transition-all duration-500"
              :src="previewUrl" alt="foto-selecionada">
            <img v-else class="w-full h-full rounded-2xl bg-amber-50 hover:opacity-50 transition-all duration-500"
              src="/default_user.svg" alt="">
          </label>
        </li>
      </ul>
    </div>
      <div class="flex items-center gap-4 sm:gap-6 sm:text-lg lg:text-xl text-[#1E0B00] w-[90%]">
        <p class="font-[Sen]">Já possuí uma conta?</p>
        <RouterLink to="/user/login/"
          class="border-2 py-2 px-4 sm:px-6 border-[#FDA202] text-black rounded-2xl bg-[#FDA202] hover:bg-transparent hover:text-[#FDA202] transition-all duration-500">
          Fazer login
        </RouterLink>
      </div>
      <div>
        <ul>
          <li class="w-full flex flex-row justify-center gap-4 sm:gap-10 ">
            <button
              class="text-xl rounded-xl py-2 px-6 bg-[#FDA202] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FDA202] hover:text-[#FDA202]"
              type="reset">
              Limpar
            </button>
            <button
              class="text-xl rounded-xl py-2 px-6 bg-[#FF7700] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FF7700] hover:text-[#FF7700]"
              type="submit">
              Cadastrar-se
            </button>
          </li>
        </ul>
      </div>
  </form>
</template>
<style scoped>
input[type='date']::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
</style>
