/*
1! = 1
2! = 2x1
3! = 3x2x1
4! = 4x3x2x1
5! = 5x4x3x2x1
6! = 6x5x4x3x2x1
7! = 7x6x5x4x3x2x1
*/
var factorial = 1;
for (let i = 1; i <= 7; i++) {
    console.log(i);
    factorial = factorial * i;
}
console.log(factorial);