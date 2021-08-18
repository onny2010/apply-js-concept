// const number = 5;
// const reminder = number % 2;
// console.log(reminder == 1);
// console.log(number % 2 == 1);


function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}

const myNum = 135;
const isMyNumEven = isEven(myNum);
console.log('is my number even', isMyNumEven);

const herNum = 128;
const isHerNumEven = isEven(herNum);
console.log('is her number even', isHerNumEven);