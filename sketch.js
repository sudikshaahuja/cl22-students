const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myEngine,myWorld;
var ground;

function setup(){
  var canvas=createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  var ground_options = {
    isStatic: true
  }

 ground = Bodies.rectangle(200,390,50,80,ground_options);
 World.add(myWorld,ground);

 console.log(ground)

}
function draw()
{
  background(0);
  Engine.update(myEngine);
  rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
  
}
