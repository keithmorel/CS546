const check = phrase => {
    // Error checking
    console.log(typeof phrase);
    if (phrase == '') return "Must provide a string to check!";
    // if (phrase == '') throw "Must provide a string to check!";

    // Palindrome check
    let no_punc = phrase.toLowerCase().replace(/[^0-9a-z]/g, '').replace(/\s+/g, '').trim();
    if (no_punc == no_punc.split('').reverse().join('')) {
        return true;
    }
    else {
        return false;
    }
}    
const form = document.getElementById("palindrome-form");

if (form) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        // Get phrase to check and check if it's a palindrome
        const phrase = document.getElementById("phrase").value;
        const palindromeCheck = check(phrase);

        // If there was no string provided, display error and throw
        if (typeof palindromeCheck !== 'boolean') {
            const errorArea = document.getElementById("errorArea");
            const errorText = document.createTextNode(palindromeCheck);
            const errorNode = document.createElement('p').appendChild(errorText);
            errorArea.appendChild(errorNode);
            return;
        }
        // If a string was entered and error text is there, remove it
        else if (document.getElementById('errorArea').hasChildNodes()) {
            document.getElementById('errorArea').innerHTML = '';
        }
        // Create List item to hold the phrase checked
        let li = document.createElement("li");
        let phraseVal = document.createTextNode(phrase);
        li.appendChild(phraseVal);
        // Set the class accordingly
        if (palindromeCheck) li.setAttribute("class", "is-palindrome");
        else li.setAttribute("class", "not-palindrome");
        // Add new attempt to list of previous attempts and reset the textarea
        document.getElementById("attempts").appendChild(li);
        document.getElementById("phrase").value = '';
    });
}