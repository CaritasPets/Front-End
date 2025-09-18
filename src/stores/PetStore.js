import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useFilterStore } from './FilterStore';

export const usePetStore = defineStore('petStore', () => {

    const categoryToProperty = {
        'Espécie': 'especie',
        'Vacinado': 'vacinado',
        'Porte': 'porte',
        'Castrado': 'castrado',
        'Gênero': 'genero',
        'Pelagem': 'pelagem',

    };

    const propriedades = ref([
        {
            id: 1,
            nome: 'Rex',
            genero: 'macho',
            foto: '/pets_adocao_images/pet1.jpg',
            especie: 'cachorro',
            vacinado: 'sim',
            porte: 'medio',
            castrado: 'sim',
            pelagem: 'curta'
        },
        {
            id: 2,
            nome: 'Mia',
            genero: 'femea',
            foto: '/pets_adocao_images/pet2.jpg',
            especie: 'gato',
            vacinado: 'nao',
            porte: 'pequeno',
            castrado: 'nao',
            pelagem: 'longa'
        },
        {
            id: 3,
            nome: 'Buddy',
            genero: 'macho',
            foto: '/pets_adocao_images/pet3.jpg',
            especie: 'cachorro',
            vacinado: 'parcialmente',
            porte: 'grande',
            castrado: 'sim',
            pelagem: 'media'
        },
        {
            id: 4,
            nome: 'Luna',
            genero: 'femea',
            foto: '/pets_adocao_images/pet4.jpg',
            especie: 'gato',
            vacinado: 'sim',
            porte: 'pequeno',
            castrado: 'nao',
            pelagem: 'curta'
        },
        {
            id: 5,
            nome: 'Max',
            genero: 'macho',
            foto: '/pets_adocao_images/pet5.jpg',
            especie: 'cachorro',
            vacinado: 'sim',
            porte: 'medio',
            castrado: 'sim',
            pelagem: 'curta'
        },
        {
            id: 6,
            nome: 'Bella',
            genero: 'femea',
            foto: '/pets_adocao_images/pet6.jpg',
            especie: 'gato',
            vacinado: 'nao',
            porte: 'medio',
            castrado: 'sim',
            pelagem: 'media'
        },
        {
            id: 7,
            nome: 'Charlie',
            genero: 'macho',
            foto: '/pets_adocao_images/pet7.jpg',
            especie: 'cachorro',
            vacinado: 'parcialmente',
            porte: 'grande',
            castrado: 'nao',
            pelagem: 'longa'
        },
        {
            id: 8,
            nome: 'Lucy',
            genero: 'femea',
            foto: '/pets_adocao_images/pet8.jpg',
            especie: 'gato',
            vacinado: 'sim',
            porte: 'pequeno',
            castrado: 'nao',
            pelagem: 'curta'
        },
        {
            id: 9,
            nome: 'Daisy',
            genero: 'femea',
            foto: '/pets_adocao_images/pet9.jpg',
            especie: 'cachorro',
            vacinado: 'sim',
            porte: 'pequeno',
            castrado: 'sim',
            pelagem: 'curta'
        },
        {
            id: 10,
            nome: 'Rocky',
            genero: 'macho',
            foto: '/pets_adocao_images/pet10.jpg',
            especie: 'gato',
            vacinado: 'nao',
            porte: 'medio',
            castrado: 'nao',
            pelagem: 'longa'
        },
        {
            id: 11,
            nome: 'Zoe',
            genero: 'femea',
            foto: '/pets_adocao_images/pet11.jpg',
            especie: 'cachorro',
            vacinado: 'parcialmente',
            porte: 'grande',
            castrado: 'sim',
            pelagem: 'media'
        },
        {
            id: 12,
            nome: 'Milo',
            genero: 'macho',
            foto: '/pets_adocao_images/pet12.jpg',
            especie: 'gato',
            vacinado: 'sim',
            porte: 'pequeno',
            castrado: 'nao',
            pelagem: 'curta'
        },
        {
            id: 13,
            nome: 'Coco',
            genero: 'femea',
            foto: '/pets_adocao_images/pet13.jpg',
            especie: 'cachorro',
            vacinado: 'parcialmente',
            porte: 'grande',
            castrado: 'sim',
            pelagem: 'media'
        },
        {
            id: 14,
            nome: 'Tiger',
            genero: 'macho',
            foto: '/pets_adocao_images/pet14.jpg',
            especie: 'gato',
            vacinado: 'sim',
            porte: 'pequeno',
            castrado: 'nao',
            pelagem: 'curta'
        },
        {
            id: 15,
            nome: 'Molly',
            genero: 'femea',
            foto: '/pets_adocao_images/pet15.jpg',
            especie: 'cachorro',
            vacinado: 'nao',
            porte: 'medio',
            castrado: 'sim',
            pelagem: 'longa'
        },
        {
            id: 16,
            nome: 'Bruno',
            genero: 'macho',
            foto: '/pets_adocao_images/pet16.jpg',
            especie: 'gato',
            vacinado: 'parcialmente',
            porte: 'grande',
            castrado: 'nao',
            pelagem: 'media'
        },
        {
            id: 17,
            nome: 'Lily',
            genero: 'femea',
            foto: '/pets_adocao_images/pet17.jpg',
            especie: 'cachorro',
            vacinado: 'sim',
            porte: 'pequeno',
            castrado: 'sim',
            pelagem: 'curta'
        },
        {
            id: 18,
            nome: 'Oscar',
            genero: 'macho',
            foto: '/pets_adocao_images/pet18.jpg',
            especie: 'gato',
            vacinado: 'nao',
            porte: 'medio',
            castrado: 'nao',
            pelagem: 'longa'
        },
        {
            id: 19,
            nome: 'Simba',
            genero: 'macho',
            foto: '/pets_adocao_images/pet19.jpg',
            especie: 'cachorro',
            vacinado: 'sim',
            porte: 'medio',
            castrado: 'sim',
            pelagem: 'curta'
        },
        {
            id: 20,
            nome: 'Nala',
            genero: 'femea',
            foto: '/pets_adocao_images/pet20.jpg',
            especie: 'gato',
            vacinado: 'nao',
            porte: 'pequeno',
            castrado: 'nao',
            pelagem: 'longa'
        },
        {
            id: 21,
            nome: 'Leo',
            genero: 'macho',
            foto: '/pets_adocao_images/pet21.jpg',
            especie: 'cachorro',
            vacinado: 'parcialmente',
            porte: 'grande',
            castrado: 'sim',
            pelagem: 'media'
        },
        {
            id: 22,
            nome: 'Misty',
            genero: 'femea',
            foto: '/pets_adocao_images/pet22.jpg',
            especie: 'gato',
            vacinado: 'sim',
            porte: 'pequeno',
            castrado: 'nao',
            pelagem: 'curta'
        },
        {
            id: 23,
            nome: 'Rex Jr.',
            genero: 'macho',
            foto: '/pets_adocao_images/pet23.jpg',
            especie: 'cachorro',
            vacinado: 'sim',
            porte: 'medio',
            castrado: 'sim',
            pelagem: 'curta'
        },
        {
            id: 24,
            nome: 'Luna Jr.',
            genero: 'femea',
            foto: '/pets_adocao_images/pet24.jpg',
            especie: 'gato',
            vacinado: 'nao',
            porte: 'medio',
            castrado: 'sim',
            pelagem: 'media'
        },
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
