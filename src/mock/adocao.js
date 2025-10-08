const petsAdocaoMocked = [
  {
    id: 1,
    nome: "Thor",
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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
    foto: "/exemplo",
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