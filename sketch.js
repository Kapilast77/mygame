var bg,bgimg;
var player,shooterimg,shootingimg;

function preload(){
bgimg=loadImage("./assets/bg.jpeg");
shooterimg=loadImage("./assets/shooter_2.png");
shootingimg=loadImage("./assets/shooter_3.png");

}

function setup(){
createCanvas(windowWidth,windowHeight);
bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage(bgimg);
bg.scale=1.0
player=createSprite(displayWidth-1100,displayHeight-300,50,50);
player.addImage(shooterimg);
player.scale=0.5
} 

function draw(){
  if (keyDown("UP_ARROW")||touches.length>0) {
    player.y=player.y-30;
  }
  if (keyDown("DOWN_ARROW")||touches.length>0) {
    player.y=player.y+30;
  }
  if (keyWentDown("space")) {
  player.addImage(shootingimg);
    
  } else  if(keyWentUp("space")){
  player.addImage(shooterimg);    
  }
drawSprites();
}
