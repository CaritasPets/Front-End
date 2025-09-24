import { defineStore } from "pinia";
import { ref } from "vue";

export const useFilterStore = defineStore("filterStore", () => {
  const contador = ref(0);
  const filters = ref([]);


  const propriedadesFilterVerdes = ref([
    {
      background: "#03497B",
      background2: "#2983C3",
      title: "Espécie",
      options: [
        {
          option: "Cachorro",
          value: "cachorro"
        },
        {
          option: "Gato",
          value: "gato"
        },
        {
          option: "Pássaro",
          value: "passaro"
        },
        {
          option: "Outros",
          value: "outros"
        },
      ],
    },
    {
      background: "#03497B",
      background2: "#2983C3",
      title: "Vacinado",
      options: [
        {
          option: "Sim",
          value: "sim"
        },
        {
          option: "Não",
          value: "nao"
        },
        {
          option: "Parcialmente",
          value: "parcialmente"
        },
      ],
    },
    {
      background: "#03497B",
      background2: "#2983C3",
      title: "Porte",
      options: [
        {
          option: "Pequeno",
          value: "pequeno"
        },
        {
          option: "Médio",
          value: "medio"
        },
        {
          option: "Grande",
          value: "grande"
        },
      ],
    },
  ]);
  const propriedadesFilterLaranjas = ref([
    {
      background: "#FF7700",
      background2: "#FF953C",
      title: "Castrado",
      options: [
        {
          option: "Sim",
          value: "sim"
        },
        {
          option: "Não",
          value: "nao"
        },
      ],
    },
    {
      background: "#FF7700",
      background2: "#FF953C",
      title: "Gênero",
      options: [
        {
          option: "Fêmea",
          value: "femea"
        },
        {
          option: "Macho",
          value: "macho"
        },
        {
          option: "Não identificado",
          value: "nao-identificado"
        },
      ],
    },
    {
      background: "#FF7700",
      background2: "#FF953C",
      title: "Pelagem",
      options: [
        {
          option: "Curta",
          value: "curta"
        },
        {
          option: "Média",
          value: "media" },
        {
          option: "Longa",
          value: "longa"
        },
        {
          option: "Não possui",
          value: "n/a"
        }
      ],
    },
    
  ]);

  return {
    contador,
    propriedadesFilterVerdes,
    propriedadesFilterLaranjas,
    filters,
  };
});
