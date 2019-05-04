//startup variables
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

var userScore = 10;
//can be used to hold score 
var dialogue = document.getElementById("dialogue");
dialogue.innerHTML = "Score: " + userScore;

//background image variable and load
var grassBackground = new Image();
grassBackground.src = "../assets/sprites/grassField1.png";

grassBackground.onload = function() {
ctx.drawImage(grassBackground, 0, 0);
ctx.font = "25pt Superscript";
ctx.fillStyle = "white";
ctx.fillText("Score: " + userScore, 10, 30);

}


