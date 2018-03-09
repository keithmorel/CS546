function simplify(text) {
	if (typeof text !== 'string') {
		throw TypeError('Input must be a string!');
	}
	return text.toLowerCase().replace(/[^a-z]/g, ' ').replace(/\s+/g, ' ').trim();
	// All lowercase, removed non-letters, replaced multiple whitespace with single
}

function createMetrics(text) {
	if (typeof text !== 'string') {
		throw TypeError('Input must be a string!');
	}
	const simplified = simplify(text);
	const list_words = simplified.split(' ');
	console.log(simplified);
	console.log(list_words);
	let total_letters = 0;
	let word_Occurences = {};
	for (let x = 0; x < list_words.length; x++) {
		for (let y = 0; y < list_words[x].length; y++) {
			total_letters++;
		}
		if (word_Occurences.hasOwnProperty(list_words[x])) {
			word_Occurences[list_words[x]]++;
		}
		else {
			word_Occurences[list_words[x]] = 1;
		}
		
	}
	let long_words = 0;
	for (let z = 0; z < list_words.length; z++) {
		if (list_words[z].length >= 6) {
			long_words++;
		}
	}
	const unique_words = Object.keys(word_Occurences).length;
	const average_word_length = total_letters / (list_words.length);

	const metrics = {
		totalLetters: total_letters,
		totalWords: list_words.length,
		uniqueWords: unique_words,
		longWords: long_words,
		averageWordLength: average_word_length,
		wordOccurences: word_Occurences
	};
	return metrics;
}

module.exports = {
	simplify,
	createMetrics
}
