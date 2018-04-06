let exportedMethods = {
    check(phrase) {
        // Error checking
        if (typeof phrase !== "string") throw "Input must be a string!";
        if (phrase == '') throw "Must provide a string to check!";
        // Palindrome check
        let no_punc = phrase.toLowerCase().replace(/[^a-z]/g, '').replace(/\s+/g, '').trim();
        if (no_punc == no_punc.split('').reverse().join('')) {
            return true;
        }
        else {
            return false;
        }
    }
};

module.exports = exportedMethods;