/*var factorial = 1;
for (let i = 1; i <= 7; i++) {
    factorial = factorial * i;
}
console.log(factorial);
*/

function getFactorial(number) {
    var factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var herFactorial = getFactorial(28);
console.log('her factorial number is:', herFactorial);

var myFactorial = getFactorial(35);
console.log('my factorial number is:', myFactorial);

// factorial for loop function in reverse/decrement

function getFactorial(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

var herFactorial = getFactorial(28);
console.log('her factorial number is:', herFactorial);

var myFactorial = getFactorial(35);
console.log('my factorial number is:', myFactorial);