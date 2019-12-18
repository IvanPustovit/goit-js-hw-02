"use strict";

const logItems = function(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i+1} - ${array[i]}`);
  }
  return;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);



//====================================================
/*
* Вариант №2
*/

// const logItems = function(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     let number = 0;
//     number += 1 + i;
//     console.log(`${number} - ${array[i]}`);
//   }
//   return;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);