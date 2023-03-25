'use strict';

/**
    The prime factors of 13195 are 5, 7, 13 and 29.

    What is the largest prime factor of the number 600851475143 ?
 */

let number = 600851475143;
let factor = 2;

while (factor <= number) {
    if (number % factor === 0) {
        number /= factor;
    } else {
        factor++;
    }
}

const answer = factor;

module.exports = answer;