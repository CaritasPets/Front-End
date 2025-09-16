import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRacaStore = defineStore('racaStore', () => {
  const racasCachorro = ref([
    { nome: 'Rottweiler', value: 'rottweiler' },
    { nome: 'Labrador Retriever', value: 'labrador_retriever' },
    { nome: 'Golden Retriever', value: 'golden_retriever' },
    { nome: 'Pastor Alemão', value: 'pastor_alemao' },
    { nome: 'Bulldog Inglês', value: 'bulldog_ingles' },
    { nome: 'Bulldog Francês', value: 'bulldog_frances' },
    { nome: 'Beagle', value: 'beagle' },
    { nome: 'Poodle', value: 'poodle' },
    { nome: 'Yorkshire Terrier', value: 'yorkshire_terrier' },
    { nome: 'Shih Tzu', value: 'shih_tzu' },
    { nome: 'Maltês', value: 'maltes' },
    { nome: 'Pinscher', value: 'pinscher' },
    { nome: 'Husky Siberiano', value: 'husky_siberiano' },
    { nome: 'Akita', value: 'akita' },
    { nome: 'Chow Chow', value: 'chow_chow' },
    { nome: 'Dálmata', value: 'dalmata' },
    { nome: 'Boxer', value: 'boxer' },
    { nome: 'Doberman', value: 'doberman' },
    { nome: 'Border Collie', value: 'border_collie' },
    { nome: 'Cocker Spaniel', value: 'cocker_spaniel' },
    {nome: "Não Possui", value: "nao_possui"}
  ])

  const racasGatos = ref([
    { nome: "Persa", value: "persa" },
  { nome: "Siamês", value: "siames" },
  { nome: "Maine Coon", value: "maine_coon" },
  { nome: "Sphynx", value: "sphynx" },
  { nome: "Ragdoll", value: "ragdoll" },
  { nome: "British Shorthair", value: "british_shorthair" },
  { nome: "Bengal", value: "bengal" },
  { nome: "Angorá", value: "angora" },
  { nome: "Abissínio", value: "abissinio" },
  { nome: "Norueguês da Floresta", value: "noruegues_floresta" },
  { nome: "Siberiano", value: "siberiano" },
  { nome: "Exótico de Pelo Curto", value: "exotico_pelo_curto" },
  { nome: "American Shorthair", value: "american_shorthair" },
  { nome: "Scottish Fold", value: "scottish_fold" },
  { nome: "Himalaio", value: "himalaio" },
  { nome: "Oriental", value: "oriental" },
  { nome: "Devon Rex", value: "devon_rex" },
  { nome: "Cornish Rex", value: "cornish_rex" },
  { nome: "Bombay", value: "bombay" },
  { nome: "Savannah", value: "savannah" },
  {nome: "Não Possui", value: "nao_possui"}
  ])
  const racasPassaro = ref([
    { nome: "Canário", value: "canario" },
  { nome: "Periquito", value: "periquito" },
  { nome: "Calopsita", value: "calopsita" },
  { nome: "Papagaio", value: "papagaio" },
  { nome: "Arara", value: "arara" },
  { nome: "Cacatua", value: "cacatua" },
  { nome: "Mandarim", value: "mandarim" },
  { nome: "Diamante-de-Gould", value: "diamante_gould" },
  { nome: "Manon", value: "manon" },
  { nome: "Agapornis", value: "agapornis" },
  { nome: "Mainá", value: "maina" },
  { nome: "Curió", value: "curio" },
  { nome: "Coleiro", value: "coleiro" },
  { nome: "Trinca-Ferro", value: "trinca_ferro" },
  { nome: "Sabiá", value: "sabia" },
  { nome: "Pardal", value: "pardal" },
  { nome: "Tucano", value: "tucano" },
  { nome: "Periquitão-Maracanã", value: "periquitao_maracana" },
  { nome: "Beija-flor", value: "beija_flor" },
  { nome: "Canário-da-terra", value: "canario_da_terra" },
  {nome: "Não Possui", value: "nao_possui"}
  ])
  return {
    racasCachorro,
    racasGatos,
    racasPassaro
  }
})
