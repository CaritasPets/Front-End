import { defineStore } from "pinia";

export const useRequestUrlStore = defineStore('requestUrlStore', () => {
    const urls = {
        //Listagem
        organizationList: 'organizations/',
        userList: 'users/',
        adocao: 'adocao/',
        perdidos: 'perdidos/',

        //Usuários
        register: 'register/',
        login: 'login/',
        refresh: 'refresh/',
        delete: 'delete-user/',
        update: 'update/',
        profile: 'profile/'
    }

    return (
        urls
    )
})