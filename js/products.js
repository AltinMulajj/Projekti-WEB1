function filterProducts(category) {
  const products = document.querySelectorAll(".product-card");

  products.forEach(product => {
    if (category === "all" || product.dataset.category === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
