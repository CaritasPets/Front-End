import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBaseInputStore = defineStore('baseInputStore', () => {
  const campos = ref({
    input1: {
      type: 'text',
      label: '*Nome do Pet (ou apelido):',
      placeholder: 'Digite o nome...',
      value: '',
      required: true
    },
    radio1: {
      background: '#40A9F4',
      type: 'radio',
      label: 'Gênero do Pet',
      options: [
        { value: 'femea', text: 'Fêmea' },
        { value: 'macho', text: 'Macho' }
      ],
      required: true
    }
  })

  return { campos }
})
