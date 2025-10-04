import { defineStore } from "pinia";
import { ref } from "vue";
export const useMessageStore = defineStore('messageStore', () => {

    const notifications = ref([]);

    function addNotification({ type ='success', message, duration = 3000 }){
        const id = Date.now();
        notifications.value.push({ id, type, message });

        setTimeout(() => removeNotification(id), duration);
    }

    function removeNotification(id) {
        notifications.value = notifications.value.filter(n => n.id !== id);
    }


    return {
        notifications,
        addNotification,
        removeNotification
    }
})