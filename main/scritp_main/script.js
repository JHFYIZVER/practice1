const content = document.getElementById("content");
const showAll = document.getElementById("show-all");
const tourWrapper = document.getElementById("tour-wrapper");
const mainText = document.getElementsByClassName("main_about-us-text");
const readMore = document.getElementById("readMore");
const arrow = document.getElementsByClassName("arrow");
const authorisationForm = document.querySelector(".form");
const buttonSubmit = document.querySelector(".form__btn");

buttonSubmit.addEventListener("click", (event) => {
  const name = document.getElementById("name").value;
  const telephone = document.getElementById("tel").value;
  const email = document.getElementById("email").value;
  if (name === "" || telephone === "" || email === "") {
    event.preventDefault(); // Предотвращаем отправку формы, если поля не заполнены
    alert("Заполните все поля");
  } else if (!/^\d+$/.test(telephone)) {
    alert("Номер телефона должен состоять только из цифр");
    event.preventDefault(); // Предотвращаем отправку формы, если номер телефона неверного формата
  } else if (!/^[a-zA-Zа-яА-Я]+$/.test(name)) {
    alert("Имя должно состоять только из букв");
    event.preventDefault(); // Предотвращаем отправку формы, если имя неверного формата
  } else {
    localStorage.setItem("name", name);
    localStorage.setItem("telephone", telephone);
    localStorage.setItem("email", email);
    alert("Форма отправлена"); // Форма будет отправлена только если все условия выполнены
  }
});

function blurContentON() {
  burger.addEventListener("click", () => {
    content.classList.add("blur-content");
  });
}

blurContentON();

function blurContentOFF() {
  btnCloseMenu.addEventListener("click", () => {
    content.classList.remove("blur-content");
  });
}

blurContentOFF();

function showAllToggle() {
  showAll.addEventListener("click", () => {
    tourWrapper.classList.toggle("main__swiper-tour-wrapper-open");
    if (showAll.innerText === "Показать все") {
      showAll.innerText = "Скрыть";
    } else {
      showAll.innerText = "Показать все";
    }
  });
}

showAllToggle();

function changeImgShowAll() {
  showAll.addEventListener("click", () => {
    arrow[1].classList.toggle("arrow__rotate");
  });
}

changeImgShowAll();

function readMoreToggle() {
  readMore.addEventListener("click", () => {
    mainText[0].classList.toggle("main_about-us-text-open");
    if (readMore.innerText === "Читать далее") {
      readMore.innerText = "Скрыть";
    } else {
      readMore.innerText = "Читать далее";
    }
  });
}

readMoreToggle();

function changeImgReadMore() {
  readMore.addEventListener("click", () => {
    arrow[0].classList.toggle("arrow__rotate");
  });
}

changeImgReadMore();

/* Swiper */

const swiper = new Swiper(".main__swiper-tour", {
  slidesPerView: "auto",
  spaceBetween: 16,
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

const swiper1 = new Swiper(".main__swiper-achievements", {
  slidesPerView: "auto",
  spaceBetween: 16,
  observer: true,
  breakpoints: {
    768: {
      spaceBetween: 0,
      enabled: false,
    },
  },
  pagination: {
    el: ".achievements__swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});

const swiper2 = new Swiper(".main__swiper-specialists", {
  slidesPerView: "auto",
  spaceBetween: 16,
  observer: true,
  breakpoints: {
    768: {
      spaceBetween: 0,
    },
  },
  pagination: {
    el: ".specialists__swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
