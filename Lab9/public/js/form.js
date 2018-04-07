(function () {

    const palindromeMethods = {
        check(phrase) {
            // Error checking
            console.log(phrase);
            if (typeof phrase !== "string") throw "Input must be a string!";
            if (phrase == '') throw "Must provide a string to check!";

            // Palindrome check
            let no_punc = phrase.toLowerCase().replace(/[^0-9a-z]/g, '').replace(/\s+/g, '').trim();
            if (no_punc == no_punc.split('').reverse().join('')) {
                return true;
            }
            else {
                return false;
            }
        }
    };

    function runPalindromeCheck() {
        const returnFunction = palindromeMethods['check'];
        return returnFunction;
    }
    
        const form = document.getElementById("palindrome-form");

        if (form) {
            form.addEventListener("submit", event => {
                event.preventDefault();
                const phrase = document.getElementById("phrase").value;
                const runPalindromeCheckFunc = runPalindromeCheck();
                const palindromeCheck = runPalindromeCheckFunc(phrase);

                let li = document.createElement("li");
                let phraseVal = document.createTextNode(phrase);
                li.appendChild(phraseVal);

                if (palindromeCheck) li.setAttribute("class", "is-palindrome");
                else li.setAttribute("class", "not-palindrome");

                document.getElementById("attempts").appendChild(li);
                document.getElementById("phrase").value = '';
            });
    }
})();