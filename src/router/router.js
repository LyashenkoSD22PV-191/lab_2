import LoginForm from '../components/LoginForm'
import MainPage from "../components/MainPage";

import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/Login',
        name: 'LoginForm',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: LoginForm
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

