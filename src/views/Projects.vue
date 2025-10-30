<template>
  <div class="projects-page pt-20">
    <!-- Header Section -->
    <section class="section-padding bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-800 dark:to-secondary-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12" data-aos="fade-up">
          <h1 class="text-5xl lg:text-6xl font-display font-bold gradient-text mb-6 px-2">
            Meus Projetos
          </h1>
          <p class="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
            Uma coleção dos meus trabalhos mais significativos, demonstrando habilidades técnicas e criatividade
          </p>
        </div>
        
        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="200">
          <button
            v-for="category in categories"
            :key="category"
            @click="setActiveFilter(category)"
            class="filter-button"
            :class="{ 'filter-button-active': activeFilter === category }"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>
    
    <!-- Projects Grid -->
    <section class="section-padding bg-white dark:bg-secondary-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            :project="project"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
            @open-modal="openProjectModal"
          />
        </div>
        
        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="text-center py-16" data-aos="fade-up">
          <div class="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-12 h-12 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
          </div>
          <h3 class="text-2xl font-display font-semibold text-secondary-800 dark:text-secondary-200 mb-2">
            Nenhum projeto encontrado
          </h3>
          <p class="text-secondary-600 dark:text-secondary-300">
            Não há projetos na categoria selecionada.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Project Modal -->
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="closeProjectModal"
    />
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectModal from '@/components/ProjectModal.vue'

export default {
  name: 'Projects',
  components: {
    ProjectCard,
    ProjectModal
  },
  setup() {
    const store = usePortfolioStore()
    const activeFilter = ref('Todos')
    const selectedProject = ref(null)
    
    const projects = computed(() => store.projects)
    const projectsByCategory = computed(() => store.projectsByCategory)
    
    const categories = computed(() => {
      const cats = ['Todos', ...Object.keys(projectsByCategory.value)]
      return cats
    })
    
    const filteredProjects = computed(() => {
      if (activeFilter.value === 'Todos') {
        return projects.value
      }
      return projectsByCategory.value[activeFilter.value] || []
    })
    
    const setActiveFilter = (category) => {
      activeFilter.value = category
    }
    
    const openProjectModal = (project) => {
      selectedProject.value = project
      document.body.style.overflow = 'hidden'
    }
    
    const closeProjectModal = () => {
      selectedProject.value = null
      document.body.style.overflow = 'auto'
    }
    
    onMounted(() => {
      // Ensure body scroll is reset
      document.body.style.overflow = 'auto'
    })
    
    return {
      activeFilter,
      selectedProject,
      categories,
      filteredProjects,
      setActiveFilter,
      openProjectModal,
      closeProjectModal
    }
  }
}
</script>

<style scoped>
.filter-button {
  @apply px-6 py-3 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 font-medium rounded-lg border border-secondary-200 dark:border-secondary-600 hover:border-primary-300 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-105;
}

.filter-button-active {
  @apply bg-primary-600 dark:bg-primary-500 text-white border-primary-600 dark:border-primary-500 shadow-lg;
}
</style>