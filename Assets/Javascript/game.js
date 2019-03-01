// -------------------------VARIABLES ----------------------------------

// Array of words to select from
const teamArray = ['cubs', 'brewers', 'cardinals', 'reds', 'pirates', 'mets', 'phillies', 'nationals', 'braves', 'marlins', 'diamondbacks', 'rockies', 'dodgers', 'giants', 'padres', 'redsox', 'yankees', 'orioles', 'bluejays', 'rays', 'whitesox', 'twins', 'indians', 'royals', 'tigers', 'mariners', 'angels', 'athletics', 'rangers', 'astros'];

// Random number generator used to pull from array created above 
let selectedTeam = teamArray[Math.floor(Math.random() * teamArray.length)];

// testing
console.log(selectedTeam);

var wins;
var losses;
const maxGuess = 9;
var guessesRemaining = 0;
var gussedLetters = [];
var teamLetters = [];
var underscores = [];


// ------------------------------FUNCTIONS-------------------------------------

function startGame() {
    // reset guesses and display on html 
    let guessesRemaining = maxGuess;
    document.getElementById('guesses-remaining').innerHTML = "Guesses Remaining: " + guessesRemaining;
    // take letters from selected word and turn into array of '_' 
    let underscores = function () {
        for (let i = 0; i < selectedTeam.length; i++) {
            unsolvedLetters.push('_ ');
        }
        console.log(underscores)
    }
}


// Event listener to take user input for guesses and add guessed letters to array 'lettersGuessed'
document.onkeyup = function (event) {
    var userInput = event.key.toLowerCase();
    console.log(userInput);
}
    // if user guess is correct

    // replace underscore with correct guess 


    // // if not, push to wrongGuess array


//Check to see if user has won or guesses have run out and loop back to start of guess logic 







