
$(document).ready(function () {
    var ranNum = Math.floor(Math.random()*101)+19;
    document.getElementById("Number").innerHTML = ranNum;
    console.log("Result of ranNum: ", ranNum);

    var winsCount = 0;
    var lossesCount = 0;
    var score = 0;

function gemFunction() {
    var gemNum = Math.floor(Math.random()*12)+1;
    console.log("Result of gemFunction (gemNum): ", gemNum);
    
}

var gem1Num = gemFunction();
console.log("what is gem1Num variable value?: ", gem1Num);
//var amethyst, greendiamond, sapphire, zircon = gemFunction();

document.getElementById("amethyst-button").onclick = function myNum() {
    console.log("Var score value:", score);
    var amethystNum = score += gem1Num;
    console.log("Var amethystNum value:", amethystNum);
    document.getElementById("mynum").innerHTML = amethystNum;
    //mynumCompare(score);
    console.log("Button clicked and populated score! Here is score: ", score);
}
    
/*function mynumCompare() {
    if (score == ranNum) {
        wins++;
        document.getElementById("wins2").innerHTML = winsCount;
        //reset();
        var amethyst, greendiamond, sapphire, zircon = gemFunction();
        
        };
    if (score > ranNum) {
        losses++;
        document.getElementById("losses2").innerHTML = lossesCount;
        //reset();
        var amethyst, greendiamond, sapphire, zircon = gemFunction();
        
    };
    };*/

});
/*
function ranNumReset() {
    ranNum = Math.floor(Math.random()*101)+19;
    document.getElementById("Number").innerHTML = ranNum;
    document.getElementById("mynum").innerHTML = (score = 0);
}

document.getElementById("amethyst-button").onclick,
function() {
    var amethystNum = score += amethyst;
    document.getElementById("mynum").innerHTML = amethystNum
}

*/
//var outputStatus = document.getElementById("mynum2");



/*function gemFunction() {
    var gemNum1 = document.getElementById("mynum").value = gemNum;
    
}
*/
/*



function amethystFunction() {
    var gem1Num = Math.floor(Math.random()*12)+1;
    document.getElementById("myscore").innerHTML = "Your total score:  "+gem1Num;
    
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
jacobs

//set variables  

var score = 0;
var wins = 0;
var losses = 0;

//make a .ready function

$(document).ready(function () {

//make it so the random number appears
    
    var randomNumber = Math.floor((Math.random()) * 101 + 19);
    $("#randomNumber").append(randomNumber);
    console.log('randomNumber ', randomNumber);

//make it so each gem generates a random number for every game
    
    function gemValue() {
        var num = Math.floor((Math.random()) * 12 + 1);
        return num
    }

    var red = gemValue();
    var blue = gemValue();
    var rainbow = gemValue();
    var yellow = gemValue();

    //make an on click event for each gem
    
    $("#redGem").on("click", function () {
        var redNum = score += red;
        $(".myscore").html(redNum);
        scoreCheck(score);
        console.log('red ', red);
    })
    $("#blueGem").on("click", function () {
        var blueNum = score += blue;
        $(".myscore").html(blueNum);
        scoreCheck(score);
        console.log('blue ', blue);
    })
    $("#rainbowGem").on("click", function () {
        var rainbowNum = score += rainbow;
        $(".myscore").html(rainbowNum);
        scoreCheck(score);
        console.log('rainbow ', rainbow);
    })
    $("#yellowGem").on("click", function () {
        var yellowNum = score += yellow;
        $(".myscore").html(yellowNum);
        scoreCheck(score);
        console.log('yellow ', yellow);
    })

//reset game 
    
    function reset() {
        randomNumber = Math.floor((Math.random()) * 101 + 19);
        $("#randomNumber").html("Random Number:" + randomNumber);
        $(".myscore").html(score = 0);
        
//console.log('randomNumber ', randomNumber);
        
    }

//if else statement
    
    function scoreCheck() {
        if (score == randomNumber) {
            wins++;
            $("#wins").html("Wins: " + wins);
            reset();
            red = gemValue();
            blue = gemValue();
            rainbow = gemValue();
            yellow = gemValue();
            
//console logged each gem
            
        };
        if (score > randomNumber) {
            losses++;
            $("#losses").html("Losses: " + losses);
            reset();
            red = gemValue();
            blue = gemValue();
            rainbow = gemValue();
            yellow = gemValue();
            
//console logged each gem
            
        };
    };

});
*/