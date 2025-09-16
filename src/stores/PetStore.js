import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useFilterStore } from './FilterStore';

export const usePetStore = defineStore('petStore', () => {

    const categoryToProperty = {
        'Espécie': 'especie',
        'Vacinado': 'vacinado',
        'Porte': 'porte',
        'Castrado': 'castrado',
        'Sexo': 'sexo',
        'Pelagem': 'pelagem',
        
    };

    const propriedades = ref([
        {
            id: '1',
            foto: '/logo.svg',
            nome: 'Rex',
            genero: 'Macho',
            especie: 'cachorro',
            vacinado: 'sim',
            castrado: 'sim',
            sexo: 'macho',
            pelagem: 'curta',
    
        },
        {
            id: '2',
            foto: '/logo.svg',
            nome: 'Mia',
            genero: 'Fêmea',
            especie: 'gato',
            vacinado: 'nao',
            porte: 'pequeno',
            castrado: 'nao',
            sexo: 'femea',
            pelagem: 'longa',
           
        },
        {
            id: '3',
            foto: '/logo.svg',
            nome: 'Buddy',
            genero: 'Macho',
            especie: 'cachorro',
            vacinado: 'sim',
            porte: 'grande',
            castrado: 'sim',
            sexo: 'macho',
            pelagem: 'curta',
        },
        {
            id: '4',
            foto: '/logo.svg',
            nome: 'Luna',
            genero: 'Fêmea',
            especie: 'gato',
            vacinado: 'parcialmente',
            porte: 'pequeno',
            castrado: 'sim',
            sexo: 'femea',
            pelagem: 'media',
        },
        {
            id: '5',
            foto: '/logo.svg',
            nome: 'Max',
            genero: 'Macho',
            especie: 'cachorro',
            vacinado: 'sim',
            porte: 'medio',
            castrado: 'nao',
            sexo: 'macho',
            pelagem: 'curta',

        },
        {
            id: '6',
            foto: '/logo.svg',
            nome: 'Bella',
            genero: 'Fêmea',
            especie: 'cachorro',
            vacinado: 'nao',
            porte: 'pequeno',
            castrado: 'nao',
            sexo: 'femea',
            pelagem: 'longa',
        },
        {
            id: '7',
            foto: '/logo.svg',
            nome: 'Charlie',
            genero: 'Macho',
            especie: 'gato',
            vacinado: 'sim',
            porte: 'medio',
            castrado: 'sim',
            sexo: 'macho',
            pelagem: 'curta',

        },
        {
            id: '8',
            foto: '/logo.svg',
            nome: 'Daisy',
            genero: 'Fêmea',
            especie: 'cachorro',
            vacinado: 'sim',
            porte: 'grande',
            castrado: 'sim',
            sexo: 'femea',
            pelagem: 'media',

        }
    ]);

    const filterStore = useFilterStore();

    const filteredPropriedades = computed(() => {
        if (!filterStore.filters || filterStore.filters.length === 0) {
            return propriedades.value;
        }

        const filterGroups = {};
        filterStore.filters.forEach(filter => {
            if (!filterGroups[filter.category]) {
                filterGroups[filter.category] = [];
            }
            filterGroups[filter.category].push(filter.value);
        });

        return propriedades.value.filter(pet => {
            return Object.keys(filterGroups).every(category => {
                const allowedValues = filterGroups[category];
                const petProperty = categoryToProperty[category];
                if (!petProperty) {
                    return true; 
                }
                return allowedValues.includes(pet[petProperty]);
            });
        });
    });

    return {
        propriedades,
        filteredPropriedades,
    }
})
