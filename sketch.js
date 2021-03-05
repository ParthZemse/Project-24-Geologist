
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, stone, plane, rubber, iron, sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, iron;



function preload() {

}

function setup() {
  createCanvas(800, 700);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  hammer = new Hammer(200, 100);
  plane = new Plane(400, 680);
  stone = new Stone(220, 100);
  rubber = new Rubber(250, 100);
  sand1 = new Sand(300, 100);
  sand2 = new Sand(310, 100);
  sand3 = new Sand(320, 100);
  sand4 = new Sand(330, 100);
  sand5 = new Sand(340, 100);
  sand6 = new Sand(350, 100);
  sand7 = new Sand(360, 100);
  sand8 = new Sand(370, 100);
  sand9 = new Sand(380, 100);
  sand10 = new Sand(390, 100);
  iron = new Iron(180, 100);



  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  plane.display();
  hammer.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  iron.display();




  drawSprites();

}



