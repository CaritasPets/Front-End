<script setup>
import BaseInput from '../InputComponents/BaseInput.vue'
import ToggleComponent from '../InputComponents/RadioInput.vue'
import PictureInput from '../InputComponents/PictureInput.vue'
import { useBaseInputStore } from '@/stores/BaseInputStore'

const inputStore = useBaseInputStore()
// função para capturar valores no submit
function handleSubmit() {
  const valores = Object.fromEntries(
    Object.entries(inputStore.campos).map(([key, field]) => [key, field.value])
  )
  alert(JSON.stringify(valores, null, 2))
}
</script>
<template>
  <form @submit.prevent="handleSubmit" class="relative z-10">
    <div class="flex justify-around">
        <ul>
          <li>
            <BaseInput name="input1" class="mb-5"/>
          </li>
          <li>
            <BaseInput name="input2" class="mb-5"/>
          </li>
          <li>
            <BaseInput name="input3"/>
          </li>
        </ul>
        <ul>
          <li>
            <PictureInput class="mb-5"/>
          </li>
          <li>
            <ToggleComponent name="radio2" class="mb-5"/>
          </li>
          <li>
            <ToggleComponent name="radio1"/>
          </li>
        </ul>
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
        class="mt-6 text-xl text-[#FFF493] rounded-xl py-2 px-6 bg-[#104C00] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#104C00] hover:text-[#104C00] font-[Sen]"
        type="submit"
      >
        <span class="mdi mdi-paw"></span>
        Cadastrar Pet Perdido
      </button>
    </div>
  </form>
</template>
