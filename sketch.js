var canvas;
var backgroundImage;
var bgImg;
var dataBase;
var form, player;
var playerCount=0;
var allPlayers;
var car1Img;
var car2Img;
var car1;
var car2;
var roadImg;
var gameState=0;
var car=[];

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1Img= loadImage("./assets/car1.png")
  car2Img = loadImage("./assets/car2.png")
  roadImg = loadImage("./assets/track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  dataBase = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount===2){
    game.update(1);
  }
  if(gameState===1){
game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}