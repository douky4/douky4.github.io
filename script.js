document.addEventListener('DOMContentLoaded', () => {
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

      // Automaticky po 5s
      setInterval(() => showSlide(index + 1), 5000);
  }

  // EMAILJS - ODESLÁNÍ FORMULÁŘE
document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("IFOtmBtku_1mu_vYD"); // Tvůj USER ID z EmailJS

    let form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Zabrání reloadu stránky

            emailjs.sendForm("service_088u03w", "template_8c9nd5s", this)
                .then(() => {
                    alert("Zpráva byla úspěšně odeslána!");
                }, (error) => {
                    alert("Chyba při odesílání: " + JSON.stringify(error));
                });
        });
    }
});

