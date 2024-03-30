let count = parseInt(localStorage.getItem("Count")) || 0;
let countDisplay = document.querySelector("h1");
countDisplay.textContent = count;

document.querySelector(".incermentor").addEventListener("click", Counterup);
document.querySelector(".decermentor").addEventListener("click", Counterdown);
document.querySelector(".Reset").addEventListener("click",Reset);


function Counterup() {
  count++;
  countDisplay.textContent = count;
  countDisplay.classList.add("count-animation");
  localStorage.setItem("Count", count);
  setTimeout(() => {
    countDisplay.classList.remove("count-animation");
  }, 500);
}

function Counterdown() {
  count--;
  countDisplay.textContent = count;
  countDisplay.classList.add("count-animation");
  localStorage.setItem("Count", count);
  setTimeout(() => {
    countDisplay.classList.remove("count-animation");
  }, 500);
}

function Reset (){
    count = 0;
    countDisplay.textContent = count;
    localStorage.removeItem("Count");
    alert("Reseting the Tasbhi Count To 0")
}