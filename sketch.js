const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var engine, world;
 var block1;
 var backgroundImg,backgroundIMG2,platform;
 var polygon, slingshot,gameState;

 gameState =  "serve"
 var bg = "bg.png";



function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,405,1200,20);
    ground1= new Ground(900,205,300,30);
    platform = new Ground(120, 405, 300, 170);
    block1 = new Block(630,235,30,40);
    block2 = new Block(660,235,30,40);
    block3 = new Block(690,235,30,40);
    block4 = new Block(720,235,30,40);
    block5 = new Block(750,235,30,40);
    block6 = new Block(780,235,30,40);
    block7 = new Block(810,235,30,40);
    block8 = new Block(660,195,30,40);
    block9 = new Block(690,195,30,40);
    block10 = new Block(720,195,30,40);
    block11 = new Block(750,195,30,40);
    block12 = new Block(780,195,30,40);
    block13 = new Block(820,175,30,40);
    block14 = new Block(690,175,30,40);
    block15 = new Block(750,175,30,40);
   block16 = new Block(720,165,30,40);
   block17 = new Block(790,105,30,40);
   block18 = new Block(890,105,30,40);
   block19 = new Block(850,105,30,40);
   block20 = new Block(880,105,30,40);
   block21 = new Block(910,105,30,40);
   block22 = new Block(820,55,30,40);
   block23 = new Block(850,55,30,40);
   block24 = new Block(880,55,30,40);
   block25 = new Block(850,35,30,40);
    polygon = new Polygon(800,50);
    slingshot = new SlingShot(polygon.body,{x:100, y:200});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    Engine.update(engine);
    
    block1.display();
    block2.display();
    ground.display();
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
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block12.display();
    polygon.display();
    slingshot.display();  
    platform.display();
    ground1.display();
}

function mouseDragged(){
if(gameState === "serve" ){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "fly"
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(polygon.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0900 && hour<=1900){
        bg = "bg.png";
    }
    else{
        bg = "bg2.png";
    }
backgroundImg = loadImage(bg);
}