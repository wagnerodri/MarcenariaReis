// Animações sofisticadas adicionais para a Marcenaria
document.addEventListener('DOMContentLoaded', function() {
    
    // Sistema de ondas fluidas no fundo
    function createFluidWaves() {
        const waveContainer = document.createElement('div');
        waveContainer.className = 'fluid-waves';
        waveContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -2;
            background: linear-gradient(45deg, 
                rgba(212, 165, 116, 0.05) 0%, 
                rgba(193, 150, 83, 0.03) 25%, 
                rgba(230, 126, 34, 0.08) 50%, 
                rgba(212, 165, 116, 0.04) 75%, 
                rgba(193, 150, 83, 0.06) 100%);
            background-size: 400% 400%;
            animation: fluidGradient 20s ease infinite;
        `;
        document.body.appendChild(waveContainer);
    }
    
    // Partículas de poeira dourada
    function createGoldenDust() {
        const dustContainer = document.createElement('div');
        dustContainer.className = 'golden-dust-container';
        dustContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        `;
        document.body.appendChild(dustContainer);
        
        // Criar 30 partículas de poeira dourada
        for(let i = 0; i < 30; i++) {
            const dust = document.createElement('div');
            dust.className = 'golden-dust';
            dust.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 1}px;
                height: ${Math.random() * 4 + 1}px;
                background: radial-gradient(circle, rgba(255, 215, 0, 0.6), rgba(255, 215, 0, 0.2));
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: 
                    floatGolden ${Math.random() * 20 + 15}s linear infinite,
                    twinkle ${Math.random() * 3 + 2}s ease-in-out infinite;
                animation-delay: ${Math.random() * 10}s;
            `;
            dustContainer.appendChild(dust);
        }
    }
    
    // Efeito de respiração nos cards
    function addBreathingEffect() {
        const cards = document.querySelectorAll('.card-modern, .product-card, .project-card');
        cards.forEach((card, index) => {
            card.style.animation = `breathe ${4 + index * 0.2}s ease-in-out infinite`;
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }
    
    // Efeito de aurora boreal sutil
    function createAuroraEffect() {
        const aurora = document.createElement('div');
        aurora.className = 'aurora-effect';
        aurora.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -3;
            background: linear-gradient(120deg, 
                transparent 0%, 
                rgba(212, 165, 116, 0.03) 25%, 
                transparent 40%, 
                rgba(193, 150, 83, 0.05) 60%, 
                transparent 80%, 
                rgba(230, 126, 34, 0.02) 100%);
            background-size: 300% 300%;
            animation: aurora 30s ease infinite;
        `;
        document.body.appendChild(aurora);
    }
    
    // Efeito de ondas de energia nos botões
    function addEnergyWaves() {
        const buttons = document.querySelectorAll('.btn-primary-modern, .btn-success, .btn-outline-success');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const wave = document.createElement('div');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                wave.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: radial-gradient(circle, rgba(255,255,255,0.4), transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    z-index: 1;
                `;
                
                button.style.position = 'relative';
                button.appendChild(wave);
                
                setTimeout(() => wave.remove(), 600);
            });
        });
    }
    
    // Animação de entrada escalonada para elementos
    function animateElementsOnScroll() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                        entry.target.style.filter = 'blur(0)';
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.card-modern, .product-card, h2, h3, p').forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px) scale(0.95)';
            el.style.filter = 'blur(2px)';
            el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(el);
        });
    }
    
    // Efeito de cursor luminoso
    function createLuminousCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'luminous-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(212, 165, 116, 0.4), transparent 70%);
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            mix-blend-mode: screen;
        `;
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX - 10}px`;
            cursor.style.top = `${e.clientY - 10}px`;
        });
        
        // Aumentar cursor em elementos interativos
        document.querySelectorAll('a, button, .card-modern, .product-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.background = 'radial-gradient(circle, rgba(230, 126, 34, 0.6), transparent 70%)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'radial-gradient(circle, rgba(212, 165, 116, 0.4), transparent 70%)';
            });
        });
    }
    
    // Adicionar estilos CSS para as animações
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        @keyframes fluidGradient {
            0% { background-position: 0% 50%; }
            25% { background-position: 50% 25%; }
            50% { background-position: 100% 50%; }
            75% { background-position: 50% 75%; }
            100% { background-position: 0% 50%; }
        }
        
        @keyframes floatGolden {
            0% {
                transform: translateY(100vh) translateX(0px) rotate(0deg);
                opacity: 0;
            }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% {
                transform: translateY(-100px) translateX(50px) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes twinkle {
            0%, 100% { 
                opacity: 0.3; 
                transform: scale(1);
                box-shadow: 0 0 5px rgba(255, 215, 0, 0.3);
            }
            50% { 
                opacity: 1; 
                transform: scale(1.5);
                box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
            }
        }
        
        @keyframes breathe {
            0%, 100% { 
                transform: scale(1) translateY(0);
                filter: brightness(1);
            }
            50% { 
                transform: scale(1.02) translateY(-2px);
                filter: brightness(1.1);
            }
        }
        
        @keyframes aurora {
            0% { background-position: 0% 0%; opacity: 0.3; }
            25% { background-position: 50% 50%; opacity: 0.6; }
            50% { background-position: 100% 100%; opacity: 0.4; }
            75% { background-position: 50% 50%; opacity: 0.7; }
            100% { background-position: 0% 0%; opacity: 0.3; }
        }
        
        @keyframes ripple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        @keyframes shimmerText {
            0% { text-shadow: 0 0 5px rgba(212, 165, 116, 0.5); }
            50% { text-shadow: 0 0 20px rgba(230, 126, 34, 0.8), 0 0 30px rgba(212, 165, 116, 0.6); }
            100% { text-shadow: 0 0 5px rgba(212, 165, 116, 0.5); }
        }
        
        /* Aplicar animação de brilho nos títulos */
        h1, h2, h3 {
            animation: shimmerText 4s ease-in-out infinite;
        }
        
        /* Efeito hover melhorado para cards */
        .card-modern:hover, .product-card:hover {
            animation: none;
            transform: scale(1.05) translateY(-10px) !important;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2), 0 0 20px rgba(212, 165, 116, 0.3) !important;
            filter: brightness(1.1) !important;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        /* Efeito de onda no hover dos botões */
        .btn-primary-modern, .btn-success {
            overflow: hidden;
            position: relative;
        }
        
        .btn-primary-modern::before, .btn-success::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
        }
        
        .btn-primary-modern:hover::before, .btn-success:hover::before {
            left: 100%;
        }
        
        /* Animação suave para a navbar */
        .navbar {
            animation: navbarFloat 6s ease-in-out infinite;
        }
        
        @keyframes navbarFloat {
            0%, 100% { 
                transform: translateY(0);
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
            }
            50% { 
                transform: translateY(-2px);
                box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(212, 165, 116, 0.2);
            }
        }
    `;
    document.head.appendChild(animationStyles);
    
    // Inicializar todas as animações
    createFluidWaves();
    createGoldenDust();
    addBreathingEffect();
    createAuroraEffect();
    addEnergyWaves();
    animateElementsOnScroll();
    createLuminousCursor();
    
    // Efeito de neve dourada em ocasiões especiais
    function createGoldenSnow() {
        const now = new Date();
        const isSpecialTime = now.getMonth() === 11 || now.getMonth() === 0; // Dezembro ou Janeiro
        
        if (isSpecialTime) {
            for(let i = 0; i < 50; i++) {
                const snowflake = document.createElement('div');
                snowflake.innerHTML = '❄';
                snowflake.style.cssText = `
                    position: fixed;
                    color: rgba(255, 215, 0, 0.6);
                    font-size: ${Math.random() * 15 + 10}px;
                    left: ${Math.random() * 100}%;
                    top: -20px;
                    pointer-events: none;
                    z-index: -1;
                    animation: snowfall ${Math.random() * 10 + 5}s linear infinite;
                    animation-delay: ${Math.random() * 5}s;
                `;
                document.body.appendChild(snowflake);
                
                // Remover após a animação
                setTimeout(() => snowflake.remove(), 15000);
            }
        }
    }
    
    // Adicionar CSS para neve
    const snowStyles = document.createElement('style');
    snowStyles.textContent = `
        @keyframes snowfall {
            0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(snowStyles);
    
    createGoldenSnow();
    
    console.log('✨ Animações sofisticadas da Marcenaria ativadas!');
});

// Efeito de paralaxe avançado para o scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll('.card-modern, .product-card');
    const speed = 0.5;
    
    parallax.forEach((element, index) => {
        const yPos = -(scrolled * speed * (index * 0.1 + 0.1));
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Adicionar efeito de magnetismo entre elementos próximos
document.addEventListener('mousemove', (e) => {
    const magnetElements = document.querySelectorAll('.btn-primary-modern, .btn-success');
    
    magnetElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
            Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );
        
        if (distance < 100) {
            const strength = (100 - distance) / 100;
            const moveX = (e.clientX - centerX) * strength * 0.1;
            const moveY = (e.clientY - centerY) * strength * 0.1;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + strength * 0.05})`;
        } else {
            element.style.transform = 'translate(0px, 0px) scale(1)';
        }
    });
});