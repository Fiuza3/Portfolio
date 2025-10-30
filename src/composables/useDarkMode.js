import { ref, onMounted, watch } from 'vue'

export function useDarkMode() {
  const isDark = ref(false)
  
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    updateTheme()
    localStorage.setItem('darkMode', isDark.value.toString())
  }
  
  const updateTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  
  const initTheme = () => {
    // Check localStorage first
    const stored = localStorage.getItem('darkMode')
    if (stored !== null) {
      isDark.value = stored === 'true'
    } else {
      // Use system preference
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    updateTheme()
  }
  
  onMounted(() => {
    initTheme()
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      if (localStorage.getItem('darkMode') === null) {
        isDark.value = e.matches
        updateTheme()
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  })
  
  return {
    isDark,
    toggleDarkMode
  }
}