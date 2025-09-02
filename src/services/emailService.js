import emailjs from '@emailjs/browser'

class EmailService {
  constructor() {
    this.serviceId = 'service_52h8p84'
    this.templateId = 'template_nnao1g8'
    this.publicKey = '0irk_9YGb7uVPBe3S'
    
    // Initialize EmailJS
    emailjs.init(this.publicKey)
  }
  
  async sendEmail(formData) {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'devfiuza@gmail.com'
      }
      
      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      )
      
      return {
        success: true,
        message: 'Email enviado com sucesso!',
        data: response
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      return {
        success: false,
        message: 'Erro ao enviar email. Tente novamente.',
        error: error
      }
    }
  }
  
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  
  validateForm(formData) {
    const errors = {}
    
    if (!formData.name || formData.name.trim().length < 2) {
      errors.name = 'Nome deve ter pelo menos 2 caracteres'
    }
    
    if (!formData.email || !this.validateEmail(formData.email)) {
      errors.email = 'Email inválido'
    }
    
    if (!formData.subject || formData.subject.trim().length < 5) {
      errors.subject = 'Assunto deve ter pelo menos 5 caracteres'
    }
    
    if (!formData.message || formData.message.trim().length < 10) {
      errors.message = 'Mensagem deve ter pelo menos 10 caracteres'
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    }
  }
}

export default new EmailService()