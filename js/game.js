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
ctx.font = "25pt Superscript";
ctx.fillStyle = "white";
ctx.fillText("Score: " + userScore, 10, 30);

}
}

grass();

var treeArr = [];

//*********First tree generation method***********
function tree() {
	var tree = new Image();
	tree.src = "../assets/sprites/tree.png";
	tree.onload = function() {
	for(let i = 0; i < 100; i++) {
			var randX = Math.floor(Math.random() * 750);
			var randY = Math.floor(Math.random() * 500 + 50);
			treeArr.push({
			x: randX,
			y: randY
			});
			var randX2 = randX + 64;
			var randY2 = randY + 64;
			var dist1;
			var dist2;
		
			ctx.drawImage(tree, randX, randY);
	}
	}
}
tree();


function fireGeneration() {
	var fire = new Image();
	fire.src = "../assets/sprites/fireAnimation.gif";
	fire.onload = function() {
		for(let i = 0; i < treeArr.length; i++) {
	
			ctx.drawImage(fire, treeArr[i].x, treeArr[i].y);
		}
	}
}
fireGeneration();

/**********SECOND TREE GENERATION*********

//holds array for tree positions
var treeArray = [],
    arrSize = 100,
    arrWidth = 800,
    arrHeight = 600;


//generates random positions for tree array
function generateTreeArray(k) {
  var placed = 0,
      maxAttempts = k*10;
  while(placed < k && maxAttempts > 0) {
    var x = Math.floor(Math.random()* arrWidth),
        y = Math.floor(Math.random()* arrHeight),
        available = true;
    for(var point in treeArray) {
      if(Math.abs(point.x-x) < arrSize && Math.abs(point.y-y) < arrSize) {
        available = false;
        break;
      }
    }
    if(available) {
      treeArray.push({
        x: x,
        y: y
      });
      placed += 1;
    }
    maxAttempts -= 1;
  }
}

generateTreeArray(100);
console.log(treeArray);

function placeTrees() {
	var tree = new Image();
	tree.src = "../assets/sprites/tree.png";
	tree.onload = function() {
		for(let i = 0; i < treeArray.length; i++){
			ctx.drawImage(tree, treeArray[i].x, treeArray[i].y);	
		}
	}
}

placeTrees();

*/
