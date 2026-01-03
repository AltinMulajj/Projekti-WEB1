document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("add-to-cart")) return;

  const btn = e.target;

  const product = {
    id: btn.dataset.id,
    name: btn.dataset.name,
    price: parseFloat(btn.dataset.price),
    img: btn.dataset.img,
    quantity: 1
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart");
});



