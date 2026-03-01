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

/* hover & transition card social media */
document.querySelectorAll(".card6").forEach((card) => {
  const overlay = card.querySelector(".overlay");
  const text = card.querySelector(".textcouchi");
  const icon = card.querySelector(".social-icons");

  if (!overlay || !icon) return; // evita errori nelle card senza overlay

  card.addEventListener("mouseenter", () => {
    overlay.style.height = "170px";
    overlay.style.backgroundColor = "#E8A631";
    text.style.transform = "translateY(-170px)";
    icon.style.transform = "translateY(0px)";
  });

  card.addEventListener("mouseleave", () => {
    overlay.style.height = "0";
    icon.style.transform = "translateY(50px)";
    text.style.transform = "translateY(0)";
  });
});

/* hover & transition cards price*/

document.querySelectorAll(".sec4").forEach((card) => {
  const textCard = card.querySelector(".textCard");
  const p = textCard.querySelector(".textCard p");
  const icon = card.querySelector(".occhio");
  const overlay = card.querySelector(".overlay2");
  const occhiodiv = card.querySelector(".occhiodiv");
  const price = card.querySelector(".price");
  const bb = card.querySelector(".bb p");

  card.addEventListener("mouseenter", () => {
    card.classList.add("active"); // aggiunto una classe
    icon.style.transform = "translateY(0)";
    occhiodiv.style.transform = "translateY(100px)";
    icon.style.opacity = "1";
    textCard.style.backgroundColor = "#E9A636";
    textCard.style.color = "white";
    overlay.style.height = "100%";
    overlay.style.opacity = "1";
    occhiodiv.style.border = "1px solid white";
    price.style.border = "1px solid white";
    textCard.style.color = "white";
    p.style.color = "white";
    bb.style.color = "white";
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("active");
    overlay.style.height = "0";
    overlay.style.opacity = "0";
    icon.style.transform = "translateY(-40px)";
    icon.style.opacity = "0";
    textCard.style.backgroundColor = "";
    textCard.style.color = "black";
    occhiodiv.style.border = "";
    price.style.border = "";
    textCard.style.color = "";
    p.style.color = "grey";
    bb.style.color = "grey";
  });
});

/*carousel en bas */
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".card7");
  const nextBtn = document.querySelectorAll(".butcerchio")[1];
  const prevBtn = document.querySelectorAll(".butcerchio")[0];

  let index = 0;
  const cardWidth = 400 + 32; // larghezza card + gap
  const visibleCards = 3;
  const totalCards = cards.length;

  function updateActiveCenter() {
    cards.forEach((card) => card.classList.remove("active-center"));

    const centerIndex = index + 1; // la card centrale è sempre la seconda visibile

    if (cards[centerIndex]) {
      cards[centerIndex].classList.add("active-center");
    }
  }

  updateActiveCenter();

  nextBtn.addEventListener("click", () => {
    if (index < totalCards - visibleCards) {
      index++;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
      updateActiveCenter();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
      updateActiveCenter();
    }
  });
});

/* back to top button */
(function () {
  const btn = document.getElementById("backToTop");
  const showAfter = 300; // px

  window.addEventListener("scroll", () => {
    if (window.scrollY > showAfter) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    // Animation de remontée douce
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
})();

/*header scroll*/

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
