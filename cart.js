// Cart data
let cartItems = [];

// Function to add an item to the cart
function addToCart(item, price) {
  cartItems.push({ item, price });
  updateCart();
}

// Function to update the cart
function updateCart() {
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = '';
  
  cartItems.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    
    const itemTitle = document.createElement('h3');
    itemTitle.textContent = item.item;
    
    const itemPrice = document.createElement('p');
    itemPrice.textContent = `Price: $${item.price}`;
    
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-from-cart-btn');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeFromCart(item));
    
    cartItem.appendChild(itemTitle);
    cartItem.appendChild(itemPrice);
    cartItem.appendChild(removeButton);
    
    cartContainer.appendChild(cartItem);
  });

  calculateTotalPrice();
}

// Function to remove an item from the cart
function removeFromCart(item) {
  const index = cartItems.findIndex(cartItem => cartItem.item === item.item);
  if (index > -1) {
    cartItems.splice(index, 1);
    updateCart();
  }
}

// Function to calculate the total price
function calculateTotalPrice() {
  const totalPriceElement = document.getElementById('total-price');
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  totalPriceElement.innerHTML = `<p>Total Price: $${totalPrice}</p>`;
}

// Call updateCart on page load
window.onload = updateCart;

const slide = ["card1.png", "card2.png", "card3.png", "card4.png"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
setInterval("ChangeSlide(1)", 1500);