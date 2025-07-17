import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import("@/views/HomeView.vue")
    },
    {
        path: '/adopt',
        component: () => import("@/views/AdoptPageView.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router

