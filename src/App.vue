<template>
  <div id="app" class="min-h-screen bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900 dark:to-secondary-800 transition-colors duration-300">
    <!-- Header -->
    <Header />
    
    <!-- Main Content -->
    <main class="relative">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <!-- Footer -->
    <Footer />
    
    <!-- Floating CTA Button -->
    <FloatingCTA />
    
    <!-- Theme Toggle -->
    <ThemeToggle />
    

  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import FloatingCTA from '@/components/FloatingCTA.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    FloatingCTA,
    ThemeToggle
  }
}
</script>