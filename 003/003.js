const isPrime = (val) => {
    if (val > 2) {
        let i = 2;
        let count = 0;
        let running = true;
            
        while (running) {
            if (val % i === 0) {
                count += 1;
            }
        
            if (count >= 2) {
                running = false
            } else if (i > val) {
                running = false
            }
        
            i += 1;
        }
    
        return count === 1;
    }

    return val === 2;
}

(() => {
    let i = 2;
    let num = 600851475143;
    let largestPrimeNumber = 2;

    while (num > i) {
        if (num % i === 0) {
            num = num / i;
        }
        
        i++;

        if (isPrime(i)) {
            largestPrimeNumber = i;
        }
    }

    console.log(largestPrimeNumber);
})();