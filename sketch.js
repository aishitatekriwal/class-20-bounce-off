var rect1, rect2;
var rect3, rect4;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400,50, 50, 50);
  rect1.velocityY = 2;
  rect1.shapeColor = "purple";
  rect2 = createSprite(400,350, 50, 50);
  rect2.velocityY = -2;
  rect2.shapeColor = "blue";
  rect3 = createSprite(50,200,50,50);
  rect3.velocityX = 3;
  rect3.shapeColor = "green";
  rect4 = createSprite(750,200,50,50);
  rect4.velocityX = -3;
  rect4.shapeColor = "yellow";
}

function draw() {
  background(0);  
  if(rect1.y-rect2.y<=rect1.height/2+rect2.height/2 && 
    rect2.y-rect1.y<=rect1.height/2+rect2.height/2)
    {
      rect1.velocityY = rect1.velocityY*(-1);
      rect2.velocityY = rect2.velocityY*(-1);
    }
  if(rect3.x-rect4.x<=rect3.width/2+rect4.width/2 &&
    rect4.x-rect3.x<=rect3.width/2+rect4.width/2)
    {
      rect3.velocityX = rect3.velocityX*(-1);
      rect4.velocityX = rect4.velocityX*(-1);
    }
  drawSprites();
}
