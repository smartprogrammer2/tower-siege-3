
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var striker;

var sling, p1, p2;

var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;

var block17, block18, block19;
var block20, block21;
var block22;

var backgroundImg;


var score = 0;

function preload()
{
	changeBgImage();
}

function setup() {
	var canvas = createCanvas(1500, 900);


	engine = Engine.create();
	world = engine.world;

	p1 = new Platform(1000, 500, 300, 20);
	p2 = new Platform(900, 850, 300, 20);

	striker = new Hex(100, 450, 20);

	sling = new Sling(striker.body, {x: 100, y: 450});

	//row 1 of lower platform
	block1 = new Block(805, 800);
	block2 = new Block(835, 800);
	block3 = new Block(865, 800);
	block4 = new Block(895, 800);
	block5 = new Block(925, 800);
	block6 = new Block(955, 800);
	block7 = new Block(985, 800);

	//row 2 of lower platform
	fill("blue");
	block8 = new Block(835, 760);
	block9 = new Block(865, 760);
	block10 = new Block(895, 760);
	block11 = new Block(925, 760);
	block12 = new Block(955, 760);

	//row 3 of lower platform
	block13 = new Block(865, 700);
	block14 = new Block(895, 700);
	block15 = new Block(925, 700);

	//row 4 of lower platform
	block16 = new Block(895, 660);

	//row 1 of upper platform
	block17 = new Block(975, 460);
	block18 = new Block(1005, 460);
	block19 = new Block(1035, 460);

	block20 = new Block(990, 320);
	block21 = new Block(1020, 320);

	block22 = new Block(1005, 280);

	Engine.run(engine);
  
}


function draw() {
	if (backgroundImg){
		background(backgroundImg);
	}
	
	rectMode(CENTER);

	p1.display();
	p2.display();

	striker.display();

	sling.display();

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


	block17.display();
	block18.display();
	block19.display();

	block20.display();
	block21.display();

	block22.display();

	block1.score();
	block2.score();
	block3.score();
	block4.score();
	block5.score();
	block6.score();
	block7.score();
	block8.score();
	block9.score();
	block10.score();
	block11.score();
	block12.score();
	block13.score();
	block14.score();
	block15.score();
	block16.score();
	block17.score();
	block18.score();
	block19.score();
	block20.score();
	block21.score();
	block22.score();

	
	text("SCORE: " + score, 10, 10);
	
	drawSprites();
	
	}

function mouseDragged(){
		Matter.Body.setPosition(striker.body, {x: mouseX, y: mouseY})
}


function mouseReleased() {
	sling.fly();
}

function keyPressed() {
	if (keyCode == 32){
		sling.attach(striker.body);
	}
}
async function changeBgImage() {
    var response =  await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON  = await response.json();
    var r = responseJSON.datetime;
    var hour = r.slice(11, 14);
    if (hour >= 06 && hour <= 18) {
        bg = "bg2.png";
    }else {
        bg = "bg.png";
	}
	
    backgroundImg = loadImage(bg);

}