<script setup>
import { ref } from 'vue'
import BaseInput from '../InputComponents/BaseInput.vue'
import PictureInput from '../InputComponents/PictureInput.vue';
import { useAuthService } from '../../services/auth/authService';
import { useBaseInputStore } from '../../stores/BaseInputStore';
const inputStore = useBaseInputStore()
const authService = useAuthService()

const formUserData = ref({
  tipo: 'organization',
  username: '',
  email: '',
  password: '',
  foto: null,
  telefone: '',
  cnpj: '',
  instagram: '',
  facebook: '',
  endereco: '',
  descricao: '',
})

const getValues = () => {
  const valores = Object.fromEntries(
    Object.entries(inputStore.campos).map(([key, field]) => [key, field.value])
  )

  formUserData.value.username = valores.input11
  formUserData.value.telefone = valores.input8
  formUserData.value.email = valores.input5
  formUserData.value.cnpj = valores.input12
  formUserData.value.instagram = valores.input13
  formUserData.value.facebook = valores.input14
  formUserData.value.password = valores.input6
  formUserData.value.endereco = valores.input15
  formUserData.value.descricao = valores.input16

}

const submitForm = () => {
  getValues()

  const formData = new FormData();
  formData.append("tipo", formUserData.value.tipo)
  formData.append("username", formUserData.value.username)
  formData.append("telefone", formUserData.value.telefone)
  formData.append("email", formUserData.value.email)
  formData.append("cnpj", formUserData.value.cnpj)
  formData.append("instagram", formUserData.value.instagram)
  formData.append("facebook", formUserData.value.facebook)
  formData.append("password", formUserData.value.password)
  formData.append("endereco", formUserData.value.endereco)
  formData.append("descricao", formUserData.value.descricao)
  formData.append("foto", formUserData.value.foto)

  authService.register(formData)
}
</script>
<template>
  <form class="flex flex-col items-center py-20 gap-10 bg-[#F7F5E0] sm:gap-16 lg:gap-20"
    @submit.prevent="submitForm"
  >
    <div class="sm:flex md:flex lg:flex justify-around gap-10 w-full">
        <ul class="flex flex-col items-center w-full lg:w-1/3 gap-6">
          <li class="flex flex-col w-[100%]">
            <BaseInput name="input11"/>
          </li>
          <li class="flex flex-col w-[100%]">
            <BaseInput name="input8"/>
          </li>
          <li class="flex flex-col w-[100%]">
            <BaseInput name="input5"/>
          </li>
          <li class="flex flex-col w-[100%]">
            <BaseInput name="input12"/>
          </li>
          <li class="flex flex-col w-[100%]">
            <BaseInput name="input13"/>
          </li>
        </ul>
        <ul class="flex flex-col items-center w-full lg:w-1/3 gap-6">
          <li class="flex flex-col w-[100%]">
            <BaseInput name="input14"/>
          </li>
          <li class="flex flex-col w-[100%]">
            <BaseInput name="input6"/>
          </li>
          <li class="flex flex-col w-[100%]">
            <BaseInput name="input15"/>
          </li>
          <li class="flex flex-col w-[100%]">
            <BaseInput name="input16"/>
          </li>
          <li>
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
              Cadastrar ONG
            </button>
          </li>
        </ul>
      </div>
  </form>
</template>
