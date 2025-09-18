<script setup>
import { ref } from 'vue'
import { useRacaStore } from '../../stores/RacaStore'
import { usePetService } from '../../services/pets/pets'
import { useImageService } from '../../services/image'
const imageService = useImageService()
const petService = usePetService()
const racaStore = useRacaStore()

const file = ref(null)
const previewUrl = ref(null)
const pet = ref({
  nome: '',
  especie: 'cachorro', 
  genero: 'macho', 
  porte: 'grande',
  castrado: '',
  raca: '',
  vacinado: '',
  foto: ''
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
      pet.value.foto = fileUrl;
    }

    await petService.postPets(pet.value);
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
  <form class="flex flex-col items-center gap-20" @submit.prevent="handleRegister">
    <div class="flex gap-40">
      <ul class="flex flex-col gap-4">
        <li>
          <p class="text-2xl font-[Sen]">*Nome do Pet (ou apelido):</p>
          <input
            class="text-2xl text-[#104C00] py-1 px-2 my-2 border-2 rounded-xl w-120"
            type="text"
            placeholder="Nome do pet"
            v-model="pet.nome"
          />
        </li>
        <li>
          <p class="text-2xl font-[Sen]">*Epécie do pet</p>
          <select
            v-model="pet.especie"
            class="text-2xl text-[#03497B] py-1 px-2 my-2 border-2 rounded-xl w-120 bg-[#FFF493] cursor-pointer"
          >
            <option value="cachorro">Cachorro</option>
            <option value="gato">Gato</option>
            <option value="passaro">Pássaro</option>
            <option value="outro">Outro</option>
          </select>
        </li>
        <li>
          <p class="text-2xl font-[Sen]">Gênero do Pet</p>
          <select
            v-model="pet.genero"
            class="text-2xl text-[#FDA202] py-1 px-2 my-2 border-2 rounded-xl w-120 bg-[#FFF493] cursor-pointer"
          >
            <option value="macho">Macho</option>
            <option value="femea">Fêmea</option>
          </select>
        </li>
        <li>
          <p class="text-2xl font-[Sen]">Porte do Pet</p>
          <select
            v-model="pet.porte"
            class="text-2xl text-[#587911] py-1 px-2 my-2 border-2 rounded-xl w-120 bg-[#FFF493] cursor-pointer"
          >
            <option value="pequeno">Pequeno</option>
            <option value="medio">Médio</option>
            <option value="grande">Grande</option>
          </select>
        </li>
        <li class="flex flex-col gap-2">
          <p class="text-2xl font-[Sen]">O pet é castrado?</p>
          <div class="flex gap-10">
            <label class="flex items-center gap-2">
              <input type="radio" class="size-6 cursor-pointer" value="sim" v-model="pet.castrado" />
              Sim
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" class="size-6 cursor-pointer" value="nao" v-model="pet.castrado" />
              Não
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" class="size-6 cursor-pointer" value="nao-sei" v-model="pet.castrado" />
              Não sei
            </label>
          </div>
        </li>
      </ul>
      <ul class="flex flex-col gap-4">
        <li>
          <p class="text-2xl font-[Sen]">Raça:</p>
          <input
            list="racas"
            v-model="pet.raca"
            class="text-2xl text-[#FDA202] py-1 px-2 my-2 border-2 rounded-xl w-120 bg-[#FFF493]"
            placeholder="Raça (se tiver)"
          />
          <div>
            <datalist v-if="pet.especie == 'cachorro'" id="racas" class="text-6xl">
              <option v-for="raca of racaStore.racasCachorro" :value="raca.value" :key="raca.value">
                {{ raca.nome }}
              </option>
            </datalist>
            <datalist v-else-if="pet.especie == 'gato'" id="racas" class="text-6xl">
              <option v-for="raca of racaStore.racasGatos" :value="raca.value" :key="raca.value">
                {{ raca.nome }}
              </option>
            </datalist>
            <datalist v-else id="racas" class="text-6xl">
              <option v-for="raca of racaStore.racasPassaro" :value="raca.value" :key="raca.value">
                {{ raca.nome }}
              </option>
            </datalist>
          </div>
        </li>
        <li class="flex flex-col gap-2">
          <p class="text-2xl font-[Sen]">O pet é vacinado?</p>
          <div class="flex gap-10">
            <label class="flex items-center gap-2">
              <input class="size-6 cursor-pointer" type="radio" value="sim" v-model="pet.vacinado" />
              Totalmente
            </label>
            <label class="flex items-center gap-2">
              <input class="size-6 cursor-pointer" type="radio" value="parcialmente" v-model="pet.vacinado" />
              Parcialmente
            </label>
            <label class="flex items-center gap-2">
              <input class="size-6 cursor-pointer" type="radio" value="nao" v-model="pet.vacinado" />
              Não
            </label>
            <label class="flex items-center gap-2">
              <input class="size-6 cursor-pointer" type="radio" value="nao-sei" v-model="pet.vacinado" />
              Não sei
            </label>
          </div>
        </li>
        <li class="flex flex-col w-[100%]">
          <p class="text-2xl text-[#1E0B00] font-[Sen]">Foto de Perfil</p>
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
    <div class="flex gap-20">
      <button class="text-xl text-[#FFF493] rounded-xl py-2 px-6 bg-[#03497B] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#03497B] hover:text-[#03497B] font-[Sen]" type="reset">
        <span class="mdi mdi-delete-outline"></span>
        Limpar
      </button>
      <button class="text-xl text-[#FFF493] rounded-xl py-2 px-6 bg-[#104C00] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#104C00] hover:text-[#104C00] font-[Sen]" type="submit">
        <span class="mdi mdi-paw"></span>
        Cadastrar Pet
      </button>
    </div>
  </form>
</template>