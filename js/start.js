
//startup variables
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var header = 'Guardians of the Forest';

//background image variable and load
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
 

// function for text
function handleLoaded(startBackground) {
        
    if(loaded){
        
        ctx.font ="40px 'Press Start 2P'";
        ctx.fillStyle = "white";
        ctx.fillText(header, canvas.width/5, canvas.height/6);
        loadImage();
        
    }  
    
};

//  Save the current transformation canvas
//    ctx.save();

//    // Use the identity matrix while clearing the canvas
//    ctx.setTransform(1, 0, 0, 1, 0, 0);
//    ctx.clearRect(0, 0, ctx.width, ctx.height);

//    // Clear the canvas
//    

//    // Restore the previous transformation canvas
//    ctx.restore();

function loadImage(e) {

    animate();

  }
function createText(){
    ctx.font ="20px 'Press Start 2P'";
    ctx.fillStyle = "white";
    ctx.fillText(header, canvas.width/5, canvas.height/6);
}

function loadButton(e){
    
    ctx.drawImage(button, 350, 180, 260, 150);

}


function animate() {
    ctx.save();
    ctx.clearRect(25, 25, 360, 360);
    createText();
    loadButton();
    //draw each frame + place them in the middle
    ctx.drawImage(myImage, shift, 0, frameWidth, frameHeight,
                        25, 25, frameWidth, frameHeight);
    shift += frameWidth;
    if (currentFrame == totalFrames) {
        shift = 0;
        currentFrame = 0;
    }
    currentFrame++; 
    
    
    requestAnimationFrame(animate);
    /*
        Start at the beginning once you've reached the
        end of your sprite!
    */
    
    
}


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