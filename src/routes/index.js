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
        path: '/adote',
        component: () => import("@/views/AdotePage.vue")
    },
    {
        path: '/pet/:id',
        name: 'Pet',
        component: () => import('@/views/PetView.vue'),
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router

