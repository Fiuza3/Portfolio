<template>
	<header
		class="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-xl z-50 transition-all duration-300"
		role="banner"
	>
		<nav class="container mx-auto px-6 py-6" role="navigation" aria-label="Navegação principal">
			<div class="flex items-center justify-between">
				<router-link
					to="/"
					class="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
					aria-label="Ir para página inicial"
				>
					Portfólio
				</router-link>

				<div class="hidden md:flex space-x-8" role="menubar">
					<router-link
						v-for="item in menuItems"
						:key="item.nome"
						:to="item.rota"
						class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
						:class="{ 'text-primary-600': $route.name === item.nome }"
						role="menuitem"
						:aria-current="$route.name === item.nome ? 'page' : undefined"
					>
						{{ item.label }}
					</router-link>
				</div>

				<button
					@click="toggleMenu"
					class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
					:aria-expanded="menuAberto"
					aria-controls="mobile-menu"
					aria-label="Abrir menu de navegação"
				>
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							:d="
								menuAberto ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
							"
						></path>
					</svg>
				</button>
			</div>

			<div
				v-if="menuAberto"
				class="md:hidden mt-4 pb-4 border-t border-gray-200"
				id="mobile-menu"
				role="menu"
			>
				<router-link
					v-for="item in menuItems"
					:key="item.nome"
					:to="item.rota"
					@click="menuAberto = false"
					class="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
					:class="{ 'text-primary-600': $route.name === item.nome }"
					role="menuitem"
					:aria-current="$route.name === item.nome ? 'page' : undefined"
				>
					{{ item.label }}
				</router-link>
			</div>
		</nav>
	</header>
</template>

<script setup>
	import { ref } from "vue";

	const menuAberto = ref(false);

	const menuItems = [
		{ nome: "home", rota: "/", label: "Início" },
		{ nome: "sobre", rota: "/sobre", label: "Sobre" },
		{ nome: "projetos", rota: "/projetos", label: "Projetos" },
		{ nome: "servicos", rota: "/servicos", label: "Serviços" },
		{ nome: "paisagem", rota: "/paisagem", label: "Paisagem" },
		{ nome: "contato", rota: "/contato", label: "Contato" },
	];

	const toggleMenu = () => {
		menuAberto.value = !menuAberto.value;
	};
</script>
