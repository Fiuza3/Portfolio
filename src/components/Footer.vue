<template>
  <footer class="bg-secondary-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand Section -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">MF</span>
            </div>
            <span class="font-display font-bold text-xl">Marcus Fiuza</span>
          </div>
          <p class="text-secondary-300 max-w-md">
            Desenvolvedor Full Stack criando soluções inovadoras e experiências digitais excepcionais.
          </p>
        </div>
        
        <!-- Quick Links -->
        <div class="space-y-4">
          <h3 class="font-display font-semibold text-lg">Links Rápidos</h3>
          <nav class="flex flex-col space-y-2">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              class="text-secondary-300 hover:text-white transition-colors duration-200 w-fit"
            >
              {{ item.label }}
            </router-link>
          </nav>
        </div>
        
        <!-- Social Links -->
        <div class="space-y-4">
          <h3 class="font-display font-semibold text-lg">Redes Sociais</h3>
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              :title="social.name"
            >
              <SocialIcons :name="social.name" />
            </a>
          </div>
          
          <!-- Contact Info -->
          <div class="space-y-2 mt-6">
            <p class="text-secondary-300">
              <span class="font-medium">Email:</span>
              <a href="mailto:devfiuza@gmail.com" class="text-primary-400 hover:text-primary-300 ml-2">
                devfiuza@gmail.com
              </a>
            </p>
            <p class="text-secondary-300">
              <span class="font-medium">Localização:</span>
              <span class="ml-2">Minas Gerais, Brasil</span>
            </p>
          </div>
        </div>
      </div>
      
      <!-- Bottom Section -->
      <div class="border-t border-secondary-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
        <p class="text-secondary-400 text-sm">
          © {{ currentYear }} Marcus Fiuza. Todos os direitos reservados.
        </p>
        <p class="text-secondary-400 text-sm mt-2 sm:mt-0">
          Desenvolvido com Vue 3 & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import SocialIcons from '@/components/SocialIcons.vue'

export default {
  name: 'Footer',
  components: {
    SocialIcons
  },
  setup() {
    const store = usePortfolioStore()
    
    const currentYear = computed(() => new Date().getFullYear())
    
    const navigation = [
      { name: 'home', label: 'Home', to: '/' },
      { name: 'projects', label: 'Projetos', to: '/projetos' },
      { name: 'contact', label: 'Contato', to: '/contato' }
    ]
    
    const socialLinks = [
      {
        name: 'github',
        url: store.socialLinks.github
      },
      {
        name: 'linkedin',
        url: store.socialLinks.linkedin
      },
      {
        name: 'instagram',
        url: store.socialLinks.instagram
      },
      {
        name: 'stackoverflow',
        url: store.socialLinks.stackoverflow
      }
    ]
    
    return {
      currentYear,
      navigation,
      socialLinks
    }
  }
}
</script>

<style scoped>
.social-link {
  @apply w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1;
}
</style>