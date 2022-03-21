import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '/', component: () => import('@/pages/index.vue')},
    {path: '/login', component: () => import('@/pages/login/index.vue')}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router