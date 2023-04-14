const cards = document.querySelectorAll('.card');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');

let cart = [];

// gombok
cards.forEach(card => {
  const addToCartBtn = card.querySelector('.add-to-cart');
  addToCartBtn.addEventListener('click', addToCart);
});

// kosarhoz ad
function addToCart(event) {
  const card = event.target.parentNode;
  const cardId = card.getAttribute('data-id');
  const cardName = card.querySelector('h3').innerText;
  const cardPrice = card.querySelector('p').innerText.split(': ')[1];

  const cartItem = {
    id: cardId,
    name: cardName,
    price: parseFloat(cardPrice)
  };

  cart.push(cartItem);

  // kosar frissitese
  updateCartDisplay();
}

// kosar frissitese
function updateCartDisplay() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}
