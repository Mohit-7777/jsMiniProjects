const fruits = [
    { name: "pineapple", color: "yellow", calories: 37 },
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "coconut", color: "white", calories: 159 },
  { name: "banana", color: "yellow", calories: 105 },
];

fruits.push({ name: "grapes", color: "purple", calories: 62 });

console.log(fruits[0].name);
console.log(fruits);
fruits.splice(1,3);
console.log(fruits);

fruits.forEach(fruit => console.log(fruit.color));

const fruitNames = fruits.map(fruit =>fruit.name);
console.log(fruitNames);

const yellowFruits = fruits.filter(fruit => fruit.color ==="yellow");

console.log(yellowFruits);

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit);