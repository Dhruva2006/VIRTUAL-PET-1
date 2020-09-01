//Create variables here
var dog;
var happyDog;
var database;
var food;
var foodStock;

function preload()
{
  //load images here
  dog = loadImage("B/Dog.png");
  happyDog = loadImage("A/happyDog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog1.createSprite(250, 250, 50, 50);
  dog1.addImage(dog);

  foodStock = database.ref('Food');
  foodStack.on("value", readStock);

  //Function to read values from DB 
  function readStock(data) {
    food = data.val();
  }

  //Function to write values in DB 
  function writeStock(x) {
    if(x<=0) {
      x = 0;
    }else {
      x = x-1;
    }
    database.ref('/').update({
      Food: x
    })
  }

  
}


function draw() {  
  background(46, 139, 87);

  if(keyDown(UP_ARROW)){

  }

  if(KeyWentDown(UP_ARROW)) {
    writeStock(food);
    dog1.addImage(happyDog);
  }



  drawSprites();
  //add styles here
  Text("foodStock", 450, 50);
  textSize(20);
  Fill(red);
  Stroke(black);

  Text("Note: PressUP_ARROW Key To Feed Milk", 250, 50);


}



