// DOM Navigation = The process of navigating through the structure 
//                  of an HTML document using JavaScript.


// .firstElementChild
// .lastElementChild 
// .nextElementSibling 
// .previousElementSibling 
// .parentElement 
// .children

//---------------------- .firstElementChild --------------------------

const element = document.getElementById("Vegetables");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow"

const ele = document.getElementById("fruits");
const fchild = ele.firstElementChild;
fchild.style.backgroundColor = "yellow"



const ulEle = document.querySelectorAll("ul");

ulEle.forEach(ulEle => {
    const lastChild = ulEle.lastElementChild;
    lastChild.style.backgroundColor = "red"

})

const el = document.getElementById("apple");
const nextel = el.nextElementSibling;
nextel.style.backgroundColor="orange";

const elem = document.getElementById("pie");
const nextele = elem.previousElementSibling;
nextele.style.backgroundColor="brown";

const subjs = document.getElementById("math");
const subjspar = subjs.parentElement;
subjspar.style.backgroundColor= "pink";

const chilele = document.getElementById("subjects");
const child = chilele.children;
child[0].style.backgroundColor = "green";