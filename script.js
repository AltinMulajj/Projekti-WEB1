function setupCarousel(trackId, leftBtnClass, rightBtnClass) {
  const track = document.querySelector(trackId);
  const btnLeft = document.querySelector(leftBtnClass);
  const btnRight = document.querySelector(rightBtnClass);

  let scrollAmount = 0;

  const updateCardWidth = () => {
    const card = track.querySelector(':scope > div');
    return card.offsetWidth + 10;
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
}


setupCarousel("#carouselTrack", ".left", ".right");
setupCarousel("#carouselTrack2", ".left2", ".right2");


