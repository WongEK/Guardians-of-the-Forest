/* Code related to start screen */
// game
//startup variables
var canvas1 = document.getElementById("game");
var ctx1 = canvas1.getContext("2d");

//startup variables
var canvas2 = document.getElementById("start");
var canvas3 = document.getElementById("gameOver");
document.getElementById("game").style.display = "none";
var ctx2 = canvas2.getContext("2d");
var header = 'Guardians of the Forest';
var startBackground = new Image();
startBackground.src = "../assets/background/startBackground.png";
var loaded = false;
var shift = 0;
var frameWidth = 360;
var frameHeight = 360;
var totalFrames = 25;
var currentFrame = 0;
var button = new Image();
button.src = "../assets/background/button.png";
button.addEventListener("load", loadButton, false);
var myImage = new Image();
myImage.src = "../assets/background/fireLong.png";
myImage.addEventListener("load", loadImage, false);

var fireCounter = 0;
var secStage = false;
var thStage = false;
var foStage = false;
var fiStage = false;
var siStage = false;


//Event listener for start screen
ctx2.canvas.addEventListener('click', function(e){
    ctx2.translate(0, 0);
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    if (mouseX > 591 && mouseX < 749 && mouseY > 245 && mouseY < 391){
        swapCanvases();
    }

});

// changes canvases from start to game
function swapCanvases(){
    canvas1.style.display ='inline-block';
    canvas2.style.display ='none';
    canvas1.style.margin = 'marg%';
  }


//fire image and amimation
function loadImage(e) {
    animate();
}

function animate() {
    ctx2.save();
    ctx2.clearRect(25, 25, 360, 360);
    createText();
    loadButton();
    //draw each frame + place them in the middle
    ctx2.drawImage(myImage, shift, 0, frameWidth, frameHeight,
                        25, 25, frameWidth, frameHeight);
    shift += frameWidth;
    if (currentFrame == totalFrames) {
        shift = 0;
        currentFrame = 0;
    }
    currentFrame++;  
    requestAnimationFrame(animate);
    
}
//Guardians of the Gorest title on the screen
function createText(){
    ctx2.font ="20px 'Press Start 2P'";
    ctx2.fillStyle = "white";
    ctx2.fillText(header, canvas2.width/5, canvas2.height/6);
}

// start button on start screen
function loadButton(e){
    ctx2.drawImage(button, 350, 180, 260, 150);

}

//add evenlistener to check for clicking fires
ctx1.canvas.addEventListener('mousedown', function(e) {
	var loc = windowToCanvas(e.clientX, e.clientY);
	fireExtinguish(loc.x, loc.y);
});

function windowToCanvas(x, y) {
    var r = ctx1.canvas.getBoundingClientRect();
    return { x: x - r.left * (ctx1.canvas.width  / r.width),
             y: y - r.top  * (ctx1.canvas.height / r.height)};
};

//variable for userscore
var userScore = 0;

//Setup score
function setupScore() {
    ctx1.font = "42pt VT323";
    ctx1.fillStyle = "white";
    ctx1.fillText("Score: " + userScore, 10, 35);
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
        //for loop to sort the trees
        for (let i = 0; i < 200; i++) {
            sortTrees(treeArr[0], treeArr[i]);    
        }
        //for loop to draw images
        for (let i = 0; i < 200; i++) {
            ctx1.drawImage(tree, treeArr[i].x, treeArr[i].y);
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
            ctx1.drawImage(newTree, treeArr[i].x, treeArr[i].y);
        }
        setupScore();
    }
    
}

// Re-Draw fires
function reGenFires() {
    
    var newFire = new Image();
    newFire.src = "assets/sprites/fireAnimation.gif";
    
    newFire.onload = function() {
        
        for (let i = 0; i < fireArr.length; i++) {
             if (fireArr[i].x && fireArr[i].y) {
                ctx1.drawImage(newFire, fireArr[i].x, fireArr[i].y);
             }
            
        }
        
    }
}

function makeFire() {
    
    if (fireArr.length == treeArr.length) {
        
        //game over code goes here
        
    }
    
    var f = new Image();
    f.src = 'assets/sprites/fireAnimation.gif';
    
    f.onload = function() {
        
        fireCounter++;
        
        var t = Math.floor(Math.random() * 200);
        
        var xVal = treeArr[t].x;
        var yVal = treeArr[t].y;
        
        fireArr.push({
            x: xVal,
            y: yVal
        });
        
        ctx1.drawImage(f, xVal, yVal);
        
    }
    
    if (fireCounter > 5 && secStage == false) {
        secondStage();
        secStage = true;
    }
    
    if (fireCounter > 10 && thStage == false) {
        thirdStage();
        thStage = true;
    }
    
    if (fireCounter > 15 && foStage == false) {
        fourthStage();
        foStage = true;
    }
    
    if (fireCounter > 20 && fiStage == false) {
        fifthStage();
        fiStage = true;
    }
    
    if (fireCounter > 25 && siStage == false) {
        sixthStage();
        siStage = true;
    }

}

function firstStage() {
    setInterval(makeFire, 3000);

}

function secondStage() {
    setInterval(makeFire, 2500);
}

function thirdStage() {
    setInterval(makeFire, 2000);
}

function fourthStage() {
    setInterval(makeFire, 1500);
}

function fifthStage() {
    setInterval(makeFire, 1000);
}

function sixthStage() {
    setInterval(makeFire, 500);
}

//Extinguish the fire clicked
function fireExtinguish(x, y) {
	
    // Use the identity matrix while clearing the canvas
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
        
	for (let i = 0; i < fireArr.length; i++) {
		 
	   // var x,y; //Click offsets, here I assume they already have the value
        var posx = fireArr[i].x + 15;
        var posy = fireArr[i].y + 20; //Position of the arrow, the values you used as .drawImage parameters
        var endx = posx + fire.width -30;
        var endy = posy + fire.height -10;

        if( (x > posx && y > posy) && (x < endx && y < endy)) {
            userScore += 10;
            fireArr[i].x = null;
			fireArr[i].y = null;
			ctx1.drawImage(tree, treeArr[i].x, treeArr[i].y);
        }
	}

    reGenTrees();
    reGenFires();
    
}

/* ----- CALLING FUNCTIONS ----- */
genTrees();
firstStage();
