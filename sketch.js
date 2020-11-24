//Create variables here
var dog;
var happyDog;
var database;
var food;
var foodStock;
function preload()
{
  //load images here
var dogimg=loadImage("dog1.png");
  happyDog=loadImage("dog2.png");
}

function setup() {
  
	createCanvas(500,500);
  dog=createSprite(250,200,50,50);
   dog.addImage(dogpic2,"dogimg");
  database=firebase.database();
  var foodStock=database.ref("food");
  foodStock.on("value",readStock);  
}
function draw() {  
  background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
writeStock(food);
dog.addImage(dogpic,"happyDog");
}
  drawSprites();
  //add styles here
 textSize(20);
  fill("white");
  stroke(4);
  text("Note : press UP_ARROW key to feed drago milk",400,100);
  text("Remaining food:" +foodStock ,450,400);
}

function readStock(data){
  food=data.val();
}

function writeStock(x){
if(x<=0){
  x=0;
}
else{
  x=x-1;
}


database.ref('/').update({
  food:x
})
}
