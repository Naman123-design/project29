const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, base1, base2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
base1 = new Ground(490,350,230,20);
base2 = new Ground(900,280,250,20);

box1 = new Box(410,250,40,40);
box2 = new Box(450,250,40,40);
box3 = new Box(490,250,40,40);
box4 = new Box(530,250,40,40);
box5 = new Box(570,250,40,40);

box6 = new Box(430,200,40,40);
box7 = new Box(470,200,40,40);
box8 = new Box(510,200,40,40);
box9 = new Box(550,200,40,40);

box10 = new Box(450,150,40,40);
box11 = new Box(490,150,40,40);
box12 = new Box(530,150,40,40);

box13 = new Box(470,100,40,40);
box14 = new Box(510,100,40,40);

box15 = new Box(490,50,40,40);

box16 = new Box(820,250,40,40);
box17 = new Box(860,250,40,40);
box18 = new Box(900,250,40,40);
box19 = new Box(940,250,40,40);
box20 = new Box(980,250,40,40);

box21= new Box(840,200,40,40);
box22 = new Box(880,200,40,40);
box23 = new Box(920,200,40,40);
box24 = new Box(960,200,40,40);

box25 = new Box(860,150,40,40);
box26 = new Box(900,150,40,40);
box27 = new Box(940,150,40,40);

box28 = new Box(880,100,40,40);
box29 = new Box(920,100,40,40);

box30 = new Box(900,50,40,40);
fill("blue")
poly = new Box(200,300,50,50);

sling = new SlingShot(poly.body,{x:150,y:200})
}

function draw(){
   background("red");
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    base1.display();
    base2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();  
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    poly.display();
}


function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}