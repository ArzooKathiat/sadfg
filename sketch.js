
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas, backgroundImage;
var wall,wall2, wallImg;
//var obsruction,obsruction2,obstruction3, obstructionImg;
var player,playerImg;
var walkFront, walkBack,backStop, walkLeft, walkRight;
var ground, groundImg;
var exit, exitImg;
var shadow;

function preload()
{
	backgroundImage = loadImage("../images/background.png")
	wallImg = loadImage("../images/wallStone_fence.png")
	//obstructionImg = loadImage("../images/level/wallBreakable.png")
	playerImg= loadImage("../images/idle.png")
	groundImg = loadImage("../images/ground.png")
	exitImg = loadImage("../images/groundExit.png")
	walkFront = loadImage("../images/walk.png");
	walkRight = loadImage("../images/rightWalk.png");
	walkBack = loadImage("../images/backwalk.png");
	backStop = loadImage("../images/back.png");
	walkLeft = loadImage("../images/walk.png");
}

function setup() {

	canvas = createCanvas(displayWidth, displayHeight-150);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

//create maze walls
	//obstruction = createSprite(85,280,50,50)
	//obstruction.addImage(obstructionImg)

	//obstruction = createSprite(250,280,50,50)
	//obstruction.addImage(obstructionImg)

 shadow = createSprite(1190,460,100,100)
shadow.shapeColor = "#7E481C"

//create player
	player= createSprite(100,100,50,50)
    player.addImage(playerImg)
	player.velocityY = 0;
	player.velocityX = 0;

}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);


	
	exit = createSprite(1165,450,40,40)
	exit.addImage(exitImg)

  //boundary creation
  for (var i = 0; i < 1500; i=i+50) {
	wall = createSprite(i,20,i+10,50)
	wall.addImage(wallImg)

	}

	for (var i = 70; i < 500; i=i+50) {
	wall = createSprite(20,i,60,i+10)
	wall.addImage(wallImg)
			
	}
	
	for (var i = 70; i < 500; i=i+50) {
	wall = createSprite(1250,i,60,i+10)
	wall.addImage(wallImg)
				
	}

	for (var i = 0; i < 1500; i=i+50) {
	wall = createSprite(i,500,i+10,50)
	wall.addImage(wallImg)
					
	}


//player movement
  if(keyDown(UP_ARROW)){
	player.velocityY = -5;
	player.addImage(walkBack);
  }
  if(keyWentUp(UP_ARROW)){
	player.velocityY = 0;
	player.addImage(backStop);
  }

  if(keyDown(DOWN_ARROW)){
	player.velocityY = 5;
	player.addImage(walkFront);
  }
  if(keyWentUp(DOWN_ARROW)){
	player.velocityY = 0;
	player.addImage(playerImg);
  }

  if(keyDown(LEFT_ARROW)){
	player.velocityX = -5;
	player.addImage(walkLeft);
  }
  if(keyWentUp(LEFT_ARROW)){
	player.velocityX = 0;
	player.addImage(playerImg);
  }

  if(keyDown(RIGHT_ARROW)){
	player.velocityX = 5;
	player.addImage(walkRight);
  }
  if(keyWentUp(RIGHT_ARROW)){
	player.velocityX = 0;
	player.addImage(playerImg);
  }
 
 
 
 
 
 
 
  
  

	
  drawSprites();


 
}

