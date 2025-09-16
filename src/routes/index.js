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
        path: '/ongs/profile',
        name: 'ong-profile',
        component: () => import("@/views/OngProfileView.vue")
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
      path: '/ongs/sign-up',
      component: () => import("@/views/CadastroOng.vue")
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
    },
    {
        path: '/sobre',
        name: 'sobre nós',
        component: () => import("@/views/AboutView.vue")
    },
    {
        path: '/procura-se',
        name: 'procura-se',
        component: () => import("@/views/SearchView.vue")
    },
    {
        path: '/adote/register',
        name: 'adote-register',
        component: () => import("@/views/PetRegisterPage.vue")
    },
    {
        path: '/procura-se/register',
        name: 'register-perdido',
        component: () => import("@/views/CadastroPerdido.vue")
    },
    //Not found
    {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: () => import('@/views/NotFoundPage.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router

