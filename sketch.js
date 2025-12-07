let emitter;
let attractor;
function setup() {
  createCanvas(800 , 800);
  emitter = new Emitter(width / 2, 60);
  attractor = new CirclePower();
}

function draw() {
  background(200);
  emitter.addParticle();
  emitter.run();
  attractor.show();
  attractor.update();
  emitter.applyForceObject(attractor);
   let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);




}

