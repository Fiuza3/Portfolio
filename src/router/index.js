import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('@/views/Sobre.vue')
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: () => import('@/views/Projetos.vue')
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('@/views/Contato.vue')
    },
    {
      path: '/servicos',
      name: 'servicos',
      component: () => import('@/views/Servicos.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router