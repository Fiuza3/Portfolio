export const projects = [
  {
    id: 1,
    title: "FZone ERP",
    description:
      "Sistema ERP completo para buffets e empresas de eventos, com gestão integrada de tarefas, estoque, finanças, RH e eventos.",
    longDescription:
      "O FZone ERP é uma plataforma moderna desenvolvida com arquitetura separada entre frontend e backend. O frontend utiliza Vue 3, Vuetify e Pinia, enquanto o backend é construído em Node.js com Express.js e MongoDB. O sistema oferece autenticação JWT, gestão multi-empresa, controle de estoque, finanças, RH, tarefas e eventos. Inclui dashboards interativos, permissões por usuário e relatórios avançados.",
    image: "/images/projeto.jpg",
    technologies: [
      "Vue 3",
      "Pinia",
      "Vue Router",
      "Vuetify",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT"
    ],
    category: "Full Stack",
    status: "Em desenvolvimento",
    demoUrl: "http://localhost:8080",
    githubUrl: "https://github.com/Fiuza3/FZone",
    features: [
      "Gestão multi-empresa",
      "Autenticação JWT com roles e permissões",
      "Controle de estoque e relatórios",
      "Gestão financeira e de RH",
      "Módulo completo de eventos",
      "Dashboard executivo com métricas em tempo real"
    ],
    challenges:
      "Implementar autenticação robusta, manter performance com grandes volumes de dados e estruturar permissões de forma escalável.",
    results:
      "Sistema pronto para uso em pequenas empresas de eventos, com arquitetura moderna e escalável, garantindo aumento de produtividade e centralização da gestão."
  },
  {
    id: 2,
    title: "VueTasks",
    description:
      "Aplicativo de gerenciamento de tarefas com backend Node.js e banco SQLite3.",
    longDescription:
      "O VueTasks é um sistema de gerenciamento de tarefas full stack. O frontend foi desenvolvido com Vue 3, Pinia e Vue Router, enquanto o backend usa Node.js com Express.js e SQLite3. Inclui CRUD completo de tarefas, persistência de dados e interface simples e responsiva. Utiliza Vite para build, Sass para estilos e Axios para comunicação com API.",
    image: "/images/projeto.jpg",
    technologies: [
      "Vue 3",
      "Pinia",
      "Vue Router",
      "Axios",
      "Vite",
      "Sass",
      "Node.js",
      "Express.js",
      "SQLite3"
    ],
    category: "Full Stack",
    status: "Concluído",
    demoUrl: "http://localhost:8080",
    githubUrl: "https://github.com/Fiuza3/VueTasks",
    features: [
      "CRUD completo de tarefas",
      "Persistência de dados em SQLite3",
      "Interface responsiva",
      "API RESTful com Node.js e Express",
      "Gerenciamento de estado com Pinia"
    ],
    challenges:
      "Garantir sincronização confiável entre frontend e backend e organizar uma arquitetura simples e clara.",
    results:
      "Aplicação funcional para gerenciamento de tarefas, fácil de rodar em ambiente local, com código modular e boas práticas."
  },
  {
    id: 3,
    title: "Portfolio Pessoal",
    description:
      "Portfólio profissional desenvolvido para exibir projetos, tecnologias e experiências.",
    longDescription:
      "Este portfólio foi construído para apresentar minhas habilidades e experiências como desenvolvedor. O sistema traz design moderno, responsividade e foco em acessibilidade, utilizando Vue.js e boas práticas de SEO. Inclui integração com redes sociais, seção de projetos dinâmicos e navegação fluida.",
    image: "/images/projeto.jpg",
    technologies: ["Vue 3", "JavaScript", "HTML5", "CSS3", "Vite"],
    category: "Frontend",
    status: "Concluído",
    demoUrl: "https://fiuza-portfolio.com",
    githubUrl: "https://github.com/Fiuza3/Portfolio",
    features: [
      "Apresentação profissional",
      "Seção de projetos dinâmica",
      "Design responsivo",
      "SEO otimizado",
      "Integração com redes sociais"
    ],
    challenges:
      "Construir um layout responsivo e moderno com foco em performance.",
    results:
      "Portfólio funcional, responsivo e otimizado para exibir projetos e experiências."
  },
  {
    id: 4,
    title: "Portfólio Daniel Ramos",
    description:
      "Portfólio desenvolvido para apresentar competências e projetos de Daniel Ramos.",
    longDescription:
      "Este projeto foi feito em React.js, com foco em acessibilidade, responsividade e performance. Inclui galeria de projetos, integração com redes sociais e navegação fluida. Hospedagem e deploy preparados para plataformas como Vercel ou Netlify.",
    image: "/images/projeto.jpg",
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Node.js",
      "npm"
    ],
    category: "Frontend",
    status: "Concluído",
    demoUrl: "https://danielramos-portfolio.com",
    githubUrl: "https://github.com/Fiuza3/Portfolio-DanielRamos",
    features: [
      "Galeria dinâmica de projetos",
      "Layout responsivo",
      "Integração com redes sociais",
      "Foco em SEO",
      "Deploy em Vercel/Netlify"
    ],
    challenges:
      "Criar uma experiência simples, rápida e acessível, com design responsivo.",
    results:
      "Portfólio bem estruturado, destacando habilidades técnicas e experiências profissionais."
  }
]