# 📧 Configuração do EmailJS

## Passo a passo para configurar o formulário de contato

### 1. Criar conta no EmailJS
1. Acesse [EmailJS](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Confirme seu email

### 2. Configurar serviço de email
1. No dashboard, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor (Gmail, Outlook, etc.)
4. Configure as credenciais
5. Anote o **Service ID**

### 3. Criar template de email
1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Configure o template com as variáveis:
   - `{{from_name}}` - Nome do remetente
   - `{{from_email}}` - Email do remetente
   - `{{subject}}` - Assunto
   - `{{message}}` - Mensagem
   - `{{to_name}}` - Seu nome
4. Anote o **Template ID**

### 4. Obter chave pública
1. Vá em **Account** > **General**
2. Copie a **Public Key**

### 5. Configurar variáveis de ambiente
1. Copie o arquivo `.env.example` para `.env`
2. Preencha com seus dados:
```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

### 6. Testar
1. Execute `npm run dev`
2. Acesse a página de contato
3. Envie um email de teste

## Troubleshooting

- **Erro 403**: Verifique se as credenciais estão corretas
- **Erro CORS**: Adicione seu domínio nas configurações do EmailJS
- **Email não chega**: Verifique spam e configurações do template