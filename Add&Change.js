//createElement(), prepend(), append(), insertBefore(), removeChild()


const newH1 = document.createElement("h1");

newH1.textContent = "I like Pizza!";

newH1.id ="myH1";
newH1.style.color = "red";
newH1.style.textAlign = "center";


document.body.prepend(newH1);

// document.getElementById("box3").prepend(newH1)

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1,           box2);
                        // The Element , where to put

const n1 = document.createElement("h2");
n1.textContent = "The is H2";
document.body.prepend(n1);
n1.style.textAlign= "center"
document.getElementById("box1").prepend(n1);

document.getElementById("box1").removeChild(n1);