<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled ? 'bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent',
      'border-b border-white/20 dark:border-secondary-700/20'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link 
          to="/" 
          class="flex items-center space-x-2 group"
          @click="scrollToTop"
        >
          <div class="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <span class="text-white font-bold text-lg">MF</span>
          </div>
          <span class="font-display font-bold text-xl gradient-text hidden sm:block">
            Marcus Fiuza
          </span>
        </router-link>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.to"
            class="nav-link"
            :class="{ 'nav-link-active': $route.name === item.name }"
          >
            {{ item.label }}
          </router-link>
        </div>
        
        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors duration-200"
          :class="{ 'text-primary-600': isMobileMenuOpen }"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              v-if="!isMobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-secondary-800/95 backdrop-blur-md rounded-lg mt-2 shadow-lg dark:shadow-secondary-900/50">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              @click="closeMobileMenu"
              class="mobile-nav-link"
              :class="{ 'mobile-nav-link-active': $route.name === item.name }"
            >
              {{ item.label }}
            </router-link>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Header',
  setup() {
    const router = useRouter()
    const isScrolled = ref(false)
    const isMobileMenuOpen = ref(false)
    
    const navigation = [
      { name: 'home', label: 'Home', to: '/' },
      { name: 'projects', label: 'Projetos', to: '/projetos' },
      { name: 'contact', label: 'Contato', to: '/contato' }
    ]
    
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 10
    }
    
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }
    
    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false
    }
    
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      // Close mobile menu on route change
      router.afterEach(() => {
        closeMobileMenu()
      })
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    
    return {
      isScrolled,
      isMobileMenuOpen,
      navigation,
      toggleMobileMenu,
      closeMobileMenu,
      scrollToTop
    }
  }
}
</script>

<style scoped>
.nav-link {
  @apply text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 relative;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 transition-all duration-300;
}

.nav-link:hover::after,
.nav-link-active::after {
  @apply w-full;
}

.nav-link-active {
  @apply text-primary-600 dark:text-primary-400;
}

.mobile-nav-link {
  @apply block px-3 py-2 text-base font-medium text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-secondary-700 rounded-md transition-colors duration-200;
}

.mobile-nav-link-active {
  @apply text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-secondary-700;
}
</style>