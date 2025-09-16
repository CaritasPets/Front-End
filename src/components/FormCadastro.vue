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
    // Validar tipo de arquivo
    if (!selectedFile.type.startsWith('image/')) {
      return alert('Por favor, selecione apenas arquivos de imagem.')
    }
    
    // Validar tamanho (opcional - 5MB max)
    if (selectedFile.size > 5 * 1024 * 1024) {
      return alert('A imagem deve ter no máximo 5MB.')
    }

    file.value = selectedFile
    if(selectedFile){
      previewUrl.value = URL.createObjectURL(selectedFile)
    }
  }
}

const handleRegister = async () => {
  try{
    let attachmentKey = null
    if (file.value) {
      attachmentKey = await imageService.uploadImage(file.value)
    }

    await authService.register(requestUrls.register, form.value, attachmentKey)
  } catch(err){
    if (err.response && err.response.data) {
      alert(err.response.data)
    } else {
      alert('Erro desconhecido. Tente novamente.')
    }
  }
}
</script>
<template>
  <form
    @submit.prevent="handleRegister"
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
            v-model="form.username"
            required
          />
        </li>
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-white">*Senha</label>
          <input
            class="text-2xl text-[#FDA202] py-1 px-2 my-2 border-2 rounded-xl w-120"
            placeholder="Senha."
            type="password"
            v-model="form.password"
            required

          />
        </li>
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-white">*Email:</label>
          <input
            class="text-2xl text-[#69A2A8] py-1 px-2 my-2 border-2 rounded-xl w-120"
            placeholder="Email."
            type="email"
            v-model="form.email"
            required
          />
        </li>
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-white">*Nome completo</label>
          <input
            class="text-2xl text-[#EE7104] py-1 px-2 my-2 border-2 rounded-xl w-120"
            placeholder="Nome."
            type="text"
            v-model="form.nome"
            required
          />
        </li>
        <li class="w-full flex justify-baseline gap-10 mt-20">
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
        </li>
      </ul>
      <ul class="flex flex-col items-center">
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-white">*CPF</label>
          <input
            class="text-2xl text-[#EE7104] py-1 px-2 my-2 border-2 rounded-xl w-120"
            placeholder="CPF."
            type="text"
            v-model="form.cpf"
            required
          />
        </li>
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-white">*Telefone</label>
          <input
            class="text-2xl text-[#FDA202] py-1 px-2 my-2 border-2 rounded-xl w-120"
            placeholder="Telefone."
            type="text"
            v-model="form.telefone"
            required
          />
        </li>
        <li class="flex flex-col w-[100%]">
          <label class="text-2xl text-white">Data de Nascimento</label>
          <input
            class="text-2xl text-[#69A2A8] py-1 px-2 my-2 border-2 rounded-xl w-120 hover:cursor-pointer"
            type="date"
            v-model="form.data_nascimento"
          />
        </li>
        <li class="flex flex-col w-[100%]">
          <p class="text-2xl text-white">Foto de Perfil</p>
          <input id="fileInput" class="hidden" type="file" @change="onFileChange" />
          <label
            for="fileInput"
            class="w-50 h-60 my-2 cursor-pointer"
          >
          <img v-if="file" class="w-full h-full rounded-2xl hover:opacity-50 transition-all duration-500" :src="previewUrl" alt="foto-selecionada">
          <img v-else class="w-full h-full rounded-2xl bg-amber-50 hover:opacity-50 transition-all duration-500" src="/default_user.svg" alt="">
          </label>
        </li>
      </ul>
    </div>
  </form>
</template>
<style scoped>
/*cor do calendario para branco*/
input[type='date']::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
</style>
