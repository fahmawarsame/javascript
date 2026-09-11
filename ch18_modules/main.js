// main.js

import { add, subtract, multiply, divide } from "./maths.js";

let number1 = Number(document.getElementById("number1").value);
let number2 = Number(document.getElementById("number2").value);

document.getElementById("add").addEventListener("click", function () {
  let number1 = Number(document.getElementById("number1").value);
  let number2 = Number(document.getElementById("number2").value);

  let result = add(number1, number2);

  document.getElementById("result").textContent = result;
});

document.getElementById("subtract").addEventListener("click", function () {
  let number1 = Number(document.getElementById("number1").value);
  let number2 = Number(document.getElementById("number2").value);

  let result = subtract(number1, number2);

  document.getElementById("result").textContent = result;
});

document.getElementById("multiply").addEventListener("click", function () {
  let number1 = Number(document.getElementById("number1").value);
  let number2 = Number(document.getElementById("number2").value);

  let result = multiply(number1, number2);

  document.getElementById("result").textContent = result;
});

document.getElementById("divide").addEventListener("click", function () {
  let number1 = Number(document.getElementById("number1").value);
  let number2 = Number(document.getElementById("number2").value);

  let result = divide(number1, number2);

  document.getElementById("result").textContent = result;
});
