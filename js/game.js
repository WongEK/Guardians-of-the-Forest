//startup variables
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

var userScore = 10;
//can be used to hold score 
var dialogue = document.getElementById("dialogue");
dialogue.innerHTML = "Score: " + userScore;


//grass background image
function grass() {
//background image variable and load
var grassBackground = new Image();
grassBackground.src = "../assets/sprites/grassField1.png";

grassBackground.onload = function() {
ctx.drawImage(grassBackground, 0, 0);
}
}

grass();

function tree() {
	var tree = new Image();
	tree.src = "../assets/sprites/tree.png";
	tree.onload = function() {
	for(let i = 0; i < 20; i++) {
			var randX = Math.floor(Math.random() * 750);
			var randY = Math.floor(Math.random() * 550);
			ctx.drawImage(tree, randX, randY);
	}
	}
}

tree();