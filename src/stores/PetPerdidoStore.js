import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useFilterStore } from './FilterStore';

export const usePetPerdidoStore = defineStore('petPerdidoStore', () => {

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
            id: "1",
            nome: "Rex",
            genero: "macho",
            especie: "cachorro",
            caracteristicas: "Alegre e carinhoso",
            local: "Bairro Itinga Joinville",
            foto: "/pets_perdidos/rex(1).jpg",

        },
        {
            id: "2",
            nome: "Bella",
            genero: "femea",
            especie: "gato",
            caracteristicas: "Brincalhona e afetuosa",
            local: "Centro de Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0023.jpg",
        },
        {
            id: "3",
            nome: "Max",
            genero: "macho",
            especie: "cachorro",
            caracteristicas: "Energético e protetor",
            local: "Bairro América Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0024.jpg",
        },
        {
            id: "4",
            nome: "Luna",
            genero: "femea",
            especie: "gato",
            caracteristicas: "Calma e independente",
            local: "Bairro Bom Retiro Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0025.jpg",
        },
        {
            id: "5",
            nome: "Buddy",
            genero: "macho",
            especie: "cachorro",
            caracteristicas: "Amigável e obediente",
            local: "Bairro Vila Nova Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0026.jpg",
        },
        {
            id: "6",
            nome: "Mia",
            genero: "femea",
            especie: "gato",
            caracteristicas: "Curiosa e aventureira",
            local: "Bairro Anita Garibaldi Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0027.jpg",
        },
        {
            id: "7",
            nome: "Charlie",
            genero: "macho",
            especie: "cachorro",
            caracteristicas: "Inteligente e leal",
            local: "Bairro Floresta Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0028.jpg",
        },
        {
            id: "8",
            nome: "Sophie",
            genero: "femea",
            especie: "gato",
            caracteristicas: "Doce e carinhosa",
            local: "Bairro Guanabara Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0029.jpg",
        },
        {
            id: "9",
            nome: "Rocky",
            genero: "macho",
            especie: "cachorro",
            caracteristicas: "Bravo e forte",
            local: "Bairro Iririú Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0030.jpg",
        },
        {
            id: "10",
            nome: "Lily",
            genero: "femea",
            especie: "gato",
            caracteristicas: "Elegante e graciosa",
            local: "Bairro Jardim Iririú Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0031.jpg",
        },
    
        {
            id: "11",
            nome: "Duke",
            genero: "macho",
            especie: "cachorro",
            caracteristicas: "Noble and loyal",
            local: "Bairro Itaum Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0032.jpg",
        },
        {
            id: "12",
            nome: "Zoe",
            genero: "femea",
            especie: "gato",
            caracteristicas: "Playful and mischievous",
            local: "Bairro Jardim Paraíso Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0033.jpg",
        },
        
        {
            id: "13",
            nome: "Bailey",
            genero: "femea",
            especie: "cachorro",
            caracteristicas: "Friendly and outgoing",
            local: "Bairro Petrópolis Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0034.jpg",
        },
        {
            id: "14",
            nome: "Oliver",
            genero: "macho",
            especie: "gato",
            caracteristicas: "Curious and playful",
            local: "Bairro Saguaçu Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0035.jpg",
        },
        {
            id: "15",
            nome: "Toby",
            genero: "macho",
            especie: "cachorro",
            caracteristicas: "Adventurous and brave",
            local: "Bairro Costa e Silva Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0036.jpg",
        },
        {
            id: "16",
            nome: "Chloe",
            genero: "femea",
            especie: "gato",
            caracteristicas: "Graceful and affectionate",
            local: "Bairro Bucarein Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0037.jpg",
        },
        {
            id: "17",
            nome: "Jack",
            genero: "macho",
            especie: "cachorro",
            caracteristicas: "Energetic and fun-loving",
            local: "Bairro Fátima Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0038.jpg",
        },
        {
            id: "18",
            nome: "Nala",
            genero: "femea",
            especie: "gato",
            caracteristicas: "Independent and mysterious",
            local: "Bairro Glória Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0039.jpg",
        },
        {
            id: "19",
            nome: "Bear",
            genero: "macho",
            especie: "cachorro",
            caracteristicas: "Strong and protective",
            local: "Bairro Jardim Sofia Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0040.jpg",
        },
        {
            id: "20",
            nome: "Simba",
            genero: "macho",
            especie: "gato",
            caracteristicas: "Majestic and curious",
            local: "Bairro Nova Brasília Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0041.jpg",
        },
        {
            id: "21",
            nome: "Daisy",
            genero: "femea",
            especie: "cachorro",
            caracteristicas: "Sweet and gentle",
            local: "Bairro Paranaguamirim Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0042.jpg",
        },
        {
            id: "22",
            nome: "Tiger",
            genero: "macho",
            especie: "gato",
            caracteristicas: "Fierce and playful",
            local: "Bairro Pirabeiraba Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0043.jpg",
        },
        {
            id: "23",
            nome: "Lucy",
            genero: "femea",
            especie: "cachorro",
            caracteristicas: "Loyal and obedient",
            local: "Bairro Santo Antônio Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0044.jpg",
        },
        {
            id: "24",
            nome: "Milo",
            genero: "macho",
            especie: "gato",
            caracteristicas: "Adorable and cuddly",
            local: "Bairro São Marcos Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0045.jpg",
        },
        {
            id: "25",
            nome: "Sadie",
            genero: "femea",
            especie: "cachorro",
            caracteristicas: "Playful and loving",
            local: "Bairro Trindade Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0046.jpg",
        },
        {
            id: "26",
            nome: "Leo",
            genero: "macho",
            especie: "gato",
            caracteristicas: "Bold and confident",
            local: "Bairro Ulysses Guimarães Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0047.jpg",
        },
        {
            id: "27",
            nome: "Maggie",
            genero: "femea",
            especie: "cachorro",
            caracteristicas: "Gentle and kind",
            local: "Bairro Velha Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0048.jpg",
        },
        {
            id: "28",
            nome: "Oscar",
            genero: "macho",
            especie: "gato",
            caracteristicas: "Silly and fun",
            local: "Bairro Vila Nova Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0049.jpg",
        },
        {
            id: "29",
            nome: "Bailey",
            genero: "femea",
            especie: "cachorro",
            caracteristicas: "Energetic and happy",
            local: "Bairro Weissópolis Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0050.jpg",
        },
        {
            id: "30",
            nome: "Finn",
            genero: "macho",
            especie: "gato",
            caracteristicas: "Curious and adventurous",
            local: "Centro Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0051.jpg",
        },
        {
            id: "31",
            nome: "Rosie",
            genero: "femea",
            especie: "cachorro",
            caracteristicas: "Sweet and affectionate",
            local: "Bairro América Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0052.jpg",
        },
        {
            id: "32",
            nome: "Maxwell",
            genero: "macho",
            especie: "gato",
            caracteristicas: "Majestic and regal",
            local: "Bairro Bom Retiro Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0053.jpg",
        },
        {
            id: "33",
            nome: "Penny",
            genero: "femea",
            especie: "cachorro",
            caracteristicas: "Cheerful and friendly",
            local: "Bairro Anita Garibaldi Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0054.jpg",
        },
        {
            id: "34",
            nome: "Sam",
            genero: "macho",
            especie: "gato",
            caracteristicas: "Playful and mischievous",
            local: "Bairro Floresta Joinville",
            foto: "/petperdido-images/IMG-20250917-WA0055.jpg",
        },
        // Add more for the remaining images...
    ]);

    const filterStore = useFilterStore()

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
        filteredPropriedades
    }
})