//startup variables
var canvas1 = document.getElementById("game");
var ctx1 = canvas.getContext("2d");

//plays music, node.js doesn't run require on browser/client
/**var player = require('play-sound')(opts = {})

 player.play('assets/sounds/gameSounds.mp3', function (err) {
   if (err) throw err;
   console.log("Audio finished");
 });
*/
//add evenlistener to check for clicking fires
canvas.addEventListener('mousedown', function(e) {
	var loc = windowToCanvas(e.clientX, e.clientY);
	fireExtinguish(loc.x, loc.y);
});

function windowToCanvas(x, y) {
    var r = canvas.getBoundingClientRect();
    return { x: x - r.left * (canvas.width  / r.width),
             y: y - r.top  * (canvas.height / r.height)};
};

//variable for userscore
var userScore = 0;

//Setup score
function setupScore() {
    ctx.font = "42pt VT323";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + userScore, 10, 35);
}

//holds trees
var treeArr = [];

var constTreeArr = [];

//holds all fires
var fireArr = [];

//tree image
 var tree = new Image();
	tree.src = "assets/sprites/tree.png";
	
var fire = new Image();
	fire.src = "assets/sprites/fireAnimation.gif";


function genTrees() {
    
    //onload of tree
	tree.onload = function() {
        //for loop to push trees to array
	    for (let i = 0; i < 200; i++) {
           var randX = Math.floor(Math.random() * 750);
           var randY = Math.floor(Math.random() * 500 + 50);
           treeArr.push({
               x: randX,
               y: randY
           });
        }
        
        //for loop to draw images
        for (let i = 0; i < 200; i++) {
            ctx.drawImage(tree, treeArr[i].x, treeArr[i].y);
        }
        //call the setup score function
        setupScore();
    }
    
}

//function to sort the trees
function sortTrees() {    
    treeArr.sort((a, b) => (a.y > b.y) ? 1 : -1);
}

function reGenTrees() {
    //create tree image
    var newTree = new Image();
	newTree.src = "assets/sprites/tree.png";
    
    newTree.onload = function() {
        for (let i = 0; i < 200; i++) {
            ctx.drawImage(newTree, treeArr[i].x, treeArr[i].y);
        }
        setupScore();
    }
    
}

//semi-random fire generation
function fireGeneration() {
	
	
	//var coin = Math.floor(Math.random() * 2); //0,1
	
	var coin = Math.floor(Math.random() * 11); //0-10 

	fire.onload = function() {
		for (let i = 0; i < treeArr.length; i++) {
			if(coin < 3) { //1/3 chance of fires starting to appear
			ctx.drawImage(fire, treeArr[i].x, treeArr[i].y);
				fireArr.push({
				x: treeArr[i].x,
				y: treeArr[i].y
				});
				//fireArr[i].addEventListener('click', fireExtinguish(), false);
			}
			coin = Math.floor(Math.random() * 11);
		}
	}
}



// Re-Draw fires
function reGenFires() {
    
    var newFire = new Image();
    newFire.src = "assets/sprites/fireAnimation.gif";
    
    newFire.onload = function() {
        
        for (let i = 0; i < fireArr.length; i++) {
            //console.log(fireArr[i].x + " is the x");
			 // console.log(fireArr[i].y + " is the y");
             if (fireArr[i].x && fireArr[i].y) {
                ctx.drawImage(newFire, fireArr[i].x, fireArr[i].y);
             }
            
        }
        
    }
}


//Extinguish the fire clicked
function fireExtinguish(x, y) {
	
    // Use the identity matrix while clearing the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
	for (let i = 0; i < fireArr.length; i++) {
		 
	   // var x,y; //Click offsets, here I assume they already have the value
        var posx = fireArr[i].x + 15;
        var posy = fireArr[i].y + 20; //Position of the arrow, the values you used as .drawImage parameters
        var endx = posx + fire.width -30;
        var endy = posy + fire.height -10;

        if( (x>posx && y>posy) && (x<endx && y<endy) ) {
            userScore += 10;
            fireArr[i].x = null;
			fireArr[i].y = null;
			ctx.drawImage(tree, treeArr[i].x, treeArr[i].y);
        }
	}

    reGenTrees();
    reGenFires();
    
}

/* ----- CALLING FUNCTIONS ----- */
genTrees();
fireGeneration();