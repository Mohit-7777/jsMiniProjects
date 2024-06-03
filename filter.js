let arr = [1,2,3,4,5,6];
const newarr = arr.filter(isEven);
console.log(newarr);

function isEven(element){
    return element %2==0;
}

let ar = [15,13,15,16,17,17,18,18,19,20,30,40,50];
let newar = ar.filter(isAdult);
    console.log(newar);


function isAdult(element){
    return element>=18;
}

let fruits = ["apple", "mango", "banana", "orange"];
let newfruits = fruits.filter(getShortWords);
console.log(newfruits);

function getShortWords(element){
    return element.length<=5;
}