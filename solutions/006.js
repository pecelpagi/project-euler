'use strict';

/**
    The sum of the squares of the first ten natural numbers is,

    1^2 + 2^2 + ... + 10^2 = 385

    The square of the sum of the first ten natural numbers is,

    (1 + 2 + ... + 10)^2 = 55^2 = 3025

    Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is
    3025 - 385 = 2640.

    Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

let sumOfTheSquares = 0;
let squareOfTheSum = 0;

for (let i=1; i <= 100; i++) {
    sumOfTheSquares = sumOfTheSquares + (i * i);
    squareOfTheSum = squareOfTheSum + i;
}

squareOfTheSum = squareOfTheSum * squareOfTheSum;

const answer = squareOfTheSum - sumOfTheSquares;

module.exports = answer;