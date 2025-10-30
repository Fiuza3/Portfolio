import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: 'Início - Marcus Fiuza | Desenvolvedor Frontend',
        description: 'Portfólio profissional de Marcus Fiuza, desenvolvedor frontend especializado em Vue.js'
      }
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('@/views/Sobre.vue'),
      meta: {
        title: 'Sobre - Marcus Fiuza',
        description: 'Conheça minha trajetória profissional e experiências'
      }
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: () => import('@/views/Projetos.vue'),
      meta: {
        title: 'Projetos - Marcus Fiuza',
        description: 'Portfólio de projetos desenvolvidos com Vue.js, Node.js e outras tecnologias'
      }
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('@/views/Contato.vue'),
      meta: {
        title: 'Contato - Marcus Fiuza',
        description: 'Entre em contato para projetos e oportunidades'
      }
    },
    {
      path: '/servicos',
      name: 'servicos',
      component: () => import('@/views/Servicos.vue'),
      meta: {
        title: 'Serviços - Marcus Fiuza',
        description: 'Serviços de desenvolvimento frontend e consultoria'
      }
    },
    {
      path: '/paisagem',
      name: 'paisagem',
      component: () => import('@/views/Paisagem.vue'),
      meta: {
        title: 'Paisagem Animada - Marcus Fiuza',
        description: 'Demonstração de animações com scroll e parallax'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        title: 'Página não encontrada - Marcus Fiuza'
      }
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

// Meta tags dinâmicas
router.beforeEach((to) => {
  document.title = to.meta.title || 'Marcus Fiuza - Desenvolvedor Frontend'
  
  const description = document.querySelector('meta[name="description"]')
  if (description && to.meta.description) {
    description.setAttribute('content', to.meta.description)
  }
})

export default router