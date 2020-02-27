var link = document.querySelector(".link");
var popup = document.querySelector(".letter");
var successfully = document.querySelector(".successfully");
var closeSuccessfully = successfully.querySelector(".close_button");
var linkMap = document.querySelector(".little_map");
var map = document.querySelector(".big_map");

if (linkMap) {
  linkMap.addEventListener("click", function () {
    map.classList.add("modal_show");
  });
};

if (popup) {
  var closePopup = popup.querySelector(".close_button");
  var form = popup.querySelector("form");
  var moniker = popup.querySelector("#lost_name");
  var email = popup.querySelector("#lost_email");
  var text = popup.querySelector("#lost_text");
};

if (map) {
  var closeMap = map.querySelector(".close_button")
}

var isStorageSupport = true;
var storage_1 = "";
var storage_2 = "";
var purchases = document.querySelectorAll(".buy");

try {
  storage_1 = localStorage.getItem("moniker");
  storage_2 = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
};

var addThumbnailClickHandler = function (buy) {
  buy.addEventListener("click", function (evt) {
    evt.preventDefault();
    successfully.classList.add("modal_show");
  });
};

for (var i = 0; i < purchases.length; i++) {
  addThumbnailClickHandler(purchases[i]);
};

if (closeMap) {
  closeMap.addEventListener("click", function () {
    map.classList.remove("modal_show");
  });
};

if (link) {
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
};

if (closePopup) {
  closePopup.addEventListener("click", function () {
    popup.classList.remove("modal_show");
    popup.classList.remove("modal_error");
  });
}

if (closeSuccessfully) {
  closeSuccessfully.addEventListener("click", function () {
    successfully.classList.remove("modal_show");
  });
};

if (form) {
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
};

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
