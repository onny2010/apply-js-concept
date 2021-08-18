function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

var herFactorial = getFactorial(28);
console.log('her factorial number is:', herFactorial);

var myFactorial = getFactorial(35);
console.log('my factorial number is:', myFactorial);


// decrement/reverse 

function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
var herFactorial = getFactorial(28);
console.log('her factorial number is:', herFactorial);

var myFactorial = getFactorial(35);
console.log('my factorial number is:', myFactorial);