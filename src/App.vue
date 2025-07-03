<template>
  <div id="app" class="min-h-screen flex flex-col">
    <NavegacaoHeader />

    <main class="flex-grow pt-20">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <RodapePrincipal />
  </div>
</template>

<script setup>
  import NavegacaoHeader from "@/components/NavegacaoHeader.vue";
  import RodapePrincipal from "@/components/RodapePrincipal.vue";
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
