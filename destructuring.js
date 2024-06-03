let a =1;
let b=2;

[a,b]=[b,a];

console.log(a);
console.log(b);

//--------------------------------------------------
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//--------------------------------------------------

const color=["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor, ...extraColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColor);

//--------------------------------------------------

function displayPerson({fistName, LastName, age, job}){
    console.log(`name: ${fistName} ${LastName}`);
    console.log(`age:${age} `);
    console.log(`job:${job} `);
}

const person1 = {
    firstName: "Spongebob",
    LastName: "SquarePants",
    age:30,
    job:"Fry Cook",
}
const person2 = {
    firstName: "Patrick",
    LastName: "Star",
    age:34,
   
}
const{firstName, LastName, age, job} = person1;

// console.log(firstName);
// console.log(LastName);
// console.log(age);
// console.log(job);

displayPerson(person1);