import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("@/views/HomeView.vue")
    },
    {
        path: '/ongs',
        component: () => import("@/views/OngsPage.vue")
    },
    {
        path: '/login',
        component: () => import("@/views/LoginView.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router

