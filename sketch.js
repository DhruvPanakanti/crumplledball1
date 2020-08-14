
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1,b2;
var balll;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	

	ground1=new Ground(400,690,800,10);
balll=new ball(100,100);
b1=new dustbin(400,635,70,100);
//b2=new dustbin(700,635,10,100);


	

	//Create the Bodies Here.
	

	
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  Engine.update(engine);
  balll.display();
  ground1.display();
  b1.display();
  //b2.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){

Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});
	}
}



