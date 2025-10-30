# 🚀 Portfólio Marcus Fiuza

Portfólio profissional desenvolvido com Vue 3, showcasing projetos, habilidades e experiência como Desenvolvedor Full Stack.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Modo Escuro**: Alternância entre tema claro e escuro
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **SEO Otimizado**: Meta tags e estrutura otimizada para buscadores
- **Performance**: Carregamento rápido e otimizado

## 🛠️ Tecnologias

- **Vue 3** - Framework JavaScript
- **Pinia** - Gerenciamento de estado
- **Vue Router** - Roteamento SPA
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool moderna
- **AOS** - Animações on scroll

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
├── views/              # Páginas principais
├── stores/             # Gerenciamento de estado
│   └── data/          # Dados separados por categoria
├── services/          # Serviços e APIs
├── router/            # Configuração de rotas
└── style.css          # Estilos globais
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/Fiuza3/Portfolio.git

# Entre na pasta
cd Portfolio/PV2

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
```

### Build para Produção
```bash
# Gerar build otimizado
npm run build

# Preview do build
npm run preview
```

## 📧 Configuração do Email (Opcional)

Para o formulário de contato funcionar, crie o arquivo `src/services/emailService.js`:

```javascript
// src/services/emailService.js
export default {
  validateForm(form) {
    const errors = {}
    
    if (!form.name.trim()) errors.name = 'Nome é obrigatório'
    if (!form.email.trim()) errors.email = 'Email é obrigatório'
    if (!form.subject.trim()) errors.subject = 'Assunto é obrigatório'
    if (!form.message.trim()) errors.message = 'Mensagem é obrigatória'
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    }
  },
  
  async sendEmail(formData) {
    // Implementar integração com serviço de email
    // Ex: EmailJS, Formspree, Netlify Forms, etc.
    
    try {
      // Simular envio por enquanto
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      return {
        success: true,
        message: 'Email enviado com sucesso!'
      }
    } catch (error) {
      return {
        success: false,
        message: 'Erro ao enviar email'
      }
    }
  }
}
```

## 🎨 Personalização

### Dados Pessoais
Edite os arquivos em `src/stores/data/`:
- `personalInfo.js` - Informações pessoais e redes sociais
- `projects.js` - Seus projetos
- `skills.js` - Habilidades técnicas
- `experience.js` - Experiência profissional
- `education.js` - Formação acadêmica

### Cores e Tema
Personalize as cores em `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: { /* suas cores */ },
      secondary: { /* suas cores */ }
    }
  }
}
```

## 📱 Seções

- **Home**: Apresentação pessoal e destaques
- **Projetos**: Galeria de projetos com filtros
- **Contato**: Formulário de contato funcional
- **Demo ERP**: Demonstração do sistema FZone

## 🌐 Deploy

O projeto está pronto para deploy em:
- **Vercel**: `vercel --prod`
- **Netlify**: Arraste a pasta `dist/` 
- **GitHub Pages**: Configure o workflow
- **Firebase Hosting**: `firebase deploy`

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Marcus Fiuza**
- GitHub: [@Fiuza3](https://github.com/Fiuza3)
- LinkedIn: [devfiuza](https://linkedin.com/in/devfiuza)
- Email: devfiuza@gmail.com

---

⭐ Se este projeto te ajudou, deixe uma estrela no repositório!