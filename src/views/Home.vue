<template>
  <div class="home">
    <!-- Seção Hero -->
    <section
      class="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="container mx-auto px-6 text-center relative z-10">
        <div class="animate-fade-in">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
            Olá, eu sou
            <span class="text-primary-600">Desenvolvedor</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Desenvolvedor Frontend apaixonado por criar experiências digitais
            incríveis e soluções inovadoras que fazem a diferença.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/projetos"
              class="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
            >
              Ver Projetos
            </router-link>
            <router-link
              to="/contato"
              class="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
            >
              Entre em Contato
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Projetos em Destaque -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Projetos em Destaque
          </h2>
          <p class="text-xl text-gray-600">
            Alguns dos meus trabalhos mais recentes
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="projeto in projetosDestaque"
            :key="projeto.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-up"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                :src="projeto.imagemUrl"
                :alt="projeto.titulo"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ projeto.titulo }}</h3>
              <p class="text-gray-600 mb-4">{{ projeto.descricao }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <a
                  v-for="tech in projeto.tecnologias"
                  :key="tech.nome"
                  :href="tech.url"
                  target="_blank"
                  class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors"
                >
                  {{ tech.nome }}
                </a>
              </div>
              <div class="flex gap-4">
                <a
                  :href="projeto.linkGithub"
                  target="_blank"
                  class="text-gray-600 hover:text-gray-700 font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link
            to="/projetos"
            class="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Ver Todos os Projetos
          </router-link>
        </div>
      </div>
    </section>

    <!-- Seção Habilidades -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Minhas Habilidades
          </h2>
          <p class="text-xl text-gray-600">
            Tecnologias que domino e utilizo no dia a dia
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(habilidades, categoria) in habilidadesPorCategoria"
            :key="categoria"
            class="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 class="text-lg font-bold text-gray-900 mb-4 capitalize">
              {{ categoria }}
            </h3>
            <div class="space-y-3">
              <div v-for="hab in habilidades" :key="hab.nome">
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-700">{{
                    hab.nome
                  }}</span>
                  <span class="text-sm text-gray-500">{{ hab.nivel }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-primary-600 h-2 rounded-full transition-all duration-1000"
                    :style="{ width: hab.nivel + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import { usePortifolioStore } from "@/stores/portifolio";
  import backgroundImage from '@/assets/images/background.jpg';

  const store = usePortifolioStore();

  const projetosDestaque = computed(() => store.projetosDestaque);
  const habilidadesPorCategoria = computed(() => store.habilidadesPorCategoria);
</script>