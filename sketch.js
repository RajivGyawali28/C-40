var canvas, backgroundImage;

var finishedPlayers = 0;
var pastFinished;

var gold, silver, bronze;
var goldImg, silverImg, bronzeImg

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  goldImg = loadImage("images/gold.png");
  silverImg = loadImage("images/silver.png");
  bronzeImg = loadImage("images/bronze.png");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(mouseX,mouseY,mouseX/mouseY);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(finishedPlayers===4){
    game.update(2);
  }
  if(gameState === 2){
    game.displayRanks();
  }
}
