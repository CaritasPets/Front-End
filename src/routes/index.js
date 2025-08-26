import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("@/views/HomeView.vue")
    },
    {
        path: '/ongs',
        name: 'ongs',
        component: () => import("@/views/OngsPage.vue")
    },
    {
        path: '/user/login',
        name: 'login',
        component: () => import("@/views/LoginView.vue")
    },
    {
        path: '/user/profile',
        name: 'user-profile',
        component: () => import("@/views/UserView.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router

