// Inicializa ícones Lucide quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
      lucide.createIcons();
    }
  
    // Scroll suave
    window.scrollToSection = function (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };
  
    // Fade in com IntersectionObserver
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
  
    document.querySelectorAll('.fade-element').forEach(el => observer.observe(el));
  });
  