
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	treeimg  = loadImage("Plucking mangoes/tree.png");

	imgboy = loadImage("Plucking mangoes/boy.png")

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,20);

	
	mango1 = new Mango(540,430,35);
	mango2 = new Mango(630,340,35);
	mango3 = new Mango(670,410,35);
	mango4 = new Mango(580,470,35);
	mango5 = new Mango(750,470,35);
	mango6 = new Mango(480,410,35);
	mango7 = new Mango(580,400,35);

	stone = new Stone(180,620,30);
	slingshot = new Slingshot(stone.body,{x : 110,y:560});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);

  background(230);

  image(imgboy,200,630,300,300);
  image(treeimg,610,500,400,400);
  
  ground.display();

  stone.display();
  slingshot.display();
 
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);

  
 
  
}

function mouseDragged(){
	Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingshot.fly(); 
}

function keyPressed() {
	if (keyCode === 32) {
      Body.setPosition(stone.body,{x:110, y:560}) 
	  slingshot.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){

  var mangoBodyPosition=lmango.body.position
  var stoneBodyPosition=lstone.body.position
  
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance <= lmango.r + lstone.r){
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

