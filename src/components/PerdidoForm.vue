<script setup>
import { ref } from 'vue'
import { usePetPerdidoService } from '../services/pets/petsPerdidos'
import { useImageService } from '../services/image';
const petPerdidoService = usePetPerdidoService();
const imageService = useImageService();

const pet = ref({
  nome: '',
  especie: '',
  sexo: '',
  local: '',
  caracteristicas: '',
  foto: ''
})

const file = ref(null)
const previewUrl = ref(null)
function onFileChange(event) {
  const selectedFile = event.target.files[0]
  if (selectedFile) {
    file.value = selectedFile
    previewUrl.value = URL.createObjectURL(selectedFile)
  }
}
const handleRegister = async () => {
  try{
    let fileUrl = '';
    if(file.value){
      fileUrl = await imageService.uploadFile(file.value)
      pet.value.foto = fileUrl;
    }

    await petPerdidoService.postPerdidos(pet.value);
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
  <form action="" class="relative z-10" @submit.prevent="handleRegister">
    <div class="flex justify-around">
      <div class="">
        <ul>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">*Nome do Pet:</label>
            <input class="text-2xl bg-[#FFF493] text-[#104C00] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              placeholder="Nome do pet." v-model="pet.nome" type="text" required />
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">*Espécie do Pet:</label>
            <select class="text-2xl bg-[#FFF493] text-[#03497B] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              v-model="pet.especie" required>
              <option value="" disabled selected hidden>
                Espécie do pet.
              </option>
              <option value="cachorro">Cachorro</option>
              <option value="gato">Gato</option>
              <option value="passaro">Pássaro</option>
              <option value="outro">Outro</option>
            </select>
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">*Sexo do Pet:</label>
            <select class="text-2xl bg-[#FFF493] text-[#D26100] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              v-model="pet.sexo" required>
              <option value="" disabled selected hidden>
                Sexo do pet.
              </option>
              <option value="femea">Fêmea</option>
              <option value="macho">Macho</option>
            </select>
          </li>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">*Localidade:</label>
            <input class="text-2xl bg-[#FFF493] text-[#587911] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              placeholder="Endereço no qual seu pet foi visto por último." v-model="pet.local" type="text" required />
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li class="flex flex-col gap-y-2">
            <label class="text-3xl text-[#1E0B00]">Características:</label>
            <input class="text-2xl bg-[#FFF493] text-[#D26100] py-2 px-4 my-2 border-x-6 border-y-3 rounded-2xl w-150"
              placeholder="Descreva aqui as características do seu pet perdido." v-model="pet.caracteristicas" type="text" />
          </li>
          <li class="flex flex-col gap-y-2">
            <p class="text-3xl text-[#1E0B00]">*Foto do Pet:</p>
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
    <div class="ml-36 my-14">
      <h2 class="text-2xl">* Indica campo obrigatório.</h2>
    </div>
    <div class="flex justify-center gap-30">
      <button
        class="text-xl text-[#FFDB58] rounded-xl py-2 pl-4 pr-6 bg-[#03497B] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#03497B] hover:text-[#03497B]"
        type="reset">
        <span class="mr-2 mdi mdi-delete-outline"></span>
        Limpar
      </button>
      <button
        class="text-xl text-[#FFDB58] rounded-xl py-2 pl-5 pr-6 bg-[#104C00] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#104C00] hover:text-[#104C00]"
        type="submit">
        <span class="mr-2 mdi mdi-paw"></span>
        Cadastrar Pet Perdido
      </button>
    </div>
  </form>
</template>
