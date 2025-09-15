<script setup>
import { ref } from 'vue'

const nomePet = ref('')
const nomeDono = ref('')
const especiePet = ref('')
const generoPet = ref('')
const localidade = ref('')
const telefone = ref('')
const foto = ref(null)
const caracteristicas = ref('')

function onFileChange(event) {
  const selectedFile = event.target.files[0]
  if (selectedFile) {
    foto.value = selectedFile
  }
}

function resetForm() {
  nomePet.value = ''
  nomeDono.value = ''
  especiePet.value = ''
  generoPet.value = ''
  localidade.value = ''
  telefone.value = ''
  foto.value = null
  caracteristicas.value = ''
}
</script>
<template>
  <form action="" class="relative z-10" @reset.prevent="resetForm">
    <div class="flex justify-around">
      <div class="">
        <ul>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">*Nome do Pet:</label>
            <input
              class="text-2xl bg-[#FFF493] text-[#104C00] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              placeholder="Nome do pet."
              v-model="nomePet"
              type="text"
              required
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">*Espécie do Pet:</label>
            <input
              class="text-2xl bg-[#FFF493] text-[#03497B] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              placeholder="Espécie do pet."
              v-model="especiePet"
              type="text"
              required
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">Gênero do Pet:</label>
            <input
              class="text-2xl bg-[#FFF493] text-[#D26100] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              placeholder="Gênero do pet."
              v-model="generoPet"
              type="text"
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">*Localidade:</label>
            <input
              class="text-2xl bg-[#FFF493] text-[#587911] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              placeholder="Endereço no qual seu pet foi visto por último."
              v-model="localidade"
              type="text"
              required
            />
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li class="flex flex-col gap-y-2">
            <p class="text-3xl text-[#1E0B00]">*Foto do Pet:</p>
            <input id="fileInput" class="hidden" type="file" @change="onFileChange" />
            <label
            for="fileInput"
            class="text-2xl bg-[#FFF493] text-[#587911] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150 cursor-pointer">
            Adicione aqui fotos do seu pet perdido.
            <span class="m-25 mdi mdi-folder-plus-outline"></span>
            </label>
            <div v-if="foto" class="text-xl text-[#587911]">
              <p>Arquivo para foto selecionado:</p>
              <p>{{ foto.name }}</p>
            </div>
          </li>
          <li class="flex flex-col gap-y-2">
          <label class="text-3xl text-[#1E0B00]">Características:</label>
          <input
            class="text-2xl bg-[#FFF493] text-[#D26100] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
            placeholder="Descreva aqui as características do seu pet perdido."
            v-model="descricao"
            type="text"
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">Nome do Dono:</label>
            <input
              class="text-2xl bg-[#FFF493] text-[#03497B] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              placeholder="Nome do dono de pet."
              v-model="nomeDono"
              type="text"
            />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">*Telefone para Contato:</label>
            <input
              class="text-2xl bg-[#FFF493] text-[#104C00] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              placeholder="*Telefone para contato."
              v-model="telefone"
              type="text"
              required
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
        class="text-xl text-[#FFDB58] rounded-xl py-2 pl-4 pr-6 bg-[#03497B] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#03497B] hover:text-[#03497B]"
        type="reset"
      >
        <span class="mr-2 mdi mdi-delete-outline"></span>
        Limpar
      </button>
      <button
        class="text-xl text-[#FFDB58] rounded-xl py-2 pl-5 pr-6 bg-[#104C00] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#104C00] hover:text-[#104C00]"
        type="submit"
      >
        <span class="mr-2 mdi mdi-paw"></span>
        Cadastrar ONG
      </button>
    </div>
  </form>
</template>
