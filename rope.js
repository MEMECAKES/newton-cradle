
var bob2,bob1
class rope{
	constructor(body1,body2,pointA,pointB)
	{
this.pointA=pointA 
this.pointB=pointA
	
var options={
	bodyA:body1,
	bodyB:body2,
	pointB:{x:this.pointA, y:this.pointB}
}
rope1 = Matter.Constraint.create({
  bodyA:bob,
  pointA:{x:0,y:0},
  bodyB:bob,
  pointB:{x:0,y:0},
  length:100,
  stiffness:0.1
});

World.add(world,rope2);


rope2= Matter.Constraint.create({
        pointA:{x:200,y:20},
        bodyB:bob2,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.1
      });

    World.add(world,rope);
  
}


    //create display() here 
display()
{

  var pointA=this.rope.bodyA.position;
  var pointB= this.rope.bodyB.position;
  strokeWeight(2)
}
}