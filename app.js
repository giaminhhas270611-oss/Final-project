// ============================================
// 1. MOCK DATA
// ============================================

const MOCK_API_DATA = {
    "Trending Electronics": [
        { id: 1, title: "Wireless Noise-Cancelling Headphones", price: 199.99, rating: 4.7, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", reviews: 1243, inStock: true },
        { id: 2, title: "4K Curved Gaming Monitor", price: 449.00, rating: 4.5, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80", reviews: 856, inStock: true },
        { id: 3, title: "Portable 1TB SSD Drive", price: 89.99, rating: 4.8, image: "https://i.pinimg.com/1200x/ec/cf/01/eccf012d870cbbcb304da42e16a5cfad.jpg", reviews: 2104, inStock: true },
        { id: 4, title: "Smart Home Speaker Assistant", price: 49.99, rating: 4.2, image: "https://i.pinimg.com/1200x/a0/a1/f9/a0a1f9b366b4c4e2e8b49224d6eb9775.jpg", reviews: 1567, inStock: true },
        { id: 5, title: "Mechanical RGB Keyboard", price: 129.50, rating: 4.6, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80", reviews: 891, inStock: true },
        { id: 6, title: "High-Speed Mesh Router", price: 149.99, rating: 4.3, image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80", reviews: 723, inStock: true },
        { id: 20, title: "Bluetooth Wireless Earbuds", price: 79.99, rating: 4.4, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80", reviews: 2156, inStock: true },
        { id: 21, title: "Smart Fitness Watch", price: 249.99, rating: 4.6, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80", reviews: 1876, inStock: true },
        { id: 22, title: "Portable Power Bank 20000mAh", price: 39.99, rating: 4.5, image: "https://images.unsplash.com/photo-1609594040430-3e5c3e0c6b0d?w=500&q=80", reviews: 1432, inStock: true },
        { id: 35, title: "Wireless Gaming Mouse", price: 59.99, rating: 4.7, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80", reviews: 987, inStock: true },
        { id: 36, title: "USB-C Hub Multiport Adapter", price: 34.99, rating: 4.3, image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&q=80", reviews: 654, inStock: true },
        { id: 37, title: "Smart LED Light Strip", price: 29.99, rating: 4.5, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80", reviews: 876, inStock: true },
    ],
    "Daily Deals & Discounts": [
        { id: 7, title: "Bamboo Cutting Board Set (20% Off)", price: 24.99, rating: 4.9, image: "https://i.pinimg.com/1200x/04/94/63/0494632d5e60c0d02ac617557601367b.jpg", reviews: 543, inStock: true },
        { id: 8, title: "Stainless Steel Water Bottle", price: 15.00, rating: 4.7, image: "https://i.pinimg.com/736x/74/d5/44/74d544acb5e2900acb4b46b2be2a8693.jpg", reviews: 789, inStock: true },
        { id: 9, title: "Ergonomic Office Chair", price: 175.50, rating: 4.4, image: "https://i.pinimg.com/1200x/a9/ec/fb/a9ecfbea36900cd51b50ce57519cdc0a.jpg", reviews: 456, inStock: false },
        { id: 10, title: "Yoga Mat and Strap Kit", price: 32.99, rating: 4.8, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=250&h=250&fit=crop", reviews: 612, inStock: true },
        { id: 23, title: "Ceramic Coffee Mug Set", price: 18.99, rating: 4.6, image: "https://i.pinimg.com/1200x/c1/dc/c3/c1dcc30e1a4808bca479412abe36482d.jpg", reviews: 987, inStock: true },
        { id: 24, title: "LED Desk Lamp", price: 29.99, rating: 4.5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250&h=250&fit=crop", reviews: 654, inStock: true },
        { id: 25, title: "Leather Notebook Set", price: 12.50, rating: 4.7, image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=250&h=250&fit=crop", reviews: 432, inStock: true },
        { id: 38, title: "Wireless Charging Pad", price: 19.99, rating: 4.4, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=250&h=250&fit=crop", reviews: 876, inStock: true },
        { id: 39, title: "Portable Phone Stand", price: 9.99, rating: 4.3, image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=250&h=250&fit=crop", reviews: 543, inStock: true },
        { id: 40, title: "Desk Organizer Tray", price: 14.99, rating: 4.6, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=250&h=250&fit=crop", reviews: 321, inStock: true },
    ],
    "Best Sellers in Books": [
        { id: 11, title: "The Self-Taught Developer (Paperback)", price: 12.99, rating: 4.6, image: "https://images.unsplash.com/photo-1507842217343-583f20270bc5?w=250&h=250&fit=crop", reviews: 234, inStock: true },
        { id: 12, title: "A Novel of the Future (Hardcover)", price: 19.50, rating: 4.9, image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=250&h=250&fit=crop", reviews: 567, inStock: true },
        { id: 13, title: "Historical Atlas: World Map Set", price: 39.99, rating: 4.7, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=250&h=250&fit=crop", reviews: 345, inStock: true },
        { id: 26, title: "Science Fiction Anthology", price: 16.99, rating: 4.8, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=250&h=250&fit=crop", reviews: 789, inStock: true },
        { id: 27, title: "Healthy Cooking Cookbook", price: 22.50, rating: 4.5, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=250&h=250&fit=crop", reviews: 456, inStock: true },
        { id: 28, title: "Inspiring Biography Collection", price: 14.99, rating: 4.7, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=250&h=250&fit=crop", reviews: 321, inStock: true },
        { id: 41, title: "Mystery Thriller Novel", price: 18.99, rating: 4.6, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=250&h=250&fit=crop", reviews: 654, inStock: true },
        { id: 42, title: "Children's Storybook Set", price: 25.99, rating: 4.8, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=250&h=250&fit=crop", reviews: 432, inStock: true },
        { id: 43, title: "Self-Help Motivation Guide", price: 16.50, rating: 4.4, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=250&h=250&fit=crop", reviews: 876, inStock: true },
    ],
    "Home & Kitchen": [
        { id: 14, title: "Espresso Machine with Milk Frother", price: 599.00, rating: 4.9, image: "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=500", reviews: 420, inStock: true },
        { id: 15, title: "Air Fryer XL 8-Quart", price: 129.99, rating: 4.7, image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500", reviews: 2150, inStock: true },
        { id: 16, title: "Minimalist Ceramic Dinnerware Set", price: 85.00, rating: 4.6, image: "https://images.unsplash.com/photo-1577113310929-212b1d620594?w=500", reviews: 89, inStock: true },
        { id: 29, title: "High-Speed Blender", price: 149.99, rating: 4.8, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500", reviews: 1234, inStock: true },
        { id: 30, title: "Compact Microwave Oven", price: 89.99, rating: 4.5, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500", reviews: 987, inStock: true },
        { id: 31, title: "Stainless Steel Toaster", price: 49.99, rating: 4.4, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500", reviews: 654, inStock: true },
        { id: 44, title: "Electric Kettle", price: 39.99, rating: 4.6, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500", reviews: 876, inStock: true },
        { id: 45, title: "Non-Stick Cookware Set", price: 79.99, rating: 4.7, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500", reviews: 543, inStock: true },
        { id: 46, title: "Stand Mixer", price: 199.99, rating: 4.8, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500", reviews: 432, inStock: true },
    ],
    "Fitness & Outdoors": [
        { id: 17, title: "Adjustable Dumbbell Set (50lbs)", price: 299.00, rating: 4.8, image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500", reviews: 312, inStock: true },
        { id: 18, title: "Ultralight 2-Person Camping Tent", price: 159.50, rating: 4.5, image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500", reviews: 156, inStock: true },
        { id: 19, title: "Electric Mountain Bike", price: 1250.00, rating: 4.7, image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=500", reviews: 45, inStock: false },
        { id: 32, title: "Anti-Burst Yoga Ball", price: 24.99, rating: 4.6, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500", reviews: 876, inStock: true },
        { id: 33, title: "Waterproof Hiking Boots", price: 129.99, rating: 4.7, image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500", reviews: 543, inStock: true },
        { id: 34, title: "GPS Fitness Tracker", price: 89.99, rating: 4.5, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", reviews: 2109, inStock: true },
        { id: 47, title: "Resistance Bands Set", price: 19.99, rating: 4.4, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500", reviews: 654, inStock: true },
        { id: 48, title: "Protein Shaker Bottle", price: 12.99, rating: 4.6, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500", reviews: 432, inStock: true },
        { id: 49, title: "Foam Roller", price: 29.99, rating: 4.7, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500", reviews: 876, inStock: true },
    ]
};

// ============================================
// 2. CART MANAGEMENT
// ============================================

const CART_STORAGE_KEY = 'ecommerce_cart';

/**
 * Gets the cart from localStorage
 */
function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
    } catch (error) {
        console.error('Error reading cart:', error);
        return [];
    }
}

/**
 * Saves the cart to localStorage
 */
function saveCart(cart) {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        updateCartCount();
    } catch (error) {
        console.error('Error saving cart:', error);
    }
}

/**
 * Updates the cart count in the header
 */
function updateCartCount() {
    const cart = getCart();
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    if (totalItems > 0) {
        cartCount.textContent = totalItems;
        cartCount.classList.remove('hidden');
    } else {
        cartCount.classList.add('hidden');
    }
}

/**
 * Shows the cart modal
 */
function showCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.remove('hidden');
    renderCart();
}

/**
 * Hides the cart modal
 */
function hideCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.add('hidden');
}

/**
 * Renders the cart content
 */
function renderCart() {
    const cart = getCart();
    const cartContent = document.getElementById('cartContent');
    const cartSummary = document.getElementById('cartSummary');

    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="text-center py-8">
                <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <p class="text-gray-500">Your cart is empty</p>
            </div>
        `;
        cartSummary.innerHTML = '';
        return;
    }

    // Render cart items
    let itemsHTML = '';
    let totalItems = 0;
    let totalCost = 0;

    cart.forEach(item => {
        const quantity = item.quantity || 1;
        const itemTotal = item.price * quantity;
        totalItems += quantity;
        totalCost += itemTotal;

        itemsHTML += `
            <div class="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0">
                <div class="flex-1">
                    <h3 class="font-medium text-sm">${item.title}</h3>
                    <p class="text-gray-600 text-sm">$${item.price.toFixed(2)} each</p>
                </div>
                <div class="flex items-center space-x-2">
                    <button onclick="updateCartItemQuantity(${item.id}, ${quantity - 1})" 
                            class="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm font-medium">-</button>
                    <span class="w-8 text-center text-sm font-medium">${quantity}</span>
                    <button onclick="updateCartItemQuantity(${item.id}, ${quantity + 1})" 
                            class="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm font-medium">+</button>
                </div>
                <div class="text-right">
                    <p class="font-medium text-sm">$${itemTotal.toFixed(2)}</p>
                    <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 text-xs">Remove</button>
                </div>
            </div>
        `;
    });

    cartContent.innerHTML = itemsHTML;

    // Render summary
    cartSummary.innerHTML = `
        <div class="space-y-2">
            <div class="flex justify-between text-sm">
                <span>Total Items:</span>
                <span class="font-medium">${totalItems}</span>
            </div>
            <div class="flex justify-between text-lg font-semibold">
                <span>Total Cost:</span>
                <span>$${totalCost.toFixed(2)}</span>
            </div>
            <button class="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                Proceed to Checkout
            </button>
        </div>
    `;
}

/**
 * Updates the quantity of a cart item
 */
function updateCartItemQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    let cart = getCart();
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex !== -1) {
        cart[itemIndex].quantity = newQuantity;
        saveCart(cart);
        updateCartCount();
        renderCart();
        showNotification(`✅ Quantity updated!`, 'success');
    }
}

/**
 * Removes an item from the cart
 */
function removeFromCart(productId) {
    let cart = getCart();
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex !== -1) {
        const removedItem = cart.splice(itemIndex, 1)[0];
        saveCart(cart);
        updateCartCount();
        renderCart();
        showNotification(`✅ "${removedItem.title}" removed from cart!`, 'success');
    }
}

/**
 * Adds a product to the cart
 */
function addToCart(productId, productTitle, productPrice) {
    try {
        let cart = getCart();
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: productId,
                title: productTitle,
                price: productPrice,
                quantity: 1,
                addedAt: new Date().toISOString()
            });
        }

        saveCart(cart);
        showNotification(`✅ "${productTitle}" added to cart!`, 'success');
        console.log('Cart updated:', cart);

    } catch (error) {
        console.error('Error adding to cart:', error);
        showNotification('❌ Failed to add product to cart', 'error');
    }
}

// ============================================
// 3. API FUNCTIONS
// ============================================

/**
 * Fetches product data (currently mock, can switch to real API)
 */
async function searchAmazonProducts() {
    try {
        // Simulate API latency
        await new Promise(resolve => setTimeout(resolve, 1000));
        return MOCK_API_DATA;
    } catch (error) {
        console.error("API Error:", error);
        return MOCK_API_DATA;
    }
}

/**
 * Transforms API response to product format
 */
function transformAmazonProducts(amazonProducts) {
    if (!Array.isArray(amazonProducts)) return [];

    return amazonProducts.slice(0, 6).map(product => ({
        id: product.asin || product.id || Math.random(),
        title: product.product_title || product.title || "Unknown Product",
        price: parseFloat(product.product_price || product.price || 0),
        rating: parseFloat(product.product_star_rating || product.rating || 0),
        reviews: product.reviews || 0,
        image: product.product_photo || product.image || getDefaultImage(),
        inStock: product.inStock !== false
    }));
}

/**
 * Returns a default placeholder image
 */
function getDefaultImage() {
    return 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=250&h=250&fit=crop';
}

// ============================================
// 4. RENDERING FUNCTIONS
// ============================================

/**
 * Renders a single product card
 */
function renderProductCard(product) {
    if (!product || !product.id) {
        console.warn("Invalid product:", product);
        return '';
    }

    const star = '<span class="text-yellow-400">★</span>';
    const rating = product.rating || 0;
    const stars = star.repeat(Math.floor(rating)) +
        (rating % 1 !== 0 ? '<span class="text-yellow-400">½</span>' : '');

    const price = parseFloat(product.price || 0).toFixed(2);
    const imageUrl = product.image || getDefaultImage();
    const inStock = product.inStock !== false ? 'In Stock' : 'Out of Stock';
    const stockClass = product.inStock !== false ? 'in-stock' : 'out-of-stock';
    const reviews = product.reviews ? `(${product.reviews})` : '';
    const buttonDisabled = !product.inStock ? 'disabled opacity-50 cursor-not-allowed' : '';

    return `
        <div class="product-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div class="relative w-full h-40 bg-gray-100 overflow-hidden rounded-t-xl">
                <img src="${imageUrl}" 
                     alt="${product.title}" 
                     onerror="this.src='${getDefaultImage()}';"
                     class="product-image w-full h-full" 
                     loading="lazy">
            </div>
            
            <div class="p-4 flex flex-col flex-grow">
                <h3 class="product-title">${product.title}</h3>
                
                <div class="stock-status ${stockClass}">
                    ${inStock}
                </div>
                
                <div class="flex items-center justify-between mt-auto mb-4">
                    <span class="product-price">$${price}</span>
                    <div class="product-rating">
                        ${stars} ${reviews}
                    </div>
                </div>

                <button onclick="addToCart('${product.id}', '${product.title.replace(/'/g, "\\'")}', ${product.price})"
                        class="product-button ${buttonDisabled}"
                        ${!product.inStock ? 'disabled' : ''}>
                    ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
            </div>
        </div>
    `;
}

/**
 * Renders a complete carousel section
 */
function renderCarousel(title, products) {
    if (!Array.isArray(products) || products.length === 0) {
        return `
            <section class="carousel-section">
                <h2 class="carousel-title">${title}</h2>
                <div class="empty-state">
                    <p class="empty-state-text">No products available in this category.</p>
                </div>
            </section>
        `;
    }

    const productCards = products.map(renderProductCard).filter(card => card !== '').join('');

    return `
        <section class="carousel-section">
            <h2 class="carousel-title">${title}</h2>
            <div class="horizontal-scroll-container">
                ${productCards}
                <div class="product-card w-4 sm:w-8 flex-shrink-0"></div>
            </div>
        </section>
    `;
}

// ============================================
// 5. NOTIFICATIONS
// ============================================

/**
 * Shows a toast notification
 */
function showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    container.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// 6. INITIALIZATION
// ============================================

/**
 * Initializes the application
 */
async function initApp() {
    const appContainer = document.getElementById('app-container');
    const loadingSpinner = document.getElementById('loading-spinner');

    try {
        // Fetch product data
        const categorizedProducts = await searchAmazonProducts();

        // Clear loading state
        loadingSpinner.style.display = 'none';

        // Render carousels
        let allCarouselsHTML = '';
        for (const [title, products] of Object.entries(categorizedProducts)) {
            allCarouselsHTML += renderCarousel(title, products);
        }

        appContainer.innerHTML = allCarouselsHTML;
        updateCartCount();

        console.log("✅ E-commerce app initialized successfully");

    } catch (error) {
        console.error("Failed to initialize app:", error);
        loadingSpinner.innerHTML = '<p class="text-center text-red-500 mt-4">Error loading products. Please refresh the page.</p>';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    updateCartCount();

    // Add search listener
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        // 'input' event triggers on every keystroke for real-time filtering
        searchInput.addEventListener('input', handleSearch);
    }

    // Add cart button listener
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', showCart);
    }

    // Add close cart button listener
    const closeCartBtn = document.getElementById('closeCartBtn');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', hideCart);
    }

    // Close cart when clicking outside
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                hideCart();
            }
        });
    }
});


// ============================================
// 7. PRODUCT MANAGEMENT (Admin Panel)
// ============================================

const PRODUCTS_STORAGE_KEY = 'ecommerce_products';

/**
 * Gets all products from localStorage
 */
function getAllProducts() {
    try {
        const stored = localStorage.getItem(PRODUCTS_STORAGE_KEY);
        return stored ? JSON.parse(stored) : MOCK_API_DATA;
    } catch (error) {
        console.error('Error reading products:', error);
        return MOCK_API_DATA;
    }
}

/**
 * Saves all products to localStorage
 */
function saveAllProducts(products) {
    try {
        localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
        console.log('✅ Products saved successfully');
        return true;
    } catch (error) {
        console.error('Error saving products:', error);
        return false;
    }
}

/**
 * Adds a new product to a category
 * @param {string} category - Category name
 * @param {object} product - Product object { title, price, rating, image, reviews, inStock }
 */
function addProduct(category, product) {
    const products = getAllProducts();
    
    if (!products[category]) {
        products[category] = [];
    }

    // Generate new ID (find max ID + 1)
    const allIds = Object.values(products).flat().map(p => parseInt(p.id) || 0);
    const newId = Math.max(...allIds) + 1;

    const newProduct = {
        id: newId,
        title: product.title || "New Product",
        price: parseFloat(product.price) || 0,
        rating: parseFloat(product.rating) || 5,
        reviews: parseInt(product.reviews) || 0,
        image: product.image || getDefaultImage(),
        inStock: product.inStock !== false
    };

    products[category].push(newProduct);
    saveAllProducts(products);
    
    console.log(`✅ Added "${newProduct.title}" to ${category}`);
    showNotification(`✅ Product "${newProduct.title}" added!`, 'success');
    
    return newProduct;
}

/**
 * Removes a product by ID
 * @param {number} productId - Product ID to remove
 */
function removeProduct(productId) {
    const products = getAllProducts();
    let removed = false;
    let removedTitle = '';

    for (const category in products) {
        const index = products[category].findIndex(p => p.id == productId);
        if (index !== -1) {
            removedTitle = products[category][index].title;
            products[category].splice(index, 1);
            removed = true;
            break;
        }
    }

    if (removed) {
        saveAllProducts(products);
        console.log(`✅ Removed product ID ${productId}`);
        showNotification(`✅ Removed "${removedTitle}" from store`, 'success');
        initApp(); // Refresh display
        return true;
    } else {
        console.warn(`⚠️ Product ID ${productId} not found`);
        showNotification(`⚠️ Product not found`, 'error');
        return false;
    }
}

/**
 * Updates a product by ID
 * @param {number} productId - Product ID to update
 * @param {object} updates - Fields to update { title, price, rating, inStock, etc }
 */
function updateProduct(productId, updates) {
    const products = getAllProducts();
    let updated = false;
    let productTitle = '';

    for (const category in products) {
        const product = products[category].find(p => p.id == productId);
        if (product) {
            productTitle = product.title;
            Object.assign(product, updates);
            updated = true;
            break;
        }
    }

    if (updated) {
        saveAllProducts(products);
        console.log(`✅ Updated product ID ${productId}:`, updates);
        showNotification(`✅ Updated "${productTitle}"`, 'success');
        initApp(); // Refresh display
        return true;
    } else {
        console.warn(`⚠️ Product ID ${productId} not found`);
        showNotification(`⚠️ Product not found`, 'error');
        return false;
    }
}

/**
 * Toggles product stock status
 * @param {number} productId - Product ID
 */
function toggleProductStock(productId) {
    const products = getAllProducts();
    
    for (const category in products) {
        const product = products[category].find(p => p.id == productId);
        if (product) {
            product.inStock = !product.inStock;
            saveAllProducts(products);
            const status = product.inStock ? 'In Stock' : 'Out of Stock';
            console.log(`✅ Product ${productId} is now: ${status}`);
            showNotification(`✅ Stock status: ${status}`, 'success');
            initApp(); // Refresh display
            return true;
        }
    }
    
    return false;
}

/**
 * Gets a product by ID
 * @param {number} productId - Product ID
 */
function getProductById(productId) {
    const products = getAllProducts();
    
    for (const category in products) {
        const product = products[category].find(p => p.id == productId);
        if (product) return product;
    }
    
    return null;
}

/**
 * Gets all products from a category
 * @param {string} category - Category name
 */
function getProductsByCategory(category) {
    const products = getAllProducts();
    return products[category] || [];
}

/**
 * Adds a new category
 * @param {string} category - New category name
 */
function addCategory(category) {
    const products = getAllProducts();
    
    if (products[category]) {
        console.warn(`⚠️ Category "${category}" already exists`);
        showNotification(`⚠️ Category already exists`, 'error');
        return false;
    }

    products[category] = [];
    saveAllProducts(products);
    console.log(`✅ Added category: ${category}`);
    showNotification(`✅ Category "${category}" created`, 'success');
    return true;
}

/**
 * Removes a category
 * @param {string} category - Category name to remove
 */
function removeCategory(category) {
    const products = getAllProducts();
    
    if (!products[category]) {
        console.warn(`⚠️ Category "${category}" not found`);
        return false;
    }

    const count = products[category].length;
    delete products[category];
    saveAllProducts(products);
    console.log(`✅ Removed category: ${category} (${count} products deleted)`);
    showNotification(`✅ Category deleted (${count} products removed)`, 'success');
    initApp(); // Refresh display
    return true;
}

/**
 * Exports all products as JSON (for backup)
 */
function exportProducts() {
    const products = getAllProducts();
    const json = JSON.stringify(products, null, 2);
    console.log('📋 Products JSON:', json);
    return json;
}

/**
 * Imports products from JSON
 * @param {string} jsonString - JSON string of products
 */
function importProducts(jsonString) {
    try {
        const products = JSON.parse(jsonString);
        saveAllProducts(products);
        console.log('✅ Products imported successfully');
        showNotification('✅ Products imported', 'success');
        initApp(); // Refresh display
        return true;
    } catch (error) {
        console.error('❌ Invalid JSON format:', error);
        showNotification('❌ Invalid JSON format', 'error');
        return false;
    }
}

/**
 * Resets products to default mock data
 */
function resetToDefaultProducts() {
    if (confirm('⚠️ This will delete all changes. Continue?')) {
        localStorage.removeItem(PRODUCTS_STORAGE_KEY);
        console.log('✅ Products reset to default');
        showNotification('✅ Products reset to defaults', 'success');
        location.reload();
    }
}

// ============================================
// 8. SEARCH FUNCTIONALITY
// ============================================

/**
 * Filters products based on search query and re-renders
 */
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const allProducts = getAllProducts(); // Gets current state of products
    const filteredResults = {};

    for (const [category, products] of Object.entries(allProducts)) {
        const matchingProducts = products.filter(product => 
            product.title.toLowerCase().includes(searchTerm)
        );

        // Only add category to results if it has matching products
        if (matchingProducts.length > 0) {
            filteredResults[category] = matchingProducts;
        }
    }

    renderSearchResults(filteredResults, searchTerm);
}

/**
 * Updates the UI with filtered results
 */
function renderSearchResults(results, searchTerm) {
    const appContainer = document.getElementById('app-container');
    
    // If no results found
    if (Object.keys(results).length === 0) {
        appContainer.innerHTML = `
            <div class="text-center py-20">
                <p class="text-xl text-gray-600">No products found matching "${searchTerm}"</p>
                <button onclick="resetSearch()" class="mt-4 text-indigo-600 hover:underline">Clear search</button>
            </div>
        `;
        return;
    }

    // Render the filtered carousels
    let html = '';
    for (const [title, products] of Object.entries(results)) {
        html += renderCarousel(title, products);
    }
    appContainer.innerHTML = html;
}

/**
 * Clears the search input and resets the UI
 */
function resetSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = '';
    initApp(); // Re-runs the initial load logic
}