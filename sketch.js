var background1
var cone
var player
var bg1
var player1
var startover_Img
var count = 0
function preload(){
 background1 = loadImage("Img1.jpg")
 //cone = loadImage("img2.jpg")
 player = loadImage("Img301.png")
 startover_Img = loadImage("startoverimg.png")
}

function setup() {
  createCanvas(1920,1380);
  /*bg1 = createSprite(650, 640, 50, 50);
  bg1.addImage(background1)*/
  //bus1 = createSprite(505,225,140,50)
  truck1 = createSprite(1220,185,190,50)
  truck2 = createSprite(1655,185,190,50)
  car3 = createSprite(1575,690,130,50)
  car2 = createSprite(1200,740,140,50)
  car1 = createSprite(160,740,140,50)
  car4 = createSprite(600,1155,150,50)
  car5 = createSprite(1090,1150,150,50)
  car6 = createSprite(1355,1100,160,50)
  garden1 = createSprite(100,90,320,180)
  garden2 = createSprite(605,90,400,170)
  garden3 = createSprite(100,480,320,400)
  garden4 = createSprite(100,940,320,300)
  garden5 = createSprite(100,1340,320,280)
  garden6 = createSprite(890,480,980,400)
  garden7 = createSprite(605,940,400,310)
  garden8 = createSprite(605,1300,400,200)
  garden9 = createSprite(1465,80,1000,170)
  garden10 = createSprite(1750,480,450,400)
  garden11 = createSprite(1460,935,1000,300)
  garden12 = createSprite(1460,1300,1000,200)
  edge1 = createSprite(960,1,1920,10)
  edge2 = createSprite(0,690,10,1380)
  edge3 = createSprite(1920,690,10,1380)
  edge4 = createSprite(960,1380,1920,10)
  finishLine = createSprite(890,90,150,170)
  //bus1.visible = false
  truck1.visible = false
  truck2.visible = false
  car1.visible = false
  car2.visible = false
  car3.visible = false
  car4.visible = false
  car5.visible = false
  car6.visible = false
  player1 = createSprite(375,1300,20,20)
  player1.addImage(player)
  player1.scale = 0.15
  start_over = createSprite(576,1201,1,1)
  start_over.visible = false
  garden1.visible = false
  garden2.visible = false
  garden3.visible = false
  garden4.visible = false
  garden5.visible = false
  garden6.visible = false
  garden7.visible = false
  garden8.visible = false
  garden9.visible = false
  garden10.visible = false
  garden11.visible = false
  garden12.visible = false
  
}

function draw() {
  background(background1);  
 if(keyDown("W")){
  player1.y = player1.y-10
 }
 if(keyDown("S")){
  player1.y = player1.y+10
 }
 if(keyDown("A")){
  player1.x = player1.x-10
 }
 if(keyDown("D")){
  player1.x = player1.x+10
 }
 player1.bounceOff(garden1)
 player1.bounceOff(garden2)
 player1.bounceOff(garden3)
 player1.bounceOff(garden4)
 player1.bounceOff(garden5)
 player1.bounceOff(garden6)
 player1.bounceOff(garden7)
 player1.bounceOff(garden8)
 player1.bounceOff(garden9)
 player1.bounceOff(garden10)
 player1.bounceOff(garden11)
 player1.bounceOff(garden12)
 player1.bounceOff(edge1)
 player1.bounceOff(edge2)
 player1.bounceOff(edge3)
 player1.bounceOff(edge4)
 /*if(player1.collide(bus1)){
   player1.x = 575
   player1.y = 1200
   //textSize(16)
   //fill(0,0,0)
   //text("start over", player1.x + 100, player1.y - 100 )
 }*/
  drawSprites();
  if(player1.isTouching(truck1)
  ||player1.isTouching(truck2)||player1.isTouching(car1)||player1.isTouching(car2)
  ||player1.isTouching(car3)||player1.isTouching(car4)
  ||player1.isTouching(car5)||player1.isTouching(car6)){
    player1.x = 376
    player1.y = 1301
  }
  if(player1.x == 376 && player1.y === 1301){
  start_over.visible = true
  start_over.addImage(startover_Img)
}
if(player1.x != 376 || player1.y != 1301){
  start_over.visible = false
}
count++
if(count>=5001){
  player1.x = 376
  player1.y = 1301
  count--
}
textSize(64)
fill("black")
text("Time:  "+count,110,120)
text("Complete Game before the time is 5000",110, 60)
textSize(40)
fill("white")
text("FINISH",825,120)
if(player1.isTouching(finishLine)){
 textSize(128)
 fill("black")
  text("YOU WON",625,720)
  count--
}
}
