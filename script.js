// Simple animations on scroll
document.addEventListener('DOMContentLoaded', () => {
  // Floating hearts animation is handled by CSS
  
  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('.fade-in, .zoom-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
  });

  // Add some interactive elements
  const heartRing = document.querySelector('.heart-ring');
  if (heartRing) {
    heartRing.addEventListener('click', function() {
      this.style.animation = 'none';
      setTimeout(() => {
        this.style.animation = 'bounce 2s infinite, rotate 4s linear infinite';
      }, 10);
    });
  }

  // Photo gallery interaction
  document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05) rotate(1deg)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
    });
  });

  console.log('Сайт загружен! Желаем Константину и Яне счастливой свадьбы! 💕');
});