"use strict";

const result = document.querySelector(".answer");
const anyNumberButton = document.querySelectorAll(".number");

function handleNum(num) {
  console.log(num);
}

function init() {
  //Number button input
  for (let i = 0; i < anyNumberButton.length; i++) {
    anyNumberButton[i].addEventListener("click", function () {
      // result.textContent += anyNumberButton[i].textContent;
      handleNum(anyNumberButton[i].textContent);
    });
  }

  //Result screen
  reRenderResult();
}

init();
