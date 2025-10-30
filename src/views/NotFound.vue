<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100">
    <div class="text-center px-6">
      <h1 class="text-9xl font-bold text-primary-600 mb-4">404</h1>
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Página não encontrada</h2>
      <p class="text-xl text-gray-600 mb-8">A página que você está procurando não existe.</p>
      <router-link 
        to="/" 
        class="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
      >
        Voltar ao Início
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Página 404 simples e funcional
</script>