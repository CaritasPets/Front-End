import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("@/views/HomeView.vue"),
    },
    {
        path: '/ongs',
        name: 'ongs',
        component: () => import("@/views/OngsPage.vue"),
    },
    {
        path: '/adote',
        component: () => import("@/views/AdotePage.vue")
    },
    {
        path: '/user/sign-up',
        component: () => import("@/views/CadastroPage.vue")
    },
    {
        path: '/user/login',
        name: 'login',
        component: () => import("@/views/LoginView.vue")
    },
    {
        path: '/sobre',
        name: 'sobre nós',
        component: () => import("@/views/AboutView.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router

