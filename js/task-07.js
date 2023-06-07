"use strict"

const inputElem = document.querySelector("#font-size-control");
const textElem = document.querySelector("#text");

inputElem.addEventListener("input", (event) => {
    const value = event.currentTarget.value;
    textElem.style.fontSize = `${value}px`;
})