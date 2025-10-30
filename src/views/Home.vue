<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          <!-- Content -->
          <div class="space-y-8" data-aos="fade-right">
            <div class="space-y-4">
              <h1 class="text-5xl lg:text-7xl font-display font-bold leading-tight">
                Olá, eu sou
                <span class="gradient-text block">{{ personalInfo.name }}</span>
              </h1>
              <p class="text-xl lg:text-2xl text-secondary-600 font-medium">
                {{ personalInfo.title }}
              </p>
              <p class="text-lg text-secondary-500 max-w-lg leading-relaxed">
                {{ personalInfo.bio }}
              </p>
            </div>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link to="/projetos" class="btn-primary text-center">
                Ver Projetos
              </router-link>
              <router-link to="/contato" class="btn-secondary text-center">
                Entre em Contato
              </router-link>
            </div>
            
            <!-- Social Links -->
            <div class="flex space-x-4 pt-4">
              <a
                v-for="(url, platform) in socialLinks"
                :key="platform"
                :href="url"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon"
                :title="platform"
              >
                <SocialIcons :name="platform" />
              </a>
            </div>
          </div>
          
          <!-- Hero Image/Animation -->
          <div class="relative" data-aos="fade-left">
            <div class="hero-image-container">
              <div class="hero-background"></div>
              <div class="hero-image">
                <img
                  src="/images/avatar.jpg"
                  alt="Marcus Fiuza"
                  class="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <!-- Floating Elements -->
              <div class="floating-element floating-element-1">
                <div class="tech-badge">Vue.js</div>
              </div>
              <div class="floating-element floating-element-2">
                <div class="tech-badge">JavaScript</div>
              </div>
              <div class="floating-element floating-element-3">
                <div class="tech-badge">Node.js</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="scroll-indicator" data-aos="fade-up" data-aos-delay="1000">
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
        <p class="text-sm text-secondary-500 mt-2">Role para baixo</p>
      </div>
    </section>
    
    <!-- Experience Section -->
    <section class="section-padding bg-white dark:bg-secondary-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl lg:text-5xl font-display font-bold gradient-text mb-4">
            Experiência Profissional
          </h2>
          <p class="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
            Minha trajetória profissional e principais conquistas
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            v-for="(exp, index) in experience"
            :key="index"
            class="bg-secondary-50 dark:bg-secondary-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 dark:shadow-secondary-900/50 p-6 group cursor-pointer"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6"/>
                </svg>
              </div>
              <span class="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-sm font-medium rounded-full">
                {{ exp.period }}
              </span>
            </div>
            
            <h3 class="text-xl font-display font-semibold text-secondary-900 dark:text-secondary-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
              {{ exp.position }}
            </h3>
            <p class="text-primary-600 dark:text-primary-400 font-medium mb-3">{{ exp.company }}</p>
            
            <p class="text-secondary-600 dark:text-secondary-300 mb-4 leading-relaxed line-clamp-3">
              {{ exp.description }}
            </p>
            
            <div class="space-y-3">
              <h4 class="font-semibold text-secondary-800 dark:text-secondary-200">Principais Conquistas:</h4>
              <ul class="space-y-3">
                <li
                  v-for="achievement in exp.achievements.slice(0, 2)"
                  :key="achievement"
                  class="flex items-start space-x-3"
                >
                  <svg class="w-4 h-4 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-secondary-700 dark:text-secondary-300 text-sm leading-relaxed">{{ achievement }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Skills Section -->
    <section class="section-padding bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-800 dark:to-secondary-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl lg:text-5xl font-display font-bold gradient-text mb-4">
            Habilidades e Tecnologias
          </h2>
          <p class="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
            Tecnologias que domino e uso para criar soluções incríveis
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            v-for="(skills, category) in skillsByCategory"
            :key="category"
            class="space-y-6"
            data-aos="fade-up"
          >
            <h3 class="text-2xl font-display font-semibold text-secondary-800 dark:text-secondary-200">
              {{ category }}
            </h3>
            <div class="space-y-4">
              <SkillBar
                v-for="skill in skills"
                :key="skill.name"
                :skill="skill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Education Section -->
    <section class="section-padding bg-white dark:bg-secondary-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl lg:text-5xl font-display font-bold gradient-text mb-4 px-2">
            Formação e Estudos
          </h2>
          <p class="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
            Minha jornada educacional e certificações
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(edu, index) in education"
            :key="index"
            class="bg-secondary-50 dark:bg-secondary-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 dark:shadow-secondary-900/50 p-6 group cursor-pointer"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              <span
                class="px-3 py-1 text-xs font-medium rounded-full"
                :class="edu.status === 'Concluído' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'"
              >
                {{ edu.status }}
              </span>
            </div>
            
            <h3 class="text-lg font-display font-semibold text-secondary-900 dark:text-secondary-100 mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">
              {{ edu.degree }}
            </h3>
            <p class="text-accent-600 dark:text-accent-400 font-medium mb-2">{{ edu.institution }}</p>
            <p class="text-secondary-500 dark:text-secondary-400 text-sm mb-3">{{ edu.period }}</p>
            
            <p class="text-secondary-600 dark:text-secondary-300 leading-relaxed text-sm line-clamp-3">
              {{ edu.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="section-padding bg-white dark:bg-secondary-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl lg:text-5xl font-display font-bold gradient-text mb-4 px-2">
            Projetos em Destaque
          </h2>
          <p class="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
            Alguns dos meus trabalhos mais recentes e impactantes
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="(project, index) in featuredProjects"
            :key="project.id"
            :project="project"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
          />
        </div>
        
        <div class="text-center mt-12" data-aos="fade-up">
          <router-link to="/projetos" class="btn-primary">
            Ver Todos os Projetos
          </router-link>
        </div>
      </div>
    </section>
    

    
    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-primary-600 to-accent-600 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
        <h2 class="text-4xl lg:text-5xl font-display font-bold mb-6">
          Pronto para começar seu projeto?
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade
        </p>
        <router-link to="/contato" class="btn-secondary bg-white text-primary-600 hover:bg-secondary-50">
          Vamos Conversar
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import ProjectCard from '@/components/ProjectCard.vue'
import SkillBar from '@/components/SkillBar.vue'

import SocialIcons from '@/components/SocialIcons.vue'

export default {
  name: 'Home',
  components: {
    ProjectCard,
    SkillBar,
    SocialIcons
  },
  setup() {
    const store = usePortfolioStore()
    
    const personalInfo = computed(() => store.personalInfo)
    const socialLinks = computed(() => store.socialLinks)
    const featuredProjects = computed(() => store.featuredProjects)
    const skillsByCategory = computed(() => store.skillsByCategory)
    const experience = computed(() => store.experience)
    const education = computed(() => store.education)
    

    
    onMounted(() => {
      // Add any additional initialization here
    })
    
    return {
      personalInfo,
      socialLinks,
      featuredProjects,
      skillsByCategory,
      experience,
      education
    }
  }
}
</script>

<style scoped>
.hero-section {
  @apply relative min-h-screen flex flex-col justify-center;
}

.hero-image-container {
  @apply relative w-full max-w-lg mx-auto;
}

.hero-background {
  @apply absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-3xl transform rotate-6 scale-105;
}

.hero-image {
  @apply relative w-full h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500;
}

.floating-element {
  @apply absolute;
  animation: float 3s ease-in-out infinite;
}

.floating-element-1 {
  @apply top-4 -left-4;
  animation-delay: 0s;
}

.floating-element-2 {
  @apply top-1/2 -right-8;
  animation-delay: 1s;
}

.floating-element-3 {
  @apply bottom-8 -left-8;
  animation-delay: 2s;
}

.tech-badge {
  @apply bg-white shadow-lg rounded-lg px-4 py-2 text-sm font-medium text-primary-600 border border-primary-100;
}

.social-icon {
  @apply w-12 h-12 bg-secondary-200 dark:bg-secondary-700 hover:bg-primary-600 text-secondary-600 dark:text-secondary-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1;
}

.scroll-indicator {
  @apply absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center;
}

.scroll-mouse {
  @apply w-6 h-10 border-2 border-secondary-400 rounded-full mx-auto relative;
}

.scroll-wheel {
  @apply w-1 h-2 bg-secondary-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2;
  animation: scrollWheel 2s infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes scrollWheel {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(16px);
  }
}
</style>