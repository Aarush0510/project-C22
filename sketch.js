const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,250,20,roof_options);
    World.add(world,roof);

	bob_options = {
		restitution:0.8,
		isStatic:false,
		fricton:0,
		density:0.8,
	}
	bob = Bodies.circle(400,450,30,bob_options);
	World.add(world,bob);
	bob2 = Bodies.circle(450,450,30,bob_options);
	World.add(world,bob2)
	bob3 = Bodies.circle(500,450,30,bob_options);
	World.add(world,bob3)
	bob4 = Bodies.circle(350,450,30,bob_options);
	World.add(world,bob4)
	bob5 = Bodies.circle(300,450,30,bob_options);
	World.add(world,bob5)
	
	rope1 = new Rope(bob,roof,0,0);
	rope2 = new Rope(bob2,roof,40,0);
	rope3 = new Rope(bob3,roof,80,0);
	rope4 = new Rope(bob4,roof,-40,0);
	rope5 = new Rope(bob5,roof,-80,0);
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,250,20);

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  //create ellipse shape for multiple bobs here
  ellipse(bob.position.x,bob.position.y,50,50);
  ellipse(bob2.position.x,bob2.position.y,50,50); 
  ellipse(bob3.position.x,bob3.position.y,50,50);
  ellipse(bob4.position.x,bob4.position.y,50,50);
  ellipse(bob5.position.x,bob5.position.y,50,50);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bob,bob.position,{x:-100,y:-90});
	}
}