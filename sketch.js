
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);
  ellipse(56,758,50,50)
  ellipse.velocityY = -3

	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
 
  

	//Create the Bodies Here.


  
}


function draw() {
  background("black")
  rectMode(CENTER);
 background(0);
 fill("white")
 rect(730,780,200,20)
 rect(620,700,20,180)
 rect(840,700,20,180)
 fill("red")
 ellipse(56,758,50,50)
 
  drawSprites();
 
}

