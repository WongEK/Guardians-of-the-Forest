//startup variables
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

//add evenlistener to check for clicking fires
//canvas.addEventListener('click', fireExtinguish(), false);

//variable for userscore
var userScore = 10;

var dialogue = document.getElementById("dialogue");
dialogue.innerHTML = "Score: " + userScore;

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

function genTrees() {
    
    //create tree image
    var tree = new Image();
	tree.src = "../assets/sprites/tree.png";
    
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
        //for loop to sort the trees
        for (let i = 0; i < 200; i++) {
            sortTrees(treeArr[0], treeArr[i]);    
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
	newTree.src = "../assets/sprites/tree.png";
    
    newTree.onload = function() {
        
        for (let i = 0; i < 200; i++) {
        ctx.drawImage(newTree, treeArr[i].x, treeArr[i].y);
        }
        setupScore();
    }
    

    
}

//semi-random fire generation
function fireGeneration() {
	var fire = new Image();
	fire.src = "../assets/sprites/fireAnimation.gif";
	
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
			}
			coin = Math.floor(Math.random() * 11);
		}
	}
}


// Re-Draw fires
function reGenFires() {
    
    var newFire = new Image();
    newFire.src = "../assets/sprites/fireAnimation.gif";
    
    newFire.onload = function() {
        
        for (let i = 0; i < fireArr.length; i++) {
            
            ctx.drawImage(newFire, fireArr[i].x, fireArr[i].y);
            
            
        }
        
    }
    
    
    
}

//Extinguish the fire clicked
function fireExtinguish() {
    	
    userScore += 10;
    
    // Save the current transformation canvas
    ctx.save();
    
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Clear the canvas
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    
    // Restore the previous transformation canvas
    ctx.restore();
    
    reGenTrees();
    reGenFires();
    
    
    
}


/* ----- CALLING FUNCTIONS ----- */
genTrees();
fireGeneration();