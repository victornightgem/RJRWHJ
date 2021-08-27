var track, trackImg;
var runner, runnerAnimation;
let button;
var backgroundRed;
var backgroundBlue;
var backgroundGreen;
var backgroundButton;
var boundry1, boundry2;
function changeBG() {
  backgroundRed = random(0,250);
  backgroundBlue = random(0,250);
  backgroundGreen = random(0,250);
  background(backgroundRed, backgroundGreen , backgroundBlue);
}
function preload(){
trackImg = loadImage("path.png");
runnerAnimation = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  alert("left and right keys to move, change background by clicking button. Run Jaxon Run: By Namay, Concept by White Hat Jr.");
  createCanvas(windowWidth,600);
 boundry1 = createSprite(525,550,10,2000);
 boundry1.shapeColor = "white";

 boundry2 = createSprite(885,550,15,2000);
 boundry2.shapeColor = "white";

  var backgroundButton = createButton('Change Background');
  backgroundButton.position(635, 603);
  backgroundButton.mousePressed(changeBG);
  
  //create sprites here
  track = createSprite(700,200);
  track.addImage(trackImg);
  track.velocityY = 9;
  track.scale = 1.2;

  runner = createSprite(710,450);
  runner.addAnimation("boyRunning", runnerAnimation);
  runner.scale = 0.08;
}

 function moveRunner(){
if (keyCode === LEFT_ARROW) {
  runner.x = runner.x-4;
} else if (keyCode === RIGHT_ARROW) {
  runner.x = runner.x+4;
}
 }

function draw() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW){
    moveRunner();
  }
 
   // background(0);
  if (track.y > 600){
    track.y = height/2;
  }
  runner.collide(boundry1);
  runner.collide(boundry2);
  drawSprites();
}
