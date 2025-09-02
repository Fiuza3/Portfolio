<template>
  <div class="fixed bottom-6 left-6 z-40">
    <button
      @click="toggleDarkMode"
      class="theme-toggle group"
      :title="isDark ? 'Modo Claro' : 'Modo Escuro'"
    >
      <!-- Sun Icon (Light Mode) -->
      <svg
        v-if="!isDark"
        class="w-6 h-6 text-yellow-500 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
      </svg>
      
      <!-- Moon Icon (Dark Mode) -->
      <svg
        v-else
        class="w-6 h-6 text-blue-400 transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-12"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd"/>
      </svg>
      
      <!-- Ripple Effect -->
      <div class="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    </button>
  </div>
</template>

<script>
import { useDarkMode } from '@/composables/useDarkMode'

export default {
  name: 'ThemeToggle',
  setup() {
    const { isDark, toggleDarkMode } = useDarkMode()
    
    return {
      isDark,
      toggleDarkMode
    }
  }
}
</script>

<style scoped>
.theme-toggle {
  @apply relative w-12 h-12 bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-500/50 overflow-hidden;
}
</style>