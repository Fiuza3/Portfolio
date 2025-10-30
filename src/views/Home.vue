<template>
	<div class="home">
		<section
			class="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
			style="background-image: url('/images/background.jpg')"
		>
			<div class="absolute inset-0 bg-black/40"></div>
			<div class="container mx-auto px-6 text-center relative z-10">
				<div class="animate-fade-in">
					<h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
						Olá, eu sou
						<span class="text-primary-500 inline-block min-w-[280px]">
							<transition name="fade" mode="out-in">
								<span :key="palavraAtual" class="animate-fade-in">{{
									palavraAtual
								}}</span>
							</transition>
						</span>
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
							class="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
						>
							Entre em Contato
						</router-link>
					</div>
				</div>
			</div>
		</section>

		<!-- Seção Projetos em Destaque -->
		<section class="py-20 bg-gradient-to-b from-primary-950 to-primary-600">
			<div class="container mx-auto px-6">
				<div class="text-center mb-16">
					<h2 class="text-4xl font-bold text-primary-50 mb-4">
						Projetos em Destaque
					</h2>
					<p class="text-xl text-primary-100">
						Alguns dos meus trabalhos mais recentes
					</p>
				</div>

				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div
						v-for="projeto in projetosDestaque"
						:key="projeto.id"
						class="bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-up"
					>
						<div class="relative h-48 overflow-hidden">
							<img
								:src="projeto.imagemUrl"
								:alt="projeto.titulo"
								class="w-full h-full object-cover"
							/>
						</div>
						<div class="p-6">
							<h3 class="text-xl font-bold text-gray-900 mb-2">
								{{ projeto.titulo }}
							</h3>
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
		<section class="py-20 bg-gradient-to-b from-primary-600 to-primary-950">
			<div class="container mx-auto px-6">
				<div class="text-center mb-16">
					<h2 class="text-4xl font-bold text-primary-50 mb-4">
						Minhas Habilidades
					</h2>
					<p class="text-xl text-primary-100">
						Tecnologias que domino e utilizo no dia a dia
					</p>
				</div>

				<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div
						v-for="(habilidades, categoria) in habilidadesPorCategoria"
						:key="categoria"
						class="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-lg"
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
	import { computed, ref, onMounted, onBeforeUnmount } from "vue";
	import { usePortfolioStore } from "@/stores/portifolio";

	const store = usePortfolioStore();
	const palavras = ["Marcus", "Desenvolvedor", "Frontend", "Marcus"];
	const palavraAtual = ref(palavras[0]);
	let intervaloId = null;
	let indiceAtual = 0;

	const alternarPalavra = () => {
		indiceAtual = (indiceAtual + 1) % palavras.length;
		palavraAtual.value = palavras[indiceAtual];
	};

	onMounted(() => {
		intervaloId = setInterval(alternarPalavra, 2000);
	});

	onBeforeUnmount(() => {
		clearInterval(intervaloId);
	});

	const projetosDestaque = computed(() => store.projetosDestaque);
	const habilidadesPorCategoria = computed(() => store.habilidadesPorCategoria);
</script>

<style scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.4s ease, transform 0.7s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
		transform: translateY(20px);
	}

	.fade-enter-to,
	.fade-leave-from {
		opacity: 1;
		transform: translateY(0);
	}
</style>
