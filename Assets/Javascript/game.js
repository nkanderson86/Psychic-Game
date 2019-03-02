// -------------------------VARIABLES ----------------------------------

// Array of words to select from
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Random number generator used to pull from array created above 

var wins = 0;
var losses = 0;
var guesses;
var guessedLetters = [];
var selectedLetter = "";



function start() {
    selectedLetter = letters[Math.floor(Math.random() * letters.length)];
    guesses = 10;
    guessedLetters = [];
    console.log(selectedLetter);

}

document.onkeyup = function (event) {
    start();
    document.onkeyup = function (event) {
        var userInput = event.key.toLowerCase();
        checkGuess(userInput);
        document.getElementById("guessed-letters").textContent = guessedLetters;
        document.getElementById("guesses-remaining").textContent = guesses;
        document.getElementById("wins").textContent = wins;
        document.getElementById("losses").textContent = losses;
    }

    // checkGuess function 

    function checkGuess(ltr) {
        if (guessedLetters.indexOf(ltr) > -1) {
            alert("You've already guessed that, please try again")
        }
        else if (ltr === selectedLetter) {
            wins++;
            alert("Congratulations!")
            start();
        }
        else {
            guesses--;
            guessedLetters.push(ltr);
            if (guesses === 0) {
                alert("Game Over, Try Again!")
                losses++;
                start();
            }
        }


    }

}

    // testing
    // console.log(userInput);
    // console.log(guessedLetters);
    // console.log(selectedLetter);



























