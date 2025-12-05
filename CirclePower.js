class CirclePower {

  constructor() {
    this.position = createVector(width /2, height / 2);
    this.mass = 20;
    this.dragOffset = createVector(0, 0);
  }

  getForce(m) {
  let force = p5.Vector.sub(this.position, m.position);
  let distance = force.mag();

  let minDist = 80;   

  if (distance < minDist) {
    let strength2 = this.mass / (distance * distance)/10000;
  force.mult(-strength2);
    return force;
  }
if (distance > minDist+10) {
  distance = constrain(distance, 5, 25);
  force.normalize();

  let strength = this.mass / (distance * distance);
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
 

