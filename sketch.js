const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    
        box= new Box(530,100,200,50);
        box1= new Box(400,400,200,100)
        box2= new Box(270,500,200,100)
        ground= new Ground();

    console.log(box);
}

function draw(){
    background(0);
    Engine.update(engine);
   
    ground.display();
    box.display();
    box1.display();
    box2.display();
}