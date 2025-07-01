import { defineStore } from 'pinia'
import type { Projeto, Habilidade, ExperienciaProfissional } from '@/types'

export const usePortifolioStore = defineStore('portifolio', {
  state: () => ({
    projetos: [
      {
        id: 1,
        titulo: 'Sistema de Gerenciamento TESTE 1',
        descricao: 'Aplicação completa para gerenciamento de tarefas com autenticação e dashboard interativo.',
        tecnologias: ['Vue 3', 'TypeScript', 'Node.js', 'MongoDB'],
        imagemUrl: '/projeto1.jpg',
        linkDemo: 'https://demo-teste1.com',
        linkGithub: 'https://github.com/usuario/projeto-teste1',
        destaque: true
      },
      {
        id: 2,
        titulo: 'E-commerce Moderno TESTE 2',
        descricao: 'Plataforma de vendas online com carrinho de compras, pagamentos e painel administrativo.',
        tecnologias: ['React', 'Next.js', 'Stripe', 'PostgreSQL'],
        imagemUrl: '/projeto2.jpg',
        linkGithub: 'https://github.com/usuario/ecommerce-teste2',
        destaque: true
      },
      {
        id: 3,
        titulo: 'API RESTful TESTE 3',
        descricao: 'API robusta com documentação completa, testes automatizados e deploy em nuvem.',
        tecnologias: ['Node.js', 'Express', 'JWT', 'Docker'],
        imagemUrl: '/projeto3.jpg',
        linkGithub: 'https://github.com/usuario/api-teste3',
        destaque: false
      }
    ] as Projeto[],

    habilidades: [
      { nome: 'Vue.js', nivel: 85, categoria: 'frontend' },
      { nome: 'React', nivel: 80, categoria: 'frontend' },
      { nome: 'TypeScript', nivel: 75, categoria: 'frontend' },
      { nome: 'Node.js', nivel: 70, categoria: 'backend' },
      { nome: 'Python', nivel: 65, categoria: 'backend' },
      { nome: 'MongoDB', nivel: 70, categoria: 'backend' },
      { nome: 'Git', nivel: 85, categoria: 'ferramentas' },
      { nome: 'Docker', nivel: 60, categoria: 'ferramentas' }
    ] as Habilidade[],

    experiencias: [
      {
        empresa: 'Empresa TESTE A',
        cargo: 'Desenvolvedor Frontend Júnior',
        periodo: '2023 - Presente',
        descricao: 'Desenvolvimento de interfaces responsivas e interativas usando Vue.js e React.',
        tecnologias: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS']
      },
      {
        empresa: 'Startup TESTE B',
        cargo: 'Estagiário em Desenvolvimento',
        periodo: '2022 - 2023',
        descricao: 'Participação em projetos de desenvolvimento web e mobile, aprendizado de metodologias ágeis.',
        tecnologias: ['JavaScript', 'HTML/CSS', 'Node.js', 'Git']
      }
    ] as ExperienciaProfissional[]
  }),

  getters: {
    projetosDestaque: (state) => state.projetos.filter(p => p.destaque),
    habilidadesPorCategoria: (state) => {
      return state.habilidades.reduce((acc, hab) => {
        if (!acc[hab.categoria]) acc[hab.categoria] = []
        acc[hab.categoria].push(hab)
        return acc
      }, {} as Record<string, Habilidade[]>)
    }
  }
})