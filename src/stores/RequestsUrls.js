import { defineStore } from "pinia";

export const useRequestUrlStore = defineStore('requestUrlStore', () => {
    const urls = {
        token: '/token/',
        organizations: '/organizacoes',
    }

    return (
        urls
    )
})