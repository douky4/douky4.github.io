document.addEventListener('DOMContentLoaded', () => {
  // CAROUSEL
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

      // Automatické posouvání každých 5 sekund
      setInterval(() => showSlide(index + 1), 5000);
  }

  // EMAILJS - ODESLÁNÍ FORMULÁŘE
  if (typeof emailjs !== "undefined") {
      emailjs.init("IFOtmBtku_1mu_vYD"); // Tvůj USER ID z EmailJS
  } else {
      console.error("❌ Chyba: EmailJS není načteno. Ujisti se, že máš správně vložený <script> v HTML.");
  }

  const form = document.getElementById('contact-form');
  if (form) {
      form.addEventListener('submit', function(event) {
          event.preventDefault(); // Zabrání reloadu stránky

          emailjs.sendForm("service_088u03w", "template_8c9nd5s", this)
              .then(() => {
                  alert("✅ Zpráva byla úspěšně odeslána!");
                  form.reset(); // Vyčistí formulář po odeslání
              })
              .catch((error) => {
                  alert("❌ Chyba při odesílání: " + JSON.stringify(error));
              });
      });
  } else {
      console.warn("⚠️ Formulář #contact-form nebyl nalezen na stránce.");
  }

   // ======== MOBILNÍ MENU (HAMBURGER) =========
const menuBtn = document.querySelector('.mobile-menu-button');
const navList = document.querySelector('.menu');

if (menuBtn && navList) {
  menuBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
} else {
  console.warn("⚠️ Navigační prvky pro mobilní menu nebyly nalezeny.");
}

  console.log("✅ JS se načetl a spustil!");
});

