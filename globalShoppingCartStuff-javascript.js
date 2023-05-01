// Event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
    // Update the cart when the page loads
    updateCart();
});
let shoppingCart = [];

// Load the cart from the cookie if it exists
const storedCart = document.cookie.split('; ').find(row => row.startsWith('shoppingCart='));
if (storedCart) {
    shoppingCart = JSON.parse(decodeURIComponent(storedCart.split('=')[1]));
}

function addToCart(id, name, price, iconUrl) {
    // Check if the item is already in the cart
    const itemIndex = shoppingCart.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        // If the item is already in the cart, increment its quantity
        shoppingCart[itemIndex].quantity += 1;
    } else {
        // If the item is not in the cart, add it with quantity 1
        shoppingCart.push({ id, name, price, iconUrl, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    // Update the quantity indicator
    const totalQuantity = shoppingCart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-quantity').textContent = totalQuantity;

    // Save the cart to a cookie
    document.cookie = `shoppingCart=${encodeURIComponent(JSON.stringify(shoppingCart))}; path=/; max-age=86400`;
}
// Shopping Cart overlay
function toggleCartOverlay() {
    const overlay = document.getElementById('cart-overlay');
    overlay.classList.toggle('hidden');
    updateCartOverlayItems();
}

function updateCartOverlayItems() {
    const cartOverlayItems = document.getElementById('cart-overlay-items');
    cartOverlayItems.innerHTML = '';
    let total = 0;
    if (shoppingCart.length === 0) {
        cartOverlayItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        shoppingCart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <img src="${item.iconUrl}" alt="${item.name}">
                <span>${item.name} x ${item.quantity}</span>
                <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            `;
            cartOverlayItems.appendChild(itemDiv);
            total += item.price * item.quantity;
        });
    }
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

// Attach the toggleCartOverlay function to the click event of the shopping cart icon
document.querySelector('.shopping-cart-icon').addEventListener('click', function (event) {
    // Prevent the event from bubbling up to the document
    event.stopPropagation();
    toggleCartOverlay();
});
// Event listener for clicks on the document
document.addEventListener('click', function (event) {
    // Get the overlay element
    const overlay = document.getElementById('cart-overlay');
    // Check if the click target is outside the overlay and the overlay is visible
    if (!overlay.contains(event.target) && !overlay.classList.contains('hidden')) {
        // Hide the overlay
        toggleCartOverlay();
    }
});

// Initial update of the quantity indicator
updateCart();