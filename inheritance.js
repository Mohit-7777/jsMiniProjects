class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name= "rabbit";
}

class Fish extends Animal{
    name= "fish";
}

class Hawk extends Animal{
    name="hawk";
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();


console.log(fish.alive);
fish.eat();
fish.sleep();