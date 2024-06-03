const myButton = document.getElementById("myBtn");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let random;

myButton.onclick = function () {
  random = Math.floor(Math.random() * (max - min)) + 2;
  myLabel.textContent = random;
}
