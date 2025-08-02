
const previewImage = document.getElementById('previewImage');
const hoverItems = document.querySelectorAll('.hover-preview');

hoverItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    const imgSrc = item.getAttribute('data-img');
    previewImage.setAttribute('src', imgSrc);
  });
});

function scrollCarousel(direction) {
      const carousel = document.getElementById('carousel');
      const cardWidth = carousel.querySelector('.card2').offsetWidth + 10; // 10px for margin
      carousel.scrollBy({ left: direction * cardWidth * 4, behavior: 'smooth' });
    }

     function scrollBar(direction) {
      const carousel = document.getElementById('carousel1');
      const cardWidth = carousel.querySelector('.card3').offsetWidth + 10; // 10px for margin
      carousel.scrollBy({ left: direction * cardWidth * 4, behavior: 'smooth' });
    }   