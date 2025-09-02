import { defineStore } from "pinia";
import { ref } from "vue";

export const usePetStore = defineStore('petStore', () => {
    const propriedades = ref([
        {
            id: '1',
            foto: '/logo.svg',
            nome: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            genero: 'Gênero Pet',
        },
        {
            id: '2',
            foto: '/logo.svg',
            nome: 'RONALDINHO GAUCHO',
            genero: 'Gênero Pet',
        },
        {
            id: '3',
            foto: '/logo.svg',
            nome: 'Nome Pet',
            genero: 'Gênero Pet',
        },
        {
            id: '4',
            foto: '/logo.svg',
            nome: 'Nome Pet',
            genero: 'Gênero Pet',
        },
        {
            id: '5',
            foto: '/logo.svg',
            nome: 'Nome Pet',
            genero: 'Gênero Pet',
        },
        {
            id: '6',
            foto: '/logo.svg',
            nome: 'Nome Pet',
            genero: 'Gênero Pet',
        },
        {
            id: '7',
            foto: '/logo.svg',
            nome: 'Nome Pet',
            genero: 'Gênero Pet',
        },
        {
            id: '8',
            foto: '/logo.svg',
            nome: 'Nome Pet',
            genero: 'Gênero Pet',
        }
    ]);

    return {
        propriedades,
    }
})
