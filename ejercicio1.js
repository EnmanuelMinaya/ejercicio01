

let n1 = 0, n2 = 1, siguiente;

function isPrime(num) {
    if (num <= 1)
        return "NoPrimo"
    for (var i = 2; i < num; i++)
        if (num % i === 0) return "NoPrimo";
    return "Primo";
}

function paridad(num) {
    if (!(num % 2))
        return "par";
    else
        return "inpar";
}
function digits(num) {
    let stringOfDigits = '';
    while (num > 1) {
        let digit = num % 10;
        digit.toString();
        stringOfDigits = digit + ", " + stringOfDigits;
        num = Math.floor(num / 10);
    }
    return stringOfDigits;
}

for (let i = 1; i <= 50; i++) {
    console.log(n1 + " " + paridad(n1) + " " + isPrime(n1) + " " + digits(n1));
    siguiente = n1 + n2;
    n1 = n2;
    n2 = siguiente;
}