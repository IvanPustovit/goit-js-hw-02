"use strict";

let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число');
    input !== null ? numbers.push(Number(input)) : total = 0;
} while (input !== null)

for (const number of numbers) {
    numbers.length == 0 ? total = 0 : total += number
}

console.log(total);