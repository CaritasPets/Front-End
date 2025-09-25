<script setup>
import { ref } from 'vue'
import BaseInput from '../InputComponents/BaseInput.vue'
import ToggleComponent from '../InputComponents/RadioInput.vue'
import PictureInput from '../InputComponents/PictureInput.vue'
import { useBaseInputStore } from '@/stores/BaseInputStore'
import { usePerdidoService } from '../../services/petsPerdidos/perdidoService'
const perdidoService = usePerdidoService()
const inputStore = useBaseInputStore()

const formUserData = ref({
  nome: '',
  especie: '',
  genero: '',
  localidade: '',
  caracteristicas: '',
  foto: null,
})

const getValues = () => {
  const valores = Object.fromEntries(
    Object.entries(inputStore.campos).map(([key, field]) => [key, field.value])
  )

  formUserData.value.nome = valores.input1
  formUserData.value.localidade = valores.input2
  formUserData.value.caracteristicas = valores.input3
  formUserData.value.genero = valores.radio1
  formUserData.value.especie = valores.radio2

  alert(valores)
}

const submitForm = () => {

  getValues()

  const formData = new FormData()
  formData.append("nome", formUserData.value.nome)
  formData.append("localidade", formUserData.value.localidade)
  formData.append("caracteristicas", formUserData.value.caracteristicas)
  formData.append("genero", formUserData.value.genero)
  formData.append("especie", formUserData.value.especie)
  formData.append("foto", formUserData.value.foto)

  perdidoService.postPerdidos(formData)
}
</script>
<template>
  <form @submit.prevent="submitForm" class="flex flex-col items-center py-20 gap-10 bg-[#F7F5E0] sm:gap-16 lg:gap-20">
    <div class="sm:flex md:flex lg:flex justify-start px-10 gap-20 w-full">
        <ul class="flex flex-col items-center w-full lg:w-1/3 gap-6">
          <li class="flex flex-col w-[100%]">
            <BaseInput name="input1"/>
          </li>
          <li class="flex flex-col w-[100%]">
            <BaseInput name="input2"/>
          </li>
          <li class="flex flex-col w-[100%]">
            <BaseInput name="input3"/>
          </li>
        </ul>
        <ul class="flex flex-col items-center w-full lg:w-1/3 gap-6">
          <li class="flex flex-col w-[100%]">
            <ToggleComponent name="radio1"/>
          </li>
          <li class="flex flex-col w-[100%]">
            <ToggleComponent name="radio2"/>
          </li>
          <li class="flex flex-col w-[100%]">
            <PictureInput v-model="formUserData.foto"/>
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
