import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('userStore', () => {
    const userList = ref([]);

    return{
        userList
    }
})