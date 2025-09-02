<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-container" @click.stop>
      <!-- Close Button -->
      <button @click="closeModal" class="modal-close-button">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      
      <!-- Modal Content -->
      <div class="modal-content">
        <!-- Project Image -->
        <div class="modal-image-container">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-64 lg:h-80 object-cover rounded-lg"
            @error="handleImageError"
          />
        </div>
        
        <!-- Project Info -->
        <div class="modal-info">
          <!-- Header -->
          <div class="modal-header">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-3">
                <span class="category-badge">{{ project.category }}</span>
                <span 
                  class="status-badge"
                  :class="{
                    'bg-green-100 text-green-800': project.status === 'Concluído',
                    'bg-yellow-100 text-yellow-800': project.status === 'Em desenvolvimento'
                  }"
                >
                  {{ project.status }}
                </span>
              </div>
            </div>
            
            <h2 class="text-3xl lg:text-4xl font-display font-bold text-secondary-900 dark:text-secondary-100 mb-4">
              {{ project.title }}
            </h2>
            
            <p class="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
              {{ project.longDescription }}
            </p>
          </div>
          
          <!-- Technologies -->
          <div class="mb-8">
            <h3 class="text-xl font-display font-semibold text-secondary-900 dark:text-secondary-100 mb-4">
              Tecnologias Utilizadas
            </h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          
          <!-- Features -->
          <div v-if="project.features" class="mb-8">
            <h3 class="text-xl font-display font-semibold text-secondary-900 dark:text-secondary-100 mb-4">
              Principais Funcionalidades
            </h3>
            <ul class="space-y-2">
              <li
                v-for="feature in project.features"
                :key="feature"
                class="flex items-start space-x-3"
              >
                <svg class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-secondary-700 dark:text-secondary-300">{{ feature }}</span>
              </li>
            </ul>
          </div>
          
          <!-- Challenges & Results -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div v-if="project.challenges">
              <h3 class="text-xl font-display font-semibold text-secondary-900 dark:text-secondary-100 mb-4">
                Desafios
              </h3>
              <p class="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                {{ project.challenges }}
              </p>
            </div>
            
            <div v-if="project.results">
              <h3 class="text-xl font-display font-semibold text-secondary-900 dark:text-secondary-100 mb-4">
                Resultados
              </h3>
              <p class="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                {{ project.results }}
              </p>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary text-center"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              Ver Demo
            </a>
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary text-center"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Ver Código
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectModal',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    const closeModal = () => {
      emit('close')
    }
    
    const handleImageError = (event) => {
      event.target.src = 'https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Project'
    }
    
    return {
      closeModal,
      handleImageError
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  @apply fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4;
  animation: fadeIn 0.3s ease-out;
}

.modal-container {
  @apply bg-white dark:bg-secondary-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden;
  animation: slideUp 0.3s ease-out;
}

.modal-content {
  @apply overflow-y-auto max-h-[90vh];
}

.modal-image-container {
  @apply p-6 pb-0;
}

.modal-info {
  @apply p-6;
}

.modal-header {
  @apply mb-8;
}

.modal-close-button {
  @apply absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-secondary-700/90 hover:bg-white dark:hover:bg-secondary-600 text-secondary-600 dark:text-secondary-300 hover:text-secondary-900 dark:hover:text-secondary-100 rounded-full flex items-center justify-center transition-all duration-200 z-10;
}

.category-badge {
  @apply px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400 text-sm font-medium rounded-full;
}

.status-badge {
  @apply px-3 py-1 text-sm font-medium rounded-full;
}

.tech-tag {
  @apply px-4 py-2 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 text-sm rounded-lg font-medium;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>