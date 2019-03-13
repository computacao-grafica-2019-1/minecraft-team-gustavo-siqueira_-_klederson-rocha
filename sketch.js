var moveArmR;
var moveArmL;
var moveHead;

function draw(r, l, h) {
  createCanvas(450, 450);
  background(240);
  smooth();
  noStroke();
                     
  x=width/2;
  y=height/2;
  this.r=moveArmR;
  this.l=moveArmL;
  this.h=moveHead;
  
  //head
  push();
  translate(x, y-120);
  rotate(radians(moveHead));
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
  
  //caption
  fill(0);
  textSize(10);
  text('Levantar Braço Direito: Q', 10, 10);
  text('Abaixar Braço Direito: A', 10, 20);
  text('Levantar Braço Esquerdo: E', 10, 30);
  text('Abaixar Braço Esquerdo: D', 10, 40);
  text('Mover Cabeça para Esquerda: W', 10, 50);
  text('Mover Cabeça para Direita: S', 10, 60);
  text('Limpar Valores das Posições: X', 10, 70);
}

function keyTyped() {
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
  else if (key === 's' || key === 'S') {
    moveHead=-20;
  }
  else if (key === 'w' || key === 'W') {
    moveHead=20;
  }
  else if (key === 'x' || key === 'X') {
    moveArmR=0;
    moveArmL=0;
    moveHead=0;
  }
}
