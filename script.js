function setupCarousel(trackId, leftBtnClass, rightBtnClass) {
  const track = document.querySelector(trackId);
  const btnLeft = document.querySelector(leftBtnClass);
  const btnRight = document.querySelector(rightBtnClass);

  if (!track || !btnLeft || !btnRight) return;

  let scrollAmount = 0;

  const updateCardWidth = () => {
    const card = track.querySelector(":scope > div");
    return card.offsetWidth + 10;
  };

  btnRight.addEventListener("click", () => {
    const cardWidth = updateCardWidth();
    const maxScroll = track.scrollWidth - track.clientWidth;
    scrollAmount = Math.min(scrollAmount + cardWidth * 4, maxScroll);
    track.style.transform = `translateX(-${scrollAmount}px)`;
  });

  btnLeft.addEventListener("click", () => {
    const cardWidth = updateCardWidth();
    scrollAmount = Math.max(scrollAmount - cardWidth * 4, 0);
    track.style.transform = `translateX(-${scrollAmount}px)`;
  });
}

setupCarousel("#carouselTrack1", ".left1", ".right1");
setupCarousel("#carouselTrack2", ".left2", ".right2");

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const product = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: button.dataset.price,
        img: button.dataset.img,
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));

      alert("Added to cart!");
    });
  });
});
