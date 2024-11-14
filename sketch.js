let currentCharacter = 0;
let pageMargin = 40;
let msg_idx = 0;
let companIndex = [];

//arrays
let pastryArray = [];
let pastryIndexArray = [];
let bgArray = [];
let bArray = [];
let speakerArray = [];
let companArray = [];
let soundArray = [];
let font = [];
let talk = [];

function preload() {
  //pastries
  pastryArray[0] = loadImage("assets1/cake.PNG");
  pastryArray[1] = loadImage("assets1/carrot.PNG");
  pastryArray[2] = loadImage("assets1/cheesecake.PNG");
  pastryArray[3] = loadImage("assets1/cookies.PNG");
  pastryArray[4] = loadImage("assets1/cup1.PNG");
  pastryArray[5] = loadImage("assets1/cup2.PNG");
  pastryArray[6] = loadImage("assets1/ecl1.PNG");
  pastryArray[7] = loadImage("assets1/ecl2.PNG");
  pastryArray[8] = loadImage("assets1/fruitcake.PNG");
  pastryArray[9] = loadImage("assets1/macarons.PNG");
  pastryArray[10] = loadImage("assets1/swirl.PNG");
  pastryArray[11] = loadImage("assets1/tira.PNG");

  //background
  bgArray[0] = loadImage("assets-bg/bg.png");
  bgArray[1] = loadImage("assets-bg/counter.png");
  bgArray[2] = loadImage("assets-bg/employee.png");
  bgArray[3] = loadImage("assets-bg/shelves.png");
  bgArray[4] = loadImage("assets-bg/cb6.png")

  //pastry buttons
  bArray[0] = loadImage("assets-buttons/b1.png");
  bArray[1] = loadImage("assets-buttons/b2.png");
  bArray[2] = loadImage("assets-buttons/b3.png");
  bArray[3] = loadImage("assets-buttons/b4.png");
  bArray[4] = loadImage("assets-buttons/b5.png");
  bArray[5] = loadImage("assets-buttons/b6.png");
  bArray[6] = loadImage("assets-buttons/b7.png");
  bArray[7] = loadImage("assets-buttons/b8.png");

  //speaker & companions
  speakerArray[0] = loadImage("assets-bg/speaker.png");
  companArray[0] = loadImage("companions/cat.png");
  companArray[1] = loadImage("companions/hamster.png");
  companArray[2] = loadImage("companions/parrot.png");

  //sound Array
  soundArray[0] = loadSound("sound/lofi.mp3");

  //text Array
  font = loadFont("pixel.ttf");

  //text arrays
  let text1 = ["Nice evening, isn't it?"];
  let text2 = ["Thank you for coming!"];
  let text3 = ["Our cat's name is Maple. She's very sweet!"];
  let text4 = [
    "Have you seen our hamster, Butter? he's around here somewhere...",
  ];
  let text5 = ["It's been a really slow day."];
  let text6 = ["My name is Allie! Is there anything I can get you?"];
  let text7 = ["I reccommend the tiramisu, it's delicious!"];
  let text8 = ["You can pet the parrot if you want! She's friendly."];
  let text9 = ["What can I get for you?"];
  let text10 = ["I love the fall season, it's so pretty!"];
  let text11 = ["I'd reccommend our seasonal drink, the peppermint Latte!"];
  let text12 = ["Thanks for the tip!"];
  talk = [
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    text9,
    text10,
    text11,
    text12,
  ];
}

function setup() {
  rectMode(CENTER);
  background(200);

  var canvas = createCanvas(550, 400);
  canvas.parent("sketch-holder");

  var button = createButton("Talk to Allie");
  button.parent("button-holder");
  button.mousePressed(talkText);

  var button2 = createButton("Clear Shelves");
  button2.parent("button-holder");
  button2.mousePressed(clearShelf);
  
  var helloText = createP("_________________________________________________________________");
  helloText.parent("button-holder");
  
  var helloText1 = createP("Welcome to the Sunset Cafe!");
  helloText1.parent("button-holder");
  
  var helloText2 = createP("We have a variety of delicious pastries to offer! Click on each numbered tab on the shelf to take a look! Press the 'clear shelves button' to clear.");
  helloText2.parent("button-holder");
  
  var helloText3 = createP("You can also speak to our star employee, Allie, by pressing the talk button!");
  helloText3.parent("button-holder");
  
  var helloText4 = createP("Enjoy some calm music by pressing the speaker!");
  helloText4.parent("button-holder");
  
  var helloText5 = createP("Meet our different furry and feathery friends by pressing between Allie and the Speaker!");
  helloText5.parent("button-holder");
  

  //initial pastry selection
  pastrySelection();

  //background function
  drawBackground();

  //speaker
  image(speakerArray[0], 0, 124, 75, 75);
  textBox();
  musicSound();
}

function draw() {
  drawButtons();
}

function drawBackground() {
  image(bgArray[0], 0, 0, 550, 400);
  image(bgArray[3], 0, 0, 550, 400);
  image(bgArray[2], 110, 8, 224, 224);
  image(bgArray[1], 0, 0, 550, 400);
}

function drawButtons() {
  //1st row

  //b1
  image(bArray[0], 0, 250, 66, 66);
  //b2
  image(bArray[1], 70, 250, 66, 66);
  //b3
  image(bArray[2], 140, 250, 66, 66);
  //b4
  image(bArray[3], 210, 250, 66, 66);

  //2nd row

  //b5
  image(bArray[4], 0, 335, 66, 66);
  //b6
  image(bArray[5], 70, 335, 66, 66);
  //b7
  image(bArray[6], 140, 335, 66, 66);
  //b8
  image(bArray[7], 210, 335, 66, 66);
}

function musicSound() {}

function textBox() {}

function talkText() {
  rectMode(CENTER);
  fill(0);
  stroke(255);
  strokeWeight(2);
  triangle(400, 75, 290, 130, 340, 75);
  strokeWeight(1);
  stroke(255);
  rect(400, 60, 240, 90);
  noStroke();
  triangle(400, 75, 290, 130, 340, 75);

  textFont(font);
  textSize(13);
  let randomTxt = random(talk);
  fill(0);
  rect(400, 60, 240, 90);
  fill(255);
  text(randomTxt, 400, 60, 220);
}

function clearShelf() {
  pastrySelection();
  drawBackground();
  //speaker
  image(speakerArray[0], 0, 124, 75, 75);
}

function mousePressed() {
  //cords for button
  //image(bArray[0],0,250,66,66);

  if (mouseX > 0 && mouseX < 60) {
    if (mouseY > 280 && mouseY < 300) {
      image(pastryArray[pastryIndexArray[0]], 5, 230, 50, 50);
    } else if (mouseY > 360 && mouseY < 380) {
      image(pastryArray[pastryIndexArray[4]], 5, 315, 50, 50);
    }
  }
  if ((mouseX > 80) & (mouseX < 140)) {
    if (mouseY > 280 && mouseY < 300) {
      image(pastryArray[pastryIndexArray[1]], 75, 230, 50, 50);
    } else if (mouseY > 360 && mouseY < 380) {
      image(pastryArray[pastryIndexArray[5]], 75, 315, 50, 50);
    }
  }
  if (mouseX > 160 && mouseX < 220) {
    if (mouseY > 280 && mouseY < 300) {
      image(pastryArray[pastryIndexArray[2]], 145, 230, 50, 50);
    } else if (mouseY > 360 && mouseY < 380) {
      image(pastryArray[pastryIndexArray[6]], 145, 315, 50, 50);
    }
  }

  if (mouseX > 240 && mouseX < 300) {
    if (mouseY > 280 && mouseY < 300) {
      image(pastryArray[pastryIndexArray[3]], 215, 230, 50, 50);
    } else if (mouseY > 360 && mouseY < 380) {
      image(pastryArray[pastryIndexArray[7]], 215, 315, 50, 50);
    }
  }

  //music for speaker
  if (mouseX > 20 && mouseX < 50) {
    if (mouseY > 150 && mouseY < 180) {
      if (soundArray[0].isPlaying()) {
        soundArray[0].stop();
      } else {
        soundArray[0].play();
      }
    }
  }
  
  // companion
  if (mouseX > 70 && mouseX < 150) {
    if (mouseY > 150 && mouseY < 180) {
      companIndex++;
      if (companIndex> companArray.length-1){
        companIndex=0;
      }
      
      image(bgArray[4], 0, 0, 550, 400);
      image(companArray[companIndex],60,93, 98,98)
      
    }
  }
  
}

// function for selecting new random pastries
function pastrySelection() {
  for (let i = 0; i < 8; i++) {
    pastryIndexArray[i] = int(random(pastryArray.length));
    if (pastryIndexArray[i] > 0) {
      while (pastryIndexArray[i] == pastryIndexArray[i - 1]) {
        pastryIndexArray[i] = int(random(pastryArray.length));
      }
    }
  }

  console.log(pastryIndexArray);
}

function drawCompanions(mousePressed){
  
  
  
}