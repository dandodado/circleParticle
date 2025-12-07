class CirclePower {

  constructor() {
    this.position = createVector(width /2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = 20;
    this.dragOffset = createVector(0, 0);
  }
  
  update() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
}

applyForce(force) {
  let f = force;;
  this.acceleration.add(f);
}
  getForce(m) {
   let force = p5.Vector.sub(this.position, m.position);
  let distance = force.mag();

  let minDist = 80;   

  if (distance < minDist) {
    let strength = this.mass / (distance * distance)*1.3;
  force.mult(-strength);
    return force;
  }
  }
  getForce2(m) {
   let force = p5.Vector.sub(this.position, m.position);
  let distance = force.mag();

  let minDist = 100;   

  if (distance < minDist) {
    let strength = this.mass / (distance * distance)*0.005;
  force.mult(strength);
    return force;
  }
  }
   
  // Method to display
  show() {
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke(0);
    if (this.dragging) {
      fill(255);
    } else if (this.rollover) {
      fill(175);
    } else {
      fill(101, 200);
    }
    ellipse(this.position.x, this.position.y, this.mass * 2, this.mass * 2);
  }
}
 

