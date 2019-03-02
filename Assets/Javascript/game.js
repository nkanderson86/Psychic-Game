// -------------------------VARIABLES ----------------------------------

// Array of words to select from
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// global variable set up to be used for game
var wins = 0;
var losses = 0;
var guesses;
var guessedLetters = [];
var selectedLetter = "";


// This is the start game function that I will call to reset my guesses, guessed letters, and select a new random letter.

function start() {
    selectedLetter = letters[Math.floor(Math.random() * letters.length)];
    guesses = 10;
    guessedLetters = [];
}

// Function to listen for the first key the user hits and then start game, inside this function I call the 'checkGuess' function which evaluates the user's input.  And then I update the content of the html for the variables listed on the last 4 lines of the the function(event)
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

    // Function to check each letter that is guessed.  If it's a match, the game is over and the user wins.  If not, guesses are decremented until they hit 0.  At which point the game is over.  In either case, the start () function is called and the game loops.  The first if statement is to not accept a letter guess if the user has already guessed it in the current instance of the game.  

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



























