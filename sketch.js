const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width/2,height,width,20);
    platform1 = new Ground(500,450,300,10);
    platform2 = new Ground(900,300,300,10);

    //platform 1 ...................................
    //level 1
    block1 = new Box(380,440,40,40);
    block2 = new Box(420,440,40,40);
    block3 = new Box(460,440,40,40);
    block4 = new Box(500,440,40,40);
    block5 = new Box(540,440,40,40);
    block6 = new Box(580,440,40,40);
    block7 = new Box(620,440,40,40);
    //level 2
    block8 = new Box(420,400,40,40);
    block9 = new Box(460,400,40,40);
    block10 = new Box(500,400,40,40);
    block11 = new Box(540,400,40,40);
    block12 = new Box(580,400,40,40);
    //level 3
    block13 = new Box(460,400,40,40);
    block14 = new Box(500,400,40,40);
    block15 = new Box(540,400,40,40);
    //level 4
    block16 = new Box(500,360,40,40);

    //platform 2 ...................................
    //level 1
    ablock1 = new Box2(780,290,40,40);
    ablock2 = new Box2(820,290,40,40);
    ablock3 = new Box2(860,290,40,40);
    ablock4 = new Box2(900,290,40,40);
    ablock5 = new Box2(940,290,40,40);
    ablock6 = new Box2(980,290,40,40);
    ablock7 = new Box2(1020,290,40,40);
    //level 2
    ablock8 = new Box2(820,250,40,40);
    ablock9 = new Box2(860,250,40,40);
    ablock10 = new Box2(900,250,40,40);
    ablock11 = new Box2(940,250,40,40);
    ablock12 = new Box2(980,250,40,40);
    //level 3
    ablock13 = new Box2(860,250,40,40);
    ablock14 = new Box2(900,250,40,40);
    ablock15 = new Box2(940,250,40,40);
    //level 4
    ablock16 = new Box2(900,210,40,40);

    polygon = new Polygon(150,250,40);

    slingshot = new Slingshot(polygon.body,{x:150, y:250});
}

function draw(){
    background(56,44,44);
    Engine.update(engine);
    strokeWeight(4);

    //console.log(mouseX,mouseY);

    ground.display();
    platform1.display();
    platform2.display();

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

    ablock1.display();
    ablock2.display();
    ablock3.display();
    ablock4.display();
    ablock5.display();
    ablock6.display();
    ablock7.display();
    ablock8.display();
    ablock9.display();
    ablock10.display();
    ablock11.display();
    ablock12.display();
    ablock13.display();
    ablock14.display();
    ablock15.display();
    ablock16.display();
    
    polygon.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}