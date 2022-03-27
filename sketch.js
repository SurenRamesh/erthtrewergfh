var outerspacebackground
var playbuttonimg,playerplaneimg,enemyplanesimg,meteorsimg,laserbulletimg

var gameState = "start"



function preload(){
  outerspacebackground = loadImage("Images/outerspaceeeeee.jpg")
  playbuttonimg = loadImage("Images/Omgomgomgomg.png")
  playerplanesimg = loadImage("Images/planesssss-removebg-preview.png")
  enemyplanesimg = loadImage("Images/planes2-removebg-preview.png")
  meteorsimg = loadImage("Images/meteors-removebg-preview.png")
}


function setup(){
  createCanvas(windowWidth, windowHeight)

  lasers = createSprite(100,windowHeight/2,50,10)
  lasers.shapeColor = "yellow"
  lasers.visible = false

  playerplanes = createSprite(100,windowHeight/2,30,30)
  playerplanes.addImage(playerplanesimg)
  playerplanes.visible = false
  playerplanes.rotation = 90


  playbutton = createSprite(windowWidth/2,windowHeight/2+100,20,20)
  playbutton.addImage(playbuttonimg)
  playbutton.visible=false
  playbutton.scale = 0.35

  enemyplanes = createSprite(1000,windowHeight/2,30,30)
  enemyplanes.addImage(enemyplanesimg)
  enemyplanes.visible = false

  meteorpack = new Group()
}


function draw(){
  background("grey")
  

  drawSprites()


  if(gameState === "start"){
    //background(outerspacebackground)
    playbutton.visible=true
    if(mousePressedOver(playbutton)){
      gameState = "Level 1"
      
      
      

    }
  


  }
  if(gameState === "Level 1"){
    //background(outerspacebackground)
    
    playerplanes.visible = true
    playbutton.visible = false
    enemyplanes.visible = false
    lasers.visible = true
    meteorshower()

    playerplanes.x = World.mouseX
    playerplanes.y = World.mouseY
    lasers.x = playerplanes.x
    lasers.y = playerplanes.y

    if(keyDown("SPACE")){
      lasers.velocityX = 20
    }
    

    if(meteorpack.isTouching(playerplanes)){
      gameState = "Game Over"
    }
    
  }

  if(gameState == "Game Over"){
    playerplanes.destroy()
    meteorpack.destroyEach()
  }
}

function meteorshower(){
  if(frameCount % 60 === 0 ){
    meteors = createSprite(windowWidth,windowHeight,10,10)
    meteors.y = random(75,windowHeight-75)
    meteors.addImage(meteorsimg)
    meteors.velocityX = -10
    meteors.scale = 0.75
    meteors.lifetime = width/10
    meteorpack.add(meteors)
  }
}