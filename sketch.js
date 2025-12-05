let emitter;
let attractor;
function setup() {
  createCanvas(800 , 800);
  emitter = new Emitter(width / 2, height / 2);
  attractor = new CirclePower();
}

function draw() {
  background(200);
  emitter.addParticle();
  emitter.run();
  attractor.show();
  emitter.applyForceObject(attractor);



}

