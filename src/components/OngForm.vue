<script setup>
import { ref } from 'vue'

const nome = ref('')
const telefone = ref('')
const email = ref('')
const cnpj = ref('')
const instagram = ref('')
const facebook = ref('')
const endereco = ref('')
const password = ref('')
const foto = ref(null)
const descricao = ref('')

function onFileChange(event) {
  const selectedFile = event.target.files[0]
  if (selectedFile) {
    foto.value = selectedFile
  }
}

function resetForm() {
  nome.value = ''
  telefone.value = ''
  email.value = ''
  cnpj.value = ''
  instagram.value = ''
  facebook.value = ''
  endereco.value = ''
  password.value = ''
  foto.value = null
  descricao.value = ''
}
</script>
<template>
  <form action="" class="relative z-10" @reset.prevent="resetForm">
    <div class="flex justify-around">
      <div class="">
        <ul>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">*Nome:</label>
            <input
              class="text-2xl bg-[#FFF493] text-[#03497B] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              placeholder="Nome."
              v-model="nome"
              type="text"
              required
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">*Telefone:</label>
            <input
              class="text-2xl bg-[#FFF493] text-[#FF7700] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              placeholder="Telefone."
              v-model="telefone"
              type="text"
              required
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">*Email:</label>
            <input
              class="text-2xl bg-[#FFF493] text-[#FDA202] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              placeholder="Email."
              v-model="email"
              type="email"
              required
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">CNPJ:</label>
            <input
              class="text-2xl bg-[#FFF493] text-[#104C00] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              placeholder="CNPJ (se possui)."
              v-model="cnpj"
              type="text"
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">Instagram:</label>
            <input
              class="text-2xl bg-[#FFF493] text-[#03497B] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              placeholder="Instagram (se possui)."
              v-model="instagram"
              type="text"
            />
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">Facebook:</label>
            <input
              class="text-2xl bg-[#FFF493] text-[#FDA202] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              placeholder="Facebook (se possui)."
              v-model="facebook"
              type="text"
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">*Senha:</label>
            <input
              class="text-2xl bg-[#FFF493] text-[#104C00] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              placeholder="........"
              v-model="password"
              type="password"
              required
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">Endereço:</label>
            <input
              class="text-2xl bg-[#FFF493] text-[#9EAF50] py-2 px-4 my-2 gap-y-2 border-x-6 border-y-3 rounded-2xl w-150"
              placeholder="Endereço da ONG (se possui)."
              v-model="endereco"
              type="text"
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <p class="text-3xl text-[#1E0B00]">Foto de Perfil</p>
            <input id="fileInput" class="hidden" type="file" @change="onFileChange" />
            <label
            for="fileInput"
            class="text-2xl bg-[#FFF493] text-[#FF7700] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150 cursor-pointer">
            Selecionar Arquivo
            <span class="m-80 mdi mdi-folder-plus-outline"></span>
            </label>
            <div v-if="foto" class="text-xl text-[#FF7700]">
              <p>Arquivo para foto selecionado:</p>
              <p>{{ foto.name }}</p>
            </div>
          </li>
          <li class="flex flex-col gap-y-2">
          <label class="text-3xl text-[#1E0B00]">Descrição:</label>
          <input
            class="text-2xl bg-[#FFF493] text-[#FDA202] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
            placeholder="Descrição."
            v-model="descricao"
            type="text"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="ml-36 my-14">
      <h2 class="text-2xl">* Indica campo obrigatório.</h2>
    </div>
    <div class="flex justify-center gap-30">
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
