<script setup>
import BaseInput from '../InputComponents/BaseInput.vue'
//import { useBaseInputStore } from '../../stores/BaseInputStore'
//const inputStore = useBaseInputStore()

//const file = ref(null)
//const previewUrl = ref(null)

</script>
<template>
  <form @submit.prevent="handleRegister" class="flex flex-col items-center py-20 gap-10 bg-amber-200 sm:gap-16 lg:gap-20">
    <div class=" sm:flex md:flex lg:flex justify-around gap-10 w-full">
      <ul class="flex flex-col items-center w-full lg:w-1/3 gap-6">
        <li class="flex flex-col w-[100%]">
          <BaseInput name="input4"/>
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
      </ul>
    </div>
      <div class="flex items-center gap-4 sm:gap-6 sm:text-lg lg:text-xl text-[#1E0B00] w-[90%]">
        <p class="font-[Sen] ">Já possuí uma conta?</p>
        <RouterLink to="/user/login/"
          class="border-2 py-2 px-4 sm:px-6 border-[#FDA202] text-black rounded-2xl bg-[#FDA202] hover:bg-transparent hover:text-[#FDA202] transition-all duration-500 font-[Sen]">
          Fazer login
        </RouterLink>
      </div>
      <div>
        <ul>
          <li class="w-full flex flex-row justify-center gap-4 sm:gap-10 ">
            <button
              class="text-xl rounded-xl py-2 px-6 bg-[#FDA202] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FDA202] hover:text-[#FDA202] font-[Sen]"
              type="reset">
              Limpar
            </button>
            <button
              class="text-xl rounded-xl py-2 px-6 bg-[#FF7700] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FF7700] hover:text-[#FF7700] font-[Sen]"
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
