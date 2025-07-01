import emailjs from '@emailjs/browser'

// Configurações do EmailJS - SUBSTITUA pelos seus dados reais
const EMAIL_CONFIG = {
  serviceId: 'service_52h8p84',     // Ex: 'service_abc123'
  templateId: 'template_nnao1g8',   // Ex: 'template_xyz789'
  publicKey: '0irk_9YGb7uVPBe3S'      // Ex: 'user_123abc456def'
}

export const enviarEmailContato = async (dadosFormulario) => {
  try {
    const templateParams = {
      from_name: dadosFormulario.nome,
      from_email: dadosFormulario.email,
      subject: dadosFormulario.assunto,
      message: dadosFormulario.mensagem,
      to_name: 'Marcus Fiuza', // Seu nome aqui
    }

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    )

    console.log('Email enviado com sucesso:', response)
    return { success: true, message: 'Email enviado com sucesso!' }

  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return {
      success: false,
      message: 'Erro ao enviar email. Tente novamente.'
    }
  }
}