let sound1, sound2, sound3, sound4, sound5;
let delay;

function preload() {
  sound1 = loadSound('prog.mp3');
  sound2 = loadSound('rock.mp3');
  sound3 = loadSound('damn.wav');
  sound4 = loadSound('drum.wav');
  sound5 = loadSound('dance.mp3');
}

function setup() {
  createCanvas(400, 400);
  background(220);
  
  delay = new p5.Delay();
}

function draw() {
  
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)){
    background(200,150,0);
    sound1.play();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    //delay.process(sound1,0.12,0.7,2300);
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    background(50,150,200);
    sound2.play();
    sound1.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    background(200,200,100);
    sound3.play();
    sound1.stop();
    sound2.stop();
    sound4.stop();
    sound5.stop();
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    background(100,150,80);
    sound4.play();
    sound1.stop();
    sound2.stop();
    sound3.stop();
    sound5.stop();
  }
  
  if (keyIsDown(32)) {
    background(100,100,200);
    sound5.play();
    sound1.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
  }
}