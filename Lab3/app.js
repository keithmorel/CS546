// Imports
const { getFileAsString, getFileAsJSON, saveStringToFile, saveJSONToFile } = require('./fileData');
const { simplify, createMetrics } = require('./textMetrics');
const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require('fs-extra'));

async function runAllMetrics() {
	try {
		const fileList = ['chapter1.txt', 'chapter2.txt', 'chapter3.txt'];
		for (let x = 0; x < fileList.length; x++) {
			console.log(fileList[x]);
			const jsonFile = fileList[x].replace('.txt', '.result.json');
			const debug_file = fileList[x].replace('.txt', '.debug.txt');
			if (!await fs.pathExistsAsync(jsonFile)) {
				const fileAsString = await getFileAsString(fileList[x]);
				const simplifiedString = simplify(fileAsString);
				const fileMetrics = createMetrics(simplifiedString);
				await saveStringToFile(debug_file, simplifiedString);
				await saveJSONToFile(jsonFile, fileMetrics);
			}
			console.log(await getFileAsString(jsonFile));
		}
	}
	catch (err) {
		throw err;
	}
}
runAllMetrics();		
