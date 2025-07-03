# 🚀 Portfólio Profissional

Um portfólio moderno e responsivo desenvolvido com Vue 3, JavaScript e Tailwind CSS.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional
- **Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Performance**: Otimizado com Vite e lazy loading
- **SEO Friendly**: Meta tags e estrutura otimizada
- **Animações**: Transições suaves e efeitos visuais
- **Formulário de Contato**: Sistema de email funcional com EmailJS
- **Tecnologias Clicáveis**: Links para documentação oficial das tecnologias

## 🛠️ Tecnologias Utilizadas

- **Vue 3** - Framework JavaScript progressivo
- **JavaScript** - Linguagem de programação moderna
- **Vite** - Build tool rápido e moderno
- **Vue Router** - Roteamento oficial do Vue
- **Pinia** - Gerenciamento de estado
- **Tailwind CSS** - Framework CSS utilitário
- **EmailJS** - Serviço de envio de emails
- **PostCSS** - Processador CSS

## 📁 Estrutura do Projeto

```
├── public/              # Arquivos estáticos públicos
│   └── images/          # Imagens do projeto
│       ├── background.jpg
│       ├── projeto1.jpg
│       └── ...
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── NavegacaoHeader.vue
│   │   └── RodapePrincipal.vue
│   ├── views/           # Páginas da aplicação
│   │   ├── Home.vue
│   │   ├── Sobre.vue
│   │   ├── Projetos.vue
│   │   └── Contato.vue
│   ├── stores/          # Gerenciamento de estado
│   │   └── portifolio.js
│   ├── router/          # Configuração de rotas
│   │   └── index.js
│   ├── services/        # Serviços externos
│   │   └── emailService.js
│   ├── types/           # Referências de tipos
│   │   └── index.js
│   └── assets/          # Recursos estáticos internos
│       └── logo/
├── .gitignore          # Arquivos ignorados pelo Git
├── index.html          # Página HTML principal
├── package.json        # Dependências e scripts
├── tailwind.config.js  # Configuração do Tailwind
├── vite.config.js      # Configuração do Vite
└── CONFIGURACAO_EMAIL.md # Guia de configuração do EmailJS
```

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Build para produção:**
   ```bash
   npm run build
   ```

4. **Preview da build:**
   ```bash
   npm run preview
   ```

## 📱 Páginas

- **Home**: Apresentação pessoal, projetos em destaque e habilidades
- **Sobre**: Informações detalhadas, experiência e formação
- **Projetos**: Portfólio completo com filtros e modal de detalhes
- **Contato**: Formulário funcional com envio de email via EmailJS

## 🎨 Personalização

Para personalizar o portfólio:

1. **Dados pessoais**: Edite `src/stores/portifolio.js`
2. **Configuração de email**: Configure `src/services/emailService.js`
3. **Cores**: Modifique `tailwind.config.js`
4. **Conteúdo**: Atualize os componentes em `src/views/`
5. **Imagens**: Adicione em `public/images/`

## 📧 Configuração do Email

Para ativar o formulário de contato:

1. Siga o guia em `CONFIGURACAO_EMAIL.md`
2. Configure sua conta no EmailJS
3. Atualize as credenciais em `src/services/emailService.js`

## 🌐 Deploy

O projeto está configurado para deploy em plataformas como Vercel, Netlify ou GitHub Pages:

1. **Vercel/Netlify**: Conecte ao repositório e deploy automático
2. **GitHub Pages**: Execute `npm run build` e faça upload da pasta `dist`

## 📧 Contato

- Email: devfiuza@gmail.com
- LinkedIn: [linkedin.com/in/devfiuza](https://linkedin.com/in/devfiuza)
- GitHub: [github.com/Fiuza3](https://github.com/Fiuza3)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ usando Vue 3 e JavaScript