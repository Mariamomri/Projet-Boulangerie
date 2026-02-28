/* menu dropdown*/
document.querySelectorAll(".dropdown > a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle("open");
  });
});

/* metre en majescule le premier lettre de footer */
document.querySelectorAll(".footert").forEach((h4) => {
  h4.style.textTransform = "capitalize";
});
document.querySelectorAll(".container p").forEach((p) => {
  p.style.textTransform = "capitalize";
});

/* Carousel */
const slides = document.querySelectorAll(".carousel .slide");
let currentIndex = 0;

function showSlide(index) {
  currentIndex = (index + slides.length) % slides.length;
  slides.forEach((s) => s.classList.remove("active"));
  slides[currentIndex].classList.add("active");
}

const backicon = document.querySelector(".backicon");
const nexticon = document.querySelector(".nexticon");

if (backicon) {
  backicon.addEventListener("click", () => showSlide(currentIndex - 1));
}
if (nexticon) {
  nexticon.addEventListener("click", () => showSlide(currentIndex + 1));
}

/* hover by click */
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => (l.style.color = "")); // reset
    link.style.color = "#E8A631"; // arancione
  });
});

/* hover by survol */
// navLinks.forEach((link) => {
//   link.addEventListener("mouseover", () => {
//     link.style.color = "#E8A631"; // arancione
//   });
//   link.addEventListener("mouseout", () => {
//     link.style.color = ""; // reset
//   });
// });

/* hover card by survol */
const cards = document.querySelectorAll(".listcard .card");

cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.style.backgroundColor = "white";
    card.style.transform = "translateY(-5px)";
    card.style.boxShadow = "0 14px 30px rgba(0, 0, 0, 0.08)";
  });

  card.addEventListener("mouseout", () => {
    card.style.backgroundColor = "";
    card.style.transform = "";
    card.style.boxShadow = "";
  });
});
