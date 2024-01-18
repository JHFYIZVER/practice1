const readMore = document.getElementById("readMoreBtn");
const arrow = document.getElementsByClassName("arrow-down");
const discriptionText = document.getElementsByClassName(
  "discription-tour-text"
);

function readMoreToggle() {
  readMore.addEventListener("click", () => {
    discriptionText[0].classList.toggle("discription-tour-text__height");
    if (readMore.innerText === "Читать далее") {
      readMore.innerText = "Скрыть";
    } else {
      readMore.innerText = "Читать далее";
    }
  });
}

readMoreToggle();

function changeArrow() {
  readMore.addEventListener("click", () => {
    arrow[0].classList.toggle("arrow__rotate");
  });
}
changeArrow();
/* Swiper */

const swiper = new Swiper(".main__swiper-picture", {
  slidesPerView: "auto",
  spaceBetween: 0,
  observer: true,
  breakpoints: {
    768: {
      spaceBetween: 0,
      enabled: false,
    },
  },
  pagination: {
    el: ".tour__swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});
