var rood= 255;
var vincent= "hallo";
var blauw= 0;
var groen= 100;


function setup() {
  
  createCanvas(400,400);
  background(240); 
}

function draw() {

  background(0,400-mouseX,0);
noStroke();
  fill(255,0,0);
    ellipse (200,200,mouseX,mouseY);
fill(0,0,255);
    rect (150,150,100,100);
  fill(0,255,0);
    ellipse (200,200,50,50);
  
stroke(255,255,255);
  strokeWeight(10);
  line (0,200,400,200);
stroke(255,255,255);
  strokeWeight(2);
  line (200,0,200,400);
}