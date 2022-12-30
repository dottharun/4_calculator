"use strict";

const result = document.querySelector(".answer");
const anyNumberButton = document.querySelectorAll(".number");

for (let i = 0; i < anyNumberButton.length; i++) {
  anyNumberButton[i].addEventListener("click", function () {
    result.textContent += anyNumberButton[i].textContent;
  });
}
