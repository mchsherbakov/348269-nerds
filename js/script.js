var link = document.querySelector(".contacts .btn");
var popup = document.querySelector(".popup-container");
var close = document.querySelector(".popup-cls-btn");

var form = popup.querySelector("form");
var login = popup.querySelector(".name input");
var email = popup.querySelector(".email input");
var letter = popup.querySelector(".letter textarea");

var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.add("popup-container-show");

      if (storage) {
        login.value = storage;
        email.focus();
      } else {
        login.focus();
      }
});

close.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.remove("popup-container-show");
      popup.classList.remove("popup-container-error");
});

form.addEventListener("submit", function(event) {
      if (!login.value || !email.value || !letter.value) {
          event.preventDefault();
          popup.classList.remove("popup-container-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("popup-container-error");
      } else {
        localStorage.setItem("login", login.value, email.value);
      }
});

window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        if (popup.classList.contains("popup-container-show")) {
            popup.classList.remove("popup-container-show");
            popup.classList.remove("popup-container-error");
        }
      }
});
