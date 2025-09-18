<script setup>
import { ref } from 'vue'
import { useOngService } from '../services/ongs/ongService'
import { useImageService } from '../services/image';
const imageService = useImageService()
const ongService = useOngService()

const file = ref(null)
const previewUrl = ref(null)
const ong = ref({
  nome: '',
  telefone: '',
  email: '',
  cnpj: '',
  instagram: '',
  facebook: '',
  endereco: '',
  senha: '',
  foto_perfil: '',
  descricao: '',
})

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
  try{
    let fileUrl = '';
    if(file.value){
      fileUrl = await imageService.uploadFile(file.value)
      ong.value.foto_perfil = fileUrl;
    }

    await ongService.postOng(ong.value);
  } catch(err) {
     if (err.response && err.response.data) {
      alert(err.response.data)
    } else {
      alert('Erro desconhecido. Tente novamente.')
    }
  }
}
</script>
<template>
  <form class="relative z-10" @submit.prevent="handleRegister">
    <div class="flex flex-col lg:flex-row lg:justify-around">
      <div class="">
        <ul>
          <li class="flex flex-col gap-y-2">
            <label class="text-xl sm:text-3xl text-[#1E0B00]">*Nome:</label>
            <input
              class="text-xl sm:text-3xl bg-[#FFF493] text-[#03497B] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-full md:w-135"
              placeholder="Nome."
              v-model="ong.nome"
              type="text"
              required
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-xl sm:text-3xl text-[#1E0B00]">*Telefone:</label>
            <input
              class="text-xl sm:text-3xl bg-[#FFF493] text-[#FF7700] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-full md:w-135"
              placeholder="Telefone."
              v-model="ong.telefone"
              type="text"
              required
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-xl sm:text-3xl text-[#1E0B00]">*Email:</label>
            <input
              class="text-xl sm:text-3xl bg-[#FFF493] text-[#FDA202] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-full md:w-135"
              placeholder="Email."
              v-model="ong.email"
              type="email"
              required
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-xl sm:text-3xl text-[#1E0B00]">CNPJ:</label>
            <input
              class="text-xl sm:text-3xl bg-[#FFF493] text-[#104C00] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-full md:w-135"
              placeholder="CNPJ (se possui)."
              v-model="ong.cnpj"
              type="text"
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-xl sm:text-3xl text-[#1E0B00]">Instagram:</label>
            <input
              class="text-xl sm:text-3xl bg-[#FFF493] text-[#03497B] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-full md:w-135"
              placeholder="Instagram (se possui)."
              v-model="ong.instagram"
              type="text"
            />
          </li>
        </ul>
      </div>
      <div class="w-[]">
        <ul>
          <li class="flex flex-col gap-y-2">
            <label class="text-xl sm:text-3xl text-[#1E0B00]">Facebook:</label>
            <input
              class="text-xl sm:text-3xl bg-[#FFF493] text-[#FDA202] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-full md:w-135"
              placeholder="Facebook (se possui)."
              v-model="ong.facebook"
              type="text"
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-xl sm:text-3xl text-[#1E0B00]">*Senha:</label>
            <input
              class="text-xl sm:text-3xl bg-[#FFF493] text-[#104C00] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-full md:w-135"
              placeholder="........"
              v-model="ong.senha"
              type="password"
              required
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-xl sm:text-3xl text-[#1E0B00]">Endereço:</label>
            <input
              class="text-xl sm:text-3xl bg-[#FFF493] text-[#03497B] py-2 px-4 my-2 gap-y-2 border-x-6 border-y-3 rounded-2xl w-full md:w-135"
              placeholder="Endereço da ONG (se possui)."
              v-model="ong.endereco"
              type="text"
            />
          </li>
          <li class="flex flex-col gap-y-2">
          <label class="text-xl sm:text-3xl text-[#1E0B00]">Descrição:</label>
          <input
            class="text-xl sm:text-3xl bg-[#FFF493] text-[#FDA202] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-full md:w-135"
            placeholder="Descrição."
            v-model="ong.descricao"
            type="text"
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <p class="text-xl sm:text-3xl text-[#1E0B00]">Foto de Perfil</p>
            <input id="fileInput" class="hidden" type="file" @change="onFileChange" />
            <label for="fileInput" class="w-50 h-60 my-2 cursor-pointer">
            <img
              v-if="file"
              class="w-full h-full rounded-2xl hover:opacity-50 transition-all duration-500"
              :src="previewUrl"
              alt="foto-selecionada"
            />
            <img
              v-else
              class="w-full h-full rounded-2xl bg-amber-50 hover:opacity-50 transition-all duration-500"
              src="/pet_default.svg"
              alt=""
            />
          </label>
          </li>
        </ul>
      </div>
    </div>
    <div class="ml-4 sm:ml-36 my-14">
      <h2 class="text-xl sm:text-3xl">* Indica campo obrigatório.</h2>
    </div>
    <div class="flex justify-center gap-4 sm:gap-30">
      <button
        class="text-xl rounded-xl py-2 pl-4 pr-6 bg-[#FDA202] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FDA202] hover:text-[#FDA202]"
        type="reset"
      >
        <span class="mr-2 mdi mdi-delete-outline"></span>
        Limpar
      </button>
      <button
        class="text-xl rounded-xl py-2 pl-5 pr-6 bg-[#FF7700] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FF7700] hover:text-[#FF7700]"
        type="submit"
      >
        <span class="mr-2 mdi mdi-paw"></span>
        Cadastrar ONG
      </button>
    </div>
  </form>
</template>
