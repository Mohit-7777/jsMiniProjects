const hello = () => console.log("Hello");

hello();

const hell = (name, age) => {console.log(`Hello ${name}`);
                        console.log(`You are ${age} years old`)};
hell("mohit", 22);

setTimeout(()=>console.log("Hello"), 3000);

const number = [1,2,3,4,5,6,7];

const square = number.map((element) => Math.pow(element, 2));

console.log(square);

const evenNums = number.filter((element)=> element%2==0);
console.log(evenNums);
