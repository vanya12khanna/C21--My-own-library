var fixedRect, movingRect;
var gameObject1;
var box1, box2;

function setup() {
  createCanvas(800,400);
  
  fixedRect= createSprite(400, 200, 50, 70);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(600,200,70,30);
  movingRect.shapeColor= "green";
  movingRect.debug= true;
  
  gameObject1 = createSprite (100,200);
  gameObject1.shapeColor = "pink";
  gameObject1.debug= true;

  box1 = createSprite(50,50,50,50);
  box1.shapeColor = "blue";
  box1.debug = true;
  box1.velocityX = 3;

  box2 = createSprite(350,50,50,50);
  box2.shapeColor = "blue";
  box2.debug = true;
  box2.velocityX = -3;


}

function draw() {
  background(120); 
  
  movingRect.x = mouseX;
  movingRect.y= mouseY;

  console.log(movingRect.x-fixedRect.x);
  console.log(movingRect.width/2+fixedRect.width/2)

  if(isTouching(movingRect, gameObject1)){
       
    movingRect.shapeColor= "red";
    gameObject1.shapeColor = "red";
  }  else {
    movingRect.shapeColor= "green";
    gameObject1.shapeColor = "green"; 
  }

  bounceOff(box1,box2);
  
  drawSprites();
}


