const inputForm = document.querySelector(".input-form");
const value = document.querySelector(".number");
const checkBtn = document.querySelector(".check");
const resetBtn = document.querySelector(".reset");
const showResult = document.querySelector(".output");
const showCounter = document.querySelector(".counter");
let count = 0;
let randomNum = Math.floor(Math.random() * 100) + 1; //가장 작은 수를 1로.

function finding() {
  let userNum = value.value;
  resetClass();

  if (userNum < 1 || userNum > 100) {
    alert("범위에 맞게 숫자를 입력하세요.");
  } else {
    if (userNum > randomNum) {
      showResult.innerText = "DOWN";
    } else if (userNum < randomNum) {
      showResult.innerText = "UP";
    } else {
      showResult.innerText = "맞혔습니다.";
      showResult.classList.add("success");
    }
    value.value = "";
    count++;
    showCounter.innerText = `시도 횟수 : ${count}회`;
  }
}

function reload() {
  window.location.reload();
}

function resetClass() {
  showResult.classList.remove("success");
}

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
checkBtn.addEventListener("click", finding);
resetBtn.addEventListener("click", reload);
