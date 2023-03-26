'use strict';

/**
    2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

    What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

const maxDivisor = 20;

function divisibleByAll(num) {
    let divisor = 2;

    while (divisor <= maxDivisor) {
        if ((num % divisor) !== 0) { return false; }

        divisor++;
    }

    return true;
}

let answer = maxDivisor;

while (!divisibleByAll(answer)) { answer++; }

module.exports = answer;