// Navegação Suave para as Seções
document.addEventListener('DOMContentLoaded', function() {
    // Função para rolagem suave
    function smoothScrollTo(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Calcular offset para navbar fixa
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
            const targetPosition = targetElement.offsetTop - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Adicionar event listeners para todos os links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            
            // Fechar dropdown se estiver aberto
            const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
            openDropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
            });
            
            // Fechar navbar mobile se estiver aberta
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                navbarToggler?.click();
            }
            
            // Scroll suave para o elemento
            smoothScrollTo(targetId);
            
            // Atualizar URL sem reload
            history.pushState(null, null, `#${targetId}`);
        });
    });

    // Tratar links diretos (quando a página carrega com hash)
    if (window.location.hash) {
        setTimeout(() => {
            const targetId = window.location.hash.substring(1);
            smoothScrollTo(targetId);
        }, 100);
    }

    // Highlight da seção ativa no menu
    function updateActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.dropdown-item[href^="#"]');
        
        let currentSection = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Atualizar classes ativas
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Event listener para scroll
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateActiveSection();
                ticking = false;
            });
            ticking = true;
        }
    });
});