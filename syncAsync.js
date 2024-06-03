setTimeout(() => console.log("Task 1"), 3000);  //async

console.log("Task 2");   //sync code
console.log("Task 3");
console.log("Task 4");

function func1(callback){                                         //Handling async code using callbacks
    setTimeout(() => {console.log("Task 1"); callback()}, 3000);
}
function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);