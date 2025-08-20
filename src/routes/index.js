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
        path: '/user/sign-up',
        component: () => import("@/views/CadastroPage.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router

