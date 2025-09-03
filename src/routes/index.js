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
        path: '/user/login',
        name: 'login',
        component: () => import("@/views/LoginView.vue")
    },
    {
        path:'/petProfile/:id',
        name: 'pet',
        component: () => import("@/views/PetProfilePage.vue"),
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router

