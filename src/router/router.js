import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/Login'
import App from "@/App";

Vue.use(VueRouter);

let router= new Router({
    routes: [
        {
            path: '/Login',
            name: 'LoginForm',
            component: Login
        },
        {
            path: '/',
            name: 'mainPage',
            component: App
        }
    ]
})

export default router;