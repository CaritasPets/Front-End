import { defineStore } from "pinia";
import { ref } from "vue";

export const usePetStore = defineStore('petStore', () => {
    const propriedades = ref([
        {
            foto: '/logo.svg',
            nome: 'Nome Pet',
            genero: 'Gênero Pet',
        },
        {
            foto: '/logo.svg',
            nome: 'Nome Pet',
            genero: 'Gênero Pet',
        },
        {
            foto: '/logo.svg',
            nome: 'Nome Pet',
            genero: 'Gênero Pet',
        },
        {
            foto: '/logo.svg',
            nome: 'Nome Pet',
            genero: 'Gênero Pet',
        },
    ]);

    return {
        propriedades,
    }
})
