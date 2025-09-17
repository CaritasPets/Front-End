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

    const petPerdido = ref([
    {
        id: '1',
        userId: '1',
        foto: '/logo.svg',
        nome: 'Toby',
        genero: 'Macho',
        especie: 'cachorro',
        localDesaparecimento: 'Rua das Flores, 123',
        caracteristicas: 'Toby sumiu perto do parque, é dócil e tem uma coleira azul.'
    },
    {
        id: '2',
        userId: '2',
        foto: '/logo.svg',
        nome: 'Lola',
        genero: 'Fêmea',
        especie: 'gato',
        localDesaparecimento: 'Av. Central, 456',
        caracteristicas: 'Lola é assustada, pelagem branca longa e olhos azuis. Sumiu à noite.'
    },
    {
        id: '3',
        userId: '3',
        foto: '/logo.svg',
        nome: 'Bidu',
        genero: 'Macho',
        especie: 'cachorro',
        localDesaparecimento: 'Praça da Paz, 789',
        caracteristicas: 'Bidu é brincalhão, pequeno, pelagem cinza, estava sem coleira.'
    },
    {
        id: '4',
        userId: '4',
        foto: '/logo.svg',
        nome: 'Mel',
        genero: 'Fêmea',
        especie: 'gato',
        localDesaparecimento: 'Rua do Sol, 321',
        caracteristicas: 'Mel é dócil, pelagem média, rajada, sumiu no fim da tarde.'
    },
    {
        id: '5',
        userId: '1',
        foto: '/logo.svg',
        nome: 'Thor',
        genero: 'Macho',
        especie: 'cachorro',
        localDesaparecimento: 'Rua das Palmeiras, 654',
        caracteristicas: 'Thor é preto, grande, muito amigável, sumiu durante uma caminhada.'
    },
    {
        id: '6',
        userId: '2',
        foto: '/logo.svg',
        nome: 'Nina',
        genero: 'Fêmea',
        especie: 'gato',
        localDesaparecimento: 'Av. Brasil, 987',
        caracteristicas: 'Nina tem olhos verdes, pelagem longa, sumiu de madrugada.'
    },
    {
        id: '7',
        userId: '3',
        foto: '/logo.svg',
        nome: 'Duque',
        genero: 'Macho',
        especie: 'cachorro',
        localDesaparecimento: 'Rua das Acácias, 222',
        caracteristicas: 'Duque é pastor alemão, porte médio, sumiu do quintal de casa.'
    },
    {
        id: '8',
        userId: '4',
        foto: '/logo.svg',
        nome: 'Lucy',
        genero: 'Fêmea',
        especie: 'gato',
        localDesaparecimento: 'Rua Nova, 555',
        caracteristicas: 'Lucy é cinza, pelagem curta, muito carinhosa, sumiu pela manhã.'
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
        petPerdido,
        filteredPropriedades,
    }
})
