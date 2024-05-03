"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display");
  const clearButton = document.querySelector(".clear");
  const percentButton = document.querySelector(".percent");
  const addButton = document.querySelector(".add");
  const subtractButton = document.querySelector(".subtract");
  const multiplyButton = document.querySelector(".multiply");
  const divideButton = document.querySelector(".divide");
  const decimalButton = document.querySelector(".decimal");
  const calculateButton = document.querySelector(".calculate");

  let currentInput = "";
  let firstOperand = "";
  let operator = "";

  function updateDisplay(value) {
    display.textContent = value;
  }

  function addToCurrentInput(value) {
    currentInput += value;
    updateDisplay(firstOperand + " " + operator + " " + currentInput);
  }

  function clear() {
    currentInput = "";
    firstOperand = "";
    operator = "";
    updateDisplay("0");
  }

  function calculate() {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(currentInput);

    if (operator === "+") {
      firstOperand = (num1 + num2).toString();
    } else if (operator === "-") {
      firstOperand = (num1 - num2).toString();
    } else if (operator === "*") {
      firstOperand = (num1 * num2).toString();
    } else if (operator === "/") {
      firstOperand = (num1 / num2).toString();
    }

    currentInput = "";
    operator = "";
    updateDisplay(firstOperand);
  }

  clearButton.addEventListener("click", clear);
  percentButton.addEventListener("click", () => {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay(firstOperand + " " + operator + " " + currentInput);
  });
  addButton.addEventListener("click", () => {
    if (firstOperand === "") {
      firstOperand = currentInput;
      currentInput = "";
    } else if (currentInput !== "") {
      calculate();
    }
    operator = "+";
    updateDisplay(firstOperand + " " + operator);
  });
  subtractButton.addEventListener("click", () => {
    if (firstOperand === "") {
      firstOperand = currentInput;
      currentInput = "";
    } else if (currentInput !== "") {
      calculate();
    }
    operator = "-";
    updateDisplay(firstOperand + " " + operator);
  });
  multiplyButton.addEventListener("click", () => {
    if (firstOperand === "") {
      firstOperand = currentInput;
      currentInput = "";
    } else if (currentInput !== "") {
      calculate();
    }
    operator = "*";
    updateDisplay(firstOperand + " " + operator);
  });
  divideButton.addEventListener("click", () => {
    if (firstOperand === "") {
      firstOperand = currentInput;
      currentInput = "";
    } else if (currentInput !== "") {
      calculate();
    }
    operator = "/";
    updateDisplay(firstOperand + " " + operator);
  });
  decimalButton.addEventListener("click", () => addToCurrentInput("."));
  calculateButton.addEventListener("click", calculate);

  const numberButtons = document.querySelectorAll(
    ".container div:not(.clear):not(.percent):not(.add):not(.subtract):not(.multiply):not(.divide):not(.decimal):not(.calculate)"
  );
  numberButtons.forEach((button) => {
    button.addEventListener("click", () =>
      addToCurrentInput(button.textContent)
    );
  });
});
