"use strict"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector("body");
const buttonElem = document.querySelector("button.change-color");
const spanElem = document.querySelector("span.color");

buttonElem.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  bodyElem.style.backgroundColor = randomColor;
  spanElem.textContent = randomColor;
})