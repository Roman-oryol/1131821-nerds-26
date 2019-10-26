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

var slider = document.querySelector(".slider");

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

if (slider) {
  var slides = slider.querySelectorAll(".slider-item");
  var switch_list = slider.querySelector(".slider-controls");
  var switches = switch_list.querySelectorAll(".slide-switch");

  switch_list.classList.remove("hidden");

  var toggle_handler = function (i) {
    switches[i].addEventListener("click", function(evt) {
      for (var j = 0; j < switches.length; j++) {
        if (switches[j] === evt.currentTarget) {
          console.log(j, i);
          switches[j].classList.add("slide-switch-active");
          slides[j].classList.remove("hidden");
        } else {
          switches[j].classList.remove("slide-switch-active");
          slides[j].classList.add("hidden");
        }
      }
    });
  };

  for (var i = 0; i < switches.length; i++) {
    toggle_handler(i);
  }
};
