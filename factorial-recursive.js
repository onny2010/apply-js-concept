/*
1! = 1
2! = 2x1
3! = 3x2x1
4! = 4x3x2x1
5! = 5x4x3x2x1
6! = 6x5x4x3x2x1
7! = 7x6x5x4x3x2x1
n! = n * (n-1)!
*/

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const myFactorial = factorial(5);
console.log(myFactorial);