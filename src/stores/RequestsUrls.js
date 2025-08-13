import { defineStore } from "pinia";

export const useRequestUrlStore = defineStore('requestUrlStore', () => {
    const urls = {
        //endpoints para puxar as informações que aparecerão no site
        organizacoes: '/organizacoes',
        perdidos: '/perdidos/',
        pets: '/pets/',
        portes: '/portes/',
        racas: '/racas/',
        //registro e autenticação de usuários
        register: '/auth/register',
        registerVoluntario: '/auth/register/voluntario',
        registerOngs: 'auth/register/organizacao',
        refresh: '/refresh/',
        token: '/token/',
    }

    return (
        urls
    )
})