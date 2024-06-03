let fruits = ["pineapple", "apple", "orange", "coconut", "banana"];

console.log(fruits.sort());

let num = [1,10,2,9,3,8,4,7,5,6];
num.sort((a, b) => a-b);
console.log(num);

const people = [
  { name: "Spongebob", age: 30, gpa: 3.0 },
  { name: "Patrick", age: 37, gpa: 1.5 },
  { name: "Squidward", age: 51, gpa: 2.5 },
  { name: "Sandy", age: 27, gpa: 4.0 },
];

people.sort((a,b) => a.age - b.age);

console.log(people);

people.sort((a,b) => a.name.localeCompare(b.name)); //method used only for strings
console.log(people);