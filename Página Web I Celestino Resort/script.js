const elementos = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

elementos.forEach(el => observer.observe(el));

const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".carousel .prev");
const nextBtn = document.querySelector(".carousel .next");

let index = 0;
const visibleImages = 3; 
const images = document.querySelectorAll(".carousel-track img");
const totalImages = images.length;

function updateCarousel() {
  const imageWidth = images[0].offsetWidth + 15; 
  track.style.transform = `translateX(${-index * imageWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (index < totalImages - visibleImages) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

const toggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
  toggle.classList.toggle("active");

  if (menu.classList.contains("show")) {
    toggle.textContent = "✖";
  } else {
    toggle.textContent = "☰";
  }
});