let emitter;
let attractor;
function setup() {
  createCanvas(800 , 800);
  emitter = new Emitter(width / 2, 60);
  attractor = new CirclePower();
}

function draw() {
  background(200,30);
  emitter.addParticle();
  emitter.run();
  //attractor.show();
  emitter.applyForceObject(attractor);



}

