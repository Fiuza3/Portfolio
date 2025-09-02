<template>
  <div
    v-if="showButton"
    class="fixed bottom-6 right-6 z-40"
    v-motion
    :initial="{ scale: 0, opacity: 0 }"
    :enter="{ scale: 1, opacity: 1, transition: { delay: 1000 } }"
    :leave="{ scale: 0, opacity: 0 }"
  >
    <button
      @click="goToContact"
      class="floating-cta group"
      :class="{ 'animate-pulse-slow': isPulsing }"
      @mouseenter="stopPulsing"
      @mouseleave="startPulsing"
    >
      <!-- Background Circle -->
      <div class="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full animate-pulse"></div>
      
      <!-- Content -->
      <div class="relative flex items-center space-x-3 px-6 py-3">
        <!-- Icon -->
        <div class="flex-shrink-0">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
          </svg>
        </div>
        
        <!-- Text -->
        <span class="text-white font-medium text-sm whitespace-nowrap">
          Gostou? Faça um orçamento!
        </span>
        
        <!-- Arrow -->
        <div class="flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300">
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
      
      <!-- Ripple Effect -->
      <div class="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </button>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'FloatingCTA',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const showButton = ref(false)
    const isPulsing = ref(true)
    
    const goToContact = () => {
      router.push('/contato')
    }
    
    const startPulsing = () => {
      isPulsing.value = true
    }
    
    const stopPulsing = () => {
      isPulsing.value = false
    }
    
    const handleScroll = () => {
      // Show button after scrolling 300px and not on contact page
      const scrolled = window.scrollY > 300
      const notContactPage = route.name !== 'contact'
      showButton.value = scrolled && notContactPage
    }
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Check initial state
      
      // Start pulsing animation after a delay
      setTimeout(() => {
        isPulsing.value = true
      }, 2000)
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    
    return {
      showButton,
      isPulsing,
      goToContact,
      startPulsing,
      stopPulsing
    }
  }
}
</script>

<style scoped>
.floating-cta {
  @apply relative bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-500/50 overflow-hidden;
}

.floating-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.floating-cta:hover::before {
  left: 100%;
}

@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 2s infinite;
}
</style>