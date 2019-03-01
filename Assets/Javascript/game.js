// create empy arrays for letters to selected word and user guesses to track input 
let unsolvedLetters = [];
let rightGuess = [];
let wrongGuess = [];

// Array of words to select from
const wordBank = ['cubs', 'brewers', 'cardinals', 'reds', 'pirates', 'mets', 'phillies', 'nationals', 'braves', 'marlins', 'diamondbacks', 'rockies', 'dodgers', 'giants', 'padres', 'redsox', 'yankees', 'orioles', 'bluejays', 'rays', 'whitesox', 'twins', 'indians', 'royals', 'tigers', 'mariners', 'angels', 'athletics', 'rangers', 'astros'];
// Random number generator used to pull from array created above 
let selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// testing
console.log(selectedWord)

// function to push underscores to unsolvedLetters array and return array 
let insertUnderscores = function () {
    for (let i = 0; i < selectedWord.length; i++) {
        unsolvedLetters.push('_ ');

    }
    return insertUnderscores();

}


// Event listener to take user input for guesses and add guessed letters to array 'lettersGuessed'
document.onkeyup = function (event) {
    let userInput = event.key;
    console.log(userInput);

    // if user guess is correct 

    // push to right guess array 
    // if (selectedWord.indexOf(userInput) > - 1) {
    //     rightGuess.push(userInput);
    //     console.log(rightGuess);


    //     // replace underscore with correct guess 

    // }
    // // if not, push to wrongGuess array

    // else {
    //     wrongGuess.push(userInput);
    //     console.log(wrongGuess);
    // }

}

//Check to see if user has won or guesses have run out and loop back to start of guess logic 







