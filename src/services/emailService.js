import emailjs from '@emailjs/browser'

// Configurações do EmailJS via variáveis de ambiente
const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
}

const validateFormData = (data) => {
  const required = ['nome', 'email', 'assunto', 'mensagem']
  const missing = required.filter(field => !data[field]?.trim())
  
  if (missing.length > 0) {
    throw new Error(`Campos obrigatórios: ${missing.join(', ')}`)
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    throw new Error('Email inválido')
  }
}

export const enviarEmailContato = async (dadosFormulario) => {
  try {
    validateFormData(dadosFormulario)
    
    if (!EMAIL_CONFIG.serviceId || !EMAIL_CONFIG.templateId || !EMAIL_CONFIG.publicKey) {
      throw new Error('Configuração EmailJS incompleta')
    }

    const templateParams = {
      from_name: dadosFormulario.nome,
      from_email: dadosFormulario.email,
      subject: dadosFormulario.assunto,
      message: dadosFormulario.mensagem,
      to_name: 'Marcus Fiuza'
    }

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    )

    // Log sanitizado sem dados sensíveis
    console.log('Email enviado com sucesso:', {
      status: response.status,
      timestamp: new Date().toISOString()
    })
    return { success: true, message: 'Email enviado com sucesso!' }

  } catch (error) {
    console.error('Erro ao enviar email:', error.message)
    return {
      success: false,
      message: 'Erro ao enviar email. Tente novamente.'
    }
  }
}