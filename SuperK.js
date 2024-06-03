class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  move(speed) {
    console.log(`The ${this.name} moves at a speed of ${speed} mph`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
  run() {
    super.move(this.runSpeed);
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
}

const rabbit = new Rabbit("rabbit", 1, 22);
const fish = new Fish("fish", 1, 12);
const hawk = new Hawk("hawk", 3, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.move(rabbit.runSpeed);
