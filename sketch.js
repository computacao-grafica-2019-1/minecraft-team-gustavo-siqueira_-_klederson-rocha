var moveArmR;
var moveArmL;

function setup() {
  createCanvas(500, 500);
  background(240);
  smooth();
  noStroke();
}

function draw(r, l) {
  x=width/2;
  y=height/2;
  this.r=moveArmR;
  this.l=moveArmL;
  
  //head
  push();
  translate(x, y-120);
  rotate(radians());
  fill(192);
  rect(-30, -60, 60, 60);
  pop();
  
  //torso
  push();
  translate(x, y-110)
  scale(2);
  fill(192);
  rect(-30, 0, 60, 60);
  pop();
  
  //arm-left
  push();
  translate(x+70, y-80);
  rotate(radians(moveArmL));
  fill(192);
  rect(0, -20, 90, 40);
  pop();
  
  //arm-right
  push();
  translate(x-70, y-80);
  rotate(radians(moveArmR));
  fill(192);
  rect(0, -20, -90, 40);
  pop();
  
  //leg-left
  push();
  translate(x+10, y+40);
  fill(192);
  rect(0, -20, 40, 105);
  pop();

  //leg-right
  push();
  translate(x-50, y+40);
  fill(192);
  rect(0, -20, 40, 105);
  pop(); 
}

function keyPressed() {
  if (key === 'a' || key === 'A') {
    moveArmR=-25;
  }
  else if (key === 'q' || key === 'Q') {
    moveArmR=25;
  }
  else if (key === 'd' || key === 'D') {
    moveArmL=25;
  }
  else if (key === 'e' || key === 'E') {
    moveArmL=-25;
  }
  else {
  	moveArmR=0;
    moveArmL=0;
  }
}