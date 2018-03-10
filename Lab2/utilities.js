function deepEquality(obj1, obj2) {
	if (obj1 === null || obj2 === null) {
		throw SyntaxError("Error: Inputs all must be provided.");
	}
	if (typeof(obj1) !== 'object' || typeof(obj2) !== 'object') {
		throw TypeError("Error: Inputs all must be objects.");
	}
	else {
		const obj1_keys = Object.keys(obj1);
		const obj2_keys = Object.keys(obj2);
		if (obj1_keys.length != obj2_keys.length) {
			return false;
		}
		for (let i = 0; i < obj1_keys.length; i++) {
			if (obj1_keys[i] != obj2_keys[i]) {
				return false;
			}
			const key = obj1_keys[i];
			if (obj1[key] != obj2[key]) {
				return false;
			}
		}
	}
	return true;
}

function uniqueElements(arr) {
	let unique = [];
	if (arr === null) {
		throw SyntaxError("Error: Input must be provided.");
	}
	if (!(arr instanceof Array)) {
		throw TypeError("Error: Input must be an array.");
	}
	else {
		for (let i = 0; i < arr.length; i++) {
			if (!unique.includes(arr[i])) {
				unique += arr[i];
			}
		}
	}
	return unique.length;
}

function countOfEachCharacterInString(str) {
	if (str === null) {
		throw SyntaxError("Error: Input must be provided.");
	}
	if (typeof(str) !== 'string') {
		throw TypeError("Error: Input must be a string.");
	}
	let result = {};
	for (let i = 0; i < str.length; i++) {
		if (str[i] in result) {
			result[str[i]]++;
		}
		else {
			result[str[i]] = 1;
		}
	}
	return result;
}

module.exports = {
	deepEquality: deepEquality,
	uniqueElements: uniqueElements,
	countOfEachCharacterInString: countOfEachCharacterInString
};
