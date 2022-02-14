const btn = document.querySelector("#exchange");
const sUnit = document.querySelector("#s-unit");
const tUnit = document.querySelector("#t-unit");
let source = document.querySelector("#s-value");
let unit = document.querySelector("#t-value");
let trueOrFalse = true;

function converter() {
  if (trueOrFalse) {
    unit.value = (source.value * 1.8 + 32, 2).toFixed(2);
  } else {
    unit.value = ((source.value - 32) / 1.8).toFixed(2);
  }
}

function exUnit() {
  source.value = "";
  unit.value = "";

  if (trueOrFalse) {
    trueOrFalse = false;
    sUnit.innerHTML = "&#8457;";
    tUnit.innerHTML = "&#8451;";
  } else {
    trueOrFalse = true;
    sUnit.innerHTML = "&#8451;";
    tUnit.innerHTML = "&#8457;";
  }
}

source.addEventListener("keyup", converter);
btn.addEventListener("click", exUnit);
