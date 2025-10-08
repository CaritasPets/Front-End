const petsAdocaoMocked = [
  {
    id: 1,
    nome: "Thor",
    foto: "/pets_adocao_images/pet1.jpg",
    especie: "cachorro",
    genero: "macho",
    raca: "Labrador Retriever",
    porte: "grande",
    vacinado: "sim",
    castrado: "sim",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 2,
    nome: "Luna",
    foto: "/pets_adocao_images/pet2.jpg",
    especie: "gato",
    genero: "fêmea",
    raca: "Siamês",
    porte: "pequeno",
    vacinado: "sim",
    castrado: "não",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 3,
    nome: "Bob",
    foto: "/pets_adocao_images/pet3.jpg",
    especie: "cachorro",
    genero: "macho",
    raca: "Beagle",
    porte: "médio",
    vacinado: "parcialmente",
    castrado: "sim",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 4,
    nome: "Mia",
    foto: "/pets_adocao_images/pet4.jpg",
    especie: "gato",
    genero: "fêmea",
    raca: "Persa",
    porte: "pequeno",
    vacinado: "sim",
    castrado: "sim",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 5,
    nome: "Rex",
    foto: "/pets_adocao_images/pet5.jpg",
    especie: "cachorro",
    genero: "macho",
    raca: "Pastor Alemão",
    porte: "grande",
    vacinado: "sim",
    castrado: "não",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 6,
    nome: "Nina",
    foto: "/pets_adocao_images/pet6.jpg",
    especie: "gato",
    genero: "fêmea",
    raca: "Maine Coon",
    porte: "médio",
    vacinado: "não sei",
    castrado: "sim",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 7,
    nome: "Zeus",
    foto: "/pets_adocao_images/pet7.jpg",
    especie: "cachorro",
    genero: "macho",
    raca: "Husky Siberiano",
    porte: "grande",
    vacinado: "sim",
    castrado: "sim",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 8,
    nome: "Mel",
    foto: "/pets_adocao_images/pet8.jpg",
    especie: "gato",
    genero: "fêmea",
    raca: "Angorá",
    porte: "pequeno",
    vacinado: "parcialmente",
    castrado: "não",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 9,
    nome: "Toby",
    foto: "/pets_adocao_images/pet9.jpg",
    especie: "cachorro",
    genero: "macho",
    raca: "Poodle",
    porte: "pequeno",
    vacinado: "sim",
    castrado: "sim",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 10,
    nome: "Amora",
    foto: "/pets_adocao_images/pet10.jpg",
    especie: "gato",
    genero: "fêmea",
    raca: "British Shorthair",
    porte: "médio",
    vacinado: "não",
    castrado: "sim",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 11,
    nome: "Max",
    foto: "/pets_adocao_images/pet11.jpg",
    especie: "cachorro",
    genero: "macho",
    raca: "Golden Retriever",
    porte: "grande",
    vacinado: "sim",
    castrado: "não",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 12,
    nome: "Lili",
    foto: "/pets_adocao_images/pet12.jpg",
    especie: "gato",
    genero: "fêmea",
    raca: "Bengal",
    porte: "médio",
    vacinado: "sim",
    castrado: "sim",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 13,
    nome: "Apolo",
    foto: "/pets_adocao_images/pet13.jpg",
    especie: "cachorro",
    genero: "macho",
    raca: "Rottweiler",
    porte: "grande",
    vacinado: "parcialmente",
    castrado: "não",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 14,
    nome: "Jade",
    foto: "/pets_adocao_images/pet14.jpg",
    especie: "gato",
    genero: "fêmea",
    raca: "Sphynx",
    porte: "pequeno",
    vacinado: "sim",
    castrado: "não",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 15,
    nome: "Fred",
    foto: "/pets_adocao_images/pet15.jpg",
    especie: "cachorro",
    genero: "macho",
    raca: "Bulldog Francês",
    porte: "pequeno",
    vacinado: "não sei",
    castrado: "sim",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 16,
    nome: "Pipoca",
    foto: "/pets_adocao_images/pet16.jpg",
    especie: "gato",
    genero: "fêmea",
    raca: "Ragdoll",
    porte: "médio",
    vacinado: "sim",
    castrado: "sim",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 17,
    nome: "Spike",
    foto: "/pets_adocao_images/pet17.jpg",
    especie: "cachorro",
    genero: "macho",
    raca: "Pitbull",
    porte: "grande",
    vacinado: "não",
    castrado: "não",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 18,
    nome: "Cacau",
    foto: "/pets_adocao_images/pet18.jpg",
    especie: "gato",
    genero: "fêmea",
    raca: "Himalaio",
    porte: "pequeno",
    vacinado: "parcialmente",
    castrado: "não",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 19,
    nome: "Buddy",
    foto: "/pets_adocao_images/pet19.jpg",
    especie: "cachorro",
    genero: "macho",
    raca: "Border Collie",
    porte: "médio",
    vacinado: "sim",
    castrado: "sim",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  },
  {
    id: 20,
    nome: "Lola",
    foto: "/pets_adocao_images/pet20.jpg",
    especie: "gato",
    genero: "fêmea",
    raca: "Chartreux",
    porte: "médio",
    vacinado: "não sei",
    castrado: "sim",
    dono: {
      nome: "AbrigoJoinville",
      foto: "/exemplo",
      email: "abrigo.joinville@gmail.com"
    }
  }
]

export default petsAdocaoMocked