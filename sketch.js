const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box8,box9,box10,box11;
var box12,box13,box14,box15,box16,box17,box18,box19,box20
var backgroundImg,platform,platform2,platform3;
var polygon, slingshot;


var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    backgroundImg=("sprites/browncolor.png")
}

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(900,height,1500,20);
    platform = new Ground(150, 600 , 300, 170);
    platform2 = new Ground(750, 500, 400, 10);
    platform3   = new Ground(1300, 305, 400, 10);

    box1 = new Box(590,450,70,70);
    box2 = new Box(690,450,70,70);
    box3 = new Box(790,450,70,70);
    box4 = new Box(890,450,70,70);
    box5 = new Box(690,350,70,70);

    box6 = new Box(840,400,70,70);
    box7 = new Box(740, 400,70,70);
    box8 =  new Box(640,400,70,70);

    box9 = new Box(790,350,70,70);
    box10 = new Box(740,300,70,70);

    box11 = new Box(1160,250,70,70);
    box12 = new Box(1260,250,70,70);
    box13 = new Box(1360,250,70,70);
    box14 = new Box(1460,250,70,70);
    box15 = new Box(1260,150,70,70);

    box16 = new Box(1210,200,70,70);
    box17 = new Box(1310, 200,70,70);
    box18 =  new Box(1410,200,70,70);

    box19 = new Box(1360,150,70,70);
    box20 = new Box(1310,100,70,70);

    polygon = new Polygon(100, 280, 40);



    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(polygon.body,{x:200, y:345});


}

function draw(){
        background("#402820");
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
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

    
    polygon.display();
    platform.display();
    platform2.display();
    platform3.display();
    slingshot.display();    
}

function mouseDragged(){
   // if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  //  }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";

}

function keyPressed(){
    if(keyCode === 32 && polygon.body.speed<1){   
      polygon.trajectory=[]; 
      Matter.Body.setPosition(polygon.body,{x:200 , y:50});
        slingshot.attach(polygon.body);
     
    }
}

