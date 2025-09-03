import { defineStore } from "pinia";
import { ref } from "vue";

export const useFilterStore = defineStore('filterStore', () => {
  const contador = ref(0);
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
          value: ''
        },
        {
          option: '2-4 anos',
          value: ''
        },
        {
          option: '5-7 anos',
          value: ''
        },
        {
          option: '8 anos ou mais',
          value: ''
        }
      ]
    },
    filterCard4: {
      background: '#587911',
      title: 'Porte',
      options: [
        {
          option: 'Pequeno',
          value: 'pequeno'
        },
        {
          option: 'Médio',
          value: 'medio'
        },
        {
          option: 'Grande',
          value: 'grande'
        }
      ]
    },
    filterCard5: {
      background: '#FF7700',
      title: 'Castrado',
      options: [
        {
          option: 'Sim',
          value: 'sim'
        },
        {
          option: 'Não',
          value: 'nao'
        }
      ]
    },
    filterCard6: {
      background: '#FF7700',
      title: 'Sexo',
      options: [
        {
          option: 'Fêmea',
          value: 'femea'
        },
        {
          option: 'Macho',
          value: 'macho'
        },
        {
          option: 'Não identificado',
          value: '',
        }
      ]
    },
    filterCard7: {
      background: '#FF7700',
      title: 'Pelagem',
      options: [
        {
          option: '0-1 anos',
          value: ''
        },
        {
          option: '2-4 anos',
          value: ''
        },
        {
          option: '5-7 anos',
          value: ''
        },
        {
          option: '8 anos ou mais',
          value: ''
        }
      ]
    },
    filterCard8: {
      background: '#FF7700',
      title: 'Peso',
      options: [
        {
          option: '0-1 anos',
          value: ''
        },
        {
          option: '2-4 anos',
          value: ''
        },
        {
          option: '5-7 anos',
          value: ''
        },
        {
          option: '8 anos ou mais',
          value: ''
        }
      ]
    }
  })
  return {
    propriedadesFilter,
    contador,
  }
})
