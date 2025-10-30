import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home | Portfólio'
      }
    },
    {
      path: '/projetos',
      name: 'projects',
      component: Projects,
      meta: {
        title: 'Projetos | Portfólio'
      }
    },
    {
      path: '/contato',
      name: 'contact',
      component: Contact,
      meta: {
        title: 'Contato | Portfólio'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Portfólio'
  next()
})

export default router