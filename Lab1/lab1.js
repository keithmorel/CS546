const questionOne = function questionOne(arr) {
	let result = 0;
	for (var i = 0; i < arr.length; i++) {
		result += Math.pow(arr[i], 2);
	}
	return result;
}

const questionTwo = function questionTwo(num) {
	if (num == 0) {
		return 0;
	}
	else if (num == 1) {
		return 1;
	}
	else {
		return questionTwo(num - 1) + questionTwo(num - 2);
	}
}

const questionThree = function questionThree(text) {
	let result = 0;
	for (var i = 0; i < text.length; i++) {
		if (text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u') {
			result++;
		}
	}
	return result;			
}

const questionFour = function questionFour(num) {
	if (num < 0) {
		return NaN;
	}
	else if (num == 0) {
		return 1;
	}
	else {
		return num * questionFour(num - 1);
	}
}

module.exports = {
    firstName: "KEITH",
    lastName: "MOREL", 
    studentId: "10406482",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
