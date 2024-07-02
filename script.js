let cart = [];
let total = 0.00;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(li);
  });

  document.getElementById('cart-total').textContent = total.toFixed(2);
}

function checkout() {
  alert(`Total amount: $${total.toFixed(2)}. Proceeding to checkout.`);
  // Additional logic for payment gateway integration could go here
}

// Example products could be dynamically loaded from a database or hardcoded as shown in HTML
