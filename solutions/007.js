'use strict';

/**
    By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

    What is the 10 001st prime number?    
*/

const isPrime = (number) => {
    for (let i = 2; i < number - 1; i++) { if (number % i === 0) return false; }

    return true;
}

let number = 1;
let lastIndexPrimeNumber = 0;

while (lastIndexPrimeNumber < 10001) {
    number += 1;
    if (isPrime(number)) lastIndexPrimeNumber += 1;
}

const answer = number;

module.exports = answer;