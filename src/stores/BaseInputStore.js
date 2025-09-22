import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBaseInputStore = defineStore('baseInputStore', () => {
  const campos = ref({
    input1: {
      type: 'text',
      label: 'Nome do pet',
      placeholder: 'Digite o nome...',
      value: ''
    },
    input2: {
      type: 'text',
      label: 'Teste',
      placeholder: 'A',
      value: ''
    },
    radio1: {
      background: '#40A9F4',
      type: 'radio',
      label: 'Gênero do Pet',
      options: [
        { value: 'fêmea', text: 'Fêmea' },
        { value: 'macho', text: 'Macho' }
      ],
    }
  })

  return { campos }
})
