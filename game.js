var buttonColours =['red','blue','green','yellow'];

var gamePattern =[];



var 

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}