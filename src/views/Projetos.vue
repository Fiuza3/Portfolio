<template>
  <div class="projetos py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Meus <span class="text-primary-600">Projetos</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Uma coleção dos meus trabalhos mais significativos, demonstrando
          minhas habilidades em desenvolvimento full stack e design de
          interfaces.
        </p>
      </div>

      <!-- Grid de Projetos -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="projeto in projetosFiltrados"
          :key="projeto.id"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <!-- Imagem do Projeto -->
          <div class="relative h-48 overflow-hidden">
            <img
              :src="projeto.imagemUrl"
              :alt="projeto.titulo"
              class="w-full h-full object-cover"
            />

            <div v-if="projeto.destaque" class="absolute top-4 right-4">
              <span
                class="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold"
              >
                ⭐ Destaque
              </span>
            </div>
          </div>

          <!-- Conteúdo do Card -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              {{ projeto.titulo }}
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3">
              {{ projeto.descricao }}
            </p>

            <!-- Tecnologias -->
            <div class="flex flex-wrap gap-2 mb-6">
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

            <!-- Links -->
            <div class="flex justify-between items-center">
              <div class="flex gap-4">
                <a
                  :href="projeto.linkGithub"
                  target="_blank"
                  class="flex items-center text-gray-600 hover:text-gray-700 font-medium transition-colors"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                  GitHub
                </a>
              </div>

              <button
                @click="abrirModal(projeto)"
                class="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mensagem quando não há projetos -->
      <div v-if="projetosFiltrados.length === 0" class="text-center py-12">
        <p class="text-gray-500 text-lg">
          Nenhum projeto encontrado para este filtro.
        </p>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-primary-50 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Gostou do que viu?
          </h3>
          <p class="text-gray-600 mb-6">
            Estou sempre trabalhando em novos projetos e adoraria discutir
            oportunidades de colaboração.
          </p>
          <router-link
            to="/contato"
            class="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Vamos Conversar
          </router-link>
        </div>
      </div>
    </div>

    <!-- Modal de Detalhes -->
    <div
      v-if="modalAberto"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click="fecharModal"
    >
      <div
        class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-2xl font-bold text-gray-900">
              {{ projetoSelecionado?.titulo }}
            </h3>
            <button
              @click="fecharModal"
              class="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div class="h-48 rounded-lg mb-6 overflow-hidden">
            <img
              :src="projetoSelecionado?.imagemUrl"
              :alt="projetoSelecionado?.titulo"
              class="w-full h-full object-cover"
            />
          </div>

          <p class="text-gray-600 mb-6">{{ projetoSelecionado?.descricao }}</p>

          <div class="mb-6">
            <h4 class="font-semibold text-gray-900 mb-3">
              Tecnologias Utilizadas:
            </h4>
            <div class="flex flex-wrap gap-2">
              <a
                v-for="tech in projetoSelecionado?.tecnologias"
                :key="tech.nome"
                :href="tech.url"
                target="_blank"
                class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors"
              >
                {{ tech.nome }}
              </a>
            </div>
          </div>

          <div class="flex gap-4">
            <a
              :href="projetoSelecionado?.linkGithub"
              target="_blank"
              class="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Ver no GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from "vue";
  import { usePortifolioStore } from "@/stores/portifolio";

  const store = usePortifolioStore();
  const filtroAtivo = ref("todos");
  const modalAberto = ref(false);
  const projetoSelecionado = ref(null);

  const projetosFiltrados = computed(() => {
    const projetos = store.projetos;

    switch (filtroAtivo.value) {
      case "destaque":
        return projetos.filter((p) => p.destaque);
      case "frontend":
        return projetos.filter((p) =>
          p.tecnologias.some((tech) =>
            ["Vue", "Vite", "Pinia", "JavaScript"].some((frontend) =>
              tech.nome.includes(frontend)
            )
          )
        );
      case "fullstack":
        return projetos.filter((p) =>
          p.tecnologias.some((tech) =>
            ["Node.js", "Express", "MongoDB"].some((backend) =>
              tech.nome.includes(backend)
            )
          )
        );
      default:
        return projetos;
    }
  });

  const abrirModal = (projeto) => {
    projetoSelecionado.value = projeto;
    modalAberto.value = true;
  };

  const fecharModal = () => {
    modalAberto.value = false;
    projetoSelecionado.value = null;
  };
</script>
