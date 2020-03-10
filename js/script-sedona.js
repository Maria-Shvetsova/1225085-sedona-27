var click = document.querySelector(".button-form-main");

var popup = document.querySelector(".form-main");
var close = popup.querySelector(".button-form-main");

var form = popup.querySelector("form");
var datein = popup.querySelector("[name=date-check-in]");
var dateout = popup.querySelector("[name=date-check-out]");
var numberadult = popup.querySelector("[name=amount-adult]");
var numberkids = popup.querySelector("[name=amount-kids]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("amount-adult", amount-adult.value);
  storage = localStorage.getItem("amount-kids", amount-kids.value);
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("form-main-show");

    
    search.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("form-main-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!date-check-in.value || !date-check-out.value || !amount-adult.value || !amount-kids.value) {
      evt.preventDefault();
      console.log("Нужно ввести даты вьезда и выезда и количество взрослых и детей");
    } else {
        if (isStorageSupport) {
        localStorage.setItem("amount-adult", amount-adult.value);
        localStorage.setItem("amount-kids", amount-kids.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("form-main-show")) {
        popup.classList.remove("form-main-show");
      }
    }
  });