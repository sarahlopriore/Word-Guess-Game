
// Establish an array for all possible letter guesses
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Establish an array for all word guess options
var wordArray = ["gorilla", "koala", "giraffe", "zebra", "anteater", "elephant", "lion", "tiger", "shark", "rhino", "flamingo", "lemur", "cheetah", 
"octopus"]

var chosenWord = document.getElementById("currentWord");
var guessedLetters = document.getElementById("lettersGuessed");
var guessesRemaining = document.getElementById("remainingGuesses");
var numberGuessesRemaining = 10;
var wins = 0;
var winsDisplay = document.getElementById("winsP");

// When page is loaded Computer chooses a word for player to guess and displays blanks for number of letters in the word
window.addEventListener("load", function() {
    var randomIndex = Math.floor(Math.random()*wordArray.length);
    var computerChoice = wordArray[randomIndex];
    console.log(computerChoice);
    for (var i = 0; i < computerChoice.length; i++) {
        chosenWord.textContent += "- "
    }
    guessesRemaining.textContent = numberGuessesRemaining;
    
    document.onkeyup = function (event) {
        let key = event.key.toLowerCase();
        if (guessedLetters.textContent === "") {
            guessedLetters.textContent = key; 
        } else {
            guessedLetters.textContent += ", " + key;
        }
        
    }
    
});




// Listen for key events for letters that are typed 

// Check key guess against letters in the word

// If letter is in the word then fill blanks appropriately

// If letter is not in the word, number of guesses goes down

// Wrong letter guessed gets added to the "letters already guessed"

// If a letter was already guessed, do not let player guess that letter again 
// (letter does not decrease number of guesses or display in the letters already guessed)

// Block user from entering non-letter keys

// When word is correctly guessed resey number of guesses

// Reset letters already guessed

// Add 1 to the number of wins

// Change picture and text ?

// Computer chooses a new word, and new blanks are displayed for each letter in the word

// When word is not guessed before number of guesses reaches 0, reset number of guesses

// Reset letters already guessed

// Computer chooses a new word, and new blanks are displayed for each letter in the word

    

