// ============================================
// 1. MOCK DATA
// ============================================

const MOCK_API_DATA = {
    "Trending Electronics": [
        { id: 1, title: "Wireless Noise-Cancelling Headphones", price: 199.99, rating: 4.7, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=250&h=250&fit=crop", reviews: 1243, inStock: true },
        { id: 2, title: "4K Curved Gaming Monitor", price: 449.00, rating: 4.5, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=250&h=250&fit=crop", reviews: 856, inStock: true },
        { id: 3, title: "Portable 1TB SSD Drive", price: 89.99, rating: 4.8, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=250&h=250&fit=crop", reviews: 2104, inStock: true },
        { id: 4, title: "Smart Home Speaker Assistant", price: 49.99, rating: 4.2, image: "https://images.unsplash.com/photo-1589003077984-894e133da26d?w=250&h=250&fit=crop", reviews: 1567, inStock: true },
        { id: 5, title: "Mechanical RGB Keyboard", price: 129.50, rating: 4.6, image: "https://images.unsplash.com/photo-1587829191301-51117c2367e0?w=250&h=250&fit=crop", reviews: 891, inStock: true },
        { id: 6, title: "High-Speed Mesh Router", price: 149.99, rating: 4.3, image: "https://images.unsplash.com/photo-1572820906580-d83f5ce7c8d6?w=250&h=250&fit=crop", reviews: 723, inStock: true },
    ],
    "Daily Deals & Discounts": [
        { id: 7, title: "Bamboo Cutting Board Set (20% Off)", price: 24.99, rating: 4.9, image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=250&h=250&fit=crop", reviews: 543, inStock: true },
        { id: 8, title: "Stainless Steel Water Bottle", price: 15.00, rating: 4.7, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=250&h=250&fit=crop", reviews: 789, inStock: true },
        { id: 9, title: "Ergonomic Office Chair", price: 175.50, rating: 4.4, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=250&h=250&fit=crop", reviews: 456, inStock: false },
        { id: 10, title: "Yoga Mat and Strap Kit", price: 32.99, rating: 4.8, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=250&h=250&fit=crop", reviews: 612, inStock: true },
    ],
    "Best Sellers in Books": [
        { id: 11, title: "The Self-Taught Developer (Paperback)", price: 12.99, rating: 4.6, image: "https://images.unsplash.com/photo-1507842217343-583f20270bc5?w=250&h=250&fit=crop", reviews: 234, inStock: true },
        { id: 12, title: "A Novel of the Future (Hardcover)", price: 19.50, rating: 4.9, image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=250&h=250&fit=crop", reviews: 567, inStock: true },
        { id: 13, title: "Historical Atlas: World Map Set", price: 39.99, rating: 4.7, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=250&h=250&fit=crop", reviews: 345, inStock: true },
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
});

// Update cart count when storage changes (for multi-tab sync)
window.addEventListener('storage', updateCartCount);












































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