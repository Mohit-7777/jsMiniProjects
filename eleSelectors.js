// Element Selector = Methods used to target and manipulate HTML Element 
//                    They allow you to select one or multiple HTML elements
//                    from the DOM(Document Object Model)


// 1. document.getElementById()            ELEMENT OR NULL
// 2. document.getElementsByClassName()    HTML COLLECTION
// 3. document.getElementsByTagName()      HTML COLLECTION
// 4. document.querySelector()             FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()          NODELIST

const myHeading = document.getElementById("heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign="center"
console.log(document);
console.dir(document);

const fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "red"
fruits[1].style.backgroundColor = "yellow"
fruits[2].style.backgroundColor = "yellow"

const h4Elements = document.getElementsByTagName("h4");
const liELements = document.getElementsByTagName("li")
// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }

// for(let liELement of liELements){
//     liELement.style.backgroundColor = "lightgreen";
// }

Array.from(h4Elements).forEach(h4Elements =>{
    h4Elements.style.backgroundColor="yellow";
})
Array.from(liELements).forEach(liELements =>{
    liELements.style.backgroundColor="red";
})

const ele = document.querySelector("li");
ele.style.backgroundColor = "blue";


const fruit = document.querySelectorAll(".fruits");
fruit.forEach(fruits => {
    fruits.style.backgroundColor = "pink";
})