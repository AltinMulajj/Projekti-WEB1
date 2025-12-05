const track = document.querySelector('#carouselTrack');
const btnLeft = document.querySelector('.carousel-btn.left');
const btnRight = document.querySelector('.carousel-btn.right');

let scrollAmount = 0;

const updateCardWidth = () => {
  const card = document.querySelector('.product-card');
  return card.offsetWidth + 10; // includes margin/gap
};

btnRight.addEventListener('click', () => {
  const cardWidth = updateCardWidth();
  const maxScroll = track.scrollWidth - track.clientWidth;
  scrollAmount = Math.min(scrollAmount + cardWidth * 4, maxScroll);
  track.style.transform = `translateX(-${scrollAmount}px)`;
});

btnLeft.addEventListener('click', () => {
  const cardWidth = updateCardWidth();
  scrollAmount = Math.max(scrollAmount - cardWidth * 4, 0);
  track.style.transform = `translateX(-${scrollAmount}px)`;
});
