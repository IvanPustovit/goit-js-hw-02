"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");
  if (input) {
    numbers.push(Number(input));
  }
} while (input !== null);

for (const number of numbers) {
  !!numbers.length;
  total += number;
}

if (total > 0) {
  console.log(total);
}
