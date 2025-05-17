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
const carousel = document.getElementById('carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const dotsContainer = document.getElementById('dots');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function updateCarousel() {
      items.forEach((item, index) => {
        item.classList.remove('active');
      });

      const offset = -currentIndex * (550 + 20);
      carousel.style.transform = `translateX(${offset + window.innerWidth / 2 - 275}px)`;
      items[currentIndex].classList.add('active');

      dotsContainer.querySelectorAll('button').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
    }

    function createDots() {
      items.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.addEventListener('click', () => {
          currentIndex = index;
          updateCarousel();
        });
        dotsContainer.appendChild(dot);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    createDots();
    updateCarousel();
    window.addEventListener('resize', updateCarousel);