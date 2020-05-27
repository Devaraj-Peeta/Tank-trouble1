var tank1=createSprite(222,42,10,10);

tank1.scale=0.7;
var Bullets=createGroup();
var tank2=createSprite(255,330,10,10);

tank2.scale=0.7;
bg=createSprite(200,200,400,400);

bg.scale=4;
function draw(){
  background("white")
   if (keyDown("w")) {
    tank1.setSpeedAndDirection(4, tank1.rotation);
  } else {
    tank1.setSpeedAndDirection(0, tank1.rotation);
  }
  if (keyDown("s")) {
    tank1.setSpeedAndDirection(-4, tank1.rotation);
  }
  if (keyDown("d")) {
    tank1.rotationSpeed = 3;
  } else {
    tank1.rotationSpeed = 0;
  }
  if (keyDown("a")) {
    tank1.rotationSpeed = -3;
  }
  //tank2
   if (keyDown(UP_ARROW)) {
    tank2.setSpeedAndDirection(4, tank2.rotation);
  } else {
    tank2.setSpeedAndDirection(0, tank2.rotation);
  }
  if (keyDown(DOWN_ARROW)) {
    tank2.setSpeedAndDirection(-4, tank2.rotation);
  }
  if (keyDown(RIGHT_ARROW)) {
    tank2.rotationSpeed = 3;
  } else {
    tank2.rotationSpeed = 0;
  }
  if (keyDown(LEFT_ARROW)) {
    tank2.rotationSpeed = -3;
  }
  if(keyDown("q"))
  {
    SpectreFireForTank1();
  }
  if (keyDown("m")) {
    SpectreFireForTank2();
  }
  //tank1.bounceOff("black");
  
  
  drawSprites();
} 


function SpectreFireForTank1() {
  var bullet = createSprite(tank1.x, tank1.y);
  bullet.setSpeedAndDirection(30, tank1.rotation + randomNumber(5, -5));
  bullet.rotation = tank1.rotation;
  bullet.scale = 0.5;
  Bullets.add(bullet);
}
function SpectreFireForTank2() {
  var bullet = createSprite(tank2.x, tank2.y);
  bullet.setAnimation("bullet");
  bullet.setSpeedAndDirection(30, tank2.rotation + randomNumber(5, -5));
  bullet.rotation = tank2.rotation;
  bullet.scale = 0.5;
  Bullets.add(bullet);
}



