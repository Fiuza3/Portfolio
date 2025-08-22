import { defineStore } from "pinia";

export const usePortifolioStore = defineStore("portifolio", {
  state: () => ({
    projetos: [
      {
        id: 1,
        titulo: "ERP FZone",
        descricao:
          "O FZone ERP é uma solução empresarial completa desenvolvida para modernizar a gestão de empresas, especialmente buffets e empresas de eventos. O sistema oferece uma interface intuitiva e funcionalidades robustas para controle total dos processos empresariais.",
        tecnologias: [
          { nome: "Vue.js", url: "https://vuejs.org/" },
          { nome: "Vuetify", url: "https://vuetifyjs.com/" },
          { nome: "Pinia", url: "https://pinia.vuejs.org/" },
          { nome: "Vue Router", url: "https://router.vuejs.org/" },
          { nome: "Axios", url: "https://axios-http.com/" },
          { nome: "Node.js", url: "https://nodejs.org/" },
          { nome: "Express.js", url: "https://expressjs.com/" },
          { nome: "MongoDB", url: "https://www.mongodb.com/" },
          { nome: "Mongoose", url: "https://mongoosejs.com/" },
          { nome: "JWT", url: "https://jwt.io/" },
          { nome: "Bcrypt", url: "https://www.npmjs.com/package/bcrypt" },
          { nome: "Vite", url: "https://vitejs.dev/" },
          { nome: "ESLint", url: "https://eslint.org/" },
          { nome: "Prettier", url: "https://prettier.io/" }
        ],
        imagemUrl: "/images/Fzone.png",
        linkGithub: "https://github.com/Fiuza3/FZone",
        destaque: true,
      },
      {
        id: 2,
        titulo: "VueTasks - Gerenciador de Tarefas",
        descricao:
          "VueTasks é um app simples de gerenciamento de tarefas com Vue 3 e Node.js. Possui CRUD completo via API REST, banco local e estrutura organizada. Ideal para treinar conceitos fundamentais de frontend, backend e integração fullstack em projetos reais.",
        tecnologias: [
          { nome: "Vue.js", url: "https://vuejs.org/" },
          { nome: "Vue Router", url: "https://router.vuejs.org/" },
          { nome: "Pinia", url: "https://pinia.vuejs.org/" },
          { nome: "Axios", url: "https://axios-http.com/" },
          { nome: "Vite", url: "https://vitejs.dev/" },
          { nome: "Sass", url: "https://sass-lang.com/" },
          { nome: "Node.js", url: "https://nodejs.org/" },
          { nome: "Express.js", url: "https://expressjs.com/" },
          { nome: "SQLite3", url: "https://www.sqlite.org/" },
          { nome: "CORS", url: "https://www.npmjs.com/package/cors" },
          { nome: "Nodemon", url: "https://nodemon.io/" }
        ],
        imagemUrl: "/images/VueTasks.png",
        linkGithub: "https://github.com/Fiuza3/VueTasks",
        destaque: true,
      },
      {
        id: 3,
        titulo: "Portfólio Pessoal",
        descricao:
          "Portfólio moderno e responsivo desenvolvido com Vue 3 e Tailwind CSS. Apresenta projetos, habilidades e experiências de forma elegante, com animações suaves, efeitos de transição e formulário de contato funcional via EmailJS.",
        tecnologias: [
          { nome: "Vue.js", url: "https://vuejs.org/" },
          { nome: "Vue Router", url: "https://router.vuejs.org/" },
          { nome: "Pinia", url: "https://pinia.vuejs.org/" },
          { nome: "Tailwind CSS", url: "https://tailwindcss.com/" },
          { nome: "Vite", url: "https://vitejs.dev/" },
          { nome: "EmailJS", url: "https://www.emailjs.com/" },
          { nome: "PostCSS", url: "https://postcss.org/" }
        ],
        imagemUrl: "/images/Portifolio.png",
        linkGithub: "https://github.com/Fiuza3/Portfolio",
        destaque: true,
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