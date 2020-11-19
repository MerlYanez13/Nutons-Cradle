const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


var engine, world;
var bob1, bob2, bob3, bob4, bob5, roof;
var rope1, rope2, rope3, rope4, rope5;
var bobdiameter=20


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    var bobX=width/2;
    var bobY=500;

    bob1=new Ball (bobX-bobdiameter*2,bobY,bobdiameter);
    bob2=new Ball (bobX-bobdiameter*1,bobY,bobdiameter);
    bob3=new Ball (bobX,bobY,bobdiameter);
    bob4=new Ball (bobX+bobdiameter*1,bobY,bobdiameter);
    bob5=new Ball (bobX+bobdiameter*2,bobY,bobdiameter);

    roof=new Box (width/2,height/4, width/7, 20);

    rope1=new Rope(bob1.body,roof.body,-bobdiameter*2,0);
    rope2=new Rope(bob2.body,roof.body,-bobdiameter*1,0);
    rope3=new Rope(bob3.body,roof.body,0,0);
    rope4=new Rope(bob4.body,roof.body,bobdiameter*1,0);
    rope5=new Rope(bob5.body,roof.body,bobdiameter*2,0);

}

function draw(){
    background("white");
    Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    roof.display();


    
}

function keyPressed(){
    if(keyCode==UP_ARROW){
        Matter.Body.applyForce(bob1.body,bob1.body.position,{x:85,y:-55})
    }
}