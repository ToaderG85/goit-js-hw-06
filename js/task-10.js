"use strict"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxes.innerHTML = "";
  let boxSize = 30;
  for (let i = 1; i <= amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;    
    newBox.style.backgroundColor = getRandomHexColor();
    boxes.append(newBox);
    boxSize += 10;
  }

}
 const boxes = document.querySelector("#boxes");
 const inputElem = document.querySelector("input");
 const createButton = document.querySelector("button[data-create]");
 const destroyButton = document.querySelector("button[data-destroy]");

 createButton.addEventListener("click",(event) => {
  const value = inputElem.value;
  createBoxes(value);
  




 })

 destroyButton.addEventListener("click",(event) => {
  boxes.innerHTML = "";
 })