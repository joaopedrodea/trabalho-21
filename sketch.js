var path,foguete,astro,sate,oro,alien;
var pathImg,fogueteImg,astroImg,sateImg,oroImg,alienImg;
var treasureCollection = 0;
var astroG,sateG,oroG,alienGroup;

//Estados do jogo
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("luz.png");
  fogueteImg = loadImage("foguete.png");
  astroImg = loadImage("astronauta.png");
  sateImg = loadImage("satelite.png");
  oroImg = loadImage("meteoro.png");
  alienImg = loadImage("sword.png");
}

function setup(){
  
  createCanvas(400,600);
// Movendo plano de fundo
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//criar menino correndo 
foguete = createSprite(400,150,80,30);
foguete.addImage(fogueteImg);
foguete.scale=0.1
foguete.y=350
  
  
astroG=new Group();
sateG=new Group();
oroG=new Group();
alienGroup=new Group();

//boy.debug=true
foguete.setCollider("circle",0,0,400)
}

function draw() {

  if(gameState===PLAY){
  background(0);
  foguete.x = World.mouseX;
  
  edges= createEdgeSprites();
  foguete.collide(edges);
  
  //código para redefinir plano de fundo
  if(path.y > 0 ){
    path.y = height/2;
  }
  
    createAstro();
    createSate();
    createOro();
    createAlien();

    if (astroG.isTouching(foguete)) {
      astroG.destroyEach();
      //aumente a treasureCollection para 50
      treasureCollection=treasureCollection+1;
    }
    else if (sateG.isTouching(foguete)) {
      sateG.destroyEach();
            //aumente a treasureCollection para 100
            gameState=END
   
    }
    else if(oroG.isTouching(foguete)) {
      oroG.destroyEach();
            //aumente a treasureCollection para 150
           gameState=END
          }
    else{
      if(alienGroup.isTouching(foguete)) {
//Mude o gameState (estado do jogo) para End
gameState=END
//destrua todos os grupos
// defina setvelocityEach como 0 para todos os grupos
alienGroup.setVelocityXEach (0)
  }

  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("astronautas pegos: "+ treasureCollection,100,30);
  }

}

function createAstro() {
  if (World.frameCount % 200 == 0) {
  var astro = createSprite(Math.round(random(50, 350),40, 10, 10));
  astro.addImage(astroImg);
  astro.scale=0.10;
  astro.velocityY = 3;
  astro.lifetime = 150;
  astroG.add(astro);
  }
}

function createSate() {
  if (World.frameCount % 320 == 0) {
  var sate = createSprite(Math.round(random(50, 350),40, 10, 10));
  sate.addImage(sateImg);
  sate.scale=0.5;
  sate.velocityY = 3;
  sate.lifetime = 150;
  sateG.add(sate);
}
}

function createOro() {
  if (World.frameCount % 410 == 0) {
  var oro = createSprite(Math.round(random(50, 350),40, 10, 10));
  oro.addImage(oroImg);
  oro.scale=0.33;
  oro.velocityY = 3;
  oro.lifetime = 150;
  oroG.add(oro);
  }
}

function createAlien(){
  if (World.frameCount % 530 == 0) {
  var alien = createSprite(Math.round(random(50, 350),40, 10, 10));
  alien.addImage(alienImg);
  alien.scale=0.2;
  alien.velocityY = 3;
  alien.lifetime = 150;
  alienGroup.add(alien);
  }
}
