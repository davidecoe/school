var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters =[]
var guess = null;
//var message = "Guess what letter I'm thinking of? You get 9 guesses, type letter on keyboard to guess.";
//An array of letters.
var letters = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z"
    ];

var letterToGuess = letters[Math.floor(Math.random() * letters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessedLetters + " Computer picked: " + letterToBeGuessed);

document.onkeyup = function(event) {
  var guess = event.key;
  if (guess === letterToGuess) {
    win();
  } else if (guessesLeft - 1 === 0) {
    lost();
  } else {
    fail(guess);
  }

  display();
}