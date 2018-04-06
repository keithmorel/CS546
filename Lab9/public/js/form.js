import { stat } from "fs";

(function () {

    function check(phrase) {
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
    };
    
    const staticForm = document.getElementById("static-form");

    if (staticForm) {
        // Store all elements
        const phrase = document.getElementById("phrase");

        staticForm.addEventListener("submit", event => {
            event.preventDefault();
                const phraseValue = phrase.value;
                const palindromeCheck = check(phraseValue);
                return palindromeCheck;
        });
    }
})();