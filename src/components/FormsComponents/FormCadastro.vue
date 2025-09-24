<script setup>
import { ref } from 'vue';
import { useAuthService } from '../../services/auth/authService';
import { useBaseInputStore } from '../../stores/BaseInputStore';
import BaseInput from '../InputComponents/BaseInput.vue'
import PictureInput from '../InputComponents/PictureInput.vue';
const inputStore = useBaseInputStore()
const authService = useAuthService()

const formUserData = ref({
  tipo: 'common',
  username: '',
  email: '',
  password: '',
  foto: null,
  nome: '',
  telefone: '',
  cpf: '',
  data_nascimento: null,
})

const getValues = () => {
  const valores = Object.fromEntries(
    Object.entries(inputStore.campos).map(([key, field]) => [key, field.value])
  )

  formUserData.value.username = valores.input4
  formUserData.value.email = valores.input5
  formUserData.value.password = valores.input6
  formUserData.value.nome = valores.input7
  formUserData.value.telefone = valores.input8
  formUserData.value.cpf = valores.input9
  formUserData.value.data_nascimento = valores.input10
}

const submitForm = () => {

  getValues();

  const formData = new FormData();
  formData.append("tipo", formUserData.value.tipo)
  formData.append("username", formUserData.value.username);
  formData.append("email", formUserData.value.email);
  formData.append("password", formUserData.value.password);
  formData.append("foto", formUserData.value.foto);
  formData.append("nome", formUserData.value.nome);
  formData.append("telefone", formUserData.value.telefone);
  formData.append("cpf", formUserData.value.cpf);
  formData.append("data_nascimento", formUserData.value.data_nascimento);

  authService.register(formData)
}

</script>
<template>
  <form @submit.prevent="submitForm" class="flex flex-col items-center py-20 gap-10 bg-[#F7F5E0] sm:gap-16 lg:gap-20">
    <div class=" sm:flex md:flex lg:flex justify-around gap-10 w-full">
      <ul class="flex flex-col items-center w-full lg:w-1/3 gap-6">
        <li class="flex flex-col w-[100%]">
          <BaseInput name="input4" class="hover:drop-shadow-xl transition-all duration-500"/>
        </li>
        <li class="flex flex-col w-[100%]">
          <BaseInput name="input5"/>
        </li>
        <li class="flex flex-col w-[100%]">
          <BaseInput name="input6"/>
        </li>
        <li class="flex flex-col w-[100%]">
          <BaseInput name="input7"/>
        </li>
      </ul>
      <ul class="flex flex-col items-center gap-6 w-full lg:w-[40%] font-[Sen]">
        <li class="flex flex-col w-[100%]">
          <BaseInput name="input8"/>
        </li>
        <li class="flex flex-col w-[100%]">
          <BaseInput name="input9"/>
        </li>
        <li class="flex flex-col w-[100%]">
          <BaseInput name="input10"/>
        </li>
        <li class="flex flex-col w-[100%]">
          <PictureInput v-model="formUserData.foto"/>
        </li>
      </ul>
    </div>
      <div class="flex items-center gap-4 sm:gap-6 sm:text-lg lg:text-xl text-[#1E0B00] w-[90%]">
        <p class="font-[Sen] ">Já possuí uma conta?</p>
        <RouterLink to="/user/login/"
          class="border-2 py-2 px-4 sm:px-6 border-[#FFBC46] text-black rounded-2xl bg-[#FFBC46] hover:bg-transparent hover:text-[#FFBC46] transition-all duration-500 font-[Sen]">
          Fazer login
        </RouterLink>
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
