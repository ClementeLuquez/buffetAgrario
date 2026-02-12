// Tus datos (Igual que antes)
const menuData = [
    {
        categoria: "Entradas",
        items: [
            { nombre: "Sopa de Verduras", desc: "Caldo casero con vegetales.", precio: 4500, img: "https://images.unsplash.com/photo-1547592166-23acbe3a624b?auto=format&fit=crop&w=150&q=80" },
            { nombre: "Pimientos Rellenos", desc: "Arroz, carne y especias.", precio: 5200, img: "https://images.unsplash.com/photo-1599573801262-e6e2269a8385?auto=format&fit=crop&w=150&q=80" }
        ]
    },
    {
        categoria: "Platos Fuertes",
        items: [
            { nombre: "Pasta al Wok", desc: "Fideos caseros salteados.", precio: 8900, img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=150&q=80" },
            { nombre: "Milanesa Napolitana", desc: "Clásica con papas rústicas.", precio: 9500, img: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?auto=format&fit=crop&w=150&q=80" }
        ]
    },
    {
        categoria: "Postres",
        items: [
            { nombre: "Flan Casero", desc: "Con dulce de leche.", precio: 3200, img: "https://images.unsplash.com/photo-1551024601-56296352f488?auto=format&fit=crop&w=150&q=80" }
        ]
    }
];

function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';

    menuData.forEach((grupo, index) => {
        // 1. Crear el Wrapper de la Categoría
        const catWrapper = document.createElement('div');
        catWrapper.className = 'category-wrapper';
        
        // Si quieres que el primero esté abierto por defecto:
        if (index === 0) catWrapper.classList.add('active');

        // 2. Crear el Header (Botón)
        const header = document.createElement('button');
        header.className = 'category-header';
        header.innerHTML = `
            <h2 class="category-title">${grupo.categoria}</h2>
            <span class="toggle-icon">▼</span>
        `;

        // 3. Crear el Contenido (Grid Trick)
        const content = document.createElement('div');
        content.className = 'category-content';

        const inner = document.createElement('div');
        inner.className = 'items-inner';

        // 4. Llenar los items
        grupo.items.forEach(item => {
            const itemDiv = document.createElement('article');
            itemDiv.className = 'menu-item';
            itemDiv.innerHTML = `
                <div class="item-info">
                    <div class="item-header">
                        <h3 class="item-name">${item.nombre}</h3>
                        <span class="item-price">$${item.precio}</span>
                    </div>
                    <p class="item-desc">${item.desc}</p>
                </div>
                <img src="${item.img}" alt="${item.nombre}" class="item-image">
            `;
            inner.appendChild(itemDiv);
        });

        // 5. Ensamblar
        content.appendChild(inner);
        catWrapper.appendChild(header);
        catWrapper.appendChild(content);
        container.appendChild(catWrapper);

        // 6. Lógica de Click (Toggle)
        header.addEventListener('click', () => {
            // Opción A: Permitir múltiples abiertos (Solo esta línea)
            catWrapper.classList.toggle('active');

            // Opción B: Estilo Acordeón estricto (Cierra los otros al abrir uno)
            /*
            document.querySelectorAll('.category-wrapper').forEach(w => {
                if (w !== catWrapper) w.classList.remove('active');
            });
            catWrapper.classList.toggle('active');
            */
        });
    });
}

document.addEventListener('DOMContentLoaded', renderMenu);