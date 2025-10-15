import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useFilterStore } from './FilterStore';
import petsAdocaoMocked from "../mock/adocao";

export const usePetStore = defineStore('petStore', () => {

    const categoryToProperty = {
        'Espécie': 'especie',
        'Vacinado': 'vacinado',
        'Porte': 'porte',
        'Castrado': 'castrado',
        'Gênero': 'genero',
        'Pelagem': 'pelagem',

    };

    const propriedades = ref([...petsAdocaoMocked]);

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
