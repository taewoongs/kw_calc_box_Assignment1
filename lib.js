function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function fact(num) {
    if (num < 0 || num > 15)
        return -1;
    if (num == 0 || num == 1) {
        return 1;
    }
    else {
        return fact(num - 1) * num;
    }
}

module.exports = {
    avg,
    prime,
    fact
}