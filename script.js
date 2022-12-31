"use strict";

const result = document.querySelector(".answer");
const anyNumberButton = document.querySelectorAll(".number");

let buffer = "0";

function reRenderResult() {
  result.textContent = buffer;
}

function handleNumber(number) {
  if (buffer === "0") {
    buffer = number;
  } else {
    buffer += number;
  }
}

function init() {
  //Number button input
  for (let i = 0; i < anyNumberButton.length; i++) {
    anyNumberButton[i].addEventListener("click", function () {
      handleNumber(anyNumberButton[i].textContent);

      //Result screen rerender
      reRenderResult();
    });
  }
}

init();
