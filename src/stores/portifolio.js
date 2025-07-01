import { defineStore } from 'pinia'

export const usePortifolioStore = defineStore('portifolio', {
  state: () => ({
    projetos: [
      {
        id: 1,
        titulo: 'VueTasks - Gerenciador de Tarefas',
        descricao: 'VueTasks é um app simples de gerenciamento de tarefas com Vue 3 e Node.js. Possui CRUD completo via API REST, banco local e estrutura organizada. Ideal para treinar conceitos fundamentais de frontend, backend e integração fullstack em projetos reais.',
        tecnologias: ['Vue 3', 'Node.js', 'MongoDB'],
        imagemUrl: '/projeto1.jpg',
        linkDemo: 'https://demo-teste1.com',
        linkGithub: 'https://github.com/Fiuza3/VueTasks',
        destaque: false
      },
      {
        id: 2,
        titulo: 'ERP FZone',
        descricao: 'ERP completo para gestão de vendas, estoque e clientes, com interface intuitiva.',
        tecnologias: ['Vue3', 'Next.js', 'Pinia', 'MongoDB', 'Tailwind CSS', 'Vue Router'],
        imagemUrl: '/projeto2.jpg',
        linkGithub: 'https://github.com/Fiuza3/FZone',
        destaque: true
      },
      {
        id: 3,
        titulo: 'API RESTful',
        descricao: 'API robusta com documentação completa.',
        tecnologias: ['Node.js', 'Express', 'JWT'],
        imagemUrl: '/projeto3.jpg',
        linkGithub: 'https://github.com/Fiuza3/API-Restful',
        destaque: false
      }
    ],

    habilidades: [
      { nome: 'Vue.js', nivel: 60, categoria: 'frontend' },
      { nome: 'JavaScript', nivel: 90, categoria: 'frontend' },
      { nome: 'Node.js', nivel: 70, categoria: 'backend' },
      { nome: 'MongoDB', nivel: 70, categoria: 'backend' },
      { nome: 'Git', nivel: 85, categoria: 'ferramentas' },
      { nome: 'Docker', nivel: 60, categoria: 'ferramentas' }
    ],

    experiencias: [
      {
        empresa: 'Teknisa',
        cargo: 'Desenvolvedor Full-Stack',
        periodo: '2024 - Hibrido',
        descricao: 'Atuei no desenvolvimento de aplicações web utilizando o framework Zeedhi, específico para soluções empresariais integradas. Contribuí para a implementação e manutenção de funcionalidades fullstack, abrangendo front-end e back-end. Trabalhei em análise de requisitos, depuração de código e testes, colaborando com equipes multidisciplinares para garantir a entrega de soluções de alta qualidade. Desempenhei tarefas como integração de sistemas, otimização de desempenho e suporte técnico, adquirindo habilidades em desenvolvimento ágil e tecnologias modernas para resolver desafios complexos no ambiente corporativo.',
        tecnologias: ['Framework', 'Php', 'JavaScript', 'Json', 'Zeeddhi']
      },
      {
        empresa: 'Sonda',
        cargo: 'Tecnico de ti',
        periodo: '2022 - 2025',
        descricao: 'Participação em projetos de desenvolvimento web e mobile, aprendizado de metodologias ágeis.',
        tecnologias: ['JavaScript', 'HTML/CSS', '2', '1']
      }
    ]
  }),

  getters: {
    projetosDestaque: (state) => state.projetos.filter(p => p.destaque),
    habilidadesPorCategoria: (state) => {
      return state.habilidades.reduce((acc, hab) => {
        if (!acc[hab.categoria]) acc[hab.categoria] = []
        acc[hab.categoria].push(hab)
        return acc
      }, {})
    }
  }
})