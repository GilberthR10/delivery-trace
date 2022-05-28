import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/prueba/:email/:codigo/',
            name: 'home',
            component: Home
        },
        { path: '/:pathMatch(.*)*', component: NotFound },
        {
            path: '/prueba/:email/:codigo', name: 'NotFound', component: () => import('../components/NotFound.vue')
        }

    ]
})

export default router