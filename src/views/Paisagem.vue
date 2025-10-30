<template>
	<div class="paisagem-container">
		<!-- Céu com gradiente dinâmico -->
		<div class="sky" :style="skyStyle"></div>

		<!-- Sol -->
		<div class="sun" ref="sun"></div>

		<!-- Nuvens -->
		<div class="clouds">
			<div class="cloud cloud-1" ref="cloud1"></div>
			<div class="cloud cloud-2" ref="cloud2"></div>
			<div class="cloud cloud-3" ref="cloud3"></div>
			<div class="cloud cloud-4" ref="cloud4"></div>
			<div class="cloud cloud-5" ref="cloud5"></div>
			<div class="cloud cloud-1" ref="cloud1"></div>
			<div class="cloud cloud-2" ref="cloud2"></div>
			<div class="cloud cloud-3" ref="cloud3"></div>
			<div class="cloud cloud-4" ref="cloud4"></div>
			<div class="cloud cloud-5" ref="cloud5"></div>
		</div>

		<!-- Aves -->
		<div class="birds">
			<div class="bird bird-1" ref="bird1">
				<div class="bird-body"></div>
			</div>
			<div class="bird bird-2" ref="bird2">
				<div class="bird-body"></div>
			</div>
		</div>

		<!-- Montanhas (camadas de parallax) -->
		<div class="mountains">
			<div class="mountain-layer mountain-back" ref="mountainBack"></div>
			<div class="mountain-layer mountain-mid" ref="mountainMid"></div>
			<div class="mountain-layer mountain-front" ref="mountainFront"></div>
		</div>

		<!-- Árvores -->
		<div class="trees">
			<div class="tree tree-left" ref="treeLeft">
				<div class="tree-trunk"></div>
				<div class="tree-leaves"></div>
			</div>
			<div class="tree tree-right" ref="treeRight">
				<div class="tree-trunk"></div>
				<div class="tree-leaves"></div>
			</div>
			<div class="tree tree-center" ref="treeCenter">
				<div class="tree-trunk"></div>
				<div class="tree-leaves"></div>
			</div>
		</div>

		<!-- Conteúdo para scroll -->
		<div class="content">
			<section class="intro">
				<h1>Paisagem Animada</h1>
				<p>Role para baixo e veja a magia acontecer</p>
			</section>

			<section class="section">
				<h2>O Sol se Move</h2>
				<p>Conforme você rola, o sol atravessa o céu mudando as cores</p>
			</section>

			<section class="section">
				<h2>Montanhas em Parallax</h2>
				<p>Cada camada de montanha se move em velocidades diferentes</p>
			</section>

			<section class="section">
				<h2>Árvores Balançam</h2>
				<p>As árvores se movem suavemente com o vento</p>
			</section>

			<section class="section">
				<h2>Aves Voam</h2>
				<p>Os pássaros cruzam o céu em diferentes alturas</p>
			</section>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted, onUnmounted, computed } from "vue";
	import { gsap } from "gsap";

	// Refs para elementos
	const sun = ref(null);
	const cloud1 = ref(null);
	const cloud2 = ref(null);
	const cloud3 = ref(null);
	const cloud4 = ref(null);
	const cloud5 = ref(null);
	const bird1 = ref(null);
	const bird2 = ref(null);
	const mountainBack = ref(null);
	const mountainMid = ref(null);
	const mountainFront = ref(null);
	const treeLeft = ref(null);
	const treeRight = ref(null);
	const treeCenter = ref(null);

	// Estado do scroll
	const scrollY = ref(0);

	// Computed para o estilo do céu
	const skyStyle = computed(() => {
		const progress = Math.min(scrollY.value / 2000, 1);

		// Cores do céu: manhã -> tarde -> noite
		const morning = { r: 135, g: 206, b: 235 }; // Sky blue
		const afternoon = { r: 255, g: 165, b: 0 }; // Orange
		const night = { r: 25, g: 25, b: 112 }; // Midnight blue

		let color;
		if (progress < 0.5) {
			// Manhã para tarde
			const p = progress * 2;
			color = {
				r: Math.round(morning.r + (afternoon.r - morning.r) * p),
				g: Math.round(morning.g + (afternoon.g - morning.g) * p),
				b: Math.round(morning.b + (afternoon.b - morning.b) * p),
			};
		} else {
			// Tarde para noite
			const p = (progress - 0.5) * 2;
			color = {
				r: Math.round(afternoon.r + (night.r - afternoon.r) * p),
				g: Math.round(afternoon.g + (night.g - afternoon.g) * p),
				b: Math.round(afternoon.b + (night.b - afternoon.b) * p),
			};
		}

		return {
			background: `linear-gradient(to bottom, rgb(${color.r}, ${color.g}, ${
				color.b
			}), rgb(${Math.max(color.r - 50, 0)}, ${Math.max(
				color.g - 50,
				0
			)}, ${Math.max(color.b - 50, 0)}))`,
		};
	});

	// Função de scroll
	const handleScroll = () => {
		scrollY.value = window.scrollY;
		const progress = Math.min(scrollY.value / 2000, 1);

		// Animar sol
		if (sun.value) {
			gsap.to(sun.value, {
				x: progress * 800 - 100,
				y: Math.sin(progress * Math.PI) * -200 + 100,
				duration: 0.1,
				ease: "none",
			});
		}

		// Animar nuvens (parallax)
		if (cloud1.value)
			gsap.to(cloud1.value, { x: -progress * 100, duration: 0.1 });
		if (cloud2.value)
			gsap.to(cloud2.value, { x: -progress * 150, duration: 0.1 });
		if (cloud3.value)
			gsap.to(cloud3.value, { x: -progress * 80, duration: 0.1 });
		if (cloud4.value)
			gsap.to(cloud4.value, { x: -progress * 120, duration: 0.1 });
		if (cloud5.value)
			gsap.to(cloud5.value, { x: -progress * 90, duration: 0.1 });

		// Animar montanhas (parallax)
		if (mountainBack.value)
			gsap.to(mountainBack.value, { x: -progress * 50, duration: 0.1 });
		if (mountainMid.value)
			gsap.to(mountainMid.value, { x: -progress * 100, duration: 0.1 });
		if (mountainFront.value)
			gsap.to(mountainFront.value, { x: -progress * 150, duration: 0.1 });

		// Animar aves
		if (bird1.value) {
			gsap.to(bird1.value, {
				x: progress * 600 - 100,
				y: Math.sin(progress * Math.PI * 2) * 50,
				duration: 0.1,
			});
		}
		if (bird2.value) {
			gsap.to(bird2.value, {
				x: progress * 800 + 200,
				y: Math.sin(progress * Math.PI * 3) * 30 + 50,
				duration: 0.1,
			});
		}
	};

	onMounted(() => {
		// Animações iniciais das árvores
		gsap.to(treeLeft.value, {
			rotation: 2,
			duration: 3,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
		});

		gsap.to(treeRight.value, {
			rotation: -1.5,
			duration: 2.5,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
		});

		gsap.to(treeCenter.value, {
			rotation: 1,
			duration: 4,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
		});

		// Animação das aves (batida de asas)
		gsap.to(".bird-body", {
			scaleY: 0.8,
			duration: 0.3,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
		});

		// Event listener para scroll
		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Chamada inicial
	});

	onUnmounted(() => {
		window.removeEventListener("scroll", handleScroll);
	});
</script>

<style scoped>
	.paisagem-container {
		position: relative;
		width: 100%;
		min-height: 300vh;
		overflow-x: hidden;
	}

	.sky {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 1;
	}

	.sun {
		position: fixed;
		top: 20%;
		left: 10%;
		width: 120px;
		height: 120px;
		background: radial-gradient(circle, #fff9c4 0%, #ffeb3b 70%, #ffc107 100%);
		border-radius: 50%;
		box-shadow: 0 0 50px rgba(255, 235, 59, 0.8);
		z-index: 2;
	}

	.clouds {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 3;
	}

	.cloud {
		position: absolute;
		background: rgba(255, 255, 255, 0.9);
		border-radius: 50px;
	}

	.cloud::before,
	.cloud::after {
		content: "";
		position: absolute;
		background: rgba(255, 255, 255, 0.9);
		border-radius: 50px;
	}

	.cloud-1 {
		width: 80px;
		height: 40px;
		top: 15%;
		left: 20%;
	}

	.cloud-1::before {
		width: 50px;
		height: 50px;
		top: -25px;
		left: 10px;
	}

	.cloud-1::after {
		width: 60px;
		height: 40px;
		top: -15px;
		right: 10px;
	}

	.cloud-2 {
		width: 100px;
		height: 50px;
		top: 25%;
		left: 60%;
	}

	.cloud-2::before {
		width: 60px;
		height: 60px;
		top: -30px;
		left: 15px;
	}

	.cloud-2::after {
		width: 70px;
		height: 50px;
		top: -20px;
		right: 15px;
	}

	.cloud-3 {
		width: 70px;
		height: 35px;
		top: 10%;
		left: 80%;
	}

	.cloud-3::before {
		width: 40px;
		height: 40px;
		top: -20px;
		left: 10px;
	}

	.cloud-3::after {
		width: 50px;
		height: 35px;
		top: -15px;
		right: 10px;
	}

	.cloud-4 {
		width: 90px;
		height: 45px;
		top: 30%;
		left: 30%;
	}

	.cloud-4::before {
		width: 55px;
		height: 55px;
		top: -27px;
		left: 12px;
	}

	.cloud-4::after {
		width: 65px;
		height: 45px;
		top: -18px;
		right: 12px;
	}

	.cloud-5 {
		width: 60px;
		height: 30px;
		top: 20%;
		left: 5%;
	}

	.cloud-5::before {
		width: 35px;
		height: 35px;
		top: -17px;
		left: 8px;
	}

	.cloud-5::after {
		width: 45px;
		height: 30px;
		top: -12px;
		right: 8px;
	}

	.birds {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 4;
	}

	.bird {
		position: absolute;
		width: 30px;
		height: 20px;
	}

	.bird-1 {
		top: 25%;
		left: -50px;
	}

	.bird-2 {
		top: 35%;
		left: -100px;
	}

	.bird-body {
		width: 100%;
		height: 100%;
		background: #333;
		border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
		position: relative;
	}

	.bird-body::before,
	.bird-body::after {
		content: "";
		position: absolute;
		width: 15px;
		height: 8px;
		background: #333;
		border-radius: 50%;
		top: 2px;
	}

	.bird-body::before {
		left: -10px;
		transform: rotate(-20deg);
	}

	.bird-body::after {
		right: -10px;
		transform: rotate(20deg);
	}

	.mountains {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 70vh;
		z-index: 5;
	}

	.mountain-layer {
		position: absolute;
		bottom: 0;
		width: 120%;
		height: 100%;
	}

	.mountain-back {
		background: linear-gradient(to bottom, #a8d5ba 0%, #7fb069 100%);
		clip-path: polygon(
			0% 100%,
			0% 60%,
			15% 45%,
			25% 50%,
			35% 40%,
			50% 55%,
			65% 35%,
			80% 45%,
			90% 40%,
			100% 50%,
			100% 100%
		);
		opacity: 0.7;
	}

	.mountain-mid {
		background: linear-gradient(to bottom, #7fb069 0%, #588b5a 100%);
		clip-path: polygon(
			0% 100%,
			0% 70%,
			20% 55%,
			30% 60%,
			45% 45%,
			60% 65%,
			75% 50%,
			85% 55%,
			100% 60%,
			100% 100%
		);
		opacity: 0.8;
	}

	.mountain-front {
		background: linear-gradient(to bottom, #588b5a 0%, #3e6b47 100%);
		clip-path: polygon(
			0% 100%,
			0% 80%,
			25% 65%,
			40% 70%,
			55% 55%,
			70% 75%,
			85% 60%,
			100% 70%,
			100% 100%
		);
	}

	.trees {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 6;
	}

	.tree {
		position: absolute;
		bottom: 0;
		transform-origin: bottom center;
	}

	.tree-left {
		left: 5%;
		width: 80px;
		height: 200px;
	}

	.tree-right {
		right: 5%;
		width: 100px;
		height: 250px;
	}

	.tree-center {
		left: 50%;
		transform: translateX(-50%);
		width: 60px;
		height: 180px;
	}

	.tree-trunk {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 15px;
		height: 60px;
		background: linear-gradient(to bottom, #8b4513 0%, #654321 100%);
		border-radius: 3px;
	}

	.tree-leaves {
		position: absolute;
		bottom: 40px;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		height: 160px;
		background: radial-gradient(ellipse at center, #2d5016 0%, #1a3009 100%);
		border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
	}

	.tree-leaves::before {
		content: "";
		position: absolute;
		top: -20px;
		left: 20%;
		width: 60%;
		height: 80px;
		background: radial-gradient(ellipse at center, #2d5016 0%, #1a3009 100%);
		border-radius: 50%;
	}

	.tree-leaves::after {
		content: "";
		position: absolute;
		top: -10px;
		left: 10%;
		width: 80%;
		height: 60px;
		background: radial-gradient(ellipse at center, #2d5016 0%, #1a3009 100%);
		border-radius: 50%;
	}

	.content {
		position: relative;
		z-index: 10;
		padding-top: 100vh;
		background: rgba(0, 0, 0, 0.1);
	}

	.intro {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: white;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
	}

	.intro h1 {
		font-size: 4rem;
		margin-bottom: 1rem;
		font-weight: bold;
	}

	.intro p {
		font-size: 1.5rem;
	}

	.section {
		height: 50vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: white;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
		padding: 2rem;
	}

	.section h2 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		font-weight: bold;
	}

	.section p {
		font-size: 1.2rem;
		max-width: 600px;
	}
</style>
