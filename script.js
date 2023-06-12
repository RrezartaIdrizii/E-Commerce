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
