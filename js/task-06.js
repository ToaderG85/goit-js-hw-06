"use strict"

const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur",(event) => {
    const value = event.currentTarget.value;
    if (value.length === parseInt(textInput.getAttribute("data-length"))) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
        
    } else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }
});