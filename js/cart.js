function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
  const cart = getCart();
  const box = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");

  box.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    box.innerHTML = "<p style='text-align:center'>Cart is empty</p>";
    totalEl.innerText = "";
    return;
  }

cart.forEach((item, i) => {
  if (!item || !item.name || !item.img || isNaN(item.price) || isNaN(item.quantity)) {
    return;
  }

  total += Number(item.price || 0) * Number(item.quantity || 0);

    box.innerHTML += `
      <div style="display:flex;gap:20px;padding:15px;border-bottom:1px solid #ddd;">
        <img src="${item.img}" width="80">

        <div style="flex:1">
          <h4>${item.name}</h4>
          <p>${item.price} €</p>
        </div>

        <div>
          <button onclick="changeQty(${i},-1)">−</button>
          <span style="margin:0 10px">${item.quantity}</span>
          <button onclick="changeQty(${i},1)">+</button>
        </div>

        <button class="remove-btn" onclick="removeItem(${i})">Remove</button>

      </div>
    `;
  });

  totalEl.innerText = `Total: ${total.toFixed(2)} €`;
}

function changeQty(i, diff) {
  let cart = getCart();
  cart[i].quantity += diff;

  if (cart[i].quantity <= 0) {
    cart.splice(i, 1);
  }

  saveCart(cart);
  renderCart();
}

function removeItem(i) {
  let cart = getCart();
  cart.splice(i, 1);
  saveCart(cart);
  renderCart();
}

renderCart();
