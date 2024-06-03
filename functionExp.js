const hello = function(){
    console.log("hello");
}

hello();

function hell(){
    console.log("hello");
}

setTimeout(hell, 3000);

setTimeout(function(){
    console.log("hello");
}, 5000);

const numbers  = [1,2,3,4,5,6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
console.log(squares);
