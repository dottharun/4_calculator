"use strict";

const result = document.querySelector(".answer");
const anyNumberButton = document.querySelectorAll(".number");
const anyOperatorButton = document.querySelectorAll(".operator");
const anySpecialButton = document.querySelectorAll(".special");

let buffer = "0";

function reRenderResult() {
  result.textContent = buffer;
}

//To handle number input
function handleNumber(number) {
  if (buffer === "0") {
    buffer = number;
  } else {
    buffer += number;
  }
}

//To handle operator input
function handleOperator(operator) {
  console.log(operator);
}

//To handle specials
function handleSpecial(special) {
  switch (special) {
    case "C":
      buffer = "0";
      break;
    case "=":
      console.log("=");
      break;
    case "←":
      console.log("back-arrow");
  }
}

function init() {
  //Number input
  for (let i = 0; i < anyNumberButton.length; i++) {
    anyNumberButton[i].addEventListener("click", function () {
      handleNumber(anyNumberButton[i].textContent);

      //Result screen rerender
      reRenderResult();
    });
  }

  //Operator input
  for (let i = 0; i < anyOperatorButton.length; i++) {
    anyOperatorButton[i].addEventListener("click", function () {
      handleOperator(anyOperatorButton[i].textContent);

      //Result screen rerender
      reRenderResult();
    });
  }

  //Special input
  for (let i = 0; i < anySpecialButton.length; i++) {
    anySpecialButton[i].addEventListener("click", function () {
      handleSpecial(anySpecialButton[i].textContent);

      //Result screen rerender
      reRenderResult();
    });
  }
}

init();
