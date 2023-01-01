"use strict";

const result = document.querySelector(".answer");
const anyNumberButton = document.querySelectorAll(".number");
const anyOperatorButton = document.querySelectorAll(".operator");
const anySpecialButton = document.querySelectorAll(".special");

let buffer = "0";
let runningTotal = 0;
let previousOperator;

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
function handleMath(operator) {
  if (buffer === "0") {
    //do nothing
    return;
  }

  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperator(intBuffer);
  }

  previousOperator = operator;
  buffer = "0";
  console.log(runningTotal);
}

function flushOperator(value) {
  switch (previousOperator) {
    case "+":
      runningTotal += value;
      break;
    case "-":
      runningTotal -= value;
      break;
    case "×":
      runningTotal *= value;
      break;
    case "÷":
      runningTotal /= value;
      break;
  }
}

//To handle specials
function handleSpecial(special) {
  switch (special) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      if (previousOperator === null) {
        return;
      } else {
        flushOperator(parseInt(buffer));
        buffer = "" + runningTotal;
      }

      break;
    case "←":
      if (buffer.length > 1) {
        buffer = buffer.substring(0, buffer.length - 1);
      } else {
        buffer = "0";
      }
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
      handleMath(anyOperatorButton[i].textContent);

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
