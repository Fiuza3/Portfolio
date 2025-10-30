<template>
  <div class="contact-page pt-20">
    <!-- Header Section -->
    <section class="section-padding bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-800 dark:to-secondary-700">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up">
          <h1 class="text-5xl lg:text-6xl font-display font-bold gradient-text mb-6">
            Vamos Conversar
          </h1>
          <p class="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Tem um projeto em mente? Quer discutir uma oportunidade? Estou sempre aberto para novas conversas e colaborações.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Contact Form Section -->
    <section class="section-padding bg-white dark:bg-secondary-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-8" data-aos="fade-right">
            <div>
              <h2 class="text-3xl font-display font-bold text-secondary-900 dark:text-secondary-100 mb-6">
                Informações de Contato
              </h2>
              <p class="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
                Prefere entrar em contato diretamente? Aqui estão minhas informações:
              </p>
            </div>
            
            <!-- Contact Items -->
            <div class="space-y-6">
              <div class="contact-item">
                <div class="contact-icon">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-secondary-900 dark:text-secondary-100">Email</h3>
                  <a href="mailto:devfiuza@gmail.com" class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                    devfiuza@gmail.com
                  </a>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-secondary-900 dark:text-secondary-100">Localização</h3>
                  <p class="text-secondary-600 dark:text-secondary-300">Minas Gerais, Brasil</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-secondary-900 dark:text-secondary-100">Disponibilidade</h3>
                  <p class="text-secondary-600 dark:text-secondary-300">Segunda a Sexta, 9h às 18h</p>
                </div>
              </div>
            </div>
            
            <!-- Social Links -->
            <div class="pt-8">
              <h3 class="font-semibold text-secondary-900 dark:text-secondary-100 mb-4">Me siga nas redes sociais</h3>
              <div class="flex space-x-4">
                <a
                  v-for="(url, platform) in socialLinks"
                  :key="platform"
                  :href="url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                  :title="platform"
                >
                  <SocialIcons :name="platform" />
                </a>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="bg-secondary-50 dark:bg-secondary-800 rounded-2xl p-8" data-aos="fade-left">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="form-label">Nome Completo</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="form-input"
                  :class="{ 'form-input-error': errors.name }"
                  placeholder="Seu nome completo"
                />
                <p v-if="errors.name" class="form-error">{{ errors.name }}</p>
              </div>
              
              <div>
                <label for="email" class="form-label">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="form-input"
                  :class="{ 'form-input-error': errors.email }"
                  placeholder="seu@email.com"
                />
                <p v-if="errors.email" class="form-error">{{ errors.email }}</p>
              </div>
              
              <div>
                <label for="subject" class="form-label">Assunto</label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  class="form-input"
                  :class="{ 'form-input-error': errors.subject }"
                  placeholder="Assunto da mensagem"
                />
                <p v-if="errors.subject" class="form-error">{{ errors.subject }}</p>
              </div>
              
              <div>
                <label for="message" class="form-label">Mensagem</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  class="form-input resize-none"
                  :class="{ 'form-input-error': errors.message }"
                  placeholder="Conte-me sobre seu projeto ou ideia..."
                ></textarea>
                <p v-if="errors.message" class="form-error">{{ errors.message }}</p>
              </div>
              
              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn-primary w-full"
                :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
              >
                <span v-if="!isSubmitting" class="flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  Enviar Mensagem
                </span>
                <span v-else class="flex items-center justify-center">
                  <div class="loading-spinner mr-2"></div>
                  Enviando...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Success/Error Messages -->
    <div v-if="showSuccessMessage" class="success-message">
      <div class="max-w-md mx-auto bg-green-50 border border-green-200 rounded-lg p-4">
        <div class="flex items-center">
          <svg class="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="text-green-800 font-medium">Mensagem enviada com sucesso!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import { useToast } from 'vue-toastification'
import emailService from '@/services/emailService'

import SocialIcons from '@/components/SocialIcons.vue'

export default {
  name: 'Contact',
  components: {
    SocialIcons
  },
  setup() {
    const store = usePortfolioStore()
    const toast = useToast()
    
    const form = ref({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    const errors = ref({})
    const isSubmitting = ref(false)
    const showSuccessMessage = ref(false)
    
    const socialLinks = computed(() => store.socialLinks)
    
    const resetForm = () => {
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
      errors.value = {}
    }
    
    const handleSubmit = async () => {
      // Validate form
      const validation = emailService.validateForm(form.value)
      
      if (!validation.isValid) {
        errors.value = validation.errors
        toast.error('Por favor, corrija os erros no formulário')
        return
      }
      
      errors.value = {}
      isSubmitting.value = true
      
      try {
        const result = await emailService.sendEmail(form.value)
        
        if (result.success) {
          toast.success('Mensagem enviada com sucesso! Retornarei em breve.')
          showSuccessMessage.value = true
          resetForm()
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            showSuccessMessage.value = false
          }, 5000)
        } else {
          toast.error(result.message)
        }
      } catch (error) {
        console.error('Erro ao enviar email:', error)
        toast.error('Erro ao enviar mensagem. Tente novamente.')
      } finally {
        isSubmitting.value = false
      }
    }
    
    return {
      form,
      errors,
      isSubmitting,
      showSuccessMessage,
      socialLinks,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.contact-item {
  @apply flex items-start space-x-4;
}

.contact-icon {
  @apply w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center flex-shrink-0;
}

.social-link {
  @apply w-12 h-12 bg-secondary-100 dark:bg-secondary-700 hover:bg-primary-600 text-secondary-600 dark:text-secondary-300 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1;
}

.form-label {
  @apply block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2;
}

.form-input {
  @apply w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 bg-white dark:bg-secondary-700 text-secondary-900 dark:text-secondary-100;
}

.form-input-error {
  @apply border-red-300 focus:ring-red-500 focus:border-red-500;
}

.form-error {
  @apply text-red-600 text-sm mt-1;
}

.success-message {
  @apply fixed bottom-6 right-6 z-40;
  animation: slideInRight 0.3s ease-out;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>