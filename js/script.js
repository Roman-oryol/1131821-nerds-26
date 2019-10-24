var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var user_name = form.querySelector("[name=name]");
var email = form.querySelector("[name=email]");
var message = form.querySelector("[name=message]");
var isStorageSupport = true;
var storage_name = "";
var storage_email ="";

try {
  storage_name = localStorage.getItem("user_name");
  storage_email = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("hidden");

  if (storage_name && storage_email) {
    user_name.value = storage_name;
    email.value = storage_email;
    message.focus();
  } else {
    user_name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("hidden");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!user_name.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("user_name", user_name.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.add("hidden");
    popup.classList.remove("modal-error");
  }
});
