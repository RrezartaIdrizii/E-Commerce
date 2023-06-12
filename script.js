// Preloader
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});

// JavaScript effects
document.addEventListener('DOMContentLoaded', function() {
  const content = document.getElementById('content');

  // Example effect: fade in the content
  content.style.opacity = 0;
  setTimeout(function() {
    content.style.transition = 'opacity 1s';
    content.style.opacity = 1;
  }, 1000);

  // Add more effects as needed
});

  window.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.home-entrance');
    elements.forEach(function(element) {
      element.style.visibility = 'hidden';
    });

    function revealElements() {
      elements.forEach(function(element) {
        element.style.visibility = 'visible';
      });
    }

    setTimeout(revealElements, 1000);
  });

  window.addEventListener('DOMContentLoaded', (event) => {
    const playButton = document.getElementById('playButton');
    const stopButton = document.getElementById('stopButton');
    const audio = document.getElementById('audio');
  
    playButton.addEventListener('click', () => {
      audio.play();
    });
  
    stopButton.addEventListener('click', () => {
      audio.pause();
      audio.currentTime = 0;
    });
  });
     


  const slider = document.querySelector('.slider');
const images = [
  'img/image1.jpg',
  'img/image2.jpg',
  'img/image3.jpg',
  'img/image1.jpg',
  'img/image2.jpg',
  'img/image3.jpg'
];
let slideIndex = 0;
let isTransitioning = false;

function showSlide() {
  const startIndex = slideIndex * 3;
  const endIndex = startIndex + 3;
  const slideImages = images.slice(startIndex, endIndex);

  slider.innerHTML = '';

  for (let i = 0; i < slideImages.length; i++) {
    const img = document.createElement('img');
    img.src = slideImages[i];
    img.alt = `Photo ${i + 1}`;
    slider.appendChild(img);
  }

  slider.classList.add('slide-transition');
  setTimeout(() => {
    slider.classList.remove('slide-transition');
    isTransitioning = false;
  }, 300);
}
function showNextSlide() {
  if (isTransitioning) return;

  slideIndex++;
  if (slideIndex >= Math.ceil(images.length / 3)) {
    slideIndex = 0;
  }
  isTransitioning = true;
  showSlide();
}


slider.addEventListener('click', showNextSlide);

// Show the initial set of images
showSlide();
