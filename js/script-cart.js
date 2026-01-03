
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}


document.addEventListener("click", function (e) {
  const btn = e.target.closest(".add-to-cart");
  if (!btn) return;

  
  e.preventDefault();

  const id = btn.dataset.id;
  const name = btn.dataset.name;
  const price = Number(btn.dataset.price);
  const img = btn.dataset.img;

  
  if (!id || !name || !price || !img) return;

  let cart = getCart();
  let product = cart.find(p => p.id === id);

  if (product) {
    product.quantity += 1;
  } else {
    cart.push({
      id,
      name,
      price,
      img,
      quantity: 1
    });
  }

  saveCart(cart);
});



