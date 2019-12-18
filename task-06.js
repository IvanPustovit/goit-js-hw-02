"use strict";

let input;
const numbers = [];
let total = 0;

const inputTotal = function () {
    do {
        input = prompt('Введите число');
        numbers.push(Number(input))
    } while (input !== null)
    console.log(numbers);

    for (const number of numbers) {
        total += number

    }
    return total
}

inputTotal()
console.log(total);