const lab1 = require("./lab1");

console.log(lab1.questionOne([1,2,3]));
// Should be 14
console.log(lab1.questionOne([5,9,2]));
// 110
console.log(lab1.questionOne([11,7,3]));
// 179
console.log(lab1.questionOne([8,2,6]));
// 104
console.log(lab1.questionOne([3,6,12]));
// 189

console.log(lab1.questionTwo(7));
// Should be 13
console.log(lab1.questionTwo(0));
// 0
console.log(lab1.questionTwo(1));
// 1
console.log(lab1.questionTwo(3));
// 2
console.log(lab1.questionTwo(11));
// 89

console.log(lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere.")); 
// Should be 196
console.log(lab1.questionThree("This is a test."));
// 4
console.log(lab1.questionThree("There might be some vowels in here."));
// 11
console.log(lab1.questionThree("Two plus two equals fish."));
// 7
console.log(lab1.questionThree("The quick brown fox jumped over the lazy dog."));
// 12

console.log(lab1.questionFour(10));
// Should output 3628800
console.log(lab1.questionFour(-1));
// NaN
console.log(lab1.questionFour(0));
// 1
console.log(lab1.questionFour(5));
// 120
console.log(lab1.questionFour(8));
// 40320
