/*====== toggle icon navbar =======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x-circle');
  navbar.classList.toggle('active');
};

/* ========= scroll sections active link ========= */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      document
        .querySelector(`header nav a[href*="${id}"]`)
        .classList.add('active');
    }
  });

  document.querySelector('header')
    .classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x-circle');
  navbar.classList.remove('active');
};

/*=========== scroll reveal ============*/
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

/*========== typed js ===========*/
new Typed('.multiple-text', {
  strings: ['.Net Developer', 'Software & Automation Engineer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true
});

/*========== EMAILJS ==========*/
(function () {
  emailjs.init({
    publicKey: "qRzKmGoP3EdeLAH3W",
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // EmailJS submit
    emailjs.sendForm(
      "service_8r2chps",
      "template_cogbqcm",
      contactForm
    )
    .then(() => {
      showToast("Message sent successfully! 🚀", "success");
      contactForm.reset();
    })
    .catch(error => {
      console.error("EmailJS Error:", error);
      showToast("Failed to send message. Please try again.", "error");
    });
  });
});


function showToast(message, type = "success") {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.className = `toast show ${type}`;

  setTimeout(() => {
    toast.className = "toast";
  }, 3500);
}

document.getElementById("year").textContent = new Date().getFullYear();