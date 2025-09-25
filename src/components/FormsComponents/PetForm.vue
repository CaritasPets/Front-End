<script setup>
import { ref } from 'vue'
import { useRacaStore } from '../../stores/RacaStore'
import BaseInput from '../InputComponents/BaseInput.vue'
import ToggleComponent from '../InputComponents/RadioInput.vue'
import PictureInput from '../InputComponents/PictureInput.vue'
import { useBaseInputStore } from '@/stores/BaseInputStore'
import { useAdocaoService } from '../../services/petsAdocao/adocaoService'
const adocaoService = useAdocaoService()
const inputStore = useBaseInputStore()
const racaStore = useRacaStore()

const pet = ref({
  nome: '',
  especie: '',
  raca: '',
  vacinado: '',
  genero: '',
  castrado: '',
  porte: '',
  foto: null
})

const getValues = () => {
  const valores = Object.fromEntries(
    Object.entries(inputStore.campos).map(([key, field]) => [key, field.value])
  )
  pet.value.nome = valores.input1
  pet.value.especie = valores.radio2
  pet.value.vacinado = valores.radio5
  pet.value.genero = valores.radio1
  pet.value.castrado = valores.radio4
  pet.value.porte = valores.radio3
}

const submitForm = () => {
  getValues()

  const formData = new FormData()
  formData.append("nome", pet.value.nome)
  formData.append("especie", pet.value.especie)
  formData.append("raca", pet.value.raca)
  formData.append("vacinado", pet.value.vacinado)
  formData.append("genero", pet.value.genero)
  formData.append("castrado", pet.value.castrado)
  formData.append("porte", pet.value.porte)
  formData.append("foto", pet.value.foto)

  adocaoService.postAdocao(formData)
}
</script>
<template>
  <form @submit.prevent="submitForm" @reset.prevent="handleReset" class="flex flex-col items-center py-20 gap-10 bg-[#F7F5E0] sm:gap-16 lg:gap-20">
    <div class="sm:flex md:flex lg:flex justify-around gap-10 w-full">
      <ul class="flex flex-col items-center w-full lg:w-1/3 gap-6">
        <li class="flex flex-col w-[100%]">
          <BaseInput name="input1"/>
        </li>
        <li class="flex flex-col w-[100%]">
          <ToggleComponent name="radio2"/>
        </li>
        <li class="flex flex-col w-[100%]">
          <p class="text-xl lg:text-2xl mb-2 font-[Sen]">Raça:</p>
          <input
            list="racas"
            v-model="pet.raca"
            class="bg-gray-300 text-[#1E0B00] rounded-full text-xl px-4 py-2"
            placeholder="Raça (se tiver)"
          />
          <div>
            <datalist v-if="inputStore.campos.radio2.value === 'cachorro'" id="racas">
              <option v-for="raca of racaStore.racasCachorro" :key="raca.value" :value="raca.value">
                {{ raca.nome }}
              </option>
            </datalist>
            <datalist v-else-if="inputStore.campos.radio2.value === 'gato'" id="racas">
              <option v-for="raca of racaStore.racasGatos" :key="raca.value" :value="raca.value">
                {{ raca.nome }}
              </option>
            </datalist>
            <datalist v-else-if="inputStore.campos.radio2.value === 'passaro'" id="racas">
              <option v-for="raca of racaStore.racasPassaro" :key="raca.value" :value="raca.value">
                {{ raca.nome }}
              </option>
            </datalist>
            <datalist v-else id="racas">
              <option v-for="raca of [...racaStore.racasCachorro, ...racaStore.racasGatos, ...racaStore.racasPassaro]" :key="raca.value" :value="raca.value">
                {{ raca.nome }}
              </option>
            </datalist>
          </div>
        </li>
        <li class="flex flex-col w-[100%]">
          <label class="text-xl lg:text-2xl mb-2 font-[Sen] text-[#1E0B00]">
            *O seu pet é vacinado?
          </label>
          <select
            v-model="inputStore.campos.radio5.value"
            class="bg-gray-300 text-[#1E0B00] rounded-full text-xl px-4 py-2"
            required
          >
            <option value="" disabled hidden>Selecione</option>
            <option v-for="opt in inputStore.campos.radio5.options" :key="opt.value" :value="opt.value">
              {{ opt.text }}
            </option>
          </select>
        </li>
      </ul>
      <ul class="flex flex-col items-center w-full lg:w-1/3 gap-6">
        <li class="flex flex-col w-[100%]">
          <ToggleComponent name="radio1"/>
        </li>
        <li class="flex flex-col w-[100%]">
          <ToggleComponent name="radio4"/>
        </li>
        <li class="flex flex-col w-[100%]">
          <ToggleComponent name="radio3"/>
        </li>
        <li class="flex flex-col w-[100%]">
          <PictureInput v-model="pet.foto"/>
        </li>
      </ul>
    </div>
    <div class="mt-14 mr-180">
      <h2 class="text-xl font-[Sen] text-[#1E0B00]">* Indica campo obrigatório.</h2>
    </div>
    <div>
        <ul>
          <li class="w-full flex flex-row justify-center gap-4 sm:gap-10 ">
            <button
              class="text-xl rounded-xl py-2 px-6 bg-[#FFBC46] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FFBC46] hover:text-[#FFBC46] font-[Sen]"
              type="reset">
              Limpar
            </button>
            <button
              class="text-xl rounded-xl py-2 px-6 bg-[#FF953C] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FF953C] hover:text-[#FF953C] font-[Sen]"
              type="submit">
              Cadastrar Pet
            </button>
          </li>
        </ul>
      </div>
  </form>
</template>
