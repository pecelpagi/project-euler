(() => {
    const fib = [1, 2];
    const evenFibNumbers = [2];
    let lastFibNumber = fib[fib.length-1];
    let i = 1;
    let limit = 4e+6;

    while(lastFibNumber <= limit) {
        lastFibNumber = fib[i] + fib[i-1];

        if (lastFibNumber <= limit) {
            fib.push(lastFibNumber);
            if (lastFibNumber % 2 === 0) {
                evenFibNumbers.push(lastFibNumber);
            }
        }

        i += 1;
    }

    const sum = evenFibNumbers.reduce((a, b) => a + b, 0);

    console.log(sum);
})();   