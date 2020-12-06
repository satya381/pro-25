
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	obj1Sprite = createSprite(width/2-100 , 610,20,100)
	obj2Sprite = createSprite(width/2+100 , 610,20,100)
	obj3Sprite = createSprite(width/2 , 655,200,20)

	paperObject = new Paper(200,450,40);
	ground = new Ground(400,670,800,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		matter.Body.applyForce(paperObject.body.position,{x:85,y:-85});
	}
}



