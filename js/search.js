const products = [
  {
    id: "eyebrowpencil",
    name: "Eyebrow Pencil",
    price: 13.00,
    img: "images/eyebrowpencil.jpg",
    link: "products/eyebrowpencil.html"
  },
  {
    id: "eyeliner",
    name: "Eye Liner",
    price: 13.00,
    img: "images/eyeliner.jpg",
    link: "products/eyeliner.html"
  },
  {
    id: "toner",
    name: "Toner",
    price: 13.00,
    img: "images/toner.jpg",
    link: "products/toner.html"
  },
  {
    id: "blush",
    name: "Blush",
    price: 13.00,
    img: "images/blush.jpg",
    link: "products/blush.html"
  },
  {
    id: "lipstick",
    name: "Lipstick",
    price: 13.00,
    img: "images/lipstick.jpg",
    link: "products/lipstick.html"
  },
  {
    id: "mascara",
    name: "Mascara",
    price: 13.00,
    img: "images/mascara.png",
    link: "products/mascara.html"
  },
  {
    id: "foundation",
    name: "Foundation",
    price: 13.00,
    img: "images/foundation.jpg",
    link: "products/foundation.html"
  }
];

const params = new URLSearchParams(window.location.search);
const query = params.get("q")?.toLowerCase() || "";

const container = document.getElementById("search-results");

const results = products.filter(product =>
  product.name.toLowerCase().includes(query)
);

if (results.length === 0) {
  container.innerHTML = "<p>No products found.</p>";
} else {
  results.forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <a href="${product.link}">
          <img src="${product.img}" alt="${product.name}">
        </a>
        <h3>${product.name}</h3>
        <p>${product.price.toFixed(2)}€</p>
        <button
          class="add-to-cart"
          data-id="${product.id}"
          data-name="${product.name}"
          data-price="${product.price}"
          data-img="${product.img}"
        >
          Add to Cart
        </button>
      </div>
    `;
  });
}
