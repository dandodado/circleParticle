let emitter;

function setup() {
  createCanvas(800 , 800);
  emitter = new Emitter(width / 2, height / 2);

}

function draw() {
  background(200);
  emitter.addParticle();
  
  emitter.run();



}

