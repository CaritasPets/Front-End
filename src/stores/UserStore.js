import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('userStore', () => {
    const user = ref([
        {
            id: '1',
            nome: 'Maria Silva',
            foto: '/logo.svg',
            telefone: '11987654321',
            email: 'maria.silva@gmail.com',
            usuario: 'mariasilva',
            senha: 'senhaMaria2024'
        },
        {
            id: '2',
            nome: 'João Souza',
            foto: '/logo.svg',
            telefone: '21999887766',
            email: 'joao.souza@gmail.com',
            usuario: 'joaosouza',
            senha: 'senhaJoao2024'
        },
        {
            id: '3',
            nome: 'Ana Oliveira',
            foto: '/logo.svg',
            telefone: '31991234567',
            email: 'ana.oliveira@gmail.com',
            usuario: 'anaoliveira',
            senha: 'senhaAna2024'
        },
        {
            id: '4',
            nome: 'Carlos Pereira',
            foto: '/logo.svg',
            telefone: '41991112233',
            email: 'carlos.pereira@gmail.com',
            usuario: 'carlospereira',
            senha: 'senhaCarlos2024'
        },
    ]);
    
    return {
        user,
    }
});