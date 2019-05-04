

//startup variables
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var allTrees = [],
    arrSize = 200,
    arrWidth = 800,
    arrHeight = 600;


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


function tree1() {

    for (let i = 0; i < 200; i++) {
        
        var tree = new Image();
        tree.src = "../assets/sprites/tree.png";

        tree.onload = function() {
            var x  = Math.floor(Math.random() * 750);
            var y = Math.floor(Math.random() * 550);
            
            ctx.drawImage(tree, x, y);
                
        }
    }

}

//*********First tree generation method***********
function tree() {
	var tree = new Image();
	tree.src = "../assets/sprites/tree.png";
	tree.onload = function() {
	for(let i = 0; i < 20; i++) {
			var randX = Math.floor(Math.random() * 750);
			var randY = Math.floor(Math.random() * 550);
			var randX2 = randX + 64;
			var randY2 = randY + 64;
			var dist1;
			var dist2;
			ctx.drawImage(tree, randX, randY);
	}
	}
}


grass();
tree();


//holds array for tree positions
var treeArray = [],
    arrSize = 100,
    arrWidth = 800,
    arrHeight = 600;

/**********SECOND TREE GENERATION*********
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
