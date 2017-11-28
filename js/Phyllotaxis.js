var n = 0;
var angle=137.5;
var shapesize = 1;
var c = shapesize*2;
//console.log(c,shapesize);
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(RGB);
  background(0);

  angle = map(random(),0,1,0,360);
}

function draw() {

  var a = n *angle;
  var r = c * sqrt(n);
  var x = r * cos(a) + width /2;
  var y = r * sin(a) + height /2;
  fill(map(noise(x),0,1,0,255),map(noise(y),0,1,0,255),map(noise(sqrt((x*x)+(y*y))),0,1,0,255));
  noStroke();
  ellipse(x,y,shapesize,shapesize);

  n++;
}
