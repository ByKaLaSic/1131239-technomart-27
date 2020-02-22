var link = document.querySelector(".link");
var popup = document.querySelector(".letter");
var successfully = document.querySelector(".successfully");
var close_successfully = successfully.querySelector(".close_button");
var close_popup = popup.querySelector(".close_button");
var form = popup.querySelector("form");
var moniker = popup.querySelector("#lost_name");
var email = popup.querySelector("#lost_email");
var text = popup.querySelector("#lost_text");
var isStorageSupport = true;
var storage_1 = "";
var storage_2 = "";
var purchases = document.querySelectorAll(".buy");

try {
  storage_1 = localStorage.getItem("moniker");
  storage_2 = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

var add_Thumbnail_Click_Handler = function (buy) {
  buy.addEventListener("click", function (evt) {
    evt.preventDefault();
    successfully.classList.add("modal_show");
  });
};

for (var i = 0; i < purchases.length; i++) {
  add_Thumbnail_Click_Handler(purchases[i]);
};

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal_show");

  if (storage_1) {
    moniker.value = storage_1;
    email.focus();
  } else {
    moniker.focus();
  }

  if (storage_2) {
    email.value = storage_2;
  }

  if (storage_1 && storage_2) {
    text.focus();
  }
});

close_popup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal_show");
  popup.classList.remove("modal_error");
});

close_successfully.addEventListener("click", function (evt) {
  evt.preventDefault();
  successfully.classList.remove("modal_show");
});

form.addEventListener("submit", function (evt) {
  if (!moniker.value || !email.value) {
  evt.preventDefault();
  popup.classList.remove("modal_error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal_error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("moniker", moniker.value);
    localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal_show")) {
      popup.classList.remove("modal_show");
      popup.classList.remove("modal_error");
    } else {
      if (successfully.classList.contains("modal_show"))
      successfully.classList.remove("modal_show");
    }
  }
});
