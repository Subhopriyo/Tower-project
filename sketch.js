const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
   ground=new Ground(180,140,20,20);
}

function draw() {
  background(255,255,255); 
  ground.display(); 
  
}