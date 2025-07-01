<template>
  <div class="sobre py-20">
    <div class="container mx-auto px-6">
      <!-- Seção Principal -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div class="animate-slide-up">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre <span class="text-primary-600">Mim</span>
          </h1>
          <p class="text-lg text-gray-600 mb-6">
            Sou um desenvolvedor apaixonado por tecnologia e inovação, sempre em
            busca de criar soluções que impactem positivamente a vida das
            pessoas. Com experiência em desenvolvimento full stack, tenho
            trabalhado em projetos desafiadores que me permitiram crescer
            profissionalmente.
          </p>
          <p class="text-lg text-gray-600 mb-8">
            Minha jornada na programação começou com curiosidade e se
            transformou em paixão. Acredito que a tecnologia pode resolver
            problemas reais e estou sempre disposto a aprender novas ferramentas
            e metodologias.
          </p>

          <div class="flex flex-wrap gap-4">
            <a
              href="/curriculo-teste.pdf"
              target="_blank"
              class="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Download CV
            </a>
            <router-link
              to="/contato"
              class="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
            >
              Vamos Conversar
            </router-link>
          </div>
        </div>

        <div class="animate-fade-in">
          <div
            class="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 text-white"
          >
            <h3 class="text-2xl font-bold mb-6">Informações Pessoais</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <span class="w-6 h-6 mr-3">📍</span>
                <span>Belo Horizonte, MG - Brasil</span>
              </div>
              <div class="flex items-center">
                <span class="w-6 h-6 mr-3">📧</span>
                <span>devfiuza@gmail.com</span>
              </div>
              <div class="flex items-center">
                <span class="w-6 h-6 mr-3">🎓</span>
                <span>Análise e Desenvolvimento de Sistemas</span>
              </div>
              <div class="flex items-center">
                <span class="w-6 h-6 mr-3">💼</span>
                <span>Desenvolvedor Frontend</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experiência Profissional -->
      <section class="mb-20">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
          Experiência Profissional
        </h2>
        <div class="space-y-8">
          <div
            v-for="exp in experiencias"
            :key="exp.empresa"
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div
              class="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
            >
              <div>
                <h3 class="text-xl font-bold text-gray-900">{{ exp.cargo }}</h3>
                <p class="text-primary-600 font-semibold">{{ exp.empresa }}</p>
              </div>
              <span class="text-gray-500 font-medium">{{ exp.periodo }}</span>
            </div>
            <p class="text-gray-600 mb-4">{{ exp.descricao }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in exp.tecnologias"
                :key="tech"
                class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Formação e Certificações -->
      <section class="mb-20">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
          Formação & Certificações
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              🎓 Formação Acadêmica
            </h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-gray-900">
                  Sistemas de Informação
                </h4>
                <p class="text-gray-600">UNESA - 2023-2027</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">
                  Técnico em Eletronica
                </h4>
                <p class="text-gray-600">
                  E.E.T.I Professor Fontes - 2019-2022
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              🏆 Certificações
            </h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-gray-900">
                  Vue3.js Certified Developer
                </h4>
                <p class="text-gray-600">Vue School - 2023</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">
                  AWS Cloud Practitioner
                </h4>
                <p class="text-gray-600">Amazon Web Services - 2023</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">
                  JavaScript Algorithms
                </h4>
                <p class="text-gray-600">FreeCodeCamp - 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Interesses -->
      <section>
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
          Interesses & Hobbies
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center p-6 bg-white rounded-xl shadow-lg">
            <div class="text-4xl mb-4">💻</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Tecnologia</h3>
            <p class="text-gray-600">
              Sempre explorando novas tecnologias e frameworks
            </p>
          </div>
          <div class="text-center p-6 bg-white rounded-xl shadow-lg">
            <div class="text-4xl mb-4">📚</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              Aprendizado
            </h3>
            <p class="text-gray-600">
              Cursos online, livros técnicos e documentações
            </p>
          </div>
          <div class="text-center p-6 bg-white rounded-xl shadow-lg">
            <div class="text-4xl mb-4">🎮</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Games</h3>
            <p class="text-gray-600">
              Apaixonado por FPS e survival games, sempre jogando com amigos
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
  import { usePortifolioStore } from "@/stores/portifolio";

  const store = usePortifolioStore();
  const { experiencias } = store;
</script>
