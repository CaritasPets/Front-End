<script setup>
import { ref } from 'vue'
import BaseInput from './InputComponents/BaseInput.vue';
import { useBaseInputStore } from '../../stores/BaseInputStore';
const inputStore = useBaseInputStore()
import { RouterLink } from 'vue-router';

const formUserData = ref({
  username: '',
  password: ''
})

const getValues = () => {
  const valores = Object.fromEntries(
    Object.entries(inputStore.campos).map(([key, field]) => [key, field.value])
  )

  formUserData.value.username = valores.loginInput1
  formUserData.value.password = valores.loginInput2
  alert(valores)
}
</script>
<template>
  <form
    class="flex flex-col items-center gap-10 py-30 w-300 bg-[#FAE8AD]"
    @submit.prevent="getValues"
  >
    <h3 class="text-xl">Você ainda não possui nenhum cadastro?</h3>
    <RouterLink
      to="/user/sign-up/"
      class="bg-[#FFBC46] py-2 px-6 rounded-xl border-2 border-[#FFBC46] hover:bg-transparent hover:text-[#FFBC46] font-[Sen] transition-all duration-500"
    >
      Cadastrar-se
    </RouterLink>
    <BaseInput
      class="w-100"
      name="loginInput1"
    />
    <BaseInput
      class="w-100"
      name="loginInput2"
    />
    <button
      type="submit"
      class="text-lg sm:text-xl rounded-xl py-2 px-6 bg-[#FF953C] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FF953C] hover:text-[#FF953C] font-[Sen]"
    >
      Fazer Login
    </button>
  </form>
</template>
