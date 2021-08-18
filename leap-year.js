function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else return false;
}

const myYear = 2020;
const myYearIsLeapYear = isLeapYear(myYear);
console.log('is my year Leap Year', myYearIsLeapYear);

const herYear = 4321;
const herYearIsLeapYear = isLeapYear(herYear);
console.log('Is her year leap year', herYearIsLeapYear);