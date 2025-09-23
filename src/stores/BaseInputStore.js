// src/stores/BaseInputStore.js
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
    input2: {
      type: 'text',
      label: '*Localidade:',
      placeholder: 'Último local de avistamento do pet...',
      value: '',
      required: true
    },
    input3: {
      type: 'text',
      label: 'Características:',
      placeholder: 'Caracteristicas do seu pet...',
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
      value: '',
      required: true
    },
    radio2: {
      background: '#40A9F4',
      type: 'radio',
      label: '*Espécie do Pet',
      options: [
        { value: 'cachorro', text: 'Cachorro' },
        { value: 'gato', text: 'Gato' },
        { value: 'passaro', text: 'Pássaro' },
        { value: 'outro', text: 'Outro' }
      ],
      value: '',
      required: true
    },
    radio3: {
      background: '#40A9F4',
      type: 'radio',
      label: 'Porte do Pet',
      options: [
        { value: 'pequeno', text: 'Pequeno' },
        { value: 'medio', text: 'Médio' },
        { value: 'grande', text: 'Grande' }
      ],
      value: '',
      required: true
    },
    radio4: {
      background: '#40A9F4',
      type: 'radio',
      label: 'O pet é castrado?',
      options: [
        { value: 'sim', text: 'Sim' },
        { value: 'nao', text: 'Não' },
        { value: 'nao-sei', text: 'Não Sei' }
      ],
      value: '',
      required: true
    },
    radio5: {
      background: '#40A9F4',
      type: 'radio',
      label: 'O pet é vacinado?',
      options: [
        { value: 'totalmente', text: 'Totalmente' },
        { value: 'parcialmente', text: 'Parcialmente' },
        { value: 'nao', text: 'Não' },
        { value: 'nao-sei', text: 'Não Sei' }
      ],
      value: '',
      required: true
    },
  })

  return { campos }
})
