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
        path: '/ongs/profile/:id',
        name: 'ong-profile',
        component: () => import("@/views/OngProfileView.vue"),
        props: true
    },
    {
        path: '/adote',
        name: 'adote',
        component: () => import("@/views/AdotePage.vue")
    },
    {
        path: '/adote/pet/:id',
        name: 'pet-profile',
        component: () => import("@/views/PetProfileView.vue"),
        props: true
    },
    {
        path: '/user/sign-up',
        name: 'user-sign-up',
        component: () => import("@/views/CadastroPage.vue")
    },
    {
        path: '/ongs/sign-up',
        name: 'ong-register',
        component: () => import("@/views/CadastroOng.vue")
    },
    {
        path: '/user',
        name: 'pre-register',
        component: () => import("@/views/PreCadastro.vue")
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
        path: '/procura-se/petperdido/:id',
        name: 'pet-perdido-profile',
        component: () => import("@/views/PetPerdidoProfileView.vue"),
        props: true
    },
    {
        path: '/adote/register',
        name: 'adote-register',
        component: () => import("@/views/PetRegisterPage.vue")
    },
    {
        path: '/procura-se/register',
        name: 'register-perdidos',
        component: () => import("@/views/CadastroPerdido.vue")
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: () => import('@/views/NotFoundPage.vue')
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
});

export default router

