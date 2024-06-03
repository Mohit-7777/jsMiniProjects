function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000);

setTimeout(() => {
    alert("Bye")
}, 5000);

let timeoutId

function startTimer(){
   timeoutId = setTimeout(function(){window.alert("Hello")},3000);
   console.log("Starter");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARER");
}