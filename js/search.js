const products = [
  { id: "eyebrowpencil", name: "Eyebrow Pencil", price: 13, img: "images/eyebrowpencil.jpg", link: "products/eyebrowpencil.html" },
  { id: "eyecream", name: "Eye Cream", price: 13, img: "images/eyecream.jpg", link: "products/eyecream.html" },
  { id: "eyeliner", name: "Eye Liner", price: 13, img: "images/eyeliner.jpg", link: "products/eyeliner.html" },
  { id: "eyeshadowpalette", name: "Eyeshadow Palette", price: 13, img: "images/eyeshadowpalette.jpg", link: "products/eyeshadowpalette.html" },
  { id: "facemask", name: "Facemask", price: 13, img: "images/facemask.jpg", link: "products/facemask.html" },
  { id: "foundation", name: "Foundation", price: 13, img: "images/foundation.jpg", link: "products/faundation.html" },
  { id: "hairoil", name: "Hair Oil", price: 13, img: "images/hairoil.jpg", link: "products/hairoil.html" },
  { id: "highlighter", name: "Highlighter", price: 13, img: "images/highlighter.jpg", link: "products/highlighter.html" },
  { id: "lipbalm", name: "Lip Balm", price: 13, img: "images/lipbalm.jpg", link: "products/lipbalm.html" },
  { id: "lipgloss", name: "Lip Gloss", price: 13, img: "images/lipgloss.jpg", link: "products/lipgloss.html" },
  { id: "lipliner", name: "Lip Liner", price: 13, img: "images/lipliner.jpg", link: "products/lipliner.html" },
  { id: "lipstick", name: "Lip Stick", price: 13, img: "images/lipstick.jpg", link: "products/lipstick.html" },
  { id: "makeupbag", name: "Make Up Bag", price: 13, img: "images/makeupbag.jpg", link: "products/makeupbag.html" },
  { id: "makeupbrushes", name: "Make Up Brushes", price: 13, img: "images/makeupbrushes.jpg", link: "products/makeupbrushes.html" },
  { id: "makeupsponge", name: "Make Up Sponge", price: 13, img: "images/makeupsponge.jpg", link: "products/makeupsponge.html" },
  { id: "mascara", name: "Mascara", price: 13, img: "images/mascara.png", link: "products/mascara.html" },
  { id: "moisturizer", name: "Moisturizer", price: 13, img: "images/moisturizer.jpg", link: "products/moisturizer.html" },
  { id: "powder", name: "Powder", price: 13, img: "images/powder.jpg", link: "products/powder.html" },
  { id: "serum", name: "Serum", price: 13, img: "images/serum.jpg", link: "products/serum.html" },
  { id: "settingspray", name: "Setting Spray", price: 13, img: "images/settingspray.jpg", link: "products/settingspray.html" },
  { id: "shampooconditioner", name: "Shampoo & Conditioner", price: 13, img: "images/shampooconditioner.jpg", link: "products/shampooconditioner.html" },
  { id: "sunscreen", name: "Sun Screen", price: 13, img: "images/sunscreen.jpg", link: "products/sunscreen.html" },
  { id: "toner", name: "Toner", price: 13, img: "images/toner.jpg", link: "products/toner.html" },
  { id: "blush", name: "Blush", price: 13, img: "images/blush.jpg", link: "products/blush.html" },
  { id: "bronzer", name: "Bronzer", price: 13, img: "images/bronzer.jpg", link: "products/bronzer.html" },
  { id: "cleanser", name: "Cleanser", price: 13, img: "images/cleanser.jpg", link: "products/cleanser.html" },
  { id: "concealer", name: "Concealer", price: 13, img: "images/concealer.jpg", link: "products/concealer.html" }
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
