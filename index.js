
document.getElementById("countButton").onclick = function() {
   

    document.body.removeChild(document.getElementById("lettersDiv"));
    document.body.removeChild(document.getElementById("wordsDiv"));

     lettersDiv = document.createElement("div");
     lettersDiv.setAttribute("id", "lettersDiv")
     wordsDiv = document.createElement("div");
     wordsDiv.setAttribute("id","wordsDiv");

console.log(lettersDiv);

console.log(wordsDiv);
    document.body.appendChild(lettersDiv);
    document.body.appendChild(wordsDiv);

    var typedText = document.getElementById("textInput").value;

    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
 

    var letterCounts = {};

    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];

        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }

    for (letter in letterCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
    }

    words = typedText.split(/\s/);
    var wordCounts = {};
    
    for (let i = 0; i < words.length; i++) {
        currentWord = words[i];

        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1;
        } else {
            wordCounts[currentWord]++;
        }
    }

    for (word in wordCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", ");
        span.appendChild(textContent);
        document.getElementById("wordsDiv").appendChild(span);
    }

    


}