
num = [1,2,3,4,5,6];
num.forEach(double);

function double(element, index, array) {
    console.log((array[index] = element * 2));
}

fruits= ["apple", "mango", "banana", "orange"];

// const h =
fruits.forEach(capatalize);
// console.log(h);
fruits.forEach(display);

function capatalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase()+ element.slice(1);
}

function display(element, index, array){
    console.log(element);
}