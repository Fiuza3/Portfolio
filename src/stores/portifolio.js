import { defineStore } from "pinia";

export const usePortifolioStore = defineStore("portifolio", {
  state: () => ({
    projetos: [
      {
        id: 1,
        titulo: "VueTasks - Gerenciador de Tarefas",
        descricao:
          "VueTasks é um app simples de gerenciamento de tarefas com Vue 3 e Node.js. Possui CRUD completo via API REST, banco local e estrutura organizada. Ideal para treinar conceitos fundamentais de frontend, backend e integração fullstack em projetos reais.",
        tecnologias: [
          { nome: "Vue3", url: "https://vuejs.org/" },
          { nome: "Node.js", url: "https://nodejs.org/" },
          { nome: "SQLite3", url: "https://www.sqlite.org/" },
          { nome: "Pinia", url: "https://pinia.vuejs.org/" },
          { nome: "Vite", url: "https://vitejs.dev/" },
          { nome: "Axios", url: "https://axios-http.com/" }
        ],
        imagemUrl: "/images/VueTasks.png",
        linkGithub: "https://github.com/Fiuza3/VueTasks",
        destaque: true,
      },
      {
        id: 2,
        titulo: "ERP FZone",
        descricao:
          "FZone ERP é um sistema simples para gerenciar empresas. Com ele, é possível controlar tarefas, estoque, finanças e funcionários. Utiliza Vue 3, Node.js, MongoDB e Tailwind. Fácil de instalar e usar, ideal para centralizar a gestão de forma prática e eficiente.",
        tecnologias: [
          { nome: "Vue3", url: "https://vuejs.org/" },
          { nome: "Node.js", url: "https://nodejs.org/" },
          { nome: "Pinia", url: "https://pinia.vuejs.org/" },
          { nome: "MongoDB", url: "https://www.mongodb.com/" },
          { nome: "Tailwind CSS", url: "https://tailwindcss.com/" },
          { nome: "Vue Router", url: "https://router.vuejs.org/" }
        ],
        imagemUrl: "/images/Fzone.png",
        linkGithub: "https://github.com/Fiuza3/FZone",
        destaque: true,
      },
      {
        id: 3,
        titulo: "Portifólio Pessoal",
        descricao:
          "Portfólio pessoal desenvolvido com Vue 3, Pinia e Tailwind CSS. Apresenta projetos, habilidades e experiências de forma organizada e responsiva. Inclui animações sutis e design moderno para destacar o trabalho realizado.",
        tecnologias: [
          { nome: "Vue3", url: "https://vuejs.org/" },
          { nome: "Pinia", url: "https://pinia.vuejs.org/" },
          { nome: "Tailwind CSS", url: "https://tailwindcss.com/" },
          { nome: "Vite", url: "https://vitejs.dev/" }
        ],
        imagemUrl: "/images/Portifolio.png",
        linkGithub: "https://github.com/Fiuza3/Portfolio",
        destaque: false,
      },
      {
        id: 4,
        titulo: "Vazio",
        descricao: "",
        tecnologias: [],
        imagemUrl: "/images/Vazio.png",
        linkGithub: "https://github.com/Fiuza3/API-Restful",
        destaque: false,
      },
      {
        id: 5,
        titulo: "Vazio",
        descricao: '',
        tecnologias: [],
        imagemUrl: "/images/Vazio.png",
        linkGithub: "https://github.com/Fiuza3/",
        destaque: false,
      },
      {
        id: 6,
        titulo: "Vazio",
        descricao: '',
        tecnologias: [],
        imagemUrl: "/images/Vazio.png",
        linkGithub: "https://github.com/Fiuza3/",
        destaque: false,
      },
    ],

    habilidades: [
      { nome: "HTML5", nivel: 80, categoria: "frontend" },
      { nome: "JavaScript", nivel: 80, categoria: "frontend" },
      { nome: "Pinia", nivel: 60, categoria: "frontend" },
      { nome: "Tailwind CSS", nivel: 60, categoria: "frontend" },
      { nome: "Vite", nivel: 60, categoria: "frontend" },
      { nome: "Vue Router", nivel: 60, categoria: "frontend" },
      { nome: "Vue.js", nivel: 70, categoria: "frontend" },
      { nome: "Express.js", nivel: 60, categoria: "backend" },
      { nome: "MongoDB", nivel: 70, categoria: "backend" },
      { nome: "Node.js", nivel: 70, categoria: "backend" },
      { nome: "PHP", nivel: 30, categoria: "backend" },
      { nome: "Docker", nivel: 20, categoria: "ferramentas" },
      { nome: "Git", nivel: 90, categoria: "ferramentas" },
      { nome: "Adaptabilidade", nivel: 90, categoria: "Soft Skills" },
      { nome: "Comunicação", nivel: 80, categoria: "Soft Skills" },
      {
        nome: "Organização e gestão de tempo",
        nivel: 70,
        categoria: "Soft Skills",
      },
      {
        nome: "Proatividade e resolução de problemas",
        nivel: 80,
        categoria: "Soft Skills",
      },
    ],

    experiencias: [
      {
        empresa: "Teknisa",
        cargo: "Desenvolvedor Full-Stack",
        periodo: "2024 - Hibrido",
        descricao:
          "Atuei no desenvolvimento de aplicações web utilizando o framework Zeedhi, específico para soluções empresariais integradas. Contribuí para a implementação e manutenção de funcionalidades fullstack, abrangendo front-end e back-end. Trabalhei em análise de requisitos, depuração de código e testes, colaborando com equipes multidisciplinares para garantir a entrega de soluções de alta qualidade. Desempenhei tarefas como integração de sistemas, otimização de desempenho e suporte técnico, adquirindo habilidades em desenvolvimento ágil e tecnologias modernas para resolver desafios complexos no ambiente corporativo.",
        tecnologias: ["Framework", "Php", "JavaScript", "Json", "Zeeddhi"],
      },
      {
        empresa: "Sonda",
        cargo: "Técnico de TI",
        periodo: "2023 - 2024",
        descricao:
          "Atuava na manutenção e suporte de hardware, com foco em desempenho e disponibilidade. Realizava diagnósticos e manutenções seguindo boas práticas (ITIL, NR-10, ISO 27001), prestando suporte técnico em ambientes Windows e Linux.",
        tecnologias: [
          "Windows",
          "Linux",
          "GLPI",
          "CrystalDiskInfo",
          "HWMonitor",
        ],
      },
    ],
  }),

  getters: {
    projetosDestaque: (state) => state.projetos.filter((p) => p.destaque),
    habilidadesPorCategoria: (state) => {
      return state.habilidades.reduce((acc, hab) => {
        if (!acc[hab.categoria]) acc[hab.categoria] = [];
        acc[hab.categoria].push(hab);
        return acc;
      }, {});
    },
  },
});