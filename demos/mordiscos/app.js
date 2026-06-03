// Lógica interactiva para Mordiscos SpA

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Estado del Carrito y Elementos DOM
    // ==========================================
    let cart = [];
    const cartCounterEl = document.getElementById('cart-counter');
    const cartDropdown = document.getElementById('cart-dropdown');
    const cartToggle = document.getElementById('cart-toggle');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const toastEl = document.getElementById('toast');
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

    let toastTimeout;

    // Toggle Dropdown
    cartToggle.addEventListener('click', (e) => {
        // Evitar que el clic en el botón interno o scroll cierre el dropdown
        if (e.target.closest('#cart-dropdown') && !e.target.closest('#checkout-btn')) return;
        cartDropdown.classList.toggle('hidden');
    });

    // Cerrar carrito al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!cartToggle.contains(e.target)) {
            cartDropdown.classList.add('hidden');
        }
    });

    // ==========================================
    // 2. Lógica de Añadir al Carrito
    // ==========================================
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();

            const productCard = btn.closest('.bg-white.rounded-2xl.flex-col');
            const title = productCard.querySelector('h3').innerText;
            const priceText = productCard.querySelector('.text-brand-dark.text-xl').innerText;
            const priceNum = parseInt(priceText.replace('$', '').replace(/\./g, ''));
            
            const activeVariantBtn = productCard.querySelector('.format-selector button.bg-brand-dark');
            const variant = activeVariantBtn ? activeVariantBtn.innerText : 'Unidad';

            // Buscar si ya existe en el carrito
            const existingItemIndex = cart.findIndex(item => item.title === title && item.variant === variant);

            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                cart.push({
                    title: title,
                    price: priceNum,
                    variant: variant,
                    quantity: 1
                });
            }

            renderCart();

            // Mostrar toast
            toastEl.classList.remove('translate-y-20', 'opacity-0');
            if(toastTimeout) clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => {
                toastEl.classList.add('translate-y-20', 'opacity-0');
            }, 2500);
        });
    });

    // ==========================================
    // 3. Renderizar Carrito
    // ==========================================
    function renderCart() {
        // Actualizar contador
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartCounterEl.textContent = totalItems;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-sm text-gray-500 italic text-center">El carrito está vacío</p>';
            cartTotalEl.textContent = '$0';
            return;
        }

        let html = '';
        let total = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            html += `
                <div class="flex justify-between items-start text-sm border-b border-gray-50 pb-2">
                    <div class="flex-1 pr-2">
                        <span class="font-bold text-gray-800">${item.quantity}x</span> 
                        <span class="text-gray-600">${item.title}</span>
                        <div class="text-xs text-gray-400">Formato: ${item.variant}</div>
                    </div>
                    <div class="font-semibold text-brand-dark whitespace-nowrap">
                        $${itemTotal.toLocaleString('es-CL')}
                    </div>
                </div>
            `;
        });

        cartItemsContainer.innerHTML = html;
        cartTotalEl.textContent = `$${total.toLocaleString('es-CL')}`;
    }

    // ==========================================
    // 4. Lógica de Checkout por WhatsApp
    // ==========================================
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            if (cart.length === 0) {
                alert('¡Tu carrito está vacío! Añade productos para realizar un pedido.');
                return;
            }

            let message = "¡Hola Mordiscos SpA! Quiero hacer un pedido:\n\n";
            let total = 0;

            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                message += `${item.quantity}x ${item.title} (${item.variant}) - $${itemTotal.toLocaleString('es-CL')}\n`;
            });

            message += `\nTotal: $${total.toLocaleString('es-CL')}\n\n`;
            message += "Pago contra entrega. Mi dirección es: ";

            const whatsappUrl = `https://wa.me/56946152593?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            
            // Cerrar el carrito tras enviar
            cartDropdown.classList.add('hidden');
        });
    }

    // ==========================================
    // 5. Selector de Formato/Peso
    // ==========================================
    const formatSelectors = document.querySelectorAll('.format-selector');
    
    formatSelectors.forEach(selector => {
        const buttons = selector.querySelectorAll('button');
        
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => {
                    b.classList.remove('bg-brand-dark', 'text-white', 'border-brand-dark');
                    b.classList.add('border-gray-200', 'text-gray-600');
                });

                btn.classList.remove('border-gray-200', 'text-gray-600');
                btn.classList.add('bg-brand-dark', 'text-white', 'border-brand-dark');
            });
        });
    });

    // ==========================================
    // 6. Simulación de Búsqueda
    // ==========================================
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    alert(`Simulando búsqueda de: "${query}"\n\nEn un entorno real, esto filtraría el catálogo o redirigiría a una página de resultados.`);
                }
            }
        });
    }
});
