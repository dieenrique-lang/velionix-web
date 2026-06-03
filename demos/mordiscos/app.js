// Lógica interactiva para Mordiscos SpA

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Contador del Carrito y Toast Notification
    // ==========================================
    let cartCount = 0;
    const cartCounterEl = document.getElementById('cart-counter');
    const toastEl = document.getElementById('toast');
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

    let toastTimeout;

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Incrementar contador
            cartCount++;
            cartCounterEl.textContent = cartCount;

            // Mostrar toast (quitar translate e invisibilidad)
            toastEl.classList.remove('translate-y-20', 'opacity-0');
            
            // Limpiar timeout anterior si el usuario hace clic rápido
            if(toastTimeout) clearTimeout(toastTimeout);

            // Ocultar toast después de 2.5s
            toastTimeout = setTimeout(() => {
                toastEl.classList.add('translate-y-20', 'opacity-0');
            }, 2500);
        });
    });

    // ==========================================
    // 2. Selector de Formato/Peso
    // ==========================================
    const formatSelectors = document.querySelectorAll('.format-selector');
    
    formatSelectors.forEach(selector => {
        const buttons = selector.querySelectorAll('button');
        
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Quitar clases de 'seleccionado' a todos los botones del mismo grupo
                buttons.forEach(b => {
                    b.classList.remove('bg-brand-dark', 'text-white', 'border-brand-dark');
                    b.classList.add('border-gray-200', 'text-gray-600');
                });

                // Agregar clases de 'seleccionado' al botón clickeado
                btn.classList.remove('border-gray-200', 'text-gray-600');
                btn.classList.add('bg-brand-dark', 'text-white', 'border-brand-dark');
            });
        });
    });

    // ==========================================
    // 3. Simulación de Búsqueda
    // ==========================================
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    alert(`Simulando búsqueda de: "${query}"\n\nEn un entorno real, esto filtraría el catálogo o redirigiría a una página de resultados.`);
                    // Opcional: limpiar el input
                    // searchInput.value = '';
                }
            }
        });
    }
});
