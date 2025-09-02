# 📸 Imagens do Portfólio

Esta pasta contém todas as imagens utilizadas no portfólio.

## Estrutura Recomendada

```
images/
├── avatar.jpg          # Foto pessoal (400x400px)
├── background.jpg      # Background hero (1920x1080px)
├── projeto1.jpg        # Imagem do projeto 1 (800x600px)
├── projeto2.jpg        # Imagem do projeto 2 (800x600px)
├── projeto3.jpg        # Imagem do projeto 3 (800x600px)
└── ...
```

## Especificações das Imagens

### Avatar/Foto Pessoal
- **Arquivo**: `avatar.jpg`
- **Tamanho**: 400x400px (quadrado)
- **Formato**: JPG ou PNG
- **Peso**: Máximo 200KB
- **Uso**: Hero section da página inicial

### Projetos
- **Arquivos**: `projeto1.jpg`, `projeto2.jpg`, etc.
- **Tamanho**: 800x600px (4:3)
- **Formato**: JPG ou PNG
- **Peso**: Máximo 300KB cada
- **Uso**: Cards de projetos e modal de detalhes

### Background (Opcional)
- **Arquivo**: `background.jpg`
- **Tamanho**: 1920x1080px (16:9)
- **Formato**: JPG
- **Peso**: Máximo 500KB
- **Uso**: Background da hero section

## Otimização

Para melhor performance, otimize as imagens:

1. **Compressão**: Use ferramentas como TinyPNG ou Squoosh
2. **Formato**: Prefira WebP quando possível
3. **Responsive**: Considere múltiplas resoluções
4. **Lazy Loading**: Já implementado no projeto

## Placeholders

Enquanto não adicionar suas imagens reais, o projeto usa placeholders automáticos via:
- `https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=MF` (avatar)
- `https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=Project` (projetos)

## Como Adicionar Suas Imagens

1. Adicione suas imagens nesta pasta
2. Atualize os caminhos em `src/stores/portfolio.js`:

```javascript
personalInfo: {
  // ...
  avatar: '/images/avatar.jpg'  // Sua foto
},

projects: [
  {
    // ...
    image: '/images/projeto1.jpg'  // Imagem do projeto
  }
]
```

## Dicas de Fotografia

### Para Avatar
- Use boa iluminação
- Fundo neutro ou desfocado
- Expressão profissional e amigável
- Enquadramento do peito para cima

### Para Projetos
- Screenshots de alta qualidade
- Mostre a interface principal
- Use mockups quando apropriado
- Mantenha consistência visual

---

Lembre-se: imagens de qualidade fazem toda a diferença na primeira impressão! 📸✨