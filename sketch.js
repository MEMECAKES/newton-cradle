const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var world;
//Create multiple bobs, mulitple ropes varibale here
var ball_options = {
    restitution: 0.8
  }
  
  bob2= Bodies.circle(350,10,12,ball_options);
  World.add(world,bob2);

  rope1= new rope(bob1,roof,-80,0);
  

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here


  function display()
  {
  
	var pointA=this.rope.bodyA.position;
	var pointB= this.rope.bodyB.position;
	strokeWeight(2)
  }
  
  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}


  button(keyPressed"UP");
  button_1.position(220,30);
  button_1.size(50,50);
  button_1.mouseClicked(hforce);