const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground, base;
var engine, world;

function preload(){

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    base = new Ground(600,50,1200,20);
    block1 = new Box(210,235,30,40);
    block2 = new Box(240,235,30,40);
    block3 = new Box(270,235,30,40);
    block4 = new Box(300,235,30,40);


}
function draw(){
    Engine.update(engine)
    ground.display()
    base.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
}
    
























