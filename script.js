document.addEventListener('DOMContentLoaded', () => {
  // === CAROUSEL ===
  const container = document.querySelector('.carousel-container');
  const images = document.querySelectorAll('.carousel img');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  if (container && images.length && prevButton && nextButton) {
    let index = 0;

    function updateCarousel() {
      container.style.transform = `translateX(${-index * 100}vw)`;
    }

    function showSlide(i) {
      index = (i + images.length) % images.length;
      updateCarousel();
    }

    nextButton.addEventListener('click', () => showSlide(index + 1));
    prevButton.addEventListener('click', () => showSlide(index - 1));

    setInterval(() => showSlide(index + 1), 5000);
  }

  // === EMAILJS ===
  if (typeof emailjs !== "undefined") {
    emailjs.init("IFOtmBtku_1mu_vYD");
  }

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm("service_088u03w", "template_8c9nd5s", this)
        .then(() => {
          alert("✅ Zpráva byla úspěšně odeslána!");
          form.reset();
        })
        .catch((error) => {
          alert("❌ Chyba při odesílání: " + JSON.stringify(error));
        });
    });
  }

  // === MOBILNÍ MENU BUTTON ===
  const menuBtn = document.querySelector('.mobile-menu-button');
  const navList = document.querySelector('.menu');

  if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }

  // === ROZBALOVACÍ MENU NA KLIKNUTÍ (mobil) ===
  const dropdownLinks = document.querySelectorAll('.dropdown > a');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const dropdownMenu = link.nextElementSibling;
      if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
        e.preventDefault(); // Zabrání odkazu při kliku
        dropdownMenu.classList.toggle('show');
      }
    });
  });

  console.log("✅ JS se načetl a spustil!");
});
