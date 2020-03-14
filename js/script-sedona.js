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

click.addEventListener("click", function (evt) {
    if (!popup.classList.contains("form-main-show")) {
      popup.classList.add('form-main-show');
    } else {
      popup.classList.remove('form-main-show');
    }
});


  