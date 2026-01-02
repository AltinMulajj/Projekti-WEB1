const params = new URLSearchParams(window.location.search);
const query = params.get("Q");

const products = [
  { name: "Blush", price: "13.00€", img: "../images/blush.jpg" },
  { name: "Bronzer", price: "13.00€", img: "../images/bronzer.jpg" },
  { name: "Cleanser", price: "13.00€", img: "../images/cleanser.jpg" },
  { name: "Concealer", price: "13.00€", img: "../images/conceler.jpg" },
];

const filtered = products.filter(product =>
  product.name.toLowerCase().includes(query.toLowerCase())
);

document.getElementById("search-title").textContent =
    `Search results for: "${query}"`;
  
const resultsContainer = document.getElementById("search-results");

if (filtered.length === 0) {
  resultsContainer.innerHTML = "<p>No results found.</p>";
} else {
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <button>Add to Cart</button>
    `;
    resultsContainer.appendChild(div);
  });
}
