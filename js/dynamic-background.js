// =========================================
// FUNDO DINÂMICO COM PARTÍCULAS ANIMADAS
// =========================================

class DynamicBackground {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.animationId = null;
        this.mouse = { x: 0, y: 0 };
        
        this.init();
    }
    
    init() {
        this.createCanvas();
        this.createParticles();
        this.bindEvents();
        this.animate();
    }
    
    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-2';
        this.canvas.style.pointerEvents = 'none';
        
        document.body.appendChild(this.canvas);
        
        this.ctx = this.canvas.getContext('2d');
        this.resize();
    }
    
    createParticles() {
        const particleCount = Math.min(50, window.innerWidth / 20);
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.1,
                color: this.getRandomColor(),
                life: Math.random() * 100 + 100,
                maxLife: 200
            });
        }
    }
    
    getRandomColor() {
        const colors = [
            'rgba(230, 126, 34, 0.3)',   // Orange wood
            'rgba(212, 175, 55, 0.2)',   // Gold
            'rgba(255, 255, 255, 0.1)',  // White
            'rgba(100, 149, 237, 0.2)',  // Blue
            'rgba(139, 69, 19, 0.3)'     // Brown wood
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    updateParticles() {
        this.particles.forEach((particle, index) => {
            // Movimento básico
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Interação com mouse
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                particle.vx -= (dx / distance) * force * 0.01;
                particle.vy -= (dy / distance) * force * 0.01;
            }
            
            // Limites da tela
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy *= -1;
            }
            
            // Manter partículas na tela
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
            
            // Efeito de pulsação
            particle.size += Math.sin(Date.now() * 0.001 + index) * 0.01;
            
            // Ciclo de vida
            particle.life--;
            if (particle.life <= 0) {
                // Reposicionar partícula
                particle.x = Math.random() * this.canvas.width;
                particle.y = Math.random() * this.canvas.height;
                particle.life = particle.maxLife;
                particle.color = this.getRandomColor();
            }
        });
    }
    
    drawParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((particle, index) => {
            // Desenhar partícula
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.fill();
            
            // Conectar partículas próximas
            this.particles.forEach((otherParticle, otherIndex) => {
                if (index !== otherIndex) {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 80) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(particle.x, particle.y);
                        this.ctx.lineTo(otherParticle.x, otherParticle.y);
                        this.ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 80)})`;
                        this.ctx.lineWidth = 0.5;
                        this.ctx.stroke();
                    }
                }
            });
        });
    }
    
    animate() {
        this.updateParticles();
        this.drawParticles();
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas) {
            this.canvas.remove();
        }
    }
}

// =========================================
// EFEITOS GEOMÉTRICOS FLUTUANTES
// =========================================

class FloatingShapes {
    constructor() {
        this.shapes = [];
        this.init();
    }
    
    init() {
        this.createShapes();
        this.animate();
    }
    
    createShapes() {
        const shapeCount = Math.min(8, window.innerWidth / 200);
        
        for (let i = 0; i < shapeCount; i++) {
            const shape = document.createElement('div');
            shape.className = 'floating-shape';
            shape.style.cssText = `
                position: fixed;
                background: linear-gradient(135deg, 
                    rgba(230, 126, 34, 0.05) 0%, 
                    rgba(212, 175, 55, 0.03) 100%);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: ${Math.random() > 0.5 ? '50%' : '10px'};
                width: ${Math.random() * 100 + 50}px;
                height: ${Math.random() * 100 + 50}px;
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                z-index: -1;
                pointer-events: none;
                backdrop-filter: blur(5px);
                animation: floatShape ${Math.random() * 20 + 10}s linear infinite;
            `;
            
            document.body.appendChild(shape);
            this.shapes.push(shape);
        }
    }
    
    animate() {
        // Adiciona variação nas animações
        this.shapes.forEach((shape, index) => {
            const delay = index * 2;
            shape.style.animationDelay = `${delay}s`;
        });
    }
}

// Adicionar CSS para animações das formas
const floatingShapeCSS = `
    @keyframes floatShape {
        0% {
            transform: translateY(100vh) rotate(0deg) scale(0.5);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg) scale(1.2);
            opacity: 0;
        }
    }
    
    .floating-shape:nth-child(odd) {
        animation-direction: reverse;
    }
    
    .floating-shape:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }
`;

// Injetar CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = floatingShapeCSS;
document.head.appendChild(styleSheet);

// =========================================
// INICIALIZAÇÃO
// =========================================

// Aguardar carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Verificar se não está em dispositivos móveis para performance
    if (window.innerWidth > 768) {
        const dynamicBg = new DynamicBackground();
        const floatingShapes = new FloatingShapes();
        
        // Limpar recursos quando necessário
        window.addEventListener('beforeunload', () => {
            dynamicBg.destroy();
        });
    }
});