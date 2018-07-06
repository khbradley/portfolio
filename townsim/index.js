/*
Start State

Play State

Game Over State

*/

var lastUpdate;

function SpriteSheet(path, frameWidth, frameHeight) {
 
   var image = new Image();
   var framesPerRow;
 
   // calculate the number of frames in a row after the image loads
   var self = this;
   image.onload = function() {
      framesPerRow = Math.floor(image.width / frameWidth);
   };
 
   image.src = "images/PathAndObjects.png";
}

function tick() {
  var now = window.Date.now();

  if (lastUpdate) {
    var elapsed = (now-lastUpdate) / 1000;
    lastUpdate = now;

    // Update all game objects here.
    update(elapsed);
    // ...and render them somehow.
    render();
  } else {
    // Skip first frame, so elapsed is not 0.
    lastUpdate = now;
  }

  // This makes the `tick` function run 60 frames per second (or slower, depends on monitor's refresh rate).
  window.requestAnimationFrame(tick);
};

function update(time) {
  //move everything
}

function render(){
  //draw everything
}
