
window.onload = 
myFunction(), 
amethystFunction(), 
greendiamondFunction(), 
sapphireFunction(),
zirconFunction();

/*$(document).ready(function() {
    var ranNum = Math.floor(Math.random()*101)+19;
    $("#ranNum").append(ranNum);
    console.log("ranNum",ranNum);
})
*/
function myFunction() {
    var ranNum = Math.floor(Math.random()*101)+19;
    document.getElementById("Number").innerHTML = "Random Number:  "+ranNum;
}

function gemFunction() {
    var gemNum = Math.floor(Math.random()*12)+1;
    document.getElementById("gemButton").innerHTML = gemNum;
    
}

/*
function amethystFunction() {
    var gem1Num = Math.floor(Math.random()*12)+1;
    document.getElementById("amethyst-button").innerHTML = gem1Num;
    
}

function greendiamondFunction() {
    var gem2Num = Math.floor(Math.random()*12)+1;
    document.getElementById("greendiamond-button").innerHTML = gem2Num;
}

function sapphireFunction() {
    var gem3Num = Math.floor(Math.random()*12)+1;
    document.getElementById("sapphire-button").innerHTML = gem3Num;
}

function zirconFunction() {
    var gem4Num = Math.floor(Math.random()*12)+1;
    document.getElementById("zircon-button").innerHTML = gem4Num;
}
*/



/*
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
*/