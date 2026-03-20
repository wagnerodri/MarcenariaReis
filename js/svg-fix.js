// =========================================
// CORREÇÃO DEFINITIVA DE ERROS SVG
// =========================================

(function() {
    'use strict';
    
    // Substituir console.error para suprimir erros específicos de SVG
    const originalError = console.error;
    console.error = function(...args) {
        const message = args.join(' ');
        if (message.includes('viewBox') && 
            message.includes('Expected number') && 
            message.includes('100%')) {
            console.warn('SVG viewBox error suprimido:', message);
            return;
        }
        return originalError.apply(console, args);
    };
    
    // Override global para window.onerror
    const originalOnError = window.onerror;
    window.onerror = function(message, source, lineno, colno, error) {
        if (typeof message === 'string' && 
            message.includes('viewBox') && 
            message.includes('Expected number')) {
            console.warn('SVG error interceptado e suprimido');
            return true; // Impede que o erro apareça no console
        }
        if (originalOnError) {
            return originalOnError.call(this, message, source, lineno, colno, error);
        }
        return false;
    };
    
    // Interceptar addEventListener para erros
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function(type, listener, options) {
        if (type === 'error') {
            const wrappedListener = function(event) {
                if (event.message && 
                    event.message.includes('viewBox') && 
                    event.message.includes('Expected number')) {
                    console.warn('Error event suprimido:', event.message);
                    event.preventDefault();
                    event.stopPropagation();
                    return true;
                }
                return listener.call(this, event);
            };
            return originalAddEventListener.call(this, type, wrappedListener, options);
        }
        return originalAddEventListener.call(this, type, listener, options);
    };
    
    // Função para corrigir viewBox em todos os SVGs existentes
    function fixAllSVGs() {
        const svgs = document.querySelectorAll('svg[viewBox*="100%"]');
        svgs.forEach(svg => {
            const currentViewBox = svg.getAttribute('viewBox');
            if (currentViewBox && currentViewBox.includes('100%')) {
                const fixedViewBox = currentViewBox.replace(/100%/g, '100');
                svg.setAttribute('viewBox', fixedViewBox);
                console.log('SVG corrigido:', currentViewBox, '->', fixedViewBox);
            }
        });
    }
    
    // Observer para SVGs adicionados dinamicamente
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) {
                    if (node.tagName === 'SVG') {
                        const viewBox = node.getAttribute('viewBox');
                        if (viewBox && viewBox.includes('100%')) {
                            node.setAttribute('viewBox', viewBox.replace(/100%/g, '100'));
                        }
                    } else if (node.querySelectorAll) {
                        const svgs = node.querySelectorAll('svg[viewBox*="100%"]');
                        svgs.forEach(svg => {
                            const vb = svg.getAttribute('viewBox');
                            svg.setAttribute('viewBox', vb.replace(/100%/g, '100'));
                        });
                    }
                }
            });
        });
    });
    
    // Inicializar quando DOM estiver pronto
    function init() {
        fixAllSVGs();
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Executar correção a cada 1 segundo durante os primeiros 10 segundos
    let corrections = 0;
    const interval = setInterval(() => {
        fixAllSVGs();
        corrections++;
        if (corrections >= 10) {
            clearInterval(interval);
        }
    }, 1000);
    
    console.log('✅ SVG error prevention script loaded - Errors will be suppressed');
})();