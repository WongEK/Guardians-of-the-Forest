
//startup variables
var canvas2 = document.getElementById("start");
var canvas1 = document.getElementById("game");
document.getElementById("game").style.display = "none";
var ctx = canvas2.getContext("2d");
// var ctx1 = document.getContext("2d");
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
 



ctx.canvas.addEventListener('click', function(e){
    ctx.translate(0, 0);
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    console.log(mouseX);
    console.log(mouseY);
    if (mouseX > 591 && mouseX < 749 && mouseY > 245 && mouseY < 391){
        swapCanvases();
    }

});


function swapCanvases(){
    canvas1.style.display ='inline-block';
    canvas2.style.display ='none';
    canvas1.style.margin = 'marg%';

  }


function loadImage(e) {
    animate();
  }

function createText(){
    ctx.font ="20px 'Press Start 2P'";
    ctx.fillStyle = "white";
    ctx.fillText(header, canvas2.width/5, canvas2.height/6);
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
    
}


