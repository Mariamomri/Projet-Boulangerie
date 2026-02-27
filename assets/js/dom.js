/* menu dropdown*/
document.querySelectorAll(".dropdown > a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle("open");
  });
});

/* Selectionne tout les f4 ayant la classe "footert" et transforme la premier lettre en majuscule */
document.querySelectorAll(".footert").forEach((h4) => {
  h4.style.textTransform = "capitalize";
});

/* Selectionne tout les p ayant la classe "footert" et transforme la premier lettre en majuscule */
document.querySelectorAll(".container p").forEach((p) => {
  p.style.textTransform = "capitalize";
});
