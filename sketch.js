var PLAY = 1;
var END = 0;
var gameState = PLAY;

var jellyfish,jelly_img
var plastic,plastic_img
var turtle,turtle_img
var bg,bg_img
var coral,coral_img
var home,home_img
var reset,reset_img
var jelliesGroup,plasticsGroup
var score


var gameOver, restart;



function preload(){

  
  jellyfish_img = loadImage("pics for game/jelly.png");
  
  plastic_img = loadImage("pics for game/plastic.png");
  
  
  coral_img= loadImage("pics for game/coral.png");

  bg_img= loadImage("pics for game/underwater-image.png");

  turtle_img= loadImage("pics for game/turtle.png");

  home_img= loadImage("pics for game/home.png");

  reset_img= loadImage("pics for game/reset.png");



}

function setup() {
  createCanvas(1500, 400);
  
 
  
  coral = createSprite(1200,200,400,20);
  coral.addImage("corals",coral_img);
  coral.scale = 0.8;
  coral.visible=false

  home = createSprite(700,100,400,20);
  home.addImage("words",home_img);
  home.scale = 0.95;
  home.visible=false

  reset= createSprite(700,200,400,20);
  reset.addImage("re",reset_img);
  reset.scale = 0.5;
  reset.visible=false
    
  
 //bg = createSprite(700,-140,10,10);
 //bg.addImage("underwater",bg_img);
 //bg.scale=0.9
 // bg.x = middle.width/2;
 // bg.velocityX=0

 jelliesGroup = new Group();
 plasticsGroup = new Group();


  turtle = createSprite(300,140,10,10);
  turtle.addImage("turtles",turtle_img);
  turtle.scale=0.6

  
  turtle.debug=true

  turtle.setCollider("rectangle",0,0,300,150)


  
  score=0 ;

}

function draw() {
  background("black")

 if (gameState===PLAY){
  
  turtle.x=200
  turtle.y=mouseY

  spawnPlastics();
  spawnJellies();

   if (jelliesGroup.isTouching(turtle)){
    score=score+1
  }

    if(plasticsGroup.isTouching(turtle)){  
     score=score-2
    }
     if (score>=300){
       gameState=END
     }

 }

 else if (gameState === END) {
   coral .visible=true
   jelliesGroup.destroyEach();
   plasticsGroup.destroyEach();
   turtle.velocityX=0
   turtle.velocityY=0
  home.visible=true

  //mouse is touching reset buton then reset ask maam
  //ask about moving background
// get rid of visble collider


  }

  //  if (jellyfish.isTouching(turtle)) {
      //get 1 point
       //jellyfish group thing is not working black screen is coming
    //}
    
    drawSprites();

    textSize(30)
    text("Score: "+ score,1300,60);
  }
 
  
    //if we get 10 jelly fish background change to coral
    
    //I want a moving background how to do that
    

  
 
  



function spawnPlastics() {
  //write code here to spawn the plastics
  if (frameCount %  80=== 0) {
    plastic = createSprite(1550,100,10,10);
    plastic.addImage("plastics",plastic_img);
    plastic.y = Math.round(random(50,350));
    plastic.scale=0.1
    plastic.velocityX = -13;
    
     //assign lifetime to the variable
    plastic.lifetime = 1040;
    
    //adjust the depth
    plastic.depth = turtle.depth+1;
    turtle.depth = turtle.depth;
     //add each plastic to the group
     plasticsGroup.add(plastic);
    
  }
  
}


function spawnJellies() {
  //write code here to spawn the plastics
  if (frameCount %  100=== 0) {
    jellyfish = createSprite(1550,140,10,10);
    jellyfish.addImage("jellies",jellyfish_img);
    jellyfish.y = Math.round(random(50,350));
    jellyfish.scale=0.50
    jellyfish.velocityX = -13;
    
    jellyfish.debug=true
     //assign lifetime to the variable
     jellyfish.lifetime = 1300;
    
    //adjust the depth
    jellyfish.depth = turtle.depth+1;
    turtle.depth = turtle.depth;
    
   //add each jelly to the group
   jelliesGroup.add(jellyfish);
    
  jellyfish.setCollider("rectangle",-60,0,100,100)
   
  }
  
}
    
    

function reset(){
  gameState = PLAY;

  reset.visible = false;
  
  score = 0;
  
}
