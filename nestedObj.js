const person = {
  fullName: "Spongebob Squarepants",
  age: 30,
  isStudent: true,
  hobbies: ["karate", "jellyfishing", "cooking"],
  address: {
    street: "belonwala",
    city: "Dehradun",
    state: "Uttarakhand",
    country: "India",
  },
};

console.log(person.fullName);
console.log(person.age);
console.log(person.hobbies[0]);
console.log(person.address.country);

for (const property in person.address) {
  console.log(person.address[property]);
}

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}
class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Spongbob", 30, "Belonwala", "Dehradun", "India");
const person2 = new Person("Patrick", 37, "Bhauwala", "Dehradun", "India");

console.log(person1.name);
console.log(person1.address.street);