function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('myInches in feet:', feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadiInches in feet:', feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log('naniInches in feet:', feet);

var nanaInches = 168;
var feet = inchToFeet(nanaInches);
console.log('nanaInches in feet', feet);



// mile to km
function mileToKm(miles) {
    var km = miles * 1.60934;
    return km;
}

var marthon = mileToKm(26.2);
console.log('marathon in km:', marthon);

// centimeter to meter 
function centimeterToMeter(centimeter) {
    let meter = centimeter * 0.01;
    return meter;
}

var myMeter = centimeterToMeter(123);
console.log('The meter is:', myMeter);