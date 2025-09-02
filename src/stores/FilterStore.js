import { defineStore } from "pinia";
import { ref } from "vue";

export const useFilterStore = defineStore('filterStore', () => {
  const propriedadesFilter = ref({
    filterCard1: {
      background: '#587911',
      title: 'Espécie',
      options: [
        {
          option: 'Cachorro',
          value: 'cachorro'
        },
        {
          option: 'Gato',
          value: 'gato'
        },
        {
          option: 'Pássaro',
          value: 'rola'
        },
        {
          option: 'Outros',
          value: 'outros'
        }
      ]
    },
    filterCard2: {
      background: '#587911',
      title: 'Vacinado',
      options: [
        {
          option: 'Sim',
          value: 'sim'
        },
        {
          option: 'Não',
          value: 'nao'
        },
        {
          option: 'Parcialmente',
          value: 'parcialmente'
        }
      ]
    },
    filterCard3: {
      background: '#587911',
      title: 'Idade',
      options: [
        {
          option: '0-1 anos',
          value: 'sim'
        },
        {
          option: '2-4 anos',
          value: 'nao'
        },
        {
          option: '5-7 anos',
          value: 'parcialmente'
        },
        {
          option: '8 anos ou mais',
          value: 'parcialmente'
        }
      ]
    },
    filterCard4: {
      background: '#587911',
      title: 'Porte',
      options: [
        {
          option: 'Pequeno',
          value: 'sim'
        },
        {
          option: '2-4 anos',
          value: 'nao'
        },
        {
          option: '5-7 anos',
          value: 'parcialmente'
        }
      ]
    }
  })
  return {
    propriedadesFilter,
  }
})
