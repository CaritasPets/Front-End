<script setup>
import { ref } from 'vue'
import { useRacaStore } from '../../stores/RacaStore'
import BaseInput from '../InputComponents/BaseInput.vue'
import ToggleComponent from '../InputComponents/RadioInput.vue'
import PictureInput from '../InputComponents/PictureInput.vue'
import { useBaseInputStore } from '@/stores/BaseInputStore'

const inputStore = useBaseInputStore()
const racaStore = useRacaStore()

const pet = ref({
  raca: '',
})

const formUserData = ref({
  username: '',
  password: ''
})

const getValues = () => {
  const valores = Object.fromEntries(
    Object.entries(inputStore.campos).map(([key, field]) => [key, field.value])
  )

  formUserData.value.username = valores.input1
  formUserData.value.password = valores.input2
  alert(valores)
}
</script>
<template>
  <form @submit.prevent="handleSubmit" @reset.prevent="handleReset" class="flex flex-col items-center py-20 gap-10 bg-amber-200 sm:gap-16 lg:gap-20">
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
            class="bg-white text-[#1E0B00] rounded-full text-xl px-4 py-2"
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
        <li class="flex flex-col w-[100%]">
          <ToggleComponent name="radio5"/>
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
          <PictureInput/>
        </li>
      </ul>
    </div>
    <div class="mt-14 mr-180">
      <h2 class="text-xl font-[Sen] text-[#1E0B00]">* Indica campo obrigatório.</h2>
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
