const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=[]

function setup() {

}

var ground1 = new Ground(700,height,800,20);
var divison =new Divisons(30,200,20,400)

function draw() {
  createCanvas(800,400);

  background(0);

  for(var i=0;i<=width;i=i+80){
    divisions.push(new Divisons(i,height-divisionHeight/2,10,divisionHeight));
  }


  for(var i=40;i<=width;i=i+50){
    plinkos.push(new Plinko(i,75));
  }
  for(var i=15;i<=width-10;i=i+50){
    plinkos.push(new Plinko(i,175));
  }

  for(var i=0;i<particles.length;i++){
    particles.display();
  }


  for(var i=0;i<divisions.length;i++){
    divisons.display();
  }
  ground1.display();
  divison.display();
}