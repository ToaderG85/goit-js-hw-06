"use strict"

let counterValue = 0;

const buttonDown = document.querySelector('button[data-action="decrement"]');
const buttonUp = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

const handleClickDown = event => {
    counterValue = counterValue - 1;
    value.innerHTML = counterValue;
}

buttonDown.addEventListener("click", handleClickDown);

const handleClickUp = event => {
    counterValue = counterValue + 1;
    value.innerHTML = counterValue;
}

buttonUp.addEventListener("click", handleClickUp);