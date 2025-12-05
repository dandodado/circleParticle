let emitter;
let attractor;
function setup() {
  createCanvas(1200 , 1200);
  emitter = new Emitter(width / 2, width/2-370);
  attractor = new CirclePower();
}

function draw() {
  background(200,40);
  emitter.addParticle();
  emitter.run();
  //attractor.show();
  emitter.applyForceObject(attractor);



}

