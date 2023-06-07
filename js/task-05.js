"use strict"

const inputElem = document.querySelector("input#name-input");
const outputElem = document.querySelector("span#name-output");

inputElem.addEventListener("input", (event)=>{
    
    if (event.currentTarget.value === "" ) {
        outputElem.textContent = "Anonymous";
    } else {
        outputElem.textContent = event.currentTarget.value;
    }
})
