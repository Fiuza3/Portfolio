<template>
  <div class="skill-item">
    <div class="flex justify-between items-center mb-2">
      <span class="font-medium text-secondary-800 dark:text-secondary-200">{{ skill.name }}</span>
      <span class="text-sm text-secondary-600 dark:text-secondary-300">{{ skill.level }}%</span>
    </div>
    <div class="skill-bar-container">
      <div 
        class="skill-bar-fill"
        :style="{ width: isVisible ? `${skill.level}%` : '0%' }"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'SkillBar',
  props: {
    skill: {
      type: Object,
      required: true
    }
  },
  setup() {
    const isVisible = ref(false)
    
    onMounted(() => {
      // Animate skill bar after component mounts
      setTimeout(() => {
        isVisible.value = true
      }, 300)
    })
    
    return {
      isVisible
    }
  }
}
</script>

<style scoped>
.skill-bar-container {
  @apply w-full h-3 bg-secondary-200 dark:bg-secondary-700 rounded-full overflow-hidden;
}

.skill-bar-fill {
  @apply h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 ease-out;
}
</style>