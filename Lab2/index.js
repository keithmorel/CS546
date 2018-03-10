const geometry = require('./geometry');
const utilities = require('./utilities');

// Testing Volume of Rectangular Prism
console.log("---------Testing Volume of Rectangular Prism---------\n");
/*
let testVRP1 = geometry.volumeOfRectangularPrism(null, null, null);
console.log("Testing volume with all null inputs");
console.log(testVRP1);

let testVRP2 = geometry.volumeOfRectangularPrism('test', ['not', 'a', 'number'], {test: 'test'});
console.log("Testing volume with non-number inputs");
console.log(testVRP2);

let testVRP3 = geometry.volumeOfRectangularPrism(3, 0, 25);
console.log("Testing with a zero input");
console.log(testVRP3);
*/
let testVRP4 = geometry.volumeOfRectangularPrism(1, 8, 2230);
console.log("Testing with real inputs, output should be 17840");
console.log(testVRP4);

let testVRP5 = geometry.volumeOfRectangularPrism(43, 2, 50);
console.log("Testing with real inputs, output should be 4300");
console.log(testVRP5);
console.log("\n");

// Testing Surface Area of Rectangular Prism
console.log("----------Testing Surface Area of Rectangular Prism----------\n");
/*
let testSARP1 = geometry.surfaceAreaOfRectangularPrism(null, null, null);
console.log("Testing with all null inputs");
console.log(testSARP1);

let testSARP2 = geometry.surfaceAreaOfRectangularPrism('test', ['not', 'a', 'number'], {test: 'test'});
console.log("Testing with bad inputs");
console.log(testSARP2);

let testSARP3 = geometry.surfaceAreaOfRectangularPrism(3, 0, 25);
console.log("Testing with a zero input");
console.log(testSARP3);
*/
let testSARP4 = geometry.surfaceAreaOfRectangularPrism(1, 8, 2230);
console.log("Testing with real inputs, output should be 40156");
console.log(testSARP4);

let testSARP5 = geometry.surfaceAreaOfRectangularPrism(43, 2, 50);
console.log("Testing with real inputs, output should be 4672");
console.log(testSARP5);
console.log("\n");

// Testing Volume of Sphere
console.log("----------Testing Volume of Sphere----------\n");
/*
let testVS1 = geometry.volumeOfSphere(null);
console.log("Testing with null input");
console.log(testVS1);

let testVS2 = geometry.volumeOfSphere('not a number');
console.log("Testing with non-number input");
console.log(testVS2);

let testVS3 = geometry.volumeOfSphere(0);
console.log("Testing with zero input");
console.log(testVS3);
*/
let testVS4 = geometry.volumeOfSphere(7);
console.log("Testing with real input, output should be ~ 1436.76");
console.log(testVS4);

let testVS5 = geometry.volumeOfSphere(23);
console.log("Testing with real input, output should be ~ 50965.01");
console.log(testVS5);
console.log("\n");

// Testing Surface Area of Sphere
console.log("----------Testing Surface Area of Sphere----------\n");
/*
let testSAS1 = geometry.surfaceAreaOfSphere(null);
console.log("Testing with null input");
console.log(testSAS1);

let testSAS2 = geometry.surfaceAreaOfSphere('test');
console.log("Testing with non-number input");
console.log(testSAS2);

let testSAS3 = geometry.surfaceAreaOfSphere(-5);
console.log("Testing with negative input");
console.log(testSAS3);
*/
let testSAS4 = geometry.surfaceAreaOfSphere(5);
console.log("Testing with real input, output should be ~ 314.16");
console.log(testSAS4);

let testSAS5 = geometry.surfaceAreaOfSphere(36);
console.log("Testing with real input, output should be ~ 16286.02");
console.log(testSAS5);
console.log("\n");


// Testing Deep Equality
console.log("----------Testing Deep Equality------------\n");
/*
let testDE1 = utilities.deepEquality(null, null);
console.log("Testing with null input");
console.log(testDE1);

let testDE2 = utilities.deepEquality('test', 'string');
console.log("Testing with non-object input");
console.log(testDE2);

let testDE3 = utilities.deepEquality({}, {});
console.log("Testing with empty input");
console.log(testDE3);
*/
const testDEA = {a: 2, b: 3}
const testDEB = {a: 2, b: 4}
const testDEC = {a: 2, b: 3}
let testDE4 = utilities.deepEquality(testDEA, testDEB);
console.log("Testing with real input, should be false");
console.log(testDE4);

let testDE5 = utilities.deepEquality(testDEA, testDEC);
console.log("Testing with real input, should be true");
console.log(testDE5);
console.log("\n");


// Testing Unique Elements
console.log("----------Testing Unique Elements----------\n");
/*
let testUE1 = utilities.uniqueElements(null);
console.log("Testing with null input");
console.log(testUE1);

let testUE2 = utilities.uniqueElements('string');
console.log("Testing with bad input");
console.log(testUE2);
*/
let testUE3 = utilities.uniqueElements([]);
console.log("Testing with empty input");
console.log(testUE3);

const testUEA = ["a", "a", "b", "a", "b", "c"];
let testUE4 = utilities.uniqueElements(testUEA);
console.log("Testing with real input, output should be 3");
console.log(testUE4);
console.log("\n");

// Testing Count of Each Character In String
console.log("----------Testing Count of Each Character In String----------\n");
/*
let testCECIS1 = utilities.countOfEachCharacterInString(null);
console.log("Testing with null input");
console.log(testCECIS1);

let testCECIS2 = utilities.countOfEachCharacterInString(5);
console.log("Testing with bad input");
console.log(testCECIS2);
*/
let testCECIS3 = utilities.countOfEachCharacterInString('');
console.log("Testing with empty input");
console.log(testCECIS3);

let testCECIS4 = utilities.countOfEachCharacterInString('Test String');
console.log('Testing with real input, output should be: { "T": 1, "e": 1, "s": 1, "t": 2, " ": 1, "S": 1, "r": 1, "i": 1, "n": 1, "g": 1 }');
console.log(testCECIS4);
console.log("\n");

