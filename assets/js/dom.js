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
