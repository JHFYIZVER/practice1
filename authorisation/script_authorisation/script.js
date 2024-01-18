"use strict";

const authorisationForm = document.querySelector(".authorisationForm");
const buttonSubmit = document.querySelector(
  ".window-authorisation__form__button"
);

buttonSubmit.addEventListener("click", (event) => {
  const telephone = document.getElementById("tel").value;
  const password = document.getElementById("password").value;
  const check = document.getElementById("remember_me");
  if (telephone === "" || password === "" || !check.checked) {
    event.preventDefault(); // Предотвращаем отправку формы, если поля не заполнены
    alert("Заполните все поля");
  } else if (check.checked) {
    localStorage.setItem("telephone", telephone);
    localStorage.setItem("password", password);
  }
  // Форма будет отправлена только если все условия выполнены
});

function checkTypeOfTelephone(event) {
  const telephone = document.getElementById("tel").value;
  if (!/^\d+$/.test(telephone)) {
    alert("Номер телефона должен состоять только из цифр");
    event.preventDefault(); // Предотвращаем отправку формы, если номер телефона неверного формата
  }
}

function checkLenTelephone(event) {
  const telephone = document.getElementById("tel").value;
  if (telephone.length !== 11) {
    alert("Номер телефона должен состоять из 11 цифр");
    event.preventDefault(); // Предотвращаем отправку формы, если номер телефона неверного формата
  }
}
authorisationForm.addEventListener("submit", checkTypeOfTelephone);
authorisationForm.addEventListener("submit", checkLenTelephone);
