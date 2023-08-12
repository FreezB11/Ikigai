// Reverse engineered from ( original at bottom)
// https://twitter.com/takawo/status/1166578237755011077

let vectors = [];
let amount = 8000;
let speed = 1;
let size = 10;

// const canvas = document.getElementById("canva");

function setup() {
  createCanvas(1794,963)
  background(10)
  
  stroke(255,0,0, 10)
  
  for ( var i = 0; i < amount; i++ ) {
    vectors.push(createVector(random(width),random(height)))
  }
}

function draw() {
  for ( vector of vectors) {
    let randomisation = noise(vector.x/99, vector.y/99) * TAU;
    
    vector.add(cos(randomisation),sin(randomisation))
    
    point(
      // constrain(vector.x, 100, width-100),
      // constrain(vector.y, 100, height-100)
      constrain(vector.x, 0, width),
      constrain(vector.y, 0, height)
    )
  }
}


