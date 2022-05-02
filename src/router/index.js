import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Reg from '@/components/Registration.vue'
import MainPage from '@/components/Chat/MainPage.vue'

let LoginProps

const routes = [{
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/reg',
        name: 'reg',
        component: Reg
    },
    {
        path: '/chat',
        name: 'chat',
        component: MainPage
    },
    {
        path: '/',
        redirect: '/login'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router