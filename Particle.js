class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.acceleration = createVector(0, 0);
    this.lifespan = 255.0;
  }

  run() {
    this.update();
    this.show();
  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 0.35;
    this.acceleration.mult(0);
  }

  // Method to display
  show() {
  
    if(this.velocity.mag() > 1.5) {
         // stroke(0, this.lifespan);
          //strokeWeight(2);
          fill(200,200,100);
    } if(this.velocity.mag() < 1.5) {
         // stroke(0, this.lifespan);
         // strokeWeight(2);
          fill(127,200,200);
    }if(this.velocity.mag() > 3) {
          //stroke(0, this.lifespan);
          //strokeWeight(2);
          fill(100,200,100);
    }
    circle(this.position.x, this.position.y, 8);
  }

  // Is the particle still useful?
  isDead() {
    return this.lifespan < 0.0;
  }
}