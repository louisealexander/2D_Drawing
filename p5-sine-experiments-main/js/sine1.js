function  setup(){
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw(){
  background(30);
  stroke(255);
  noFill();
  
  translate(width / 2, height / 2); // centre the waves

  beginShape();
  for (var i = 0; i < 359; i++){

    var r1Min = map(sin(frameCount), -1, 1, 50, 100);
    var r1Max = map(sin(frameCount * 2), -1, 1, 100, 0);

    var r2Min = map(sin(frameCount / 2), -1, 1, 100, 50);
    var r2Max = map(sin(frameCount), -1, 1, 0, 100);

    var r1 = map(sin(i * 3), -1, 1, r1Min, r1Max); //integrates a sinewave into the circle.
    var r2 = map(sin(i * 6 + 90), -1, 1, r2Min, r2Max);
    var r = r1 + r2  
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE)
}