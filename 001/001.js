(() => {
    let sum = 0;
    let n = 1000;

    while(n-=1) {
        if (n % 3 === 0 || n % 5 === 0) {
            sum += n;
        }
    }

    console.log(sum);
})();   