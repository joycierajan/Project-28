
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stoneObject=new stone(235,420,30); 
	treeObject=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);


	mango1=new mango(1010,140,30);
	mango2=new mango(1000,70,30);
	mango3=new mango(1100,70,30);
	mango4=new mango(1000,230,30);
	mango5=new mango(900,230,40);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  image(boy ,200,340,200,300); 

  treeObject.display();
  stoneObject.display();
  groundObject.display();

  mango1.display();
  mango1.scale=0.01;

  mango2.display();
  mango2.scale=0.01;

  mango3.display();
  mango3.scale=0.01;

  mango4.display();
  mango4.scale=0.01;

  mango5.display();
  mango5.scale=0.01;

  detectollision(stoneObject,mango1);
  detectollision(stoneObject,mango2);
  detectollision(stoneObject,mango3);
  detectollision(stoneObject,mango4);
  detectollision(stoneObject,mango5);


}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObject.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObject.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObject.body);
	}
  }

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }



