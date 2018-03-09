const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require('fs-extra'));

const getFileAsString = async function getFileAsString(path) {
	try {
		if (typeof path !== 'string') {
			throw TypeError('The input path must be a valid string!');
		}
		return await fs.readFileAsync(path, 'utf8');
	}
	catch (err) {
		throw err;
	}
}

const getFileAsJSON = async function getFileAsJSON(path) {
	try {
		if (typeof path !== 'string') {
			throw TypeError('The input path must be a valid string!');
		}
		return await fs.readJSONAsync(path);
	}
	catch (err) {
		throw err;
	}
}

const saveStringToFile = async function saveStringToFile(path, text) {
	try {
		if (typeof path !== 'string' || typeof text !== 'string') {
			throw TypeError('Both arguments must be valid strings!');
		}
		const written_str = await fs.outputFileAsync(path, text);
		return true;
	}
	catch (err) {
		throw err;
	}
}

const saveJSONToFile = async function saveJSONToFile(path, obj) {
	try {
		if (typeof path !== 'string') {
			throw TypeError('The input path must be a valid string!');
		}
		if (typeof obj !== 'object') {
			throw TypeError('The input object must be a valid string!');
		}
		const written_json = await fs.outputJSONAsync(path, obj, { spaces: '\t' });
		return true;
	}
	catch (err) {
		throw err;
	}
}

module.exports = {
	getFileAsString,
	getFileAsJSON,
	saveStringToFile,
	saveJSONToFile
}
