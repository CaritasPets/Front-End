import { defineStore } from "pinia";
import { ref } from "vue";

export const useFilterStore = defineStore("filterStore", () => {
  const contador = ref(0);
  const filters = ref([]);


  const propriedadesFilterVerdes = ref([
    {
      background: "#104C00",
      background2: "#587911",
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
      background: "#104C00",
      background2: "#587911",
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
      background: "#104C00",
      background2: "#587911",
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
      background2: "#FDA202",
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
      background2: "#FDA202",
      title: "Genero",
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
      background2: "#FDA202",
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
