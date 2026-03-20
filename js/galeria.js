// Dados da galeria de projetos com imagens reais
const projetosGaleria = [
    {
        id: 1,
        titulo: "Guarda-roupa Planejado",
        descricao: "Guarda-roupa de 3 portas com gavetas e nichos organizadores em MDF branco",
        categoria: "guarda-roupa",
        madeira: "MDF Branco",
        dimensoes: "2.50m x 2.20m x 0.60m",
        preco: "R$ 2.850,00",
        prazo: "12 dias",
        /* 
         * IMAGEM PROJETO 1 - Guarda-roupa Planejado
         * Descrição: Oficina de carpintaria com ferramentas
         * URL atual: photo-1586023492125-27b2c045efd7
         * Alternativas sugeridas:
         * - Guarda-roupa branco: photo-1555041469-a586c61ea9bc
         * - Closet organizado: photo-1631452180539-96aca7d48617
         */
        imagem: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
        id: 2,
        titulo: "Cozinha Planejada Completa",
        descricao: "Cozinha completa com bancada, armários superiores e inferiores em madeira amadeirada",
        categoria: "cozinha",
        madeira: "MDP Amadeirado",
        dimensoes: "4.00m x 2.40m x 0.65m",
        preco: "R$ 5.200,00",
        prazo: "20 dias",
        /* 
         * IMAGEM PROJETO 2 - Cozinha Planejada
         * Descrição: Cozinha moderna com armários de madeira
         * URL atual: photo-1556912167-f556f1f39fdf
         * Alternativas sugeridas:
         * - Cozinha amadeirada: photo-1565538810643-b5bdb714032a
         * - Armários cozinha: photo-1560448204-e02f11c3d0e2
         */
        imagem: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
        id: 3,
        titulo: "Home Theater Moderno",
        descricao: "Rack para TV com nichos e gavetas para equipamentos, design minimalista",
        categoria: "rack",
        madeira: "MDF Preto",
        dimensoes: "1.80m x 1.40m x 0.45m",
        preco: "R$ 1.650,00",
        prazo: "8 dias",
        /* 
         * IMAGEM PROJETO 3 - Home Theater Moderno
         * Descrição: Sala moderna com móveis de madeira
         * URL atual: photo-1560448204-e02f11c3d0e2
         * Alternativas sugeridas:
         * - Rack para TV: photo-1556909114-6f8ffc9dcd3b
         * - Home theater: photo-1586023492125-27b2c045efd7
         */
        imagem: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
        id: 4,
        titulo: "Mesa de Jantar Rústica",
        descricao: "Mesa em madeira maciça para 6 pessoas com acabamento especial e pés torneados",
        categoria: "mesa",
        madeira: "Eucalipto",
        dimensoes: "1.60m x 0.90m x 0.75m",
        preco: "R$ 1.200,00",
        prazo: "10 dias",
        /* 
         * IMAGEM PROJETO 4 - Mesa de Jantar Rústica
         * Descrição: Mesa rústica de madeira em ambiente acolhedor
         * URL atual: photo-1549497538-303791108f95
         * Alternativas sugeridas:
         * - Mesa madeira maciça: photo-1506439773649-6e0eb8cfb237
         * - Mesa jantar rústica: photo-1555041469-a586c61ea9bc
         */
        imagem: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
        id: 5,
        titulo: "Estante para Livros",
        descricao: "Estante com 5 prateleiras e design clean, perfeita para escritório ou sala",
        categoria: "estante",
        madeira: "Pinus",
        dimensoes: "0.80m x 2.00m x 0.30m",
        preco: "R$ 890,00",
        prazo: "6 dias",
        /* 
         * IMAGEM PROJETO 5 - Estante para Livros
         * Descrição: Oficina carpintaria (reutilizada - pode personalizar)
         * URL atual: photo-1586023492125-27b2c045efd7
         * Alternativas sugeridas:
         * - Estante de livros: photo-1507003211169-0a1dd7228f2d
         * - Biblioteca moderna: photo-1481277542470-605612bd2d61
         */
        imagem: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
        id: 6,
        titulo: "Cômoda com Espelho",
        descricao: "Cômoda de 4 gavetas com espelho e acabamento laqueado branco",
        categoria: "comoda",
        madeira: "MDF Branco",
        dimensoes: "1.20m x 0.75m x 0.40m",
        preco: "R$ 1.450,00",
        prazo: "9 dias",
        /* 
         * IMAGEM PROJETO 6 - Cômoda com Espelho
         * Descrição: Oficina carpintaria (reutilizada - pode personalizar)
         * URL atual: photo-1586023492125-27b2c045efd7
         * Alternativas sugeridas:
         * - Cômoda branca: photo-1555041469-a586c61ea9bc
         * - Móvel com espelho: photo-1631452180539-96aca7d48617
         */
        imagem: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
        id: 7,
        titulo: "Bancada de Trabalho",
        descricao: "Bancada robusta para escritório em casa com gavetas e suporte para CPU",
        categoria: "mesa",
        madeira: "MDF Amadeirado",
        dimensoes: "1.40m x 0.60m x 0.75m",
        preco: "R$ 980,00",
        prazo: "7 dias",
        /* 
         * IMAGEM PROJETO 7 - Bancada de Trabalho
         * Descrição: Oficina carpintaria (reutilizada - pode personalizar)
         * URL atual: photo-1586023492125-27b2c045efd7
         * Alternativas sugeridas:
         * - Mesa escritório: photo-1541558869434-2840d308329a
         * - Bancada trabalho: photo-1556761175-4b46a572b786
         */
        imagem: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
        id: 8,
        titulo: "Armário de Banheiro",
        descricao: "Armário planejado para banheiro com prateleiras e portas de vidro",
        categoria: "armario",
        madeira: "MDF Resistente à Umidade",
        dimensoes: "1.00m x 1.80m x 0.35m",
        preco: "R$ 1.350,00",
        prazo: "8 dias",
        /* 
         * IMAGEM PROJETO 8 - Armário de Banheiro
         * Descrição: Oficina carpintaria (reutilizada - pode personalizar)
         * URL atual: photo-1586023492125-27b2c045efd7
         * Alternativas sugeridas:
         * - Banheiro moderno: photo-1620626011761-996317b8d101
         * - Armário banheiro: photo-1584622650111-993a426fbf0a
         */
        imagem: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    }
];

// Função para carregar galeria
function carregarGaleria() {
    const container = document.querySelector('#galeria .row');
    if (!container) return;
    
    container.innerHTML = '';
    
    projetosGaleria.forEach(projeto => {
        const projetoHtml = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card projeto-card h-100" data-categoria="${projeto.categoria}">
                    <div class="card-img-wrapper">
                        <img src="${projeto.imagem}" class="card-img-top projeto-img-real" alt="${projeto.titulo}" loading="lazy">
                        <div class="card-img-overlay-gradient"></div>
                        <div class="card-badge">
                            <span class="badge bg-wood">${projeto.categoria.replace('-', ' ').toUpperCase()}</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-wood">${projeto.titulo}</h5>
                        <p class="card-text">${projeto.descricao}</p>
                        <div class="projeto-detalhes">
                            <div class="detalhe-item">
                                <i class="fas fa-tree text-wood"></i>
                                <span><strong>Material:</strong> ${projeto.madeira}</span>
                            </div>
                            <div class="detalhe-item">
                                <i class="fas fa-ruler text-wood"></i>
                                <span><strong>Dimensões:</strong> ${projeto.dimensoes}</span>
                            </div>
                            <div class="detalhe-item">
                                <i class="fas fa-clock text-wood"></i>
                                <span><strong>Prazo:</strong> ${projeto.prazo}</span>
                            </div>
                        </div>
                        <div class="mt-3 d-flex justify-content-between align-items-center">
                            <span class="h5 text-wood mb-0 price-tag">${projeto.preco}</span>
                            <button class="btn btn-outline-wood btn-sm pulse-btn" onclick="solicitarOrcamentoSimilar('${projeto.titulo}')">
                                <i class="fas fa-calculator"></i> Orçar Similar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += projetoHtml;
    });
    
    // Adicionar efeito de loading para imagens
    const images = container.querySelectorAll('.projeto-img-real');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        img.addEventListener('error', function() {
            // Fallback para ícone se a imagem não carregar
            this.parentNode.innerHTML = `
                <div class="placeholder-img projeto-img">
                    <i class="fas fa-image fa-4x"></i>
                    <p>Imagem indisponível</p>
                </div>
            `;
        });
    });
}

// Filtro de projetos por categoria
function filtrarProjetos(categoria = 'todos') {
    const projetos = document.querySelectorAll('.projeto-card');
    
    projetos.forEach(projeto => {
        if (categoria === 'todos' || projeto.dataset.categoria === categoria) {
            projeto.closest('.col-lg-4').style.display = 'block';
        } else {
            projeto.closest('.col-lg-4').style.display = 'none';
        }
    });
    
    // Atualizar botões ativos
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-filtro="${categoria}"]`).classList.add('active');
}

// Função para solicitar orçamento similar
function solicitarOrcamentoSimilar(tituloProjeto) {
    const mensagem = `Olá! Vi o projeto "${tituloProjeto}" no site e gostaria de um orçamento para algo similar. Podemos conversar?`;
    const numeroWhatsApp = '5511999999999';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// Dicas de manutenção
const dicasManutencao = [
    {
        titulo: "Limpeza Diária",
        descricao: "Use apenas pano úmido e produtos neutros. Evite produtos abrasivos que podem danificar o acabamento.",
        icone: "fas fa-spray-can"
    },
    {
        titulo: "Proteção Solar",
        descricao: "Evite exposição direta ao sol para prevenir desbotamento e rachaduras na madeira.",
        icone: "fas fa-sun"
    },
    {
        titulo: "Umidade Controlada",
        descricao: "Mantenha a umidade do ambiente entre 40-60% para evitar empenamento da madeira.",
        icone: "fas fa-tint"
    },
    {
        titulo: "Verificação Regular",
        descricao: "Verifique dobradiças, gavetas e fechaduras mensalmente. Lubrifique se necessário.",
        icone: "fas fa-tools"
    }
];

// Calculadora de materiais
function criarCalculadoraMateriais() {
    return `
        <div class="card">
            <div class="card-header bg-wood text-white">
                <h5 class="mb-0"><i class="fas fa-calculator"></i> Calculadora de Materiais</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Área Total (m²)</label>
                            <input type="number" class="form-control" id="areaMaterial" step="0.01" min="0.1">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Tipo de Chapa</label>
                            <select class="form-select" id="tipoChapa">
                                <option value="2.75">MDF/MDP Padrão (2,75m²)</option>
                                <option value="2.20">Compensado (2,20m²)</option>
                                <option value="3.00">Chapa Grande (3,00m²)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button class="btn btn-wood" onclick="calcularMateriais()">
                    <i class="fas fa-calculator"></i> Calcular
                </button>
                <div id="resultadoMateriais" class="mt-3 d-none">
                    <div class="alert alert-info">
                        <h6><i class="fas fa-clipboard-list"></i> Resultado:</h6>
                        <div id="detalhesMateriais"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function calcularMateriais() {
    const area = parseFloat(document.getElementById('areaMaterial').value);
    const areaChapa = parseFloat(document.getElementById('tipoChapa').value);
    
    if (!area || area <= 0) {
        alert('Por favor, insira uma área válida.');
        return;
    }
    
    const chapasNecessarias = Math.ceil(area / areaChapa);
    const desperdicio = (chapasNecessarias * areaChapa) - area;
    const percentualDesperdicio = (desperdicio / area * 100).toFixed(1);
    
    document.getElementById('detalhesMateriais').innerHTML = `
        <strong>Chapas necessárias:</strong> ${chapasNecessarias} unidades<br>
        <strong>Área total das chapas:</strong> ${(chapasNecessarias * areaChapa).toFixed(2)} m²<br>
        <strong>Desperdício estimado:</strong> ${desperdicio.toFixed(2)} m² (${percentualDesperdicio}%)
    `;
    
    document.getElementById('resultadoMateriais').classList.remove('d-none');
}

// Carregar conteúdo quando a página estiver pronta
document.addEventListener('DOMContentLoaded', function() {
    // Carregar galeria
    carregarGaleria();
    
    // Adicionar filtros de categoria na galeria
    const galeriaSection = document.querySelector('#galeria .container h2').parentNode;
    const filtrosHtml = `
        <div class="text-center mb-4">
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-outline-wood filtro-btn active" data-filtro="todos" onclick="filtrarProjetos('todos')">
                    <i class="fas fa-th"></i> Todos
                </button>
                <button type="button" class="btn btn-outline-wood filtro-btn" data-filtro="guarda-roupa" onclick="filtrarProjetos('guarda-roupa')">
                    <i class="fas fa-bed"></i> Guarda-roupas
                </button>
                <button type="button" class="btn btn-outline-wood filtro-btn" data-filtro="cozinha" onclick="filtrarProjetos('cozinha')">
                    <i class="fas fa-utensils"></i> Cozinhas
                </button>
                <button type="button" class="btn btn-outline-wood filtro-btn" data-filtro="mesa" onclick="filtrarProjetos('mesa')">
                    <i class="fas fa-chair"></i> Mesas
                </button>
                <button type="button" class="btn btn-outline-wood filtro-btn" data-filtro="estante" onclick="filtrarProjetos('estante')">
                    <i class="fas fa-book"></i> Estantes
                </button>
            </div>
        </div>
    `;
    galeriaSection.querySelector('h2').insertAdjacentHTML('afterend', filtrosHtml);
    
    // Adicionar seção de dicas e calculadora
    const servicosSection = document.querySelector('#servicos');
    const dicasSection = `
        <section id="dicas" class="py-5 bg-light">
            <div class="container">
                <h2 class="text-center mb-5">
                    <i class="fas fa-lightbulb text-wood"></i> Dicas de Manutenção
                </h2>
                <div class="row">
                    ${dicasManutencao.map(dica => `
                        <div class="col-md-6 col-lg-3 mb-4">
                            <div class="card h-100 text-center">
                                <div class="card-body">
                                    <i class="${dica.icone} fa-2x text-wood mb-3"></i>
                                    <h5>${dica.titulo}</h5>
                                    <p class="card-text">${dica.descricao}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        
        <section id="ferramentas" class="py-5">
            <div class="container">
                <h2 class="text-center mb-5">
                    <i class="fas fa-wrench text-wood"></i> Ferramentas Úteis
                </h2>
                <div class="row">
                    <div class="col-lg-6 mb-4">
                        ${criarCalculadoraMateriais()}
                    </div>
                    <div class="col-lg-6 mb-4">
                        <div class="card">
                            <div class="card-header bg-wood text-white">
                                <h5 class="mb-0"><i class="fas fa-envelope"></i> Contato Rápido</h5>
                            </div>
                            <div class="card-body">
                                <form id="contatoRapido" onsubmit="enviarContatoRapido(event)">
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="nomeContato" placeholder="Seu nome" required>
                                    </div>
                                    <div class="mb-3">
                                        <input type="tel" class="form-control" id="telefoneContato" placeholder="Seu telefone" required>
                                    </div>
                                    <div class="mb-3">
                                        <textarea class="form-control" id="mensagemContato" rows="3" placeholder="Sua mensagem" required></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-wood w-100">
                                        <i class="fab fa-whatsapp"></i> Enviar via WhatsApp
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    servicosSection.insertAdjacentHTML('afterend', dicasSection);
});

function enviarContatoRapido(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nomeContato').value;
    const telefone = document.getElementById('telefoneContato').value;
    const mensagem = document.getElementById('mensagemContato').value;
    
    const textoWhatsApp = `Olá! Meu nome é ${nome}.\n\nTelefone: ${telefone}\n\nMensagem: ${mensagem}\n\nGostaria de mais informações sobre os serviços de marcenaria.`;
    
    const numeroWhatsApp = '5511999999999';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;
    window.open(url, '_blank');
    
    // Limpar formulário
    event.target.reset();
}