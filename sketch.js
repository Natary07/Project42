var issImg, spbg, craftLeft, craftRight, craftUp, craftImg

var iss, spaceCraft;
var hasDocked = false;

function preload() {
  issImg = loadImage("Images/iss.png");
  spbg = loadImage("Images/spacebg.jpg");
  craftImg = loadImage("Images/spacecraft1.png")
  craftUp = loadImage("Images/spacecraft2.png")
  craftLeft = loadImage("Images/spacecraft3.png")
  craftRight = loadImage("Images/spacecraft4.png")

}

function setup() {
  createCanvas(800, 400);
  iss = createSprite(400, 100, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.7;

  spaceCraft = createSprite(400, 200, 50, 50);
  spaceCraft.addImage(craftImg);
  spaceCraft.scale = 0.2;
}

function draw() {
  background(spbg);
  drawSprites();

  if (!hasDocked) {
    spaceCraft.x = spaceCraft.x + random(-1, 1);

    if (keyDown("RIGHT_ARROW")) {
      spaceCraft.x = spaceCraft.x + 1;
      spaceCraft.addImage(craftRight);
    }

    if (keyDown("LEFT_ARROW")) {
      spaceCraft.x = spaceCraft.x - 1;
      spaceCraft.addImage(craftLeft);
    }
    if (keyDown("UP_ARROW")) {
      spaceCraft.y = spaceCraft.y - 1;
      spaceCraft.addImage(craftUp);
    }
    if (keyDown("DOWN_ARROW")) {
      spaceCraft.y = spaceCraft.y + 1;
      spaceCraft.addImage(craftImg);
    }
  }
  if(spaceCraft.y<=(iss.y+90)&& spaceCraft.x<=(iss.x-40)){
    fill("white");
    textSize(30);
    text("Docking Successfu!", 300,350);
    hasDocked = true;
  }

}