'use strict';

/**
    A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

    Find the largest palindrome made from the product of two 3-digit numbers.
 */

function isPalindrome(number) {
    return number.toString() === number.toString().split('').reverse().join('');
}

function largestPalindrome(digits, firstDigit) {
    let result = 0;
    let maxReduction = parseInt(`${firstDigit}${'0'.repeat(digits - 1)}`, 10);
    let n1 = parseInt(`${firstDigit}`.repeat(digits), 10);

    while (n1 >= maxReduction) {
        let found = false;

        for (let n2 = n1; n2 > maxReduction; n2--) {
            const multiplyTwoNumbers = n1 * n2;
            const firstAndLastDigitEqual = (`${multiplyTwoNumbers}`.charAt(0) === `${multiplyTwoNumbers}`.slice(-1));

            if (firstAndLastDigitEqual && isPalindrome(multiplyTwoNumbers)) {
                result = multiplyTwoNumbers;
                found = true;
                break;
            }
        }

        if (found) { break; }

        n1--;
    }

    return result;
}

const answer = largestPalindrome(3, 9);

module.exports = answer;