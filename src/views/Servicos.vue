<template>
	<div class="servicos py-20 bg-gradient-to-b from-primary-950 via-primary-600 to-primary-950 relative">
		<div class="container mx-auto px-6 relative z-10">
			<!-- Seção de Apresentação -->
			<div class="grid md:grid-cols-2 gap-12 items-center mb-20">
				<!-- Foto -->
				<div class="flex justify-center">
					<div class="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
						<img
							src="/public/images/perfil.jpg"
							alt="Marcus - Prestador de Serviços"
							class="w-full h-full object-cover"
						/>
					</div>
				</div>

				<!-- Texto de Apresentação -->
				<div>
					<h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
						Serviços <span class="text-primary-400">Profissionais</span>
					</h1>
					<p class="text-xl text-gray-200 mb-6">
						Olá! Sou Marcus, além de desenvolvedor, ofereço diversos serviços
						técnicos e gerais. Com experiência em eletrônica, informática e
						serviços domésticos, estou pronto para resolver suas necessidades
						com qualidade e confiança.
					</p>
					<p class="text-lg text-gray-300">
						Atendimento personalizado, orçamento sem compromisso e garantia em
						todos os serviços. Entre em contato e vamos conversar sobre como
						posso ajudá-lo!
					</p>
				</div>
			</div>

			<!-- Seções de Serviços -->
			<div class="space-y-16">
				<!-- Eletrônica -->
				<div class="bg-primary-50 rounded-2xl p-8 shadow-lg">
					<div class="flex items-center mb-6">
						<div class="bg-primary-600 p-3 rounded-full mr-4">
							<svg
								class="w-8 h-8 text-white"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
								/>
							</svg>
						</div>
						<h2 class="text-3xl font-bold text-primary-800">Eletrônica</h2>
					</div>
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div class="bg-primary-50 p-6 rounded-xl">
							<h3 class="text-xl font-semibold text-primary-50 mb-3">
								Reparo em Placas
							</h3>
							<p class="text-primary-50 mb-4">
								Conserto de placas eletrônicas, soldas e componentes.
							</p>
							<a
								href="https://wa.me/5531972379038?text=Ol%C3%A1%2C%20Marcus.%20Gostaria%20de%20contratar%20um%20servi%C3%A7o.%20Poderia%20informar%20disponibilidade%20e%20valores%3F%20Meu%20nome%20%C3%A9%20___"
								target="_blank"
								class="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block"
							>
								💬 Solicitar Orçamento
							</a>
						</div>
						<div class="bg-primary-50 p-6 rounded-xl">
							<h3 class="text-xl font-semibold text-primary-50 mb-3">
								Automação
							</h3>
							<p class="text-primary-50 mb-4">
								Sistemas automatizados e controle eletrônico.
							</p>
							<a
								href="https://wa.me/5531972379038?text=Ol%C3%A1%2C%20Marcus.%20Gostaria%20de%20contratar%20um%20servi%C3%A7o.%20Poderia%20informar%20disponibilidade%20e%20valores%3F%20Meu%20nome%20%C3%A9%20___"
								target="_blank"
								class="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block"
							>
								💬 Solicitar Orçamento
							</a>
						</div>
						<div class="bg-primary-50 p-6 rounded-xl">
							<h3 class="text-xl font-semibold text-primary-50 mb-3">
								Instalação de Eletrônicos
							</h3>
							<p class="text-primary-50 mb-4">
								Instalação e configuração de equipamentos eletrônicos.
							</p>
							<a
								href="https://wa.me/5531972379038?text=Ol%C3%A1%2C%20Marcus.%20Gostaria%20de%20contratar%20um%20servi%C3%A7o.%20Poderia%20informar%20disponibilidade%20e%20valores%3F%20Meu%20nome%20%C3%A9%20___"
								target="_blank"
								class="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block"
							>
								💬 Solicitar Orçamento
							</a>
						</div>
					</div>
				</div>

				<!-- Informática -->
				<div class="bg-primary-50 rounded-2xl p-8 shadow-lg">
					<div class="flex items-center mb-6">
						<div class="bg-primary-600 p-3 rounded-full mr-4">
							<svg
								class="w-8 h-8 text-white"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M20,18C20.5,18 21,17.5 21,17V7C21,6.5 20.5,6 20,6H4C3.5,6 3,6.5 3,7V17C3,17.5 3.5,18 4,18H12L10.5,20V21H13.5V20L12,18H20Z"
								/>
							</svg>
						</div>
						<h2 class="text-3xl font-bold text-primary-800">Informática</h2>
					</div>
					<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div class="bg-primary-50 p-6 rounded-xl">
							<h3 class="text-xl font-semibold text-primary-50 mb-3">
								Formatação
							</h3>
							<p class="text-primary-50 mb-4">
								Formatação completa e instalação de sistemas.
							</p>
							<a
								href="https://wa.me/5531972379038?text=Ol%C3%A1%2C%20Marcus.%20Gostaria%20de%20contratar%20um%20servi%C3%A7o.%20Poderia%20informar%20disponibilidade%20e%20valores%3F%20Meu%20nome%20%C3%A9%20___"
								target="_blank"
								class="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block"
							>
								💬 Agendar Serviço
							</a>
						</div>
						<div class="bg-primary-50 p-6 rounded-xl">
							<h3 class="text-xl font-semibold text-primary-50 mb-3">
								Atualizações
							</h3>
							<p class="text-primary-50 mb-4">Upgrade de hardware e software.</p>
							<a
								href="https://wa.me/5531972379038?text=Ol%C3%A1%2C%20Marcus.%20Gostaria%20de%20contratar%20um%20servi%C3%A7o.%20Poderia%20informar%20disponibilidade%20e%20valores%3F%20Meu%20nome%20%C3%A9%20___"
								target="_blank"
								class="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block"
							>
								💬 Agendar Serviço
							</a>
						</div>
						<div class="bg-primary-50 p-6 rounded-xl">
							<h3 class="text-xl font-semibold text-primary-50 mb-3">
								Limpeza de Hardware
							</h3>
							<p class="text-primary-50 mb-4">
								Limpeza interna e externa de computadores.
							</p>
							<a
								href="https://wa.me/5531972379038?text=Ol%C3%A1%2C%20Marcus.%20Gostaria%20de%20contratar%20um%20servi%C3%A7o.%20Poderia%20informar%20disponibilidade%20e%20valores%3F%20Meu%20nome%20%C3%A9%20___"
								target="_blank"
								class="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block"
							>
								💬 Agendar Serviço
							</a>
						</div>
						<div class="bg-primary-50 p-6 rounded-xl">
							<h3 class="text-xl font-semibold text-primary-50 mb-3">
								Manutenção Preventiva
							</h3>
							<p class="text-primary-50 mb-4">
								Manutenção regular para melhor desempenho.
							</p>
							<a
								href="https://wa.me/5531972379038?text=Ol%C3%A1%2C%20Marcus.%20Gostaria%20de%20contratar%20um%20servi%C3%A7o.%20Poderia%20informar%20disponibilidade%20e%20valores%3F%20Meu%20nome%20%C3%A9%20___"
								target="_blank"
								class="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block"
							>
								💬 Agendar Serviço
							</a>
						</div>
					</div>
				</div>

				<!-- Serviços Gerais -->
				<div class="bg-primary-50 rounded-2xl p-8 shadow-lg">
					<div class="flex items-center mb-6">
						<div class="bg-primary-600 p-3 rounded-full mr-4">
							<svg
								class="w-8 h-8 text-white"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"
								/>
							</svg>
						</div>
						<h2 class="text-3xl font-bold text-primary-800">Serviços Gerais</h2>
					</div>
					<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div class="bg-primary-50 p-6 rounded-xl">
							<h3 class="text-xl font-semibold text-primary-50 mb-3">
								Montagem de Móveis
							</h3>
							<p class="text-primary-50 mb-4">
								Montagem profissional de móveis planejados.
							</p>
							<a
								href="https://wa.me/5531972379038?text=Ol%C3%A1%2C%20Marcus.%20Gostaria%20de%20contratar%20um%20servi%C3%A7o.%20Poderia%20informar%20disponibilidade%20e%20valores%3F%20Meu%20nome%20%C3%A9%20___"
								target="_blank"
								class="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block"
							>
								💬 Contratar Agora
							</a>
						</div>
						<div class="bg-primary-50 p-6 rounded-xl">
							<h3 class="text-xl font-semibold text-primary-50 mb-3">Pintura</h3>
							<p class="text-primary-50 mb-4">Pintura residencial e comercial.</p>
							<a
								href="https://wa.me/5531972379038?text=Ol%C3%A1%2C%20Marcus.%20Gostaria%20de%20contratar%20um%20servi%C3%A7o.%20Poderia%20informar%20disponibilidade%20e%20valores%3F%20Meu%20nome%20%C3%A9%20___"
								target="_blank"
								class="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block"
							>
								💬 Contratar Agora
							</a>
						</div>
						<div class="bg-primary-50 p-6 rounded-xl">
							<h3 class="text-xl font-semibold text-primary-50 mb-3">
								Reparos Diversos
							</h3>
							<p class="text-primary-50 mb-4">
								Pequenos reparos e consertos domésticos.
							</p>
							<a
								href="https://wa.me/5531972379038?text=Ol%C3%A1%2C%20Marcus.%20Gostaria%20de%20contratar%20um%20servi%C3%A7o.%20Poderia%20informar%20disponibilidade%20e%20valores%3F%20Meu%20nome%20%C3%A9%20___"
								target="_blank"
								class="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block"
							>
								💬 Contratar Agora
							</a>
						</div>
						<div class="bg-primary-50 p-6 rounded-xl">
							<h3 class="text-xl font-semibold text-primary-50 mb-3">
								Instalações
							</h3>
							<p class="text-primary-50 mb-4">
								Instalação de equipamentos e acessórios.
							</p>
							<a
								href="https://wa.me/5531972379038?text=Ol%C3%A1%2C%20Marcus.%20Gostaria%20de%20contratar%20um%20servi%C3%A7o.%20Poderia%20informar%20disponibilidade%20e%20valores%3F%20Meu%20nome%20%C3%A9%20___"
								target="_blank"
								class="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block"
							>
								💬 Contratar Agora
							</a>
						</div>
					</div>
				</div>

				<!-- Higienização -->
				<div class="bg-primary-50 rounded-2xl p-8 shadow-lg">
					<div class="flex items-center mb-6">
						<div class="bg-primary-600 p-3 rounded-full mr-4">
							<svg
								class="w-8 h-8 text-white"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"
								/>
							</svg>
						</div>
						<h2 class="text-3xl font-bold text-primary-800">
							Higienização de Estofados
						</h2>
					</div>
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div class="bg-primary-50 p-6 rounded-xl">
							<h3 class="text-xl font-semibold text-primary-50 mb-3">Sofás</h3>
							<p class="text-primary-50 mb-4">
								Limpeza profunda e higienização de sofás.
							</p>
							<a
								href="https://wa.me/5531972379038?text=Ol%C3%A1%2C%20Marcus.%20Gostaria%20de%20contratar%20um%20servi%C3%A7o.%20Poderia%20informar%20disponibilidade%20e%20valores%3F%20Meu%20nome%20%C3%A9%20___"
								target="_blank"
								class="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block"
							>
								🧽 Agendar Limpeza
							</a>
						</div>
						<div class="bg-primary-50 p-6 rounded-xl">
							<h3 class="text-xl font-semibold text-primary-50 mb-3">Cadeiras</h3>
							<p class="text-primary-50 mb-4">
								Higienização de cadeiras e poltronas.
							</p>
							<a
								href="https://wa.me/5531972379038?text=Ol%C3%A1%2C%20Marcus.%20Gostaria%20de%20contratar%20um%20servi%C3%A7o.%20Poderia%20informar%20disponibilidade%20e%20valores%3F%20Meu%20nome%20%C3%A9%20___"
								target="_blank"
								class="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block"
							>
								🧽 Agendar Limpeza
							</a>
						</div>
						<div class="bg-primary-50 p-6 rounded-xl">
							<h3 class="text-xl font-semibold text-primary-50 mb-3">Colchões</h3>
							<p class="text-primary-50 mb-4">
								Limpeza e desinfecção de colchões.
							</p>
							<a
								href="https://wa.me/5531972379038?text=Ol%C3%A1%2C%20Marcus.%20Gostaria%20de%20contratar%20um%20servi%C3%A7o.%20Poderia%20informar%20disponibilidade%20e%20valores%3F%20Meu%20nome%20%C3%A9%20___"
								target="_blank"
								class="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block"
							>
								🧽 Agendar Limpeza
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Call to Action Final -->
			<div class="text-center mt-16">
				<div class="bg-gradient-to-b from-primary-600 via-primary-700 to-primary-950 rounded-2xl p-8 text-white">
					<h3 class="text-3xl font-bold mb-4">Precisa de Algum Serviço?</h3>
					<p class="text-xl mb-6">
						Entre em contato agora mesmo e solicite seu orçamento sem
						compromisso!
					</p>
					<a
						href="https://wa.me/5531972379038?text=Ol%C3%A1%2C%20Marcus.%20Gostaria%20de%20contratar%20um%20servi%C3%A7o.%20Poderia%20informar%20disponibilidade%20e%20valores%3F%20Meu%20nome%20%C3%A9%20___"
						target="_blank"
						class="bg-primary-100 text-primary-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors inline-block"
					>
						📱 Chamar no WhatsApp
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	// Componente simples sem lógica adicional necessária
</script>