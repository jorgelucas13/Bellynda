/* INICIO DAS ANIMAÇOES */
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".section__container h3", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".section__container h1", {
    ...scrollRevealOption,
    origin: "left", 
    delay: 500,
});
ScrollReveal().reveal(".section__container h2", {
    ...scrollRevealOption,
    origin: "right", 
    delay: 1000,
});
ScrollReveal().reveal(".section__container buttom", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".nav__links li", {
    ...scrollRevealOption,
    origin: "top",
    interval: 300, 
    delay: 2000,
});

ScrollReveal().reveal(".socials a", {
    duration: 1000,
    interval: 500,
    delay: 4000,
});

/* INICIO DO MENU FUNCAO */
const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav__menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  /* INICIO DO CARROSSEL */
document.addEventListener('DOMContentLoaded', function() {
            const slider = document.querySelector('.slider');
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.dot');
            const prevButton = document.querySelector('.prev');
            const nextButton = document.querySelector('.next');
            
            let currentIndex = 0;
            const slideCount = slides.length;
            
            // Inicializar o slider
            updateSlider();
            
            // Evento para botão anterior
            prevButton.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + slideCount) % slideCount;
                updateSlider();
            });
            
            // Evento para botão próximo
            nextButton.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % slideCount;
                updateSlider();
            });
            
            // Eventos para os pontos indicadores
            dots.forEach((dot, index) => {
                dot.addEventListener('click', function() {
                    currentIndex = index;
                    updateSlider();
                });
            });
            
            // Atualizar a posição do slider e os indicadores
            function updateSlider() {
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                // Atualizar os pontos indicadores
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
            
            // Adicionar suporte para gestos de swipe em dispositivos móveis
            let touchStartX = 0;
            let touchEndX = 0;
            
            slider.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
            });
            
            slider.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });
            
            function handleSwipe() {
                const swipeThreshold = 50;
                if (touchEndX < touchStartX - swipeThreshold) {
                    // Swipe para a esquerda (próximo)
                    currentIndex = (currentIndex + 1) % slideCount;
                    updateSlider();
                } else if (touchEndX > touchStartX + swipeThreshold) {
                    // Swipe para a direita (anterior)
                    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
                    updateSlider();
                }
            }
            
            // Auto-play com pausa ao hover
            let autoPlayInterval;
            
            function startAutoPlay() {
                autoPlayInterval = setInterval(function() {
                    currentIndex = (currentIndex + 1) % slideCount;
                    updateSlider();
                }, 5000);
            }
            
            function stopAutoPlay() {
                clearInterval(autoPlayInterval);
            }
            
            startAutoPlay();
            
            slider.addEventListener('mouseenter', stopAutoPlay);
            slider.addEventListener('mouseleave', startAutoPlay);
        });