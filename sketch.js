const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;
var particle;
var gameState;

var engine, world;
function preload() {
    }

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    stand= new Stand(340,500,100,20);
   
     block1= new Blocks(120,275,30,40);
     block2= new Blocks(150,275,30,40);
     block3= new Blocks(180,275,30,40);
     block4= new Blocks(210,275,30,40);
     block5= new Blocks(240,275,30,40); 
     block6= new Blocks(270,275,30,40);
     block7= new Blocks(300,275,40);

     block8= new Blocks(330,235,30,40);
     block9= new Blocks(360,235,30,40);
     block10= new Blocks(390,235,30,40);
     block11= new Blocks(420,235,30,40);
     block12= new Blocks(450,235,30,40);

     block13= new Blocks(360,195,30,40);
     block14= new Blocks(390,195,30,40);
     block15= new Blocks(420,195,30,40);

     block16= new Blocks(390,155,30,40);

     polygon= new Polygon(200,100,50,50);
}

function draw(){
    background(0);

    noStroke();
    textSize(35);
    fill("white");
    text("Score" + score, width-300, 50);

    Engine.update(engine);

    stand.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();
    block16.display();

    polygon.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Polygon.fly();
}
function keyPressed(){
    if(keyCode === 32){
        sling.attach(polygon);
    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
         background("yellow");
    }
    else
         background(0);
    }
