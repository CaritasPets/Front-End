<script setup>
import { ref } from 'vue'
import BaseInput from '../InputComponents/BaseInput.vue'

</script>
<template>
  <form class="flex flex-col items-center py-20 gap-10 bg-amber-200 sm:gap-16 lg:gap-20">
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
        </ul>
    </div>
    <div class="mt-14 mr-180">
      <h2 class="text-xl font-[Sen] text-[#1E0B00]">* Indica campo obrigatório.</h2>
    </div>
    <div class="flex justify-center gap-4 sm:gap-30">
      <button
        class="text-xl rounded-xl py-2 pl-4 pr-6 bg-[#FDA202] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FDA202] hover:text-[#FDA202]"
        type="reset"
      >
        <span class="mr-2 mdi mdi-delete-outline font-[Sen]"></span>
        Limpar
      </button>
      <button
        class="text-xl rounded-xl py-2 pl-5 pr-6 bg-[#FF7700] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FF7700] hover:text-[#FF7700]"
        type="submit"
      >
        <span class="mr-2 mdi mdi-paw font-[Sen]"></span>
        Cadastrar ONG
      </button>
    </div>
  </form>
</template>
