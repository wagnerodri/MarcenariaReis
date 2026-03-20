// ===================================
// FUNDO INOVADOR COM TEMA MARCENARIA
// ===================================

class MarcenariaBackground {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.gears = [];
        this.sawdust = [];
        this.woodChips = [];
        this.tools = [];
        this.mouse = { x: 0, y: 0 };
        this.init();
    }

    init() {
        // Criar canvas
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'particle-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.opacity = '0.8';
        
        document.body.prepend(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        
        this.resizeCanvas();
        this.createParticles();
        this.createGears();
        this.createSawdust();
        this.createWoodChips();
        this.createTools();
        this.animate();
        
        // Event listeners
        window.addEventListener('resize', () => this.resizeCanvas());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    // Criar partículas de madeira flutuantes - VERSÃO MELHORADA
    createParticles() {
        for (let i = 0; i < 20; i++) { // Reduzido de 35 para 20
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 4 + 2, // Reduzido tamanho
                speedX: (Math.random() - 0.5) * 0.3, // Movimento mais lento
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.15 + 0.05, // Muito mais sutil
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 1, // Rotação mais lenta
                color: this.getWoodColor(),
                type: Math.floor(Math.random() * 4),
                pulsePhase: Math.random() * Math.PI * 2
            });
        }
    }

    // Criar engrenagens girando - VERSÃO MELHORADA
    createGears() {
        for (let i = 0; i < 3; i++) { // Reduzido de 6 para 3
            this.gears.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 25 + 20, // Reduzido tamanho
                teeth: Math.floor(Math.random() * 8) + 8,
                rotation: 0,
                rotationSpeed: (Math.random() + 0.3) * 0.01 * (Math.random() > 0.5 ? 1 : -1), // Mais lento
                opacity: 0.06, // Muito mais sutil
                color: '#8B4513'
            });
        }
    }

    // Criar serragem caindo - VERSÃO MELHORADA
    createSawdust() {
        for (let i = 0; i < 25; i++) { // Reduzido de 60 para 25
            this.sawdust.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5, // Partículas menores
                speedY: Math.random() * 1 + 0.2, // Movimento mais lento
                speedX: (Math.random() - 0.5) * 0.3, // Movimento horizontal menor
                opacity: Math.random() * 0.08 + 0.03, // Muito mais sutil
                color: this.getSawdustColor(),
                swayPhase: Math.random() * Math.PI * 2
            });
        }
    }

    // Criar lascas de madeira - VERSÃO MELHORADA
    createWoodChips() {
        for (let i = 0; i < 12; i++) { // Reduzido de 20 para 12
            this.woodChips.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                width: Math.random() * 15 + 6, // Tamanho menor
                height: Math.random() * 10 + 3,
                speedX: (Math.random() - 0.5) * 0.5, // Movimento mais lento
                speedY: (Math.random() - 0.5) * 0.5,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 1.5, // Rotação mais lenta
                opacity: Math.random() * 0.08 + 0.04, // Muito mais sutil
                color: this.getWoodColor()
            });
        }
    }

    // Criar ferramentas flutuantes (emojis) - VERSÃO MELHORADA
    createTools() {
        const toolSymbols = ['🔨', '⚒️', '🪚', '🔧', '🪓', '📐'];
        for (let i = 0; i < 4; i++) { // Reduzido de 8 para 4
            this.tools.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                symbol: toolSymbols[Math.floor(Math.random() * toolSymbols.length)],
                size: Math.random() * 18 + 15, // Tamanho menor
                speedX: (Math.random() - 0.5) * 0.2, // Movimento mais lento
                speedY: (Math.random() - 0.5) * 0.2,
                opacity: 0.12, // Opacidade mais sutil e fixa
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 2,
                bobPhase: Math.random() * Math.PI * 2
            });
        }
    }

    getWoodColor() {
        const colors = ['#D2691E', '#8B4513', '#A0522D', '#CD853F', '#DEB887', '#F4A460'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    getSawdustColor() {
        const colors = ['#DEB887', '#F5DEB3', '#D2B48C', '#BC9A6A'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    animate() {
        // Fundo gradiente sutil
        const gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
        gradient.addColorStop(0, 'rgba(248, 249, 250, 0.05)');
        gradient.addColorStop(0.5, 'rgba(139, 69, 19, 0.02)');
        gradient.addColorStop(1, 'rgba(210, 105, 30, 0.03)');
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Atualizar e desenhar partículas
        this.updateAndDrawParticles();
        this.updateAndDrawGears();
        this.updateAndDrawSawdust();
        this.updateAndDrawWoodChips();
        this.updateAndDrawTools();
        this.drawConnections();

        requestAnimationFrame(() => this.animate());
    }

    updateAndDrawParticles() {
        this.particles.forEach(particle => {
            // Atualizar posição
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            particle.rotation += particle.rotationSpeed;

            // Interação com mouse
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
                const force = (120 - distance) / 120 * 0.03;
                particle.x -= (dx / distance) * force * 15;
                particle.y -= (dy / distance) * force * 15;
            }

            // Reposicionar quando sai da tela
            if (particle.x < -50) particle.x = this.canvas.width + 50;
            if (particle.x > this.canvas.width + 50) particle.x = -50;
            if (particle.y < -50) particle.y = this.canvas.height + 50;
            if (particle.y > this.canvas.height + 50) particle.y = -50;

            // Desenhar partícula
            this.ctx.save();
            const pulse = Math.sin(Date.now() * 0.003 + particle.pulsePhase) * 0.3 + 1;
            const currentSize = particle.size * pulse;
            
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fillStyle = particle.color;
            this.ctx.translate(particle.x, particle.y);
            this.ctx.rotate(particle.rotation * Math.PI / 180);

            // Diferentes formas
            switch(particle.type) {
                case 0: // Círculo
                    this.ctx.beginPath();
                    this.ctx.arc(0, 0, currentSize, 0, Math.PI * 2);
                    this.ctx.fill();
                    break;
                case 1: // Quadrado
                    this.ctx.fillRect(-currentSize/2, -currentSize/2, currentSize, currentSize);
                    break;
                case 2: // Triângulo
                    this.ctx.beginPath();
                    this.ctx.moveTo(0, -currentSize);
                    this.ctx.lineTo(-currentSize, currentSize);
                    this.ctx.lineTo(currentSize, currentSize);
                    this.ctx.closePath();
                    this.ctx.fill();
                    break;
                case 3: // Estrela
                    this.ctx.beginPath();
                    for (let i = 0; i < 5; i++) {
                        const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
                        const x = Math.cos(angle) * currentSize;
                        const y = Math.sin(angle) * currentSize;
                        if (i === 0) this.ctx.moveTo(x, y);
                        else this.ctx.lineTo(x, y);
                        
                        const innerAngle = ((i + 0.5) / 5) * Math.PI * 2 - Math.PI / 2;
                        const innerX = Math.cos(innerAngle) * currentSize * 0.5;
                        const innerY = Math.sin(innerAngle) * currentSize * 0.5;
                        this.ctx.lineTo(innerX, innerY);
                    }
                    this.ctx.closePath();
                    this.ctx.fill();
                    break;
            }
            this.ctx.restore();
        });
    }

    updateAndDrawGears() {
        this.gears.forEach(gear => {
            gear.rotation += gear.rotationSpeed;
            
            this.ctx.save();
            this.ctx.globalAlpha = gear.opacity;
            this.ctx.strokeStyle = gear.color;
            this.ctx.fillStyle = gear.color;
            this.ctx.lineWidth = 2;
            this.ctx.translate(gear.x, gear.y);
            this.ctx.rotate(gear.rotation);

            // Desenhar engrenagem
            this.ctx.beginPath();
            for (let i = 0; i < gear.teeth; i++) {
                const angle = (i / gear.teeth) * Math.PI * 2;
                const x1 = Math.cos(angle) * gear.radius;
                const y1 = Math.sin(angle) * gear.radius;
                const x2 = Math.cos(angle) * (gear.radius + 12);
                const y2 = Math.sin(angle) * (gear.radius + 12);
                
                if (i === 0) this.ctx.moveTo(x1, y1);
                else this.ctx.lineTo(x1, y1);
                this.ctx.lineTo(x2, y2);
            }
            this.ctx.closePath();
            this.ctx.stroke();

            // Centro da engrenagem
            this.ctx.beginPath();
            this.ctx.arc(0, 0, gear.radius * 0.3, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.restore();
        });
    }

    updateAndDrawSawdust() {
        this.sawdust.forEach(dust => {
            dust.y += dust.speedY;
            dust.x += dust.speedX + Math.sin(Date.now() * 0.002 + dust.swayPhase) * 0.8;

            if (dust.y > this.canvas.height + 10) {
                dust.y = -10;
                dust.x = Math.random() * this.canvas.width;
            }

            this.ctx.save();
            this.ctx.globalAlpha = dust.opacity;
            this.ctx.fillStyle = dust.color;
            this.ctx.beginPath();
            this.ctx.arc(dust.x, dust.y, dust.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        });
    }

    updateAndDrawWoodChips() {
        this.woodChips.forEach(chip => {
            chip.x += chip.speedX;
            chip.y += chip.speedY;
            chip.rotation += chip.rotationSpeed;

            if (chip.x < -50) chip.x = this.canvas.width + 50;
            if (chip.x > this.canvas.width + 50) chip.x = -50;
            if (chip.y < -50) chip.y = this.canvas.height + 50;
            if (chip.y > this.canvas.height + 50) chip.y = -50;

            this.ctx.save();
            this.ctx.globalAlpha = chip.opacity;
            this.ctx.fillStyle = chip.color;
            this.ctx.translate(chip.x, chip.y);
            this.ctx.rotate(chip.rotation * Math.PI / 180);
            this.ctx.fillRect(-chip.width/2, -chip.height/2, chip.width, chip.height);
            this.ctx.restore();
        });
    }

    updateAndDrawTools() {
        this.tools.forEach(tool => {
            tool.x += tool.speedX;
            tool.y += tool.speedY + Math.sin(Date.now() * 0.002 + tool.bobPhase) * 0.5;
            tool.rotation += tool.rotationSpeed;

            if (tool.x < -50) tool.x = this.canvas.width + 50;
            if (tool.x > this.canvas.width + 50) tool.x = -50;
            if (tool.y < -50) tool.y = this.canvas.height + 50;
            if (tool.y > this.canvas.height + 50) tool.y = -50;

            this.ctx.save();
            this.ctx.globalAlpha = tool.opacity;
            this.ctx.translate(tool.x, tool.y);
            this.ctx.rotate(tool.rotation * Math.PI / 180);
            this.ctx.font = `${tool.size}px Arial`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            
            // Sombra
            this.ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
            this.ctx.shadowBlur = 5;
            this.ctx.shadowOffsetX = 3;
            this.ctx.shadowOffsetY = 3;
            
            this.ctx.fillText(tool.symbol, 0, 0);
            this.ctx.restore();
        });
    }

    drawConnections() {
        this.ctx.strokeStyle = 'rgba(139, 69, 19, 0.03)'; // Muito mais sutil
        this.ctx.lineWidth = 0.5; // Linha mais fina

        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) { // Distância menor para menos conexões
                    this.ctx.save();
                    this.ctx.globalAlpha = (120 - distance) / 120 * 0.08; // Muito mais transparente
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[j].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                    this.ctx.restore();
                }
            }
        }
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new MarcenariaBackground();
});

// Efeito de paralaxe nos cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card, .projeto-card');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    cards.forEach((card, index) => {
        const speed = (index + 1) * 0.02;
        const xMove = (x - 0.5) * speed * 20;
        const yMove = (y - 0.5) * speed * 20;
        
        card.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});