import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useFilterStore } from './FilterStore';

export const usePetStore = defineStore('petStore', () => {

    const categoryToProperty = {
        'Espécie': 'especie',
        'Vacinado': 'vacinado',
        'Porte': 'porte',
        'Castrado': 'castrado',
        'Genero': 'genero',
        'Pelagem': 'pelagem',
        
    };

    const propriedades = ref([
        {
            id: '1',
            ongId: '1',
            foto: '/logo.svg',
            nome: 'Rex',
            genero: 'Macho',
            especie: 'cachorro',
            vacinado: 'sim',
            porte: 'medio',
            castrado: 'sim',
            pelagem: 'curta',
            raca: 'raça',
        },
        {
            id: '2',
            ongId: '2',
            foto: '/logo.svg',
            nome: 'Mia',
            genero: 'Fêmea',
            especie: 'gato',
            vacinado: 'nao',
            porte: 'pequeno',
            castrado: 'nao',
            pelagem: 'longa',
            raca: 'raça',
        },
        {
            id: '3',
            ongId: '3',
            foto: '/logo.svg',
            nome: 'Buddy',
            genero: 'Macho',
            especie: 'cachorro',
            vacinado: 'sim',
            porte: 'grande',
            castrado: 'sim',
            pelagem: 'curta',
            raca: 'raça',
        },
        {
            id: '4',
            ongId: '4',
            foto: '/logo.svg',
            nome: 'Luna',
            genero: 'Fêmea',
            especie: 'gato',
            vacinado: 'parcialmente',
            porte: 'pequeno',
            castrado: 'sim',
            pelagem: 'media',
            raca: 'raça',
        },
        {
            id: '5',
            ongId: '1',
            foto: '/logo.svg',
            nome: 'Max',
            genero: 'Macho',
            especie: 'cachorro',
            vacinado: 'sim',
            porte: 'medio',
            castrado: 'nao',
            pelagem: 'curta',
            raca: 'raça',

        },
        {
            id: '6',
            ongId: '2',
            foto: '/logo.svg',
            nome: 'Bella',
            genero: 'Fêmea',
            especie: 'cachorro',
            vacinado: 'nao',
            porte: 'pequeno',
            castrado: 'nao',
            pelagem: 'longa',
            raca: 'raça',
        },
        {
            id: '7',
            ongId: '3',
            foto: '/logo.svg',
            nome: 'Charlie',
            genero: 'Macho',
            especie: 'gato',
            vacinado: 'sim',
            porte: 'medio',
            castrado: 'sim',
            pelagem: 'curta',
            raca: 'raça',
        },
        {
            id: '8',
            ongId: '4',
            foto: '/logo.svg',
            nome: 'Daisy',
            genero: 'Fêmea',
            especie: 'cachorro',
            vacinado: 'sim',
            porte: 'grande',
            castrado: 'sim',
            pelagem: 'media',
            raca: 'raça',
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
