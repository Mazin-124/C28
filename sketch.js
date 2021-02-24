
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var paperImage;
var dusbinImage;
function preload()
{
	paperImage = loadImage("paper.png")
	dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100,150,10)
	dustbase = new Dustbin(630,360,150,20);
	dustleft = new Dustbin(545,325,20,100);
	dustright = new Dustbin(690,325,20,100);
	base = new Ground(400,380,800,20);
	launcher = new Launcher(ball.body,{x:100, y:150})
	Engine.run(engine);
    
}


function draw() {
	text(mouseX + "," +mouseY,30,45);
   background("white");

 	dustbase.display();
	dustleft.display();
    dustright.display();
    ball.display();
	base.display();
	imageMode(CENTER);
	image(dustbinImage,625,290,220,180)
    drawSprites();
 
}

   function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   launcher.fly();
}




