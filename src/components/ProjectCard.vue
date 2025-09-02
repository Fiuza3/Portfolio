<template>
  <div class="project-card card p-6 group cursor-pointer" @click="openModal">
    <!-- Project Image -->
    <div class="project-image-container mb-6">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-48 object-cover rounded-lg"
        @error="handleImageError"
      />
      <div class="project-overlay">
        <div class="overlay-content">
          <button class="overlay-button">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Project Info -->
    <div class="space-y-4">
      <!-- Category & Status -->
      <div class="flex items-center justify-between">
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
      
      <!-- Title & Description -->
      <div>
        <h3 class="text-xl font-display font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
          {{ project.title }}
        </h3>
        <p class="text-secondary-600 line-clamp-3">
          {{ project.description }}
        </p>
      </div>
      
      <!-- Technologies -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies.slice(0, 4)"
          :key="tech"
          class="tech-tag"
        >
          {{ tech }}
        </span>
        <span v-if="project.technologies.length > 4" class="tech-tag bg-secondary-100 text-secondary-600">
          +{{ project.technologies.length - 4 }}
        </span>
      </div>
      
      <!-- Action Buttons -->
      <div class="flex space-x-3 pt-2">
        <a
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="action-button"
          @click.stop
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
          Demo
        </a>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="action-button"
          @click.stop
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  emits: ['open-modal'],
  setup(props, { emit }) {
    const openModal = () => {
      emit('open-modal', props.project)
    }
    
    const handleImageError = (event) => {
      // Replace with CSS div instead of external image
      const parent = event.target.parentElement
      parent.innerHTML = '<div class="w-full h-48 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center"><span class="text-white text-2xl font-bold">Projeto</span></div>'
    }
    
    return {
      openModal,
      handleImageError
    }
  }
}
</script>

<style scoped>
.project-card {
  @apply relative overflow-hidden;
}

.project-image-container {
  @apply relative overflow-hidden rounded-lg;
}

.project-overlay {
  @apply absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center;
}

.overlay-content {
  @apply transform scale-75 group-hover:scale-100 transition-transform duration-300;
}

.overlay-button {
  @apply w-12 h-12 bg-white text-primary-600 rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors duration-200;
}

.category-badge {
  @apply px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full;
}

.status-badge {
  @apply px-3 py-1 text-sm font-medium rounded-full;
}

.tech-tag {
  @apply px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full font-medium;
}

.action-button {
  @apply flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>