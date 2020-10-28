 var movingRect, fixedRect, gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600,200,80,30);
  movingRect = createSprite(400, 200, 50, 50);
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  gameObject4 = createSprite(400,100,50,50);

  fixedRect.shapeColor = "blue"
  movingRect.shapeColor = "blue"
  gameObject1.shapeColor = "blue"
  gameObject2.shapeColor = "blue"
  gameObject3.shapeColor = "blue"
  gameObject4.shapeColor = "blue"

  fixedRect.debug = true
  movingRect.debug = true
  gameObject1 = true
  gameObject2 = true
  gameObject3 = true
  gameObject4 = true
}

function draw() {
  background("black");  

movingRect.x = World.mouseX
movingRect.y = World.mouseY

if(isTouching(gameObject1, movingRect)){

  gameObject1.shapeColor = "red"
    movingRect.shapeColor = "red"

}
else{
  
  gameObject1.shapeColor = "green"
    movingRect.shapeColor = "green"

  
}

  drawSprites();
}

function isTouching(insaan1, insaan2) {

  if(insaan1.x - insaan2.x < insaan2.width/2 + insaan1.width/2 && 
    insaan2.x - insaan1.x < insaan2.width/2 + insaan1.width/2 &&
    insaan1.y - insaan2.y < insaan2.width/2 + insaan1.width/2 &&
    insaan2.y - insaan1.y < insaan2.width/2 + insaan1.width/2){
  
    
  
    return true;

  }
  
  else{
    
    return false;

  }

}