(function() {
    // 1. Injeção dinâmica de CSS para garantir fundo zero e animações
    const style = document.createElement('style');
    style.innerHTML = `
        /* Camada das partículas: ocupa tudo e não tem fundo */
        .particle-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none; /* Deixa cliques passarem para os botões do site */
            z-index: 1; /* Fica atrás dos textos (z-index 10) */
            overflow: hidden;
            background: transparent !important;
        }

        /* Estilo individual de cada letra/pontuação */
        .particle {
            position: absolute;
            color: rgba(115, 103, 240, 0.3); /* Roxo suave e transparente */
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 800;
            user-select: none;
            pointer-events: auto; /* Permite que a partícula seja clicada */
            cursor: pointer;
            animation: floatPath linear infinite;
            will-change: transform, opacity;
        }

        /* Animação de subida com rotação */
        @keyframes floatPath {
            0% { 
                transform: translateY(110vh) rotate(0deg); 
                opacity: 0; 
            }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { 
                transform: translateY(-20vh) rotate(360deg); 
                opacity: 0; 
            }
        }

        /* Efeito de explosão ao clicar */
        .particle.explode {
            animation: none !important;
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transform: scale(6) !important;
            opacity: 0 !important;
            filter: blur(8px);
        }
    `;
    document.head.appendChild(style);

    // 2. Criar o container de partículas
    const container = document.createElement('div');
    container.className = 'particle-canvas';
    document.body.prepend(container);

    // Alfabeto e pontuações para flutuar
    const chars = ['A', 'a', 'B', '?', '!', 'C', 'P', 'Q', 'H', 'z', ';', ':', 'À', '...', 'Y', 'X', '!', '?'];
    
    function createParticle(isInitial = false) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.innerText = chars[Math.floor(Math.random() * chars.length)];
        
        // Configurações aleatórias para variedade
        const size = Math.random() * (45 - 18) + 18; // Tamanhos entre 18px e 45px
        const duration = Math.random() * (22 - 12) + 12; // Velocidades entre 12s e 22s
        const leftPosition = Math.random() * 98; // Espalhar pela largura da tela
        
        p.style.fontSize = size + 'px';
        p.style.left = leftPosition + 'vw';
        p.style.animationDuration = duration + 's';
        
        // Se for o início, as partículas começam em pontos diferentes da animação
        if (isInitial) {
            p.style.animationDelay = -(Math.random() * duration) + 's';
        }

        // Lógica de reação ao clique/toque
        const handleInteraction = () => {
            p.classList.add('explode');
            // Remove a partícula após a explosão e cria uma nova para manter o fluxo
            setTimeout(() => {
                p.remove();
                createParticle();
            }, 500);
        };

        p.addEventListener('mousedown', handleInteraction);
        p.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Evita scroll ao tocar na partícula
            handleInteraction();
        });

        container.appendChild(p);
    }

    // Gerar 35 partículas iniciais para preencher a tela
    for (let i = 0; i < 35; i++) {
        createParticle(true);
    }
})();